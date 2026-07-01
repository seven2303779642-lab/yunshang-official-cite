import { access, mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_URL = "https://yunshang.ca/locations/";
const STORES_PAGE_API_URL = "https://yunshang.ca/wp-json/wp/v2/pages/8871?_embed";
const STORE_LOCATION_TERMS_API_URL =
  "https://yunshang.ca/wp-json/wp/v2/store-location?per_page=100";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const bannerDir = path.join(projectRoot, "public", "images", "stores", "banner");
const cardsDir = path.join(projectRoot, "public", "images", "stores", "cards");
const manifestPath = path.join(projectRoot, "data", "storesManifest.json");

const REGION_OVERRIDES_BY_TITLE = {
  "大温列治文分店": "Richmond",
  "UBC大学分店": "Vancouver",
};

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
      .replace(/<[^>]*>/g, " ")
      .replace(/\r/g, "")
      .replace(/\s+/g, " ")
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

function sanitizeFilenamePart(value, maxChars = 64) {
  return Array.from(
    value
      .replace(/[\\/:*?"<>|]/g, "")
      .replace(/[\u0000-\u001f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
      .replace(/[. -]+$/g, "") || "store",
  )
    .slice(0, maxChars)
    .join("");
}

function makeUniqueFilename(parts, ext, usedNames) {
  const base = parts.map((part) => sanitizeFilenamePart(part)).filter(Boolean).join("-");
  let filename = `${base}${ext}`;
  let counter = 2;

  while (usedNames.has(filename)) {
    filename = `${base}-${counter}${ext}`;
    counter += 1;
  }

  usedNames.add(filename);
  return filename;
}

function parseBannerUrl(html) {
  const sections = [
    ...html.matchAll(
      /<section\b[^>]*data-dce-background-image-url=["']([^"']+)["'][^>]*>/gi,
    ),
  ].map((match) => ({
    url: decodeHtml(match[1]).replace(/\\\//g, "/"),
    tag: match[0],
  }));

  const banner = sections.find((section) => /门店|store|location/i.test(section.url));

  if (!banner) {
    throw new Error("Could not find the Stores page banner image URL.");
  }

  return banner.url;
}

function parseMapLink(chunk) {
  const raw = chunk.match(/data-ha-element-link=["']([^"']+)["']/i)?.[1] ?? "";

  if (!raw) return "";

  try {
    return JSON.parse(decodeHtml(raw)).url.replace(/\\\//g, "/");
  } catch {
    return "";
  }
}

function getLoopItemChunks(html) {
  const starts = [
    ...html.matchAll(/<div\b[^>]*class="[^"]*e-loop-item[^"]*store[^"]*"/gi),
  ].map((match) => match.index);

  return starts.map((start, index) => html.slice(start, starts[index + 1] ?? html.length));
}

function parseTextContainers(chunk, title) {
  return [
    ...chunk.matchAll(/<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi),
  ]
    .map((match) => stripHtml(match[1]))
    .filter(Boolean)
    .filter((text) => text !== title && text !== "查看导航")
    .filter((text) => !text.includes("elementor"));
}

function extractPostalCode(address) {
  return address.match(/[A-Z]\d[A-Z]\s?\d[A-Z]\d/i)?.[0] ?? "";
}

function buildTermLookup(terms) {
  return new Map(terms.map((term) => [term.slug, term]));
}

function normalizeRegion(title, displayRegion) {
  return REGION_OVERRIDES_BY_TITLE[title] ?? displayRegion;
}

function parseStoreCards(html, terms) {
  const termBySlug = buildTermLookup(terms);
  const chunks = getLoopItemChunks(html);

  return chunks.map((chunk) => {
    const rootClass = chunk.match(/<div\b[^>]*class="([^"]*)"[^>]*>/i)?.[1] ?? "";
    const locationSlugs = rootClass
      .split(/\s+/)
      .filter((className) => className.startsWith("store-location-"))
      .map((className) => className.replace("store-location-", ""));
    const locationTerms = locationSlugs.map((slug) => termBySlug.get(slug)).filter(Boolean);
    const province = locationTerms.find((term) => term.parent === 0)?.name ?? "";
    const displayRegion = locationTerms.find((term) => term.parent !== 0)?.name ?? "";
    const title = stripHtml(chunk.match(/<h4\b[^>]*>([\s\S]*?)<\/h4>/i)?.[1] ?? "");
    const text = parseTextContainers(chunk, title);
    const imageUrl = pickLargestFromImg(chunk.match(/<img\b[^>]*>/i)?.[0] ?? "");

    return {
      province,
      displayProvince: province,
      region: normalizeRegion(title, displayRegion),
      displayRegion,
      name: title,
      address: text[0] ?? "",
      postalCode: extractPostalCode(text[0] ?? ""),
      phone: text[1] ?? "",
      hours: text[2] ?? "",
      imageUrl,
      mapLink: parseMapLink(chunk),
      orderLink: "",
      pickupLink: "",
      deliveryLink: "",
      status: "",
    };
  });
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

  const [page, terms] = await Promise.all([
    fetch(STORES_PAGE_API_URL).then((response) => response.json()),
    fetch(STORE_LOCATION_TERMS_API_URL).then((response) => response.json()),
  ]);

  const html = page.content?.rendered;

  if (!html) {
    throw new Error("Stores page API did not return rendered content.");
  }

  const bannerUrl = parseBannerUrl(html);
  const bannerFilename = `stores-banner${getExtensionFromUrl(bannerUrl)}`;
  await downloadFile(bannerUrl, path.join(bannerDir, bannerFilename));

  const usedImageNames = new Set();
  const parsedStores = parseStoreCards(html, terms);

  if (parsedStores.length === 0) {
    throw new Error("No store cards were found on the source page.");
  }

  const stores = [];

  for (const store of parsedStores) {
    if (!store.name) {
      throw new Error("Found a store card without a name.");
    }

    if (!store.imageUrl) {
      throw new Error(`Store "${store.name}" is missing a card image.`);
    }

    const imageFilename = makeUniqueFilename(
      [store.province, store.region, store.name],
      getExtensionFromUrl(store.imageUrl),
      usedImageNames,
    );

    await downloadFile(store.imageUrl, path.join(cardsDir, imageFilename));

    const { imageUrl, ...manifestStore } = store;
    stores.push({
      ...manifestStore,
      image: `/images/stores/cards/${imageFilename}`,
      imageFilename,
    });
  }

  await writeFile(manifestPath, `${JSON.stringify(stores, null, 2)}\n`, "utf8");

  const missingImages = [];
  const noMapLink = [];

  for (const store of stores) {
    if (!(await pathExists(path.join(cardsDir, store.imageFilename)))) {
      missingImages.push(store.name);
    }

    if (!store.mapLink) {
      noMapLink.push(store.name);
    }
  }

  const cardFiles = await readdir(cardsDir);
  const manifestImageNames = new Set(stores.map((store) => store.imageFilename));
  const unreferencedCardFiles = cardFiles.filter((file) => !manifestImageNames.has(file));

  if (missingImages.length > 0) {
    throw new Error(`Manifest references missing store images: ${missingImages.join(", ")}`);
  }

  const provinces = [...new Set(stores.map((store) => store.province))].sort();
  const regions = [...new Set(stores.map((store) => store.region))].sort();

  console.log(
    JSON.stringify(
      {
        note:
          "The requested /stores/ page returns 404 on the source site; data was extracted from the live /locations/ page.",
        bannerImages: 1,
        storeCards: parsedStores.length,
        downloadedStoreImages: stores.length,
        manifestStores: stores.length,
        storesWithCopyButNoImage: [],
        downloadedImagesWithoutManifestCopy: unreferencedCardFiles,
        storesWithoutMapLink: noMapLink,
        provinces,
        regions,
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
