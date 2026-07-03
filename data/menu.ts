import menuManifest from "./menuManifest.json";
import menuTranslationsEn from "./menuTranslations.en.json";
import type { Locale } from "./content/types";

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
  id: string;
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
  Classic: "/images/menu/decorative/classic.svg",
  "Mild Spicy": "/images/menu/decorative/mild-spicy.png",
  "Medium Spicy": "/images/menu/decorative/medium-spicy.png",
  Hot: "/images/menu/decorative/extra-spicy.png",
  "Must Try": "/images/menu/decorative/popular.svg",
  Signature: "/images/menu/decorative/recommended.svg",
  New: "/images/menu/decorative/star.svg",
  "Vegetarian Option Available": "/images/menu/decorative/yezi.svg",
  "House Specialty": "/images/menu/decorative/heart108.svg",
};

type MenuTranslationEn = {
  name: string;
  description: string;
  tags: string[];
};

const menuTranslationMap = menuTranslationsEn as Record<
  string,
  MenuTranslationEn
>;

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

export function localizeMenuItem(item: MenuItem, locale: Locale): MenuItem {
  if (locale !== "en") {
    return item;
  }

  const translation = menuTranslationMap[item.id];
  if (!translation) {
    return item;
  }

  return {
    ...item,
    name: translation.name,
    description: translation.description,
    tags: translation.tags,
  };
}

export function getMenuImagePath(filename: string): string {
  return `/images/menu/items/${filename}`;
}

export function getAllMenuItems(locale: Locale = "zh"): MenuItem[] {
  return menuItems.map((item) => localizeMenuItem(item, locale));
}

export function filterMenuItems(
  category: MenuCategoryFilter,
  locale: Locale = "zh",
): MenuItem[] {
  const items = getAllMenuItems(locale);

  if (category === "全部") {
    return items;
  }

  return items.filter((item) => item.category === category);
}

export function getMenuItemKey(item: MenuItem): string {
  return item.id;
}

export function getTagIcon(tag: string): string | undefined {
  return TAG_ICON_MAP[tag];
}
