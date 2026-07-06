import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const tempDir = os.tmpdir();

function extractSlides(cssPath, slideOrder, label) {
  const css = fs.readFileSync(cssPath, "utf8");
  const slides = [];

  for (const repeater of slideOrder) {
    const desktopMatch = css.match(
      new RegExp(
        `\\.${repeater}\\.ha-slider-slide[^{]*\\{[^}]*background-image:url\\(([^)]+)\\)`,
        "i",
      ),
    );
    const mobileMatch = css.match(
      new RegExp(
        `@media[^{]*max-width:\\s*767px[\\s\\S]*?\\.${repeater}\\.ha-slider-slide[^{]*\\{[^}]*background-image:url\\(([^)]+)\\)`,
        "i",
      ),
    );

    slides.push({
      repeater,
      desktop: desktopMatch?.[1]?.replace(/["']/g, "") ?? null,
      mobile: mobileMatch?.[1]?.replace(/["']/g, "") ?? null,
    });
  }

  console.log(`\n=== ${label} ===`);
  slides.forEach((slide, index) => {
    console.log(`${index + 1}.`, slide);
  });

  return slides;
}

const zhSlides = extractSlides(
  path.join(tempDir, "post-9903.css"),
  [
    "elementor-repeater-item-a36cb25",
    "elementor-repeater-item-64b616c",
    "elementor-repeater-item-20a1f58",
    "elementor-repeater-item-bce36d6",
    "elementor-repeater-item-bd80de9",
  ],
  "zh",
);

const enSlides = extractSlides(
  path.join(tempDir, "post-10293.css"),
  [
    "elementor-repeater-item-159b580",
    "elementor-repeater-item-80ff605",
    "elementor-repeater-item-922e06f",
    "elementor-repeater-item-bce36d6",
    "elementor-repeater-item-bd80de9",
  ],
  "en",
);

fs.writeFileSync(
  path.join(tempDir, "slider-urls.json"),
  JSON.stringify({ zh: zhSlides, en: enSlides }, null, 2),
);
