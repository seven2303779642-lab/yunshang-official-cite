# Yunshang Homepage

## Work Log

- Wireframe refinement: 1 hour
- Built near-deliverable `Navbar` and `Footer` components, including responsive/mobile layouts: 4 hours
- Homepage section implementation and visual polish: 7 hours
  - Implemented and refined the main homepage sections, including `HeroSlider`, `AboutIntro`, `FeatureCards`, `StoreBanner`, `MenuShowcase`, and `OrderBanner`.
  - Updated typography, reusable button styling, responsive behavior, mobile layout fixes, spacing, image positioning, and section-level visual details.
  - Remaining issues: a few minor visual polish items and English-version asset/link issues.
- 修复了一些小视觉问题。: 1 hour
- 目录结构整理与轻量级多语言改造: 1 hour
  - 完成目录结构整理（`components/home`、`components/layout`、`components/ui`、`data/siteContent.ts`）。
  - 补齐中英文页面路由骨架（中文默认路径 + 英文 `/en` 前缀）。
  - 接入轻量级多语言文案数据层（`zhContent` / `enContent`），首页 section 从 content 读取文案。
  - Navbar / Footer 支持中英文路径与文案切换，占位页同步接入。
  - 首页视觉效果、布局、动画与业务逻辑保持不变；`npm run build` 全部页面通过。
- 图片素材目录整理: 0.5 hour
  - 整理 `public/images` 目录结构，区分全站公共素材（`common`）与首页专用素材（`home`）。
  - 将中文图片文件名改为英文路径，同步更新所有图片引用路径，并清理移动后的空目录。
  - 页面检查正常，首页图片、Navbar Logo、Footer 图片均正常显示；`npm run build` 通过。
  - 备注：未修改视觉样式、布局、动画、文案或业务逻辑。

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
