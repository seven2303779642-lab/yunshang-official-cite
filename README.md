# 云尚米线官网重构项目

本项目用于重构云尚米线官网页面，基于 **Next.js App Router** 开发。当前已完成首页、关于、菜单、门店（Locations）、活动（Promo）等主要页面的中英文骨架与数据驱动接入，采用组件化结构、轻量级多语言内容层与 manifest 数据分离，便于后续扩展内容与维护素材。

## 目录

- [部署说明](#部署说明)
- [开发注意事项](#开发注意事项)
- [项目状态](#项目状态)
- [技术栈](#技术栈)
- [目录结构概览](#目录结构概览)
- [内容与数据管理](#内容与数据管理)
- [本地运行](#本地运行)
- [工作记录](#工作记录)
- [当前累计工时](#当前累计工时)

## 部署说明

项目可通过 Vercel 部署。GitHub 仓库连接 Vercel 后，每次 push 到对应分支，预览链接会自动更新。

注意：

- Vercel 对文件路径**大小写敏感**，图片文件名、后缀、中文字符与代码引用必须完全一致。
- 修改 `public/images/` 路径后，需在本地与 Vercel 预览环境各验证一次图片是否正常加载。

## 开发注意事项

- 使用 **App Router**（`app/`），不要使用 Pages Router。
- 修改页面时尽量只改对应页面组件，不要大范围重构无关页面。
- 页面边界：`components/home/`、`components/about/`、`components/menu/`、`components/locations/`、`components/events/` 各自独立；共享布局见 `components/layout/`。
- 图片统一放在 `public/images/` 下，按页面或用途分子目录；英文带文字素材放在对应 `*/en/` 子目录。
- 可增长列表数据优先用 manifest + `data/*.ts` 辅助函数管理，静态 UI 文案放 `data/content/`。
- 英文列表文案（菜名、店名、活动正文等）通过 `*Translations.en.json` 映射，不要在组件里硬编码 `locale === "en"` 分支。
- 不要建立全站统一 imageManifest；仅对含嵌入文字的素材做 locale 字段或翻译文件。
- 修改 Menu / Locations 筛选动画前，区分装饰动画与核心交互动画；`prefers-reduced-motion` 下只能减弱 FLIP 过渡，不能直接关闭。
- 响应式重点检查：**1440px、1024px、768px、390px**。
- 执行较大改动前，先确认 `git status`，避免多人或多工具同时修改造成冲突。
- AI 辅助开发规则见根目录 `AGENTS.md`。

## 项目状态

### 已完成

**页面与路由**

| 页面 | 中文路由 | 英文路由 | 说明 |
|------|----------|----------|------|
| 首页 | `/` | `/en` | Hero、AboutIntro、FeatureCards、StoreBanner、MenuShowcase、OrderBanner |
| 关于 | `/about` | `/en/about` | Hero、Intro、ValueGrid、PopularDishes、Gallery、Stores |
| 菜单 | `/menu` | `/en/menu` | manifest 驱动，分类 FLIP 筛选动画 |
| 门店 | `/locations` | `/en/locations` | 原 Stores 已更名；省/区筛选 + 门店卡片 FLIP 动画 |
| 活动 | `/events` | `/en/events` | Navbar 显示为 Promo；列表页接入 manifest |
| 点餐 | `/order` | `/en/order` | 占位页（`PlaceholderPage`） |

旧路由 `/stores`、`/en/stores` 保留重定向至 Locations。

**多语言与数据**

- `data/content/` 提供 `zhContent` / `enContent` 静态文案。
- 菜单、门店、活动列表分别由 manifest 驱动，配合 `menu.ts`、`locations.ts`、`events.ts` 读取与筛选。
- 英文扩展：`menuTranslations.en.json`、`locationTranslations.en.json`、`eventsTranslations.en.json`。
- 英文带文字图片已部分接入（Home / About / Events 海报；HeroSlider 英文 slides 等）。

**公共与规范**

- Navbar / Footer 中英文切换。
- `AGENTS.md` 开发规范。
- `npm run build` 已通过。

### 待继续

- **Events 详情页**：列表卡片链接仍指向站外或 `#`，站内详情页未实现。
- **Order 页面**：仍为占位，未接入真实点餐流程。
- **英文素材缺口**：hero `slider-1` 无英文桌面/移动图；8 周年英文海报仅 source-only，未写入 manifest 活动项。
- **视觉校对**：About / Menu / Locations / Events 细节与英文页仍需人工核对。
- **遗留清理**：`storesManifest.json`、`storeIconManifest.json` 等旧文件仍可能存在，尚未统一移除。

## 技术栈

- Next.js 16（App Router）
- React 19
- TypeScript
- CSS（`app/globals.css`）
- Framer Motion
- Vercel 部署

## 目录结构概览

```text
app/
  layout.tsx, globals.css, page.tsx          # 根布局与中文首页
  about/ menu/ locations/ events/ order/     # 中文页面路由
  stores/                                    # 重定向至 locations
  en/                                        # 英文路由（/en 前缀）
    page.tsx, about/, menu/, locations/, events/, order/, stores/

components/
  home/          首页 section（HeroSlider、MenuShowcase 等）
  about/         关于页模块
  menu/          菜单 Hero、分类筛选、菜品 grid（useMenuFlip）
  locations/     门店 Hero、筛选、卡片 grid（useLocationsFlip）
  events/        活动 Hero、活动列表
  layout/        Navbar、Footer、PlaceholderPage
  ui/            BrandButton 等通用 UI
  common/        PageBanner 等跨页组件

data/
  content/       types.ts, zh.ts, en.ts, index.ts   # 静态多语言文案
  siteContent.ts                                    # 统一 re-export
  menu.ts, menuManifest.json, menuTranslations.en.json
  locations.ts, locationsManifest.json,
    locationIconManifest.json, locationTranslations.en.json
  events.ts, eventsManifest.json, eventsTranslations.en.json
  englishAssetReport.json                           # 英文素材扫描报告（JSON）

docs/
  english-assets-report.md                          # 英文素材报告（Markdown）

public/images/
  common/ home/ about/ menu/ locations/ events/     # 中文 / 通用素材
  home/en/ about/en/ events/en/                     # 英文带文字素材

AGENTS.md        AI Agent 开发规范
```

## 内容与数据管理

项目采用 **「静态文案 + 列表 manifest + 英文翻译文件」** 三层分离：

```text
data/content/          → 页面 UI 文案、Hero 配置、按钮、带文字图片路径
data/*Manifest.json    → 可增长的列表数据（菜品、门店、活动）
data/*Translations.en.json  → 英文列表文案覆盖（按 key 映射）
data/*.ts              → 读取 manifest、筛选、本地化、图片路径解析
```

组件通过 `locale`（`"zh"` | `"en"`）选择 content 与本地化后的列表数据，不在组件内重复维护长列表。

### `data/content/`（`zhContent` / `enContent`）

存放**不会频繁批量增长**的页面文案与配置，经 `data/siteContent.ts` 统一导出。

典型内容：

- Navbar / Footer / Hero 标题与副标题
- 按钮文字、筛选 aria 标签、占位页文案
- HeroSlider `slides`（桌面/移动图路径、`alt`）
- MenuShowcase、OrderBanner 等模块的英文标题图路径
- About / Menu / Locations / Events 页面级静态字段

**不适合**放入 content 的数据：30 道菜品、17 家门店、8 条活动全文——这些走 manifest。

### `data/menuManifest.json` + `menu.ts`

`menuManifest.json` 每条菜品包含：分类、菜名、描述、标签、图片 `filename`。

`menu.ts` 提供：

- `getAllMenuItems(locale)` / `filterMenuItems(category, locale)`
- `localizeMenuItem()` — 英文时读取 `menuTranslations.en.json`（按 `filename` 键）
- `getMenuImagePath()`、`getTagIcon()`、`TAG_ICON_MAP`

**新增菜品：**

1. 图片放入 `public/images/menu/items/`
2. 在 `menuManifest.json` 新增条目
3. 如需英文，在 `menuTranslations.en.json` 补充 `name` / `description` / `tags`

### `data/locationsManifest.json` + `locations.ts`

门店字段包含：省/区、店名、地址、电话、营业时间、地图链接、卡片图片等。

`locations.ts` 提供筛选、`getLocationName(location, locale)`（英文读 `locationTranslations.en.json`，按 `phone` 键）、`LOCATION_ICONS` 等。

门店卡片图片与地址信息中英文共用；仅店名做英文映射。

### `data/eventsManifest.json` + `events.ts`

活动列表字段包含：标题、段落、备注、参与门店、海报路径等。

- `image`：中文海报
- `imageEn`：英文海报（当前 8 条已配置）
- 英文标题与正文：`eventsTranslations.en.json`（按 `imageFilename` 键）

`events.ts` 提供 `getAllEvents()`、`getEventImage()`、`getEventTitle()`、`getEventParagraphs()` 等本地化读取函数。

**Events 详情页尚未实现**；列表仅展示 manifest 数据。

### 英文素材报告

| 文件 | 用途 |
|------|------|
| `data/englishAssetReport.json` | 机器可读的英文素材扫描/下载结果 |
| `docs/english-assets-report.md` | 同上，人类可读；标注已下载、缺失、跳过项 |

英文带文字图片按页面分子目录存放（如 `public/images/home/en/`），在 `enContent` 或 manifest 的 `imageEn` 字段引用。

### 遗留文件（待清理）

以下文件为 Stores 更名前的遗留，当前代码以 `locations*` 为准：

- `data/storesManifest.json`
- `data/storeIconManifest.json`

## 本地运行

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

构建检查：

```bash
npm run build
```

## 工作记录

### 1. Wireframe 初步调整

用时：1 小时

- 完成页面 wireframe 的初步整理与调整。

### 2. Navbar / Footer 组件搭建

用时：4 小时

- 搭建接近可交付状态的 `Navbar` 与 `Footer` 组件。
- 完成桌面端与移动端响应式布局。

### 3. 首页主体实现与视觉精修

用时：6 小时

- 实现并调整首页主要 section：
  - `HeroSlider`
  - `AboutIntro`
  - `FeatureCards`
  - `StoreBanner`
  - `MenuShowcase`
  - `OrderBanner`
- 调整字体、统一按钮样式、响应式行为、移动端布局、间距、图片定位与 section 细节。
- 遗留少量视觉细节与英文版素材 / 链接问题。

### 4. 首页小视觉问题修复

用时：1 小时

- 修复若干小型视觉问题。

### 5. 目录结构整理与轻量级多语言改造

用时：0.5 小时

- 整理目录结构：
  - `components/home`
  - `components/layout`
  - `components/ui`
  - `data/siteContent.ts`
- 补齐中英文页面路由骨架：
  - 中文默认路径
  - 英文 `/en` 前缀
- 接入轻量级多语言文案数据层：
  - `zhContent`
  - `enContent`
- 首页 section 改为从 content 读取文案。
- Navbar / Footer 支持中英文路径与文案切换。
- 占位页同步接入多语言内容。
- 首页视觉效果、布局、动画与业务逻辑保持不变。
- `npm run build` 通过。

### 6. 图片素材目录整理

用时：0.5 小时

- 整理 `public/images` 目录结构。
- 区分全站公共素材 `common` 与首页专用素材 `home`。
- 将中文图片文件名改为英文路径。
- 同步更新所有图片引用路径。
- 清理移动后的空目录。
- 首页图片、Navbar Logo、Footer 图片均正常显示。
- `npm run build` 通过。
- 未修改视觉样式、布局、动画、文案或业务逻辑。

### 7. Menu / Stores / Events 页面 MVP 与素材整理

用时：2 小时

- 下载并整理 Menu、Stores、Events 页面素材。
- 完成 Menu 页面 MVP wireframe。
- 完成 Stores 页面 MVP wireframe。
- 完成 Events 页面 MVP wireframe。
- 接入中英文 content 数据。
- 保留 Order 页面为占位页。
- 所有主要路由 build 通过。

备注：

- 本轮只完成最低可行页面骨架。
- About / Menu / Stores / Events 仍需后续视觉精修与内容校对。
- Stores 门店详情部分仍使用占位信息。
- Events 详情页暂未实现，卡片链接暂为 `#`。
- Order 页面仍为 `PlaceholderPage`。

### 8. Agent 开发规范补充

用时：0 小时

- 补充 `AGENTS.md`。
- 明确 App Router、最小改动、页面边界、响应式断点等开发规则。

### 9. About 页面精修

用时：3 小时

- 调整 About 页面以下模块布局与样式：
  - Hero
  - Intro
  - ValueGrid
  - PopularDishes
  - Stores
- 新增 `AboutGallery` 图片轮播。
- 补充 About 页面图片素材与 CSS。

### 10. Menu 页面重构

用时：4 小时

- 菜单数据迁移至 `data/menuManifest.json`。
- 整理 30 道菜品数据与 tag 图标映射。
- 重构 Menu Hero、分类筛选与统一 grid 列表。
- 调整 banner、分类按钮与菜品 card 视觉。
- 新增 `framer-motion` 与 `useMenuFlip.ts`。
- 实现 FLIP 筛选动画：
  - 保留卡片平移到新位置
  - 新卡片从中心放大出现
  - 多余卡片从中心缩小并淡出

### 11. Events 素材准备

用时：0 小时

- 新增 `eventsManifest.json`。
- 下载并整理活动图片。
- 列表页组件接入与英文海报/文案见第 13 条。

### 12. 共用组件调整

用时：0 小时

- `BrandButton` 新增 `wide` 变体。
- `StoreBanner` 改用 `BrandButton`。
- 删除 `StoresButton`。
- `npm run build` 通过。

### 13. 英文素材整理、Locations 更名与英文页面修复

用时：8 小时

**Stores → Locations 更名与页面整理**（已提交 `d7903ab`）：

- 路由调整为 `/locations`、`/en/locations`；旧 `/stores`、`/en/stores` 保留重定向。
- 组件由 `components/stores/` 迁移至 `components/locations/`。
- 数据由 `storesManifest` 迁移至 `data/locations.ts`、`locationsManifest.json`、`locationIconManifest.json`。
- content 键名由 `stores` 改为 `locations`。
- Locations 筛选与门店卡片 FLIP 动画保持可用。

**英文素材整理与接入**（工作区尚有未提交改动）：

- 新增 `data/englishAssetReport.json` 与 `docs/english-assets-report.md`，记录英文源站素材扫描结果。
- 新增英文素材目录：
  - `public/images/home/en/`（about-intro 标题、menu-showcase 标签/标题、hero-sliders）
  - `public/images/about/en/`（hero、popular dish 标签）
  - `public/images/events/en/cards/`（8 张活动英文海报 + 1 张 8 周年 source-only）
- Home：`AboutIntro`、`MenuShowcase` 英文图接入 `enContent`；`OrderBanner` 英文标题使用 `order-title-en.svg`。
- About：英文 hero 与 popular dish 标签图接入。
- Events：`eventsManifest.json` 为 8 条活动补充 `imageEn`，列表按 locale 切换海报。
- `HeroSlider` 轮播改为从 content 读取 `slides`；英文页使用 `slider-2`–`slider-5`，mobile 无独立图时回退为 desktop 图。
- 未接入：英文 hero `slider-1`（源站无对应素材）；8 周年英文海报仅作 source-only 保存，未写入 manifest 活动项。

**英文页面 content 与文案修复**（工作区尚有未提交改动）：

- 扩展 `data/content/types.ts`、`en.ts`、`zh.ts`（如 hero slides、menuShowcase assets 等 locale 字段）。
- Menu：新增 `menuTranslations.en.json`；`locale` 透传至 `MenuPage` → `useMenuFlip`，英文页显示英文菜名/描述/标签。
- Locations：新增 `locationTranslations.en.json`；卡片店名按 `phone` 映射英文名称。
- Promo（`/en/events`）：新增 `eventsTranslations.en.json`；活动标题、段落、备注等按 `imageFilename` 显示英文。
- Order 页面仍为占位页，本轮未修改。
- `npm run build` 通过。

备注：

- Events 详情页未实现。
- 未建立全站 imageManifest。
- 未清理全部历史图片路径；`storesManifest` 等遗留文件仍可能存在。

## 当前累计工时

约 30 小时。