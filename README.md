# 云尚米线官网重构项目

本项目用于重构云尚米线官网页面，基于 **Next.js App Router** 开发，当前已完成首页、关于页面、菜单页面以及部分活动页面的数据与素材整理。项目采用组件化结构、轻量级多语言内容层与 manifest 数据驱动方式，方便后续继续扩展页面内容与维护素材。

## 项目状态

当前版本重点完成了以下内容：

- 首页主体视觉与响应式布局
- Navbar / Footer 公共组件
- 中英文路由骨架与内容数据层
- About 页面主要视觉模块
- Menu 页面数据驱动重构与筛选动画
- Events 页面素材与数据准备
- 图片素材目录整理
- AI Agent 开发规范补充

当前仍需继续处理：

- Events 页面组件接入 `eventsManifest.json`
- Stores 页面内容与数据进一步整理
- About / Menu / Stores / Events 的细节视觉校对
- 英文版部分素材与链接校对
- Order 页面目前仍为占位页

## 技术栈

- Next.js 15
- React
- TypeScript
- CSS / 全局样式文件
- Framer Motion
- Vercel 部署

## 目录结构概览

```text
app/                    页面路由
components/             页面组件与公共组件
components/home/        首页相关组件
components/about/       关于页面组件
components/menu/        菜单页面组件
components/layout/      Navbar / Footer 等布局组件
components/ui/          通用 UI 组件
data/                   页面文案与 manifest 数据
public/images/          图片素材
AGENTS.md               AI Agent 开发规范
```



## 内容与数据管理

项目目前采用“静态文案 + 列表数据分离”的维护方式。

### `data/siteContent.ts`

用于存放页面静态文案，例如：

- Hero 标题
- 按钮文字
- Navbar / Footer 文案
- 中英文页面基础内容

不建议把大量可增长列表数据全部塞入 `siteContent.ts`。

### `data/menuManifest.json`

用于管理菜单菜品数据。菜单页面通过该文件自动生成菜品卡片。

每个菜品包含：

- 分类
- 菜名
- 描述
- 标签
- 图片文件名

后续添加菜品时，只需要：

1. 将图片放入 `public/images/menu/items/`
2. 在 `data/menuManifest.json` 中新增对应数据

无需在组件中手动写死 card。

### `data/eventsManifest.json`

用于管理活动页面素材与文案关系。目前已完成活动图片与 manifest 准备，页面组件仍待接入。

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



## 部署说明

项目可通过 Vercel 部署。GitHub 仓库连接 Vercel 后，每次 push 到对应分支，测试链接会自动更新。

注意：Vercel 对文件路径大小写敏感，图片文件名、后缀、中文字符与代码引用必须完全一致。

## 开发注意事项

- 修改页面时尽量只改对应页面组件，不要大范围重构无关页面。
- 首页、About、Menu、Events、Stores 组件应保持边界清晰。
- 图片统一放在 `public/images/` 下，并按页面或用途分类。
- 可增长内容优先使用 manifest 管理，避免在组件中硬编码。
- 修改图片路径后必须检查本地与 Vercel 是否都能正常显示。
- 响应式重点检查：1440px、1024px、768px、390px。
- 执行较大改动前，建议先确认当前 `git status`，避免多个 AI 工具同时修改造成冲突。



## 工作记录



### 1. Wireframe 初步调整

用时：1 小时

- 完成页面 wireframe 的初步整理与调整。



### 2. Navbar / Footer 组件搭建

用时：4 小时

- 搭建接近可交付状态的 `Navbar` 与 `Footer` 组件。
- 完成桌面端与移动端响应式布局。



### 3. 首页主体实现与视觉精修

用时：7 小时

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

用时：1 小时

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

用时：0.5 小时

- 补充 `AGENTS.md`。
- 明确 App Router、最小改动、页面边界、响应式断点等开发规则。



### 9. About 页面精修

用时：4 小时

- 调整 About 页面以下模块布局与样式：
  - Hero
  - Intro
  - ValueGrid
  - PopularDishes
  - Stores
- 新增 `AboutGallery` 图片轮播。
- 补充 About 页面图片素材与 CSS。



### 10. Menu 页面重构

用时：6 小时

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

用时：1 小时

- 新增 `eventsManifest.json`。
- 下载并整理活动图片。
- 页面组件暂未接入 manifest。



### 12. 共用组件调整

用时：0.5 小时

- `BrandButton` 新增 `wide` 变体。
- `StoreBanner` 改用 `BrandButton`。
- 删除 `StoresButton`。
- `npm run build` 通过。
- 备注：本轮改动尚未 commit。



## 当前累计工时

约 28.5 小时。