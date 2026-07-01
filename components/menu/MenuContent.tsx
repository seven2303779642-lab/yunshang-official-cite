"use client";

import MenuItemPreview from "@/components/menu/MenuItemPreview";
import type { Locale, MenuContent as MenuContentType } from "@/data/siteContent";

type MenuContentProps = {
  content: MenuContentType;
  locale: Locale;
};

export default function MenuContent({ content, locale }: MenuContentProps) {
  return (
    <MenuItemPreview
      categoryLabels={content.categories.items}
      locale={locale}
    />
  );
}
