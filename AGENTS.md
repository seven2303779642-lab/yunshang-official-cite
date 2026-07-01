# Agent instructions — yunshang-homepage

## Stack

- Next.js 15 project using the **App Router** (`app/`).
- Do **not** use the Pages Router (`pages/`).
- This version may differ from older Next.js docs — check `node_modules/next/dist/docs/` when unsure.

## Before you edit

1. Read the existing project structure and nearby code first.
2. Prefer **minimal, targeted changes** — do not modify unrelated pages or components.
3. Do **not** perform large refactors without asking the user.
4. Do **not** browse external websites unless explicitly requested.
5. For a specific CSS or layout fix, fix that issue directly — do not run a broad codebase investigation.

## Reuse existing patterns

- Reuse existing components, CSS classes, fonts, and button styles before creating new ones.
- **Navbar** and **Footer** are shared layout components (`components/layout/`).
- Images live under `/public/images`. Check file name **casing** carefully — Vercel deployment is case-sensitive.

## Page boundaries

- Home page sections (`components/home/`) and About page sections (`components/about/`) stay **separate**.
- When editing the About page, only change `components/about/` and shared CSS that is strictly necessary (e.g. `app/globals.css`).

## 动画与 reduced motion 规范

- 本项目允许使用动画增强页面质感，但不能让动画破坏核心交互。
- `prefers-reduced-motion: reduce` 只用于减少或关闭**装饰性动画**，例如 hover 位移、轻微漂浮、背景装饰移动等。
- 不要因为 `prefers-reduced-motion: reduce` 完全禁用核心交互动画。
- 菜单筛选、门店筛选、卡片重排这类动画属于**状态变化提示**，不能直接关闭。
- 对于核心交互动画，在 reduced motion 环境下应改为**更短、更轻**的过渡，而不是完全移除。
- 如果动画用于说明元素从旧位置移动到新位置（例如 FLIP 动画），应保留基本的位置过渡，避免用户看到内容瞬间刷新。
- 不要使用 `useReducedMotion()` 直接让菜单或门店筛选动画 `disabled = true`。
- 不要让 reduced motion 导致页面在正常浏览器环境下“看起来没有动画效果”。
- **装饰动画可以关闭；核心布局变化动画只能减弱。**
- 修改动画前，先确认它属于装饰动画还是核心交互动画。

## Responsive checks

After layout or CSS changes, verify at **1440**, **1024**, **768**, and **390** px.
