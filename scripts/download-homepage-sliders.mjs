import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const report = {
  zh: { desktop: [], mobile: [] },
  en: { desktop: [], mobile: [] },
  fallbacks: [],
  modifiedFiles: [],
};

const groups = {
  zh: [
    {
      desktop:
        "https://yunshang.ca/wp-content/uploads/2026-6新品水煮鱼米线-web-banner-1920x1060-cn.jpg",
      mobile:
        "https://yunshang.ca/wp-content/uploads/2026-6新品水煮鱼米线-mobile-banner-810x1080-cn.jpg",
    },
    {
      desktop: "https://yunshang.ca/wp-content/uploads/icecream_CN_desktop.jpg",
      mobile:
        "https://yunshang.ca/wp-content/uploads/Free-Ice-Cream-Mobile-Banner-810x1080px-CN-1.jpg",
    },
    {
      desktop: "https://yunshang.ca/wp-content/uploads/CN-Web-Banner-1920x1060-01.jpg",
      mobile: null,
    },
    {
      desktop: "https://yunshang.ca/wp-content/uploads/CN-Web-Banner-1920x1060-03.jpg",
      mobile:
        "https://yunshang.ca/wp-content/uploads/CN-Mobile-Banner-810x1080-03.jpg",
    },
    {
      desktop: "https://yunshang.ca/wp-content/uploads/CN-Web-Banner-1920x1060-02.jpg",
      mobile:
        "https://yunshang.ca/wp-content/uploads/CN-Mobile-Banner-810x1080-02.jpg",
    },
  ],
  en: [
    {
      desktop:
        "https://yunshang.ca/wp-content/uploads/2026-6yunshang-web-banner-1920x1060-en.jpg",
      mobile:
        "https://yunshang.ca/wp-content/uploads/2026-6yunshang-mobile-banner-810x1080-en.jpg",
    },
    {
      desktop:
        "https://yunshang.ca/wp-content/uploads/Free-Ice-Cream-Web-Banner-1920x1060px-EN-1.jpg",
      mobile:
        "https://yunshang.ca/wp-content/uploads/Free-Ice-Cream-Mobile-Banne-810x1080px-EN.jpg",
    },
    {
      desktop: "https://yunshang.ca/wp-content/uploads/EN-Web-Banner-1920x1060-01.jpg",
      mobile:
        "https://yunshang.ca/wp-content/uploads/EN-Mobile-Banner-810x1080-01-1.jpg",
    },
    {
      desktop: "https://yunshang.ca/wp-content/uploads/EN-Web-Banner-1920x1060-1.jpg",
      mobile:
        "https://yunshang.ca/wp-content/uploads/EN-Mobile-Banner-810x1080-1.jpg",
    },
    {
      desktop: "https://yunshang.ca/wp-content/uploads/EN-Web-Banner-1920x1060-02.jpg",
      mobile:
        "https://yunshang.ca/wp-content/uploads/EN-Mobile-Banner-810x1080-02.jpg",
    },
  ],
};

function extFromUrl(url) {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname).toLowerCase();
  return ext || ".jpg";
}

async function download(url, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed ${response.status} ${url}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(dest, buffer);
}

for (const [locale, slides] of Object.entries(groups)) {
  for (let i = 0; i < slides.length; i += 1) {
    const index = i + 1;
    const slide = slides[i];
    const desktopExt = extFromUrl(slide.desktop);
    const desktopRel = `/images/home/sliders/${locale}/desktop/${locale}-sliders-${index}${desktopExt}`;
    const desktopAbs = path.join(root, "public", desktopRel.replace(/^\//, "").replace(/\//g, path.sep));

    await download(slide.desktop, desktopAbs);
    report[locale].desktop.push({
      index,
      sourceUrl: slide.desktop,
      savedPath: desktopRel,
    });

    let mobileUrl = slide.mobile ?? slide.desktop;
    let usedFallback = !slide.mobile;
    const mobileExt = extFromUrl(mobileUrl);
    const mobileRel = `/images/home/sliders/${locale}/mobile/${locale}-sliders-${index}${mobileExt}`;
    const mobileAbs = path.join(root, "public", mobileRel.replace(/^\//, "").replace(/\//g, path.sep));

    await download(mobileUrl, mobileAbs);
    report[locale].mobile.push({
      index,
      sourceUrl: mobileUrl,
      savedPath: mobileRel,
      usedDesktopFallback: usedFallback,
    });

    if (usedFallback) {
      report.fallbacks.push({
        locale,
        index,
        desktopSourceUrl: slide.desktop,
        mobileSavedPath: mobileRel,
      });
    }
  }
}

const reportPath = path.join(root, "homepage-slider-asset-report.md");
const lines = [
  "# Homepage Slider Asset Report",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "## Summary",
  `- Chinese slides: ${groups.zh.length} desktop / ${groups.zh.length} mobile`,
  `- English slides: ${groups.en.length} desktop / ${groups.en.length} mobile`,
  `- Mobile fallback count: ${report.fallbacks.length}`,
  "",
  "## Chinese (`/home/`)",
  "",
  "### Desktop",
  ...report.zh.desktop.map(
    (item) =>
      `${item.index}. ${item.savedPath}\n   - source: ${item.sourceUrl}`,
  ),
  "",
  "### Mobile",
  ...report.zh.mobile.map(
    (item) =>
      `${item.index}. ${item.savedPath}\n   - source: ${item.sourceUrl}${item.usedDesktopFallback ? "\n   - fallback: desktop image reused" : ""}`,
  ),
  "",
  "## English (`/en/home/`)",
  "",
  "### Desktop",
  ...report.en.desktop.map(
    (item) =>
      `${item.index}. ${item.savedPath}\n   - source: ${item.sourceUrl}`,
  ),
  "",
  "### Mobile",
  ...report.en.mobile.map(
    (item) =>
      `${item.index}. ${item.savedPath}\n   - source: ${item.sourceUrl}${item.usedDesktopFallback ? "\n   - fallback: desktop image reused" : ""}`,
  ),
  "",
  "## Mobile Fallbacks",
  ...(report.fallbacks.length
    ? report.fallbacks.map(
        (item) =>
          `- ${item.locale} slide ${item.index}: mobile used desktop source (${item.desktopSourceUrl}) -> ${item.mobileSavedPath}`,
      )
    : ["- None"]),
  "",
  "## Modified Project Files",
  "- `data/content/zh.ts`",
  "- `data/content/en.ts`",
  "- `homepage-slider-asset-report.md`",
  "",
];

fs.writeFileSync(reportPath, lines.join("\n"));
console.log("Download complete.");
console.log(JSON.stringify(report, null, 2));
