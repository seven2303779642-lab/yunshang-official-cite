# 云尚米线官网重构项目

本项目用于重构云尚米线官网页面，基于 **Next.js App Router** 开发。主要页面的中英文版本、数据层与 QA 视觉校对已基本完成，项目**已接近尾声**；剩余工作主要为 Events 详情页、Order 真实点餐接入，以及少量收尾项。

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
- **需要控制换行的标题/副标题**（如英文 Feature Card、About 口碑菜、Bridge 区块）在 `data/content/zh.ts` / `en.ts` 里用 `headingLines`、`titleLines` 等数组字段配置，由 `FeatureCard`、`AboutPopularDishes` 等组件按行渲染；不要依赖 CSS 硬折行。
- 英文列表文案（菜名、店名、活动正文等）通过 `*Translations.en.json` 映射，不要在组件里硬编码 `locale === "en"` 分支。
- 不要建立全站统一 imageManifest；仅对含嵌入文字的素材做 locale 字段或翻译文件。
- 修改 Menu / Locations 筛选动画前，区分装饰动画与核心交互动画；`prefers-reduced-motion` 下只能减弱 FLIP 过渡，不能直接关闭。
- 首页 OrderBanner、StoreBanner 等区块使用 `useScrollReveal` 做滚动渐显；装饰性动画可随 reduced motion 关闭，核心布局变化动画只能减弱。
- 响应式重点检查：**1440px、1024px、768px、390px**。
- 执行较大改动前，先确认 `git status`，避免多人或多工具同时修改造成冲突。
- AI 辅助开发规则见根目录 `AGENTS.md`。

## 项目状态

### 已完成

**页面与路由**


| 页面   | 中文路由         | 英文路由            | 说明                                                                |
| ---- | ------------ | --------------- | ----------------------------------------------------------------- |
| 语言入口 | `/`          | —               | Landing Page（语言选择）；`/welcome` 重定向至 `/`                            |
| 首页   | `/home`      | `/en`           | Hero、AboutIntro、FeatureCards、StoreBanner、MenuShowcase、OrderBanner |
| 关于   | `/about-us`  | `/en/about-us`  | 中文：Gallery 轮播；英文：Toppings / Bridge / Video + 独立 ValueGrid 样式      |
| 菜单   | `/menu`      | `/en/menu`      | manifest 驱动，分类 FLIP 筛选；手机端 Tab 换行全展示                              |
| 门店   | `/locations` | `/en/locations` | 省/区筛选 + 门店卡片 FLIP；仅「查看导航 / Get Directions」跳转地图                    |
| 活动   | `/events`    | `/en/events`    | Navbar 显示为 Promo；列表页接入 manifest                                   |
| 点餐   | `/order`     | `/en/order`     | 占位页（`PlaceholderPage`）                                            |


旧路由 `/stores`、`/en/stores` 保留重定向至 Locations。

**多语言与数据**

- `data/content/` 提供 `zhContent` / `enContent` 静态文案（含 `titleLines`、`headingLines` 换行配置）。
- 菜单、门店、活动列表分别由 manifest 驱动，配合 `menu.ts`、`locations.ts`、`events.ts` 读取与筛选；每条实体含稳定 `id`，英文翻译以 `id` 为键。
- 英文扩展：`menuTranslations.en.json`、`locationTranslations.en.json`、`eventsTranslations.en.json`。
- 英文带文字图片已接入 Home / About / Events 等主要模块。

**数据层整理（第 16 条工作记录）**

- 清理 `data/content/` 中与 manifest 重复的遗留字段（`menu.featuredItems`、`locations.filters` / `locations.items`、`events.list`）。
- 菜品 / 门店 / 活动 manifest 补充 `id`；英文翻译文件改以 `id` 关联。
- 删除阶段性报告与遗留 manifest（`englishAssetReport.json`、`storesManifest.json`、`storeIconManifest.json`）及 `scripts/` 一次性脚本。

**QA 视觉翻新（第 15 条工作记录）**

- 全站 Navbar 间距、Footer Logo / 微信二维码圆角、各页 Banner 与卡片字号。
- 首页：FeatureCards / MenuShowcase 尺寸与动效、OrderBanner 滚动渐显、英文 Order 标题高亮。
- 关于：Gallery 结构重构（桌面拉高、手机缩略图不叠图）；英文 Intro / Toppings / Bridge / Video；PopularDishes 手机端完整展示图片。
- 菜单：手机端分类 Tab 换行展示；Banner 与菜品框字号加大。
- 门店：手机端大标题恢复；筛选框字号；卡片仅按钮跳转地图。

**公共与规范**

- Navbar / Footer 中英文切换；「线上点单」打开本地 `OrderPopup`。
- Landing Page（`/`）与 OrderPopup 接入 Codex 素材。
- StoreBanner「查看附近门店」使用 PNG 背景按钮（`StoreNearbyButton`）。
- `AGENTS.md` 开发规范。
- `npm run build` 已通过。

### 待收尾

- **Events 列表**：仅展示 manifest 数据，卡片无跳转、无按钮；`link` / `buttonText` 与 `isEventLinkClickable()` 保留在数据层供日后详情页使用，**勿在 UI 重复加链接或 CTA**。
- **Events 详情页**：站内详情路由尚未实现。
- **Order 页面**：仍为占位，未接入真实点餐流程。
- **英文素材缺口**：hero `slider-1` 无英文桌面/移动图；8 周年英文海报仅 source-only，未写入 manifest 活动项。
- **文案细节**：中文版门店筛选默认项文案为「选择 省份 / 选择 区域」（含空格），若需与文案稿「选择省份」完全一致，需在 `data/locations.ts` 调整。

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
  layout.tsx, globals.css, page.tsx          # 根布局；/ 为语言入口
  home/page.tsx                              # 中文首页（/home）
  welcome/page.tsx                           # 重定向至 /
  about/ menu/ locations/ events/ order/     # 中文页面路由
  stores/                                    # 重定向至 locations
  en/                                        # 英文路由（/en 前缀）
    page.tsx, about/, menu/, locations/, events/, order/, stores/

components/
  home/          首页 section（HeroSlider、MenuShowcase、StoreNearbyButton 等）
  landing/       Landing Page（LanguageEntryPage、LanguageButton）
  about/         关于页模块（AboutGallery、AboutEnToppings/Bridge/Video 等）
  menu/          菜单 Hero、分类筛选、菜品 grid（useMenuFlip）
  locations/     门店 Hero、筛选、卡片 grid（useLocationsFlip）
  events/        活动 Hero、活动列表
  order/         OrderPopup、OrderPopupContext
  layout/        Navbar、Footer、PlaceholderPage
  ui/            BrandButton、FeatureCard、ScrollReveal 等
  common/        PageBanner 等跨页组件

hooks/
  useScrollReveal.ts                         # 滚动渐显（OrderBanner、StoreBanner 等）

data/
  content/       types.ts, zh.ts, en.ts, index.ts   # 静态多语言文案与换行配置
  siteContent.ts                                    # 统一 re-export
  orderLinks.ts, welcomeContent.ts                  # 点单链接、Landing 文案
  orderPopupAssets.ts, storeNearbyButtonAssets.ts   # 弹窗 / 门店按钮素材路径
  menu.ts, menuManifest.json, menuTranslations.en.json
  locations.ts, locationsManifest.json,
    locationIconManifest.json, locationTranslations.en.json
  events.ts, eventsManifest.json, eventsTranslations.en.json

public/images/
  common/ home/ about/ menu/ locations/ events/     # 中文 / 通用素材
  landing/ order-popup/ buttons/                    # Landing、点单弹窗、门店按钮 PNG
  home/en/ about/en/ events/en/                     # 英文带文字素材

AGENTS.md        AI Agent 开发规范
```

## 内容与数据管理

项目采用 **「静态文案 + 列表 manifest + 英文翻译文件」** 三层分离：

```text
data/content/          → 页面 UI 文案、Hero 配置、按钮、带文字图片路径、标题换行
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
- 英文 About 专属区块：`enSections`（toppings、bridge、video）

**标题与换行**：部分模块不把整句标题写进单个字符串，而是用数组控制显示行数，例如：


| 字段                               | 用途                | 示例位置                                                               |
| -------------------------------- | ----------------- | ------------------------------------------------------------------ |
| `headingLines: [string, string]` | 两行主标题             | 首页 AboutIntro、OrderBanner                                          |
| `titleLines: string[]`           | 多行卡片/菜品标题         | 英文 Home FeatureCards、About ValueGrid / PopularDishes、AboutEnBridge |
| `lines` / `mobileLines`          | 正文分行（中英文 home 卡片） | `featureCards.features`                                            |


修改文案换行时，优先改 `zh.ts` / `en.ts` 中对应数组，再确认 `FeatureCard`、`AboutPopularDishes`、`AboutEnBridgeCopy` 等组件的渲染是否符合预期。

**不适合**放入 content 的数据：30 道菜品、17 家门店、8 条活动全文——这些走 manifest。

### `data/menuManifest.json` + `menu.ts`

`menuManifest.json` 每条菜品包含：唯一 `id`、分类、菜名、描述、标签、图片 `filename`。

`menu.ts` 提供：

- `getAllMenuItems(locale)` / `filterMenuItems(category, locale)`
- `localizeMenuItem()` — 英文时读取 `menuTranslations.en.json`（按 `id` 键）
- `getMenuImagePath()`、`getTagIcon()`、`TAG_ICON_MAP`

**新增菜品：**

1. 图片放入 `public/images/menu/items/`
2. 在 `menuManifest.json` 新增条目（须包含唯一 `id`，如 `crossing-original-bone-broth`）
3. 如需英文，在 `menuTranslations.en.json` 以同一 `id` 为键补充 `name` / `description` / `tags`

每条可增长实体（菜品、门店、活动）均有稳定 **`id` 字段**（slug 形式），英文翻译文件以 `id` 为键，便于日后迁移数据库主键。

### `data/locationsManifest.json` + `locations.ts`

门店字段包含：省/区、店名、地址、电话、营业时间、地图链接、卡片图片等。

`locations.ts` 提供筛选、`getLocationName(location, locale)`（英文读 `locationTranslations.en.json`，按 `id` 键）、`getAllProvinceLabel()` / `getAllRegionLabel()`、`LOCATION_ICONS` 等。

门店卡片图片与地址信息中英文共用；店名与筛选默认文案做本地化。

### `data/eventsManifest.json` + `events.ts`

活动列表字段包含：标题、段落、备注、参与门店、海报路径等。

- `image`：中文海报
- `imageEn`：英文海报（当前 8 条已配置）
- `link` / `buttonText`：源站遗留字段，**数据层保留**（`isEventLinkClickable()`），供日后详情页；**当前列表 UI 不渲染跳转链接或按钮**
- 英文标题与正文：`eventsTranslations.en.json`（按活动 `id` 键）

`events.ts` 提供 `getAllEvents()`、`getEventImage()`、`getEventTitle()`、`getEventParagraphs()` 等本地化读取函数。

**Events 详情页尚未实现**；列表为纯展示。

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
http://localhost:3000        # Landing（语言入口）
http://localhost:3000/home   # 中文首页
http://localhost:3000/en     # 英文首页
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

**英文素材整理与接入**：

- 新增英文素材目录：
  - `public/images/home/en/`（about-intro 标题、menu-showcase 标签/标题、hero-sliders）
  - `public/images/about/en/`（hero、popular dish 标签）
  - `public/images/events/en/cards/`（8 张活动英文海报 + 1 张 8 周年 source-only）
- Home：`AboutIntro`、`MenuShowcase` 英文图接入 `enContent`；`OrderBanner` 英文标题使用 Heaters 字体文字（`public/fonts/order-title-en-heaters.ttf`，原 `order-title-en.svg` 已移除）。
- About：英文 hero 与 popular dish 标签图接入。
- Events：`eventsManifest.json` 为 8 条活动补充 `imageEn`，列表按 locale 切换海报。
- `HeroSlider` 轮播改为从 content 读取 `slides`；英文页使用 `slider-2`–`slider-5`，mobile 无独立图时回退为 desktop 图。
- 未接入：英文 hero `slider-1`（源站无对应素材）；8 周年英文海报仅作 source-only 保存，未写入 manifest 活动项。

**英文页面 content 与文案修复**：

- 扩展 `data/content/types.ts`、`en.ts`、`zh.ts`（如 hero slides、menuShowcase assets 等 locale 字段）。
- Menu：新增 `menuTranslations.en.json`；`locale` 透传至 `MenuPage` → `useMenuFlip`，英文页显示英文菜名/描述/标签。
- Locations：新增 `locationTranslations.en.json`；卡片店名按 `phone` 映射英文名称。
- Promo（`/en/events`）：新增 `eventsTranslations.en.json`；活动标题、段落、备注等按 `imageFilename` 显示英文。
- Order 页面仍为占位页，本轮未修改。
- `npm run build` 通过。

备注：

- Events 详情页未实现。
- 未建立全站 imageManifest。

### 14. Landing Page、OrderPopup 与 StoreBanner 按钮素材接入

用时：6 小时

**路由与 Landing Page**：

- `/` 改为语言入口 Landing Page；中文首页迁至 `/home`；`/welcome` 重定向至 `/`。
- 新增 `components/landing/LanguageEntryPage.tsx`、`LanguageButton.tsx`。
- 接入 Codex landing 素材：背景、logo、云纹、`white-icon`、语言按钮 PNG（`button-red-white.png` / `button-red-fill.png`）。
- Landing 响应式精修：云字图标 55 / 40 / 30px；`cloud-deco` 分断点尺寸与桌面左侧裁切；移动端隐藏 `cloud-right`、语言按钮纵向排列；底部云字与 `cloud-right` 位置调整。

**OrderPopup 与点单链接**：

- 新增 `OrderPopup`、`OrderPopupProvider`，挂载于根 `layout.tsx`。
- Navbar / Footer「线上点单」统一打开本地弹窗；弹窗内按钮使用 `BrandButton`（红底变体）。
- 点单 URL 集中于 `data/orderLinks.ts`；弹窗「外卖送餐」链接至站内 Landing `/`。
- 弹窗底部波浪纹：`popup-wave-cn.svg` / `popup-wave-en.svg`。

**StoreBanner 门店按钮**：

- 「查看附近门店」改为 PNG 背景 + HTML 文本（`StoreNearbyButton`）。
- 素材：`store-nearby-default.png`、`store-nearby-hover.png`；样式见 `store-nearby-button.css`（组件内引入，避免 `globals.css` 未打入 bundle 的问题）。
- 未改动 Navbar、Landing、OrderPopup 及其他 `BrandButton` 用法。

**content / 导航**：

- `welcomeContent.ts`、`zhContent` / `enContent` 更新 `homeHref`、语言入口链接。
- `npm run build` 通过。

备注：

- StoreBanner 背景图本轮未替换为 Codex `store-banner-bg.jpg`。
- `BrandButton` 仍保留 `light` 变体代码，当前无页面使用。

### 15. 全站 QA 视觉翻新与收尾校对

用时：8 小时

依据客户 QA 清单，对中英文主要页面做视觉与交互翻新，覆盖 Navbar、Home、About、Menu、Locations 及手机端断点（390 / 768 / 1024 / 1440px）。

**全局与首页**

- Navbar 菜单间距收紧；Footer Logo 居中偏移、微信二维码圆角。
- 首页 FeatureCards / MenuShowcase 尺寸与动效调整；OrderBanner、StoreBanner 接入 `useScrollReveal` 滚动渐显。
- 英文首页：`titleLines` 两行标题、Intro 正文变窄、Order 标题红色高亮与 SVG 标题图。

**关于页**

- 中文 `AboutGallery` 结构重构（桌面拉高、手机缩略图置于图下、完整展示主图）。
- 英文新增 `AboutEnToppings`、`AboutEnBridge`、`AboutEnVideo`；Intro 标题「Savor the Legacy…」；ValueGrid 英文云纹背景与卡片顺序调整；英文页不展示 Gallery。
- `AboutPopularDishes` 支持 `titleLines`；手机端图片 `height: auto` 完整展示。

**菜单与门店**

- Menu 手机端分类 Tab `flex-wrap` 全展示；Banner 与菜品框字号加大。
- Locations 手机端恢复大标题「云尚米线门店」；副标题与筛选区间距缩小；仅导航按钮跳转 Google Maps。
- `data/content` 扩展 `titleLines` 等类型；`FeatureCard` 支持多行标题渲染。

备注：

- 中文版门店筛选默认文案仍为「选择 省份 / 选择 区域」（含空格），与文案稿无空格版本存在差异，待确认是否修改。
- Events 详情页、Order 真实流程仍未实现。
- 阶段性文件清理与数据层 `id` 归档见第 16 条。

### 16. 数据层遗留清理与实体 id 归档

用时：0.5 小时

**content 去重**

- 从 `data/content/types.ts`、`zh.ts`、`en.ts` 移除未使用的重复列表数据：
  - `menu.featuredItems`（菜单列表已由 `menuManifest.json` 驱动）
  - `locations.filters`、`locations.locations.items`（门店列表由 `locationsManifest.json` 驱动）
  - `events.list`（活动列表由 `eventsManifest.json` 驱动）
- 精简 `LocationsContent`：保留 `hero`、`filterAria`、`directionsLabel`；`LocationsPage` 改为读取 `content.directionsLabel`。

**实体 `id` 与翻译键统一**

- `menuManifest.json`（30 条）、`locationsManifest.json`（17 条）、`eventsManifest.json`（8 条）各增加稳定 slug 形式 `id`（如 `crossing-original-bone-broth`、`ontario-markham-warden`、`kids-month`）。
- `menuTranslations.en.json`、`locationTranslations.en.json`、`eventsTranslations.en.json` 的键由 `filename` / `phone` / `imageFilename` 改为对应 `id`。
- `menu.ts`、`locations.ts`、`events.ts` 更新类型与 `get*Key()`、`localize*` / `getEventTranslation()` 等查找逻辑，统一按 `id` 关联。

**仓库清理**

- 删除 `data/englishAssetReport.json`、`data/storesManifest.json`、`data/storeIconManifest.json`、`qa-checklist.txt`。
- 删除已无用途的 `scripts/` 目录（含旧站素材拉取脚本 `download-events-assets.mjs`、`download-stores-assets.mjs`；manifest 与图片已入库，无需保留）。

**文档**

- 更新 README「内容与数据管理」：`id` 字段说明、新增条目须带 `id` 的约定。

备注：

- 数据库选型与 async 数据源替换尚未进行；当前 JSON + `*.ts` 结构可继续沿用至接库。
- 菜单分类仍存 `MENU_CATEGORY_FILTERS`（`menu.ts`）与 `content.categories.items` 两处，接库前可再合并为单一来源。
- `npm run build` 通过。

## 当前累计工时

约 44.5 小时。