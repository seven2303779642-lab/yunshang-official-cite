import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const REPORT_PATH = path.join(ROOT, "docs", "home-content-diff-report.md");
const SITE_CONTENT_PATH = path.join(ROOT, "data", "siteContent.ts");

const LANGUAGES = {
  zh: {
    label: "中文",
    url: "https://yunshang.ca/home/",
    constName: "zhContent",
    preferredFiles: [
      SITE_CONTENT_PATH,
      path.join(ROOT, "data", "content", "zh.ts"),
    ],
  },
  en: {
    label: "英文",
    url: "https://yunshang.ca/en/home/",
    constName: "enContent",
    preferredFiles: [
      SITE_CONTENT_PATH,
      path.join(ROOT, "data", "content", "en.ts"),
    ],
  },
};

const SEARCH_KEYWORDS = [
  "zhContent",
  "enContent",
  "home",
  "hero",
  "featureCards",
  "about",
  "menu",
  "order",
  "store",
];

const TOP_LEVEL_VISIBLE_SECTIONS = ["nav", "home", "footer", "orderPopup"];
const SKIP_DIRS = new Set([
  ".git",
  ".next",
  "node_modules",
  "dist",
  "build",
  "out",
  "coverage",
]);

const INVISIBLE_TEXT_VALUES = new Set([
  "skip to content",
]);

const NON_VISIBLE_PROPERTY_PATTERN =
  /(?:alt|aria|href|image|icon|src|url|videoTitle|desktop|mobile|indicator|dialog|close|open|slideAlts)/i;

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeExact(value) {
  return normalizeWhitespace(value)
    .replace(/[\u200b-\u200f\ufeff]/g, "")
    .normalize("NFKC");
}

function normalizeLoose(value) {
  return normalizeExact(value)
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐‑‒–—―]/g, "-")
    .replace(/[，。！？；：、,.!?;:'"()[\]{}<>《》【】\-_\s]/g, "");
}

function decodeEntities(value) {
  const named = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    ndash: "-",
    mdash: "-",
    hellip: "...",
    rsquo: "'",
    lsquo: "'",
    rdquo: '"',
    ldquo: '"',
  };

  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (_, entity) => {
    const lower = entity.toLowerCase();
    if (lower.startsWith("#x")) {
      return String.fromCodePoint(Number.parseInt(lower.slice(2), 16));
    }
    if (lower.startsWith("#")) {
      return String.fromCodePoint(Number.parseInt(lower.slice(1), 10));
    }
    return named[lower] ?? `&${entity};`;
  });
}

function decodeJsString(raw) {
  return raw
    .replace(/\\u\{([0-9a-f]+)\}/gi, (_, hex) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/\\u([0-9a-f]{4})/gi, (_, hex) =>
      String.fromCharCode(Number.parseInt(hex, 16)),
    )
    .replace(/\\x([0-9a-f]{2})/gi, (_, hex) =>
      String.fromCharCode(Number.parseInt(hex, 16)),
    )
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\`/g, "`")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\");
}

function isLikelyPathUrlOrCode(value) {
  const text = value.trim();
  if (INVISIBLE_TEXT_VALUES.has(text.toLowerCase())) return true;
  if (!text) return true;
  if (text.length < 2) return true;
  if (/^https?:\/\//i.test(text)) return true;
  if (/^mailto:/i.test(text)) return true;
  if (/^\/[a-z0-9_./?&=%#:-]+$/i.test(text)) return true;
  if (/\.(png|jpe?g|webp|svg|gif|mp4|webm|json|css|tsx?|mjs)$/i.test(text)) {
    return true;
  }
  if (/^#[0-9a-f]{3,8}$/i.test(text)) return true;
  if (/^(true|false|null|undefined)$/i.test(text)) return true;
  if (/^[a-z0-9_-]+(?:\s+[a-z0-9_-]+){0,2}$/i.test(text) && text.includes("-")) {
    return true;
  }
  return false;
}

function isProbablyNonVisibleKey(key) {
  if (!key) return false;
  return NON_VISIBLE_PROPERTY_PATTERN.test(key);
}

function getPropertyKeyBefore(source, quoteStart) {
  const before = source.slice(Math.max(0, quoteStart - 160), quoteStart);
  const match = before.match(/(?:^|[,{[])\s*(?:"([^"]+)"|'([^']+)'|([A-Za-z_$][\w$-]*))\s*:\s*$/s);
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? "";
}

function findMatchingBracket(source, openIndex, openChar, closeChar) {
  let depth = 0;
  let quote = "";
  let escape = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let index = openIndex; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (inLineComment) {
      if (char === "\n") inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && next === "/") {
        inBlockComment = false;
        index += 1;
      }
      continue;
    }

    if (quote) {
      if (escape) {
        escape = false;
      } else if (char === "\\") {
        escape = true;
      } else if (char === quote) {
        quote = "";
      }
      continue;
    }

    if (char === "/" && next === "/") {
      inLineComment = true;
      index += 1;
      continue;
    }
    if (char === "/" && next === "*") {
      inBlockComment = true;
      index += 1;
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === openChar) {
      depth += 1;
      continue;
    }
    if (char === closeChar) {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  return -1;
}

function findStringEnd(source, quoteStart) {
  const quote = source[quoteStart];
  let escape = false;

  for (let index = quoteStart + 1; index < source.length; index += 1) {
    const char = source[index];
    if (escape) {
      escape = false;
    } else if (char === "\\") {
      escape = true;
    } else if (char === quote) {
      return index;
    }
  }

  return -1;
}

function findValueEnd(source, valueStart) {
  const first = source[valueStart];
  if (first === "{" || first === "[") {
    const close = first === "{" ? "}" : "]";
    return findMatchingBracket(source, valueStart, first, close);
  }
  if (first === '"' || first === "'" || first === "`") {
    return findStringEnd(source, valueStart);
  }

  for (let index = valueStart; index < source.length; index += 1) {
    if (source[index] === "," || source[index] === "\n") return index - 1;
  }

  return source.length - 1;
}

function blankNonVisibleProperties(source) {
  const chars = [...source];
  const propertyPattern = /(?:"([^"]+)"|'([^']+)'|([A-Za-z_$][\w$-]*))\s*:\s*/g;
  let match;

  while ((match = propertyPattern.exec(source))) {
    const propertyName = match[1] ?? match[2] ?? match[3] ?? "";
    if (!NON_VISIBLE_PROPERTY_PATTERN.test(propertyName)) continue;

    const valueStart = match.index + match[0].length;
    const valueEnd = findValueEnd(source, valueStart);
    if (valueEnd === -1) continue;

    for (let index = match.index; index <= valueEnd; index += 1) {
      chars[index] = " ";
    }
  }

  return chars.join("");
}

function getConstObjectRegion(source, constName) {
  const constIndex = source.indexOf(`export const ${constName}`);
  if (constIndex === -1) return "";
  const equalsIndex = source.indexOf("=", constIndex);
  if (equalsIndex === -1) return "";
  const openIndex = source.indexOf("{", equalsIndex);
  if (openIndex === -1) return "";
  const closeIndex = findMatchingBracket(source, openIndex, "{", "}");
  if (closeIndex === -1) return "";
  return source.slice(openIndex, closeIndex + 1);
}

function getTopLevelSectionRegion(objectRegion, sectionName) {
  const pattern = new RegExp(
    `(?:^|\\n)\\s{2}(?:"${sectionName}"|'${sectionName}'|${sectionName})\\s*:\\s*([\\[{])`,
    "m",
  );
  const match = pattern.exec(objectRegion);
  if (!match) return "";

  const openChar = match[1];
  const closeChar = openChar === "{" ? "}" : "]";
  const openIndex = match.index + match[0].lastIndexOf(openChar);
  const closeIndex = findMatchingBracket(objectRegion, openIndex, openChar, closeChar);
  if (closeIndex === -1) return "";

  return objectRegion.slice(match.index, closeIndex + 1);
}

function extractStringLiterals(source, filePath, sectionName) {
  const results = [];
  const seen = new Set();
  const literalPattern = /(["'`])((?:\\[\s\S]|(?!\1)[\s\S])*?)\1/g;
  let match;
  const visibleSource = blankNonVisibleProperties(source);

  while ((match = literalPattern.exec(visibleSource))) {
    const [full, quote, raw] = match;
    const quoteStart = match.index;
    const after = visibleSource.slice(quoteStart + full.length, quoteStart + full.length + 12);

    if (/^\s*:/.test(after)) continue;
    if (quote === "`" && raw.includes("${")) continue;

    const propertyKey = getPropertyKeyBefore(visibleSource, quoteStart);
    if (isProbablyNonVisibleKey(propertyKey)) continue;

    const text = normalizeExact(decodeJsString(raw));
    if (isLikelyPathUrlOrCode(text)) continue;

    const loose = normalizeLoose(text);
    if (loose.length < 2) continue;

    const dedupeKey = `${text}::${filePath}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    results.push({
      text,
      loose,
      file: path.relative(ROOT, filePath).replaceAll("\\", "/"),
      section: sectionName,
      key: propertyKey,
    });
  }

  return results;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walkFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(entryPath)));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(entryPath);
    }
  }

  return files;
}

async function findFallbackCandidateFiles() {
  const files = await walkFiles(ROOT);
  const candidates = [];

  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    if (SEARCH_KEYWORDS.some((keyword) => source.includes(keyword))) {
      candidates.push(file);
    }
  }

  return candidates;
}

async function getLocalTexts(languageKey) {
  const language = LANGUAGES[languageKey];
  const candidateFiles = [];

  for (const file of language.preferredFiles) {
    if ((await pathExists(file)) && !candidateFiles.includes(file)) {
      candidateFiles.push(file);
    }
  }

  const extracted = [];
  for (const file of candidateFiles) {
    const source = await fs.readFile(file, "utf8");
    const objectRegion = getConstObjectRegion(source, language.constName);
    if (!objectRegion) continue;

    for (const sectionName of TOP_LEVEL_VISIBLE_SECTIONS) {
      const sectionRegion = getTopLevelSectionRegion(objectRegion, sectionName);
      if (sectionRegion) {
        extracted.push(...extractStringLiterals(sectionRegion, file, sectionName));
      }
    }
  }

  if (extracted.length > 0) {
    return {
      texts: dedupeByText(extracted),
      files: candidateFiles.map((file) => path.relative(ROOT, file).replaceAll("\\", "/")),
      usedFallbackSearch: false,
    };
  }

  const fallbackFiles = await findFallbackCandidateFiles();
  for (const file of fallbackFiles) {
    const source = await fs.readFile(file, "utf8");
    if (
      (languageKey === "zh" && !/zhContent|[\u4e00-\u9fff]/.test(source)) ||
      (languageKey === "en" && !/enContent|home|hero/i.test(source))
    ) {
      continue;
    }
    extracted.push(...extractStringLiterals(source, file, "fallback"));
  }

  return {
    texts: dedupeByText(extracted),
    files: fallbackFiles.map((file) => path.relative(ROOT, file).replaceAll("\\", "/")),
    usedFallbackSearch: true,
  };
}

function dedupeByText(items) {
  const seen = new Set();
  const deduped = [];
  for (const item of items) {
    const key = item.loose;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(item);
  }
  return deduped;
}

async function fetchHtml(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; home-content-diff-script/1.0; +https://yunshang.ca)",
      },
    });

    const html = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      html,
      error: response.ok ? "" : `HTTP ${response.status}`,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      html: "",
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    clearTimeout(timeout);
  }
}

function htmlToVisibleTextSegments(html) {
  const cleaned = html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<head[\s\S]*?<\/head>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<(br|hr)\b[^>]*>/gi, "\n")
    .replace(/<\/(p|div|section|article|header|footer|nav|main|h[1-6]|li|ul|ol|button|a|span)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\r/g, "\n");

  const decoded = decodeEntities(cleaned);
  const seen = new Set();
  const segments = [];

  for (const rawSegment of decoded.split(/\n+/)) {
    const text = normalizeExact(rawSegment);
    if (isLikelyPathUrlOrCode(text)) continue;
    const loose = normalizeLoose(text);
    if (loose.length < 2) continue;
    if (seen.has(loose)) continue;
    seen.add(loose);
    segments.push({ text, loose });
  }

  return segments;
}

function matchLocalToOnline(localTexts, onlineSegments) {
  const onlineFullText = normalizeExact(onlineSegments.map((item) => item.text).join(" "));
  const onlineFullLoose = normalizeLoose(onlineFullText);

  const exactMatches = [];
  const approximateMatches = [];
  const localMissing = [];

  for (const local of localTexts) {
    if (onlineFullText.includes(local.text)) {
      exactMatches.push(local);
      continue;
    }

    const looseMatch = onlineSegments.find((segment) => isLooseEquivalent(local, segment));

    if (onlineFullLoose.includes(local.loose) || looseMatch) {
      approximateMatches.push({
        local,
        online: looseMatch?.text ?? "(full-page loose match)",
        note: "大小写、空格、标点或实体符号可能不同",
      });
      continue;
    }

    localMissing.push(local);
  }

  return { exactMatches, approximateMatches, localMissing };
}

function getOnlineMissing(localTexts, onlineSegments) {
  const localFullText = normalizeExact(localTexts.map((item) => item.text).join(" "));
  const localFullLoose = normalizeLoose(localFullText);

  return onlineSegments.filter((segment) => {
    if (localFullText.includes(segment.text)) return false;
    if (localFullLoose.includes(segment.loose)) return false;
    if (
      localTexts.some((local) => isLooseEquivalent(local, segment))
    ) {
      return false;
    }
    return true;
  });
}

function isLooseEquivalent(left, right) {
  if (!left.loose || !right.loose) return false;
  const minLength = Math.min(left.loose.length, right.loose.length);
  const maxLength = Math.max(left.loose.length, right.loose.length);
  if (minLength < 4) return false;
  if (!left.loose.includes(right.loose) && !right.loose.includes(left.loose)) {
    return false;
  }
  return minLength / maxLength >= 0.65 || minLength >= 24;
}

function escapeMarkdown(value) {
  return value.replaceAll("|", "\\|").replace(/\n/g, "<br>");
}

function tableRows(items, render) {
  if (items.length === 0) return "_无_\n";
  return `${items.map(render).join("\n")}\n`;
}

function renderReport(results, generatedAt) {
  const lines = [
    "# 首页文案差异报告",
    "",
    `生成时间：${generatedAt}`,
    "",
    "## 摘要",
    "",
    "| 语言 | 本地未匹配 | 线上未匹配 | 近似匹配 | 抓取状态 |",
    "| --- | ---: | ---: | ---: | --- |",
  ];

  for (const key of Object.keys(LANGUAGES)) {
    const result = results[key];
    lines.push(
      `| ${LANGUAGES[key].label} | ${result.localMissing.length} | ${result.onlineMissing.length} | ${result.approximateMatches.length} | ${
        result.fetch.ok ? `成功 (${result.fetch.status})` : `失败：${escapeMarkdown(result.fetch.error)}`
      } |`,
    );
  }

  lines.push("", "## 本地文件", "");

  for (const key of Object.keys(LANGUAGES)) {
    const result = results[key];
    lines.push(`### ${LANGUAGES[key].label}`);
    lines.push(
      result.usedFallbackSearch
        ? "未能从优先入口提取到首页文案，已使用关键词回退搜索。"
        : "使用优先入口及其内容文件提取首页相关文案。",
    );
    lines.push("");
    for (const file of result.files) {
      lines.push(`- \`${file}\``);
    }
    lines.push("");
  }

  for (const key of Object.keys(LANGUAGES)) {
    const result = results[key];
    lines.push(`## ${LANGUAGES[key].label}`, "");
    lines.push(`源站：${LANGUAGES[key].url}`, "");

    lines.push("### 本地存在但线上未匹配到的文本", "");
    lines.push("| 文本 | 本地位置 | 人工确认 |");
    lines.push("| --- | --- | --- |");
    lines.push(
      tableRows(result.localMissing, (item) => {
        const note = item.text.length >= 40 ? "需要确认：整段文案可能已变化" : "需要确认";
        return `| ${escapeMarkdown(item.text)} | \`${item.file}\` / ${item.section}${item.key ? ` / ${item.key}` : ""} | ${note} |`;
      }),
    );

    lines.push("### 线上存在但本地未匹配到的主要文本", "");
    lines.push("| 文本 | 人工确认 |");
    lines.push("| --- | --- |");
    lines.push(
      tableRows(result.onlineMissing, (item) => {
        const note = item.text.length >= 40 ? "需要确认：源站可能新增或改写整段文案" : "需要确认";
        return `| ${escapeMarkdown(item.text)} | ${note} |`;
      }),
    );

    lines.push("### 可能只是大小写、空格、标点不同的近似匹配", "");
    lines.push("| 本地文本 | 线上文本 | 说明 |");
    lines.push("| --- | --- | --- |");
    lines.push(
      tableRows(result.approximateMatches, (item) => {
        return `| ${escapeMarkdown(item.local.text)} | ${escapeMarkdown(item.online)} | ${item.note} |`;
      }),
    );
  }

  return `${lines.join("\n")}\n`;
}

async function main() {
  const generatedAt = new Date().toISOString();
  const results = {};

  for (const key of Object.keys(LANGUAGES)) {
    const local = await getLocalTexts(key);
    const fetchResult = await fetchHtml(LANGUAGES[key].url);
    const onlineSegments = fetchResult.ok ? htmlToVisibleTextSegments(fetchResult.html) : [];
    const matches = matchLocalToOnline(local.texts, onlineSegments);
    const onlineMissing = fetchResult.ok ? getOnlineMissing(local.texts, onlineSegments) : [];

    results[key] = {
      ...local,
      fetch: fetchResult,
      onlineSegments,
      ...matches,
      onlineMissing,
    };
  }

  await fs.mkdir(path.dirname(REPORT_PATH), { recursive: true });
  await fs.writeFile(REPORT_PATH, renderReport(results, generatedAt), "utf8");

  const hasFetchFailure = Object.values(results).some((result) => !result.fetch.ok);
  const zhDiffCount =
    results.zh.localMissing.length +
    results.zh.onlineMissing.length +
    results.zh.approximateMatches.length;
  const enDiffCount =
    results.en.localMissing.length +
    results.en.onlineMissing.length +
    results.en.approximateMatches.length;

  console.log(`报告路径: ${path.relative(ROOT, REPORT_PATH).replaceAll("\\", "/")}`);
  console.log(`中文差异数量: ${zhDiffCount}`);
  console.log(`英文差异数量: ${enDiffCount}`);
  console.log(`是否存在抓取失败: ${hasFetchFailure ? "是" : "否"}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
