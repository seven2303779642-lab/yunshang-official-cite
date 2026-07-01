"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  filterMenuItems,
  getMenuItemKey,
  type MenuCategoryFilter,
  type MenuItem,
} from "@/data/menu";

export type CardRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type CardMotion = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
};

export type ExitingCard = {
  key: string;
  item: MenuItem;
  rect: CardRect;
};

const REST_MOTION: CardMotion = { x: 0, y: 0, scale: 1, opacity: 1 };
const ENTER_START: CardMotion = { x: 0, y: 0, scale: 0.75, opacity: 0 };
const EXIT_END: CardMotion = { x: 0, y: 0, scale: 0.75, opacity: 0 };

const RESIZE_DEBOUNCE_MS = 200;

function measureRelative(el: HTMLElement, grid: HTMLElement): CardRect {
  const gridRect = grid.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  return {
    x: elRect.left - gridRect.left,
    y: elRect.top - gridRect.top,
    width: elRect.width,
    height: elRect.height,
  };
}

function measureGridCards(
  grid: HTMLElement,
  cardRefs: Map<string, HTMLElement>,
): Map<string, CardRect> {
  const rects = new Map<string, CardRect>();

  cardRefs.forEach((el, key) => {
    if (el.isConnected && grid.contains(el)) {
      rects.set(key, measureRelative(el, grid));
    }
  });

  return rects;
}

type FlipSession = {
  prevRects: Map<string, CardRect>;
  nextKeys: string[];
};

export function useMenuFlip() {
  const disabled = false;

  const [activeCategory, setActiveCategory] =
    useState<MenuCategoryFilter>("全部");
  const [cardMotions, setCardMotions] = useState<Map<string, CardMotion>>(
    new Map(),
  );
  const [exitingCards, setExitingCards] = useState<ExitingCard[]>([]);
  const [isInstantFlip, setIsInstantFlip] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());
  const flipSessionRef = useRef<FlipSession | null>(null);
  const resizePrevRectsRef = useRef<Map<string, CardRect> | null>(null);
  const isFirstCategoryRenderRef = useRef(true);

  const filteredItems = filterMenuItems(activeCategory);

  const registerCardRef = useCallback(
    (key: string) => (node: HTMLElement | null) => {
      if (node) {
        cardRefs.current.set(key, node);
      } else {
        cardRefs.current.delete(key);
      }
    },
    [],
  );

  const runFlipToRest = useCallback((session: FlipSession) => {
    const grid = gridRef.current;
    if (!grid || disabled) return;

    const nextRects = measureGridCards(grid, cardRefs.current);
    const inverted = new Map<string, CardMotion>();

    for (const key of session.nextKeys) {
      const nextRect = nextRects.get(key);
      if (!nextRect) continue;

      const prevRect = session.prevRects.get(key);
      if (prevRect) {
        inverted.set(key, {
          x: prevRect.x - nextRect.x,
          y: prevRect.y - nextRect.y,
          scale: 1,
          opacity: 1,
        });
      } else {
        inverted.set(key, ENTER_START);
      }
    }

    setIsInstantFlip(true);
    setCardMotions(inverted);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsInstantFlip(false);
        const rest = new Map<string, CardMotion>();
        for (const key of session.nextKeys) {
          rest.set(key, REST_MOTION);
        }
        setCardMotions(rest);
      });
    });
  }, [disabled]);

  const changeCategory = useCallback(
    (nextCategory: MenuCategoryFilter) => {
      if (nextCategory === activeCategory) return;

      if (disabled) {
        setExitingCards([]);
        setCardMotions(new Map());
        setActiveCategory(nextCategory);
        return;
      }

      const grid = gridRef.current;
      if (!grid) {
        setActiveCategory(nextCategory);
        return;
      }

      const prevItems = filterMenuItems(activeCategory);
      const nextItems = filterMenuItems(nextCategory);
      const prevRects = measureGridCards(grid, cardRefs.current);

      const nextKeys = new Set(nextItems.map(getMenuItemKey));
      const nextKeyList = nextItems.map(getMenuItemKey);

      const exiting = prevItems
        .filter((item) => !nextKeys.has(getMenuItemKey(item)))
        .map((item) => {
          const key = getMenuItemKey(item);
          const rect = prevRects.get(key);
          return rect ? { key, item, rect } : null;
        })
        .filter((entry): entry is ExitingCard => entry !== null);

      flipSessionRef.current = {
        prevRects,
        nextKeys: nextKeyList,
      };

      setExitingCards(exiting);
      setActiveCategory(nextCategory);
    },
    [activeCategory, disabled],
  );

  const removeExitingCard = useCallback((key: string) => {
    setExitingCards((current) => current.filter((card) => card.key !== key));
  }, []);

  useLayoutEffect(() => {
    if (isFirstCategoryRenderRef.current) {
      isFirstCategoryRenderRef.current = false;
      return;
    }

    const session = flipSessionRef.current;
    if (!session) return;

    flipSessionRef.current = null;
    runFlipToRest(session);
  }, [activeCategory, runFlipToRest]);

  useEffect(() => {
    if (disabled) return;

    let timeout: ReturnType<typeof setTimeout>;

    const onResize = () => {
      const grid = gridRef.current;
      if (grid && !resizePrevRectsRef.current) {
        resizePrevRectsRef.current = measureGridCards(grid, cardRefs.current);
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const prevRects =
          resizePrevRectsRef.current ??
          measureGridCards(gridRef.current!, cardRefs.current);
        resizePrevRectsRef.current = null;

        if (!gridRef.current) return;

        runFlipToRest({
          prevRects,
          nextKeys: filterMenuItems(activeCategory).map(getMenuItemKey),
        });
      }, RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, [activeCategory, disabled, runFlipToRest]);

  const getCardMotion = useCallback(
    (key: string): CardMotion => cardMotions.get(key) ?? REST_MOTION,
    [cardMotions],
  );

  return {
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
    exitTarget: EXIT_END,
  };
}
