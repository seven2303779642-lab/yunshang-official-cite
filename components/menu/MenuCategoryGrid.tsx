"use client";

import { motion } from "framer-motion";
import type { MenuCategoryFilter } from "@/data/menu";
import { MENU_CATEGORY_FILTERS } from "@/data/menu";

type MenuCategoryGridProps = {
  activeCategory: MenuCategoryFilter;
  categoryLabels: string[];
  onCategoryChange: (category: MenuCategoryFilter) => void;
};

export default function MenuCategoryGrid({
  activeCategory,
  categoryLabels,
  onCategoryChange,
}: MenuCategoryGridProps) {
  return (
    <section className="menu-categories bg-[#fff4ec] px-6 py-7 min-[768px]:px-10 min-[768px]:py-8">
      <div className="mx-auto max-w-[1400px] text-center">
        <div className="menu-category-scroll">
          <div className="menu-category-buttons">
            {MENU_CATEGORY_FILTERS.map((category, index) => (
              <motion.button
                key={category}
                type="button"
                className={
                  category === activeCategory
                    ? "menu-category-btn menu-category-btn--active"
                    : "menu-category-btn"
                }
                aria-pressed={category === activeCategory}
                onClick={() => onCategoryChange(category)}
                whileTap={{ scale: 0.96 }}
              >
                {categoryLabels[index] ?? category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
