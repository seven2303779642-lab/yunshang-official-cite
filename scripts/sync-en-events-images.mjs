import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const base = "https://yunshang.ca/wp-content/uploads";

const downloads = [
  {
    url: `${base}/活动banner.jpg`,
    dest: "public/images/events/banner/events-banner.jpg",
  },
  {
    url: `${base}/儿童月-Event-Banner-1080x1080px-EN.jpg`,
    dest: "public/images/events/en/cards/events-kids-month-en.jpg",
  },
  {
    url: `${base}/ricenoodlefestival_Image_EN-1.png`,
    dest: "public/images/events/en/cards/events-rice-noodle-festival-2026-en.png",
  },
  {
    url: `${base}/EN-10801080.png`,
    dest: "public/images/events/en/cards/events-9th-anniversary-en.png",
  },
  {
    url: `${base}/ricenoodlefestival_Image_EN.png`,
    dest: "public/images/events/en/cards/events-rice-noodle-festival-member-week-en.png",
  },
  {
    url: `${base}/2024-10.新品猪肚鸡米线-Mobile-Banner-1080x1080px-EN.jpg`,
    dest: "public/images/events/en/cards/events-pork-tripe-chicken-new-dish-en.jpg",
  },
  {
    url: `${base}/CN-1200x1200-1.jpg`,
    dest: "public/images/events/cards/events-8th-anniversary.jpg",
  },
  {
    url: `${base}/EN-1200x1200-1.jpg`,
    dest: "public/images/events/en/cards/events-8th-anniversary-en.jpg",
  },
  {
    url: `${base}/2024-family-day.jpg`,
    dest: "public/images/events/en/cards/events-family-day-en.jpg",
  },
  {
    url: `${base}/2023Holiday.png`,
    dest: "public/images/events/en/cards/events-2023-holiday-en.png",
  },
  {
    url: `${base}/event-7th-eng.jpg`,
    dest: "public/images/events/en/cards/events-7th-anniversary-en.jpg",
  },
  {
    url: `${base}/button%E7%BA%A2%E8%83%8C%E6%99%AF-%E7%99%BD%E6%A1%86%E7%BA%A2%E5%BA%95.png`,
    dest: "public/images/home/order-banner/en/mobile/order-banner-en-mobile-default.png",
  },
  {
    url: `${base}/button%E7%BA%A2%E8%83%8C%E6%99%AF-%E7%99%BD%E6%A1%86%E7%BA%A2%E7%99%BD%E5%BA%95.png`,
    dest: "public/images/home/order-banner/en/mobile/order-banner-en-mobile-hover.png",
  },
];

async function downloadFile(url, dest) {
  const outputPath = join(root, dest);
  await mkdir(dirname(outputPath), { recursive: true });

  const response = await fetch(url, {
    headers: { "User-Agent": "yunshang-homepage-sync/1.0" },
    signal: AbortSignal.timeout(120_000),
  });

  if (!response.ok) {
    throw new Error(`Failed ${response.status} ${url}`);
  }

  if (!response.body) {
    throw new Error(`No body for ${url}`);
  }

  await pipeline(Readable.fromWeb(response.body), createWriteStream(outputPath));
  console.log(`OK ${dest}`);
}

for (const item of downloads) {
  await downloadFile(item.url, item.dest);
}

console.log("Done.");
