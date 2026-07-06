# Homepage Slider Asset Report

Generated: 2026-07-06T16:06:50.623Z

## Capture Method
1. Fetched live HTML from `https://yunshang.ca/home/` and `https://yunshang.ca/en/home/`.
2. Identified hero slider widget order from `ha-advanced-slider` slide markup.
3. Loaded Elementor page CSS:
   - Chinese: `post-9903.css`
   - English: `post-10293.css`
4. Parsed `.elementor-repeater-item-*.ha-slider-slide` background-image rules for desktop and `@media (max-width: 767px)` mobile overrides.
5. Downloaded assets from source URLs and renamed into locale/desktop/mobile folders.

## Summary
- Chinese slides: 5 desktop / 5 mobile
- English slides: 5 desktop / 5 mobile
- Mobile fallback count: 1

## Chinese (`/home/`)

### Desktop
1. /images/home/sliders/zh/desktop/zh-sliders-1.jpg
   - source: https://yunshang.ca/wp-content/uploads/2026-6新品水煮鱼米线-web-banner-1920x1060-cn.jpg
2. /images/home/sliders/zh/desktop/zh-sliders-2.jpg
   - source: https://yunshang.ca/wp-content/uploads/icecream_CN_desktop.jpg
3. /images/home/sliders/zh/desktop/zh-sliders-3.jpg
   - source: https://yunshang.ca/wp-content/uploads/CN-Web-Banner-1920x1060-01.jpg
4. /images/home/sliders/zh/desktop/zh-sliders-4.jpg
   - source: https://yunshang.ca/wp-content/uploads/CN-Web-Banner-1920x1060-03.jpg
5. /images/home/sliders/zh/desktop/zh-sliders-5.jpg
   - source: https://yunshang.ca/wp-content/uploads/CN-Web-Banner-1920x1060-02.jpg

### Mobile
1. /images/home/sliders/zh/mobile/zh-sliders-1.jpg
   - source: https://yunshang.ca/wp-content/uploads/2026-6新品水煮鱼米线-mobile-banner-810x1080-cn.jpg
2. /images/home/sliders/zh/mobile/zh-sliders-2.jpg
   - source: https://yunshang.ca/wp-content/uploads/Free-Ice-Cream-Mobile-Banner-810x1080px-CN-1.jpg
3. /images/home/sliders/zh/mobile/zh-sliders-3.jpg
   - source: https://yunshang.ca/wp-content/uploads/CN-Web-Banner-1920x1060-01.jpg
   - fallback: desktop image reused
4. /images/home/sliders/zh/mobile/zh-sliders-4.jpg
   - source: https://yunshang.ca/wp-content/uploads/CN-Mobile-Banner-810x1080-03.jpg
5. /images/home/sliders/zh/mobile/zh-sliders-5.jpg
   - source: https://yunshang.ca/wp-content/uploads/CN-Mobile-Banner-810x1080-02.jpg

## English (`/en/home/`)

### Desktop
1. /images/home/sliders/en/desktop/en-sliders-1.jpg
   - source: https://yunshang.ca/wp-content/uploads/2026-6yunshang-web-banner-1920x1060-en.jpg
2. /images/home/sliders/en/desktop/en-sliders-2.jpg
   - source: https://yunshang.ca/wp-content/uploads/Free-Ice-Cream-Web-Banner-1920x1060px-EN-1.jpg
3. /images/home/sliders/en/desktop/en-sliders-3.jpg
   - source: https://yunshang.ca/wp-content/uploads/EN-Web-Banner-1920x1060-01.jpg
4. /images/home/sliders/en/desktop/en-sliders-4.jpg
   - source: https://yunshang.ca/wp-content/uploads/EN-Web-Banner-1920x1060-1.jpg
5. /images/home/sliders/en/desktop/en-sliders-5.jpg
   - source: https://yunshang.ca/wp-content/uploads/EN-Web-Banner-1920x1060-02.jpg

### Mobile
1. /images/home/sliders/en/mobile/en-sliders-1.jpg
   - source: https://yunshang.ca/wp-content/uploads/2026-6yunshang-mobile-banner-810x1080-en.jpg
2. /images/home/sliders/en/mobile/en-sliders-2.jpg
   - source: https://yunshang.ca/wp-content/uploads/Free-Ice-Cream-Mobile-Banne-810x1080px-EN.jpg
3. /images/home/sliders/en/mobile/en-sliders-3.jpg
   - source: https://yunshang.ca/wp-content/uploads/EN-Mobile-Banner-810x1080-01-1.jpg
4. /images/home/sliders/en/mobile/en-sliders-4.jpg
   - source: https://yunshang.ca/wp-content/uploads/EN-Mobile-Banner-810x1080-1.jpg
5. /images/home/sliders/en/mobile/en-sliders-5.jpg
   - source: https://yunshang.ca/wp-content/uploads/EN-Mobile-Banner-810x1080-02.jpg

## Mobile Fallbacks
- zh slide 3: mobile used desktop source (https://yunshang.ca/wp-content/uploads/CN-Web-Banner-1920x1060-01.jpg) -> /images/home/sliders/zh/mobile/zh-sliders-3.jpg

## Modified Project Files
- `data/content/zh.ts`
- `data/content/en.ts`
- `homepage-slider-asset-report.md`
- `public/images/home/sliders/zh/desktop/zh-sliders-1.jpg` … `zh-sliders-5.jpg`
- `public/images/home/sliders/zh/mobile/zh-sliders-1.jpg` … `zh-sliders-5.jpg`
- `public/images/home/sliders/en/desktop/en-sliders-1.jpg` … `en-sliders-5.jpg`
- `public/images/home/sliders/en/mobile/en-sliders-1.jpg` … `en-sliders-5.jpg`

## Notes
- English homepage now has **5** live slides (previously local content had 4).
- Only Chinese slide 3 lacked a dedicated mobile asset on source; desktop image was copied to mobile path as fallback.
