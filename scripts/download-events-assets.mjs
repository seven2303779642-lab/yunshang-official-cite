import { mkdir, writeFile, access, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_URL = "https://yunshang.ca/events/";
const EVENTS_API_URL =
  "https://yunshang.ca/wp-json/wp/v2/events?per_page=100&_embed";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const bannerDir = path.join(projectRoot, "public", "images", "events", "banner");
const cardsDir = path.join(projectRoot, "public", "images", "events", "cards");
const manifestPath = path.join(projectRoot, "data", "eventsManifest.json");

function decodeHtml(value = "") {
  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity) => {
    if (entity[0] === "#") {
      const isHex = entity[1]?.toLowerCase() === "x";
      const codePoint = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : match;
    }

    const named = {
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      nbsp: " ",
      quot: "\"",
    };

    return named[entity] ?? match;
  });
}

function stripHtml(html = "") {
  return decodeHtml(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n\n")
      .replace(/<[^>]*>/g, "")
      .replace(/\r/g, "")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"));
  return match ? decodeHtml(match[1]) : "";
}

function parseSrcset(srcset = "") {
  return srcset
    .split(",")
    .map((part) => {
      const [url, width] = part.trim().split(/\s+/);
      const parsedWidth = Number.parseInt(width?.replace("w", "") ?? "0", 10);
      return { url, width: Number.isFinite(parsedWidth) ? parsedWidth : 0 };
    })
    .filter((entry) => entry.url);
}

function pickLargestFromImg(imgTag) {
  const src = attr(imgTag, "src");
  const srcset = attr(imgTag, "srcset");
  const candidates = parseSrcset(srcset);

  if (src) {
    candidates.push({ url: src, width: Number.parseInt(attr(imgTag, "width") || "0", 10) });
  }

  candidates.sort((a, b) => b.width - a.width);
  return candidates[0]?.url || src;
}

function getExtensionFromUrl(url) {
  const pathname = new URL(url).pathname;
  const ext = path.extname(decodeURIComponent(pathname)).toLowerCase();
  return ext || ".jpg";
}

function sanitizeFilenamePart(value, maxChars = 48) {
  const withoutInvalidChars = value
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/[\u0000-\u001f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[. ]+$/g, "");

  return Array.from(withoutInvalidChars || "event").slice(0, maxChars).join("");
}

function makeUniqueFilename(title, ext, usedNames) {
  const base = `events-${sanitizeFilenamePart(title)}`;
  let filename = `${base}${ext}`;
  let counter = 2;

  while (usedNames.has(filename)) {
    filename = `${base}-${counter}${ext}`;
    counter += 1;
  }

  usedNames.add(filename);
  return filename;
}

function relativeSitePath(url) {
  const parsed = new URL(url);
  return `${parsed.pathname}${parsed.search}` || "/";
}

function parseEventImageFallbacks(html) {
  const imagesByPostId = new Map();
  const articlePattern =
    /<article\b[^>]*data-dce-post-id=["'](\d+)["'][\s\S]*?<\/article>/gi;
  let articleMatch;

  while ((articleMatch = articlePattern.exec(html))) {
    const postId = Number(articleMatch[1]);
    const articleHtml = articleMatch[0];
    const imgTag = articleHtml.match(/<img\b[^>]*>/i)?.[0];
    const imageUrl = imgTag ? pickLargestFromImg(imgTag) : "";

    if (postId && imageUrl && !imagesByPostId.has(postId)) {
      imagesByPostId.set(postId, imageUrl);
    }
  }

  return imagesByPostId;
}

function parseBannerUrl(html) {
  const backgroundMatches = [
    ...html.matchAll(
      /data-dce-background-image-url=["'](https:\/\/yunshang\.ca\/wp-content\/uploads\/[^"']+)["']/gi,
    ),
  ].map((match) => decodeHtml(match[1]));

  const bannerUrl =
    backgroundMatches.find((url) => /活动.*banner|events?.*banner/i.test(url)) ??
    backgroundMatches.find((url) => /banner/i.test(url));

  if (!bannerUrl) {
    throw new Error("Could not find the Events page banner image URL.");
  }

  return bannerUrl;
}

function getFullMediaUrl(post) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];

  if (!media || media.code === "rest_forbidden") {
    return "";
  }

  return (
    media.media_details?.sizes?.full?.source_url ||
    media.source_url ||
    Object.values(media.media_details?.sizes ?? {})
      .sort((a, b) => (b.width ?? 0) - (a.width ?? 0))[0]?.source_url ||
    ""
  );
}

function extractDate(description) {
  const lines = description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].replace(/^[-–—]\s*/, "").trim();
    if (/活动(?:时间|日期)|活动时间为/.test(line)) {
      if (/\d{4}\s*年|\d{1,2}\s*月|\d{1,2}\s*日/.test(line)) {
        return line;
      }

      const following = [];
      for (const nextLine of lines.slice(index + 1, index + 4)) {
        if (/活动细节|参与门店/.test(nextLine)) break;

        following.push(nextLine);
        if (/\d{4}\s*年|\d{1,2}\s*月|\d{1,2}\s*日/.test(nextLine)) break;
      }

      return [line, ...following].filter(Boolean).join(" ").trim();
    }
  }

  const dateRange = description.match(
    /\d{4}\s*年\s*\d{1,2}\s*月\s*\d{1,2}\s*日[^。\n]*(?:至|到|~|–|-)[^。\n]*/u,
  );

  if (dateRange) {
    return dateRange[0].trim();
  }

  const datedSentence = description.match(/\d{4}\s*年\s*\d{1,2}\s*月\s*\d{1,2}\s*日[^。\n]*/u);
  return datedSentence?.[0]?.trim() ?? "";
}

async function downloadFile(url, destination) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(destination, buffer);
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(bannerDir, { recursive: true });
  await mkdir(cardsDir, { recursive: true });
  await mkdir(path.dirname(manifestPath), { recursive: true });

  const [html, posts] = await Promise.all([
    fetch(SOURCE_URL).then((response) => response.text()),
    fetch(EVENTS_API_URL).then((response) => response.json()),
  ]);

  if (!Array.isArray(posts)) {
    throw new Error("Events API did not return an array of posts.");
  }

  const fallbackImagesByPostId = parseEventImageFallbacks(html);
  const bannerUrl = parseBannerUrl(html);
  const bannerFilename = `events-banner${getExtensionFromUrl(bannerUrl)}`;
  await downloadFile(bannerUrl, path.join(bannerDir, bannerFilename));

  const usedImageFilenames = new Set();
  const events = [];

  for (const post of posts) {
    const title = stripHtml(post.title?.rendered ?? "");
    const description = stripHtml(post.excerpt?.rendered ?? "");
    const imageUrl = getFullMediaUrl(post) || fallbackImagesByPostId.get(post.id);

    if (!title) {
      throw new Error(`Event post ${post.id} is missing a title.`);
    }

    if (!imageUrl) {
      throw new Error(`Event "${title}" is missing a card image.`);
    }

    const imageFilename = makeUniqueFilename(title, getExtensionFromUrl(imageUrl), usedImageFilenames);
    await downloadFile(imageUrl, path.join(cardsDir, imageFilename));

    events.push({
      title,
      date: extractDate(description),
      subtitle: "",
      description,
      buttonText: "",
      link: relativeSitePath(post.link),
      image: `/images/events/cards/${imageFilename}`,
      imageFilename,
    });
  }

  const manifest = {
    banner: {
      desktop: `/images/events/banner/${bannerFilename}`,
    },
    events,
  };

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  const missingImages = [];

  for (const event of events) {
    const expectedPath = path.join(cardsDir, event.imageFilename);
    if (!(await pathExists(expectedPath))) {
      missingImages.push(event.imageFilename);
    }
  }

  const cardFiles = await readdir(cardsDir);
  const manifestImageNames = new Set(events.map((event) => event.imageFilename));
  const unreferencedCardFiles = cardFiles.filter((file) => !manifestImageNames.has(file));

  if (missingImages.length > 0) {
    throw new Error(`Manifest references missing card images: ${missingImages.join(", ")}`);
  }

  console.log(
    JSON.stringify(
      {
        bannerImages: 1,
        eventCards: posts.length,
        downloadedCardImages: events.length,
        manifestEvents: manifest.events.length,
        missingManifestImages: missingImages,
        unreferencedCardFiles,
        output: {
          bannerDir: path.relative(projectRoot, bannerDir),
          cardsDir: path.relative(projectRoot, cardsDir),
          manifest: path.relative(projectRoot, manifestPath),
        },
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
