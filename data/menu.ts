import menuManifest from "./menuManifest.json";

export type MenuTag =
  | "经典"
  | "微辣"
  | "中辣"
  | "大辣"
  | "人气必点"
  | "招牌推荐"
  | "新品上架"
  | "可做素食"
  | "本店特色";

export type MenuItem = {
  category: string;
  name: string;
  description: string;
  tags: MenuTag[] | string[];
  filename: string;
};

export const TAG_ICON_MAP: Record<string, string> = {
  经典: "/images/menu/decorative/classic.svg",
  微辣: "/images/menu/decorative/mild-spicy.png",
  中辣: "/images/menu/decorative/medium-spicy.png",
  大辣: "/images/menu/decorative/extra-spicy.png",
  人气必点: "/images/menu/decorative/popular.svg",
  招牌推荐: "/images/menu/decorative/recommended.svg",
  新品上架: "/images/menu/decorative/star.svg",
  可做素食: "/images/menu/decorative/yezi.svg",
  本店特色: "/images/menu/decorative/heart108.svg",
};

export type MenuCategoryFilter =
  | "全部"
  | "过桥米线"
  | "特色米线"
  | "凉菜"
  | "小吃"
  | "甜品";

export const MENU_CATEGORY_FILTERS: MenuCategoryFilter[] = [
  "全部",
  "过桥米线",
  "特色米线",
  "凉菜",
  "小吃",
  "甜品",
];

const menuItems = menuManifest as MenuItem[];

export function getMenuImagePath(filename: string): string {
  return `/images/menu/items/${filename}`;
}

export function getAllMenuItems(): MenuItem[] {
  return menuItems;
}

export function filterMenuItems(category: MenuCategoryFilter): MenuItem[] {
  if (category === "全部") {
    return menuItems;
  }

  return menuItems.filter((item) => item.category === category);
}

export function getMenuItemKey(item: MenuItem): string {
  return `${item.category}-${item.name}`;
}

export function getTagIcon(tag: string): string | undefined {
  return TAG_ICON_MAP[tag];
}
