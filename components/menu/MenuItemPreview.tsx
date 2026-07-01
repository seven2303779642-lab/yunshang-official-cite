"use client";

import MenuCategoryGrid from "@/components/menu/MenuCategoryGrid";
import { useMenuFlip, type CardRect } from "@/components/menu/useMenuFlip";
import {
  getMenuImagePath,
  getMenuItemKey,
  getTagIcon,
  type MenuItem,
} from "@/data/menu";
import type { Locale } from "@/data/siteContent";
import { motion } from "framer-motion";

const MENU_ITEM_EASE = [0.22, 1, 0.36, 1] as const;

const MOVE_TRANSITION = {
  duration: 0.48,
  ease: MENU_ITEM_EASE,
};

const SCALE_TRANSITION = {
  duration: 0.38,
  ease: MENU_ITEM_EASE,
};

const OPACITY_TRANSITION = {
  duration: 0.25,
};

const CARD_TRANSITION = {
  x: MOVE_TRANSITION,
  y: MOVE_TRANSITION,
};

const CARD_CONTENT_TRANSITION = {
  scale: SCALE_TRANSITION,
  opacity: OPACITY_TRANSITION,
};

function MenuTagPill({ tag }: { tag: string }) {
  const iconSrc = getTagIcon(tag);

  return (
    <span className="menu-item-tag">
      {iconSrc ? (
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          className="menu-item-tag__icon"
          draggable={false}
        />
      ) : null}
      <span>{tag}</span>
    </span>
  );
}

function MenuItemCardContent({ item }: { item: MenuItem }) {
  return (
    <>
      <div className="menu-item-card__image-wrap">
        <img
          src={getMenuImagePath(item.filename)}
          alt={item.name}
          className="menu-item-card__image"
          draggable={false}
        />
      </div>

      <div className="menu-item-card__body">
        <h3 className="menu-item-card__title">{item.name}</h3>
        <p className="menu-item-card__description">{item.description}</p>

        {item.tags.length > 0 ? (
          <ul className="menu-item-card__tags" aria-label="Tags">
            {item.tags.map((tag) => (
              <li key={tag}>
                <MenuTagPill tag={tag} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

function ExitingMenuCard({
  item,
  rect,
  disabled,
  onComplete,
}: {
  item: MenuItem;
  rect: CardRect;
  disabled: boolean;
  onComplete: () => void;
}) {
  return (
    <div
      className="menu-item-card menu-item-card--exiting"
      style={{
        position: "absolute",
        left: rect.x,
        top: rect.y,
        width: rect.width,
        height: rect.height,
        transformOrigin: "center center",
      }}
    >
      <motion.div
        className="menu-item-card-inner"
        initial={disabled ? false : { scale: 1, opacity: 1 }}
        animate={disabled ? { opacity: 0 } : { scale: 0.75, opacity: 0 }}
        transition={disabled ? { duration: 0 } : CARD_CONTENT_TRANSITION}
        style={{ transformOrigin: "center center" }}
        onAnimationComplete={onComplete}
      >
        <MenuItemCardContent item={item} />
      </motion.div>
    </div>
  );
}

type MenuItemPreviewProps = {
  categoryLabels: string[];
  locale: Locale;
};

export default function MenuItemPreview({
  categoryLabels,
  locale,
}: MenuItemPreviewProps) {
  const {
    activeCategory,
    changeCategory,
    filteredItems,
    gridRef,
    registerCardRef,
    getCardMotion,
    exitingCards,
    removeExitingCard,
    disabled,
    isInstantFlip,
  } = useMenuFlip(locale);

  return (
    <>
      <MenuCategoryGrid
        activeCategory={activeCategory}
        categoryLabels={categoryLabels}
        onCategoryChange={changeCategory}
      />

      <section className="menu-items bg-[#fff4ec] px-6 pb-[160px] pt-2 min-[768px]:px-10 min-[768px]:pt-4">
        <div className="mx-auto max-w-[1400px]">
          <div ref={gridRef} className="menu-item-grid">
            {filteredItems.map((item) => {
              const key = getMenuItemKey(item);
              const cardMotion = getCardMotion(key);

              return (
                <motion.article
                  key={key}
                  ref={registerCardRef(key)}
                  className="menu-item-card"
                  initial={false}
                  animate={{ x: cardMotion.x, y: cardMotion.y }}
                  transition={
                    disabled || isInstantFlip
                      ? { duration: 0 }
                      : CARD_TRANSITION
                  }
                  style={{ transformOrigin: "center center" }}
                >
                  <motion.div
                    className="menu-item-card-inner"
                    initial={false}
                    animate={{
                      scale: cardMotion.scale,
                      opacity: cardMotion.opacity,
                    }}
                    transition={
                      disabled || isInstantFlip
                        ? { duration: 0 }
                        : CARD_CONTENT_TRANSITION
                    }
                    style={{ transformOrigin: "center center" }}
                  >
                    <MenuItemCardContent item={item} />
                  </motion.div>
                </motion.article>
              );
            })}

            <div className="menu-item-exit-layer" aria-hidden="true">
              {exitingCards.map(({ key, item, rect }) => (
                <ExitingMenuCard
                  key={key}
                  item={item}
                  rect={rect}
                  disabled={disabled}
                  onComplete={() => removeExitingCard(key)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
