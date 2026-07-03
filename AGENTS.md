# Agent 开发规范 — yunshang-homepage

## 技术栈

- Next.js 16，使用 **App Router**（`app/`）。
- React 19、TypeScript、样式在 `app/globals.css`，动画使用 Framer Motion。
- **不要**使用 Pages Router（`pages/`）。
- 版本可能与旧版 Next.js 文档不一致，不确定时查 `node_modules/next/dist/docs/`。
- 部署在 Vercel。更多背景见 `README.md`。

## 编辑前

1. 先阅读现有项目结构和周边代码。
2. 优先**最小化、针对性修改**——不要动无关页面或组件。
3. **不要**在未征得用户同意的情况下做大范围重构。
4. **不要**除非用户明确要求，否则不要浏览外部网站。
5. 针对某个 CSS 或布局问题，直接修该问题——不要为此做全库排查。
6. 较大改动前先 `git status`，避免与他人或未提交改动冲突。

## 路由与语言

| 页面 | 中文 | 英文 |
| --- | --- | --- |
| 语言入口 | `/` | — |
| 首页 | `/home` | `/en` |
| 关于 | `/about` | `/en/about` |
| 菜单 | `/menu` | `/en/menu` |
| 门店 | `/locations` | `/en/locations` |
| 活动 | `/events` | `/en/events` |
| 点餐 | `/order` | `/en/order` |

- `/welcome` 重定向至 `/`；旧路由 `/stores`、`/en/stores` 重定向至 Locations。
- 中文页传入 `zhContent` + `locale="zh"`；英文页传入 `enContent` + `locale="en"`。
- 英文 Navbar 上活动显示为 **Promo**。「线上点单」打开 `OrderPopup`（尚未接入真实点餐流程）。

本地入口：`http://localhost:3000`（语言入口）、`/home`、`/en`。实质性改动后运行 `npm run build` 检查。

## 页面边界

各页 section 放在对应目录；仅在必要时改共享 layout / CSS。

| 区域 | 路径 |
| --- | --- |
| 首页 | `components/home/` |
| 关于 | `components/about/` |
| 菜单 | `components/menu/` |
| 门店 | `components/locations/` |
| 活动 | `components/events/` |
| 语言入口 | `components/landing/` |
| 点单弹窗 | `components/order/` |
| 共享布局 | `components/layout/`（Navbar、Footer） |
| 共享 UI | `components/ui/`、`components/common/` |

**关于页**

- 中文：Hero、Intro、ValueGrid、**Gallery**、PopularDishes、Stores。
- 英文：至 Intro 相同，之后为 `enSections`（Toppings、Bridge、Video）、ValueGrid（`variant="en"`）、**无 Gallery**、PopularDishes、Stores。
- 改 About 时优先动 `components/about/` 及严格必要的 `app/globals.css`。

## 复用现有模式

- 新建组件 / 样式前，先复用现有组件、CSS class、字体和按钮样式。
- **Navbar**、**Footer** 为共享布局（`components/layout/`）。
- 主 CTA 用 **BrandButton**；StoreBanner「查看附近门店」仅用 **StoreNearbyButton**（PNG 底图 + 文字，样式在 `store-nearby-button.css`）。
- 图片统一在 `public/images/`，按页面或用途分子目录；英文带文字素材放在 `*/en/`（如 `public/images/home/en/`）。
- 注意文件名**大小写**——Vercel 路径区分大小写。改图片路径后需在本地和预览环境各验证一次。

## 数据与内容

三层分离，不要混用职责：

```text
data/content/                 → 静态 UI 文案（zhContent / enContent，经 siteContent.ts 导出）
data/*Manifest.json           → 可增长列表（菜单、门店、活动）
data/*Translations.en.json    → 英文列表文案覆盖
data/*.ts                     → 读取、筛选、本地化（menu.ts、locations.ts、events.ts）
```

**放在 `data/content/`**

- Navbar / Footer / Hero 文案、按钮、aria 标签、占位页。
- 首页 section、About 营销区块、`enSections` 配置。
- 带嵌入文字的 UI 图片路径（标题图、轮播等）。
- 换行用数组：`headingLines`、`titleLines`、`lines` / `mobileLines`——**不要**只靠 CSS 折行标题。

**放在 manifest + `*.ts`（不要放进 content）**

- 30 道菜品、17 家门店、8 条活动及其完整列表字段。
- **不要**在 `zh.ts` / `en.ts` 里重复维护列表（如 `menu.featuredItems`、`locations.items`、`events.list` 已废弃）。

**英文列表文案**

- 使用 `menuTranslations.en.json`、`locationTranslations.en.json`、`eventsTranslations.en.json`。
- 键为实体 **`id`**（slug），不是 `filename`、`phone` 或 `imageFilename`。
- 不要在组件里为列表文案写 `locale === "en"` 分支；用 `menu.ts` / `locations.ts` / `events.ts` 中的方法。
- **不要**建全站 imageManifest；仅对带文字素材做 locale 路径或翻译文件。

**新增菜品**

1. 图片 → `public/images/menu/items/`
2. `menuManifest.json` 新增条目，须含唯一 `id`（如 `crossing-original-bone-broth`）
3. 英文 → 在 `menuTranslations.en.json` 用同一 `id` 作键

组件通过 `getAllMenuItems`、`getAllLocations`、`getAllEvents` 等取列表——UI 层不要直接 import manifest。

**数据库说明：** 当前 JSON + `*.ts` 是刻意设计。日后接库时，async 查询应集中在 `data/*.ts` 内替换；不必先选定数据库再开发。不要因为未定库而阻塞现有工作。

**已知重复（除非用户要求否则勿动）：** 菜单分类同时存在于 `MENU_CATEGORY_FILTERS`（`menu.ts`）和 `content.categories.items`。

## 动画与 reduced motion

- 本项目允许使用动画增强页面质感，但不能让动画破坏核心交互。
- `prefers-reduced-motion: reduce` 只用于减少或关闭**装饰性动画**，例如 hover 位移、轻微漂浮、背景装饰移动等。
- 不要因为 `prefers-reduced-motion: reduce` 完全禁用核心交互动画。
- 菜单筛选、门店筛选、卡片重排这类动画属于**状态变化提示**，不能直接关闭。
- 对于核心交互动画，在 reduced motion 环境下应改为**更短、更轻**的过渡，而不是完全移除。
- 如果动画用于说明元素从旧位置移动到新位置（例如 FLIP 动画），应保留基本的位置过渡，避免用户看到内容瞬间刷新。
- 不要使用 `useReducedMotion()` 直接让菜单或门店筛选动画 `disabled = true`。
- 不要让 reduced motion 导致页面在正常浏览器环境下「看起来没有动画效果」。
- **装饰动画可以关闭；核心布局变化动画只能减弱。**
- 修改动画前，先确认它属于装饰动画还是核心交互动画。
- 首页 **OrderBanner** / **StoreBanner** 用 `useScrollReveal`（`hooks/useScrollReveal.ts`）做滚动渐显，属装饰性动画；`useMenuFlip` / `useLocationsFlip` 中的 FLIP 属核心交互，遵守上文规则。

## 响应式检查

布局或 CSS 改动后，在 **1440**、**1024**、**768**、**390** px 下验证。

## 默认不在范围内（除非用户明确要求）

- **活动详情页**——目前仅列表；链接可能指向站外或 `#`。
- **Order 页面**——`PlaceholderPage`，未接入真实下单。
- 英文 hero `slider-1` 素材（源站无）；8 周年英文海报仅为 source-only，未写入 manifest。
- 大规模数据层重构（如合并分类来源、数据库迁移）未经用户同意不做。
