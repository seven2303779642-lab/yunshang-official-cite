"use client";

import {
  filterLocations,
  getAllProvinceLabel,
  getAllRegionLabel,
  getLocationKey,
  type Location,
} from "@/data/locations";
import type { Locale } from "@/data/siteContent";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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
  location: Location;
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

export function useLocationsFlip(locale: Locale) {
  const disabled = false;
  const allProvinceLabel = getAllProvinceLabel(locale);
  const allRegionLabel = getAllRegionLabel(locale);

  const [activeProvince, setActiveProvince] = useState(allProvinceLabel);
  const [activeRegion, setActiveRegion] = useState(allRegionLabel);
  const [cardMotions, setCardMotions] = useState<Map<string, CardMotion>>(
    new Map(),
  );
  const [exitingCards, setExitingCards] = useState<ExitingCard[]>([]);
  const [isInstantFlip, setIsInstantFlip] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());
  const flipSessionRef = useRef<FlipSession | null>(null);
  const resizePrevRectsRef = useRef<Map<string, CardRect> | null>(null);
  const isFirstFilterRenderRef = useRef(true);

  const filteredLocations = filterLocations(
    activeProvince,
    activeRegion,
    allProvinceLabel,
    allRegionLabel,
  );

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

  const applyFilterChange = useCallback(
    (nextProvince: string, nextRegion: string) => {
      if (nextProvince === activeProvince && nextRegion === activeRegion) {
        return;
      }

      if (disabled) {
        setExitingCards([]);
        setCardMotions(new Map());
        setActiveProvince(nextProvince);
        setActiveRegion(nextRegion);
        return;
      }

      const grid = gridRef.current;
      if (!grid) {
        setActiveProvince(nextProvince);
        setActiveRegion(nextRegion);
        return;
      }

      const prevLocations = filterLocations(
        activeProvince,
        activeRegion,
        allProvinceLabel,
        allRegionLabel,
      );
      const nextLocations = filterLocations(
        nextProvince,
        nextRegion,
        allProvinceLabel,
        allRegionLabel,
      );
      const prevRects = measureGridCards(grid, cardRefs.current);

      const nextKeys = new Set(nextLocations.map(getLocationKey));
      const nextKeyList = nextLocations.map(getLocationKey);

      const exiting = prevLocations
        .filter((location) => !nextKeys.has(getLocationKey(location)))
        .map((location) => {
          const key = getLocationKey(location);
          const rect = prevRects.get(key);
          return rect ? { key, location, rect } : null;
        })
        .filter((entry): entry is ExitingCard => entry !== null);

      flipSessionRef.current = {
        prevRects,
        nextKeys: nextKeyList,
      };

      setExitingCards(exiting);
      setActiveProvince(nextProvince);
      setActiveRegion(nextRegion);
    },
    [activeProvince, activeRegion, allProvinceLabel, allRegionLabel, disabled],
  );

  const changeProvince = useCallback(
    (nextProvince: string) => {
      applyFilterChange(nextProvince, allRegionLabel);
    },
    [allRegionLabel, applyFilterChange],
  );

  const changeRegion = useCallback(
    (nextRegion: string) => {
      applyFilterChange(activeProvince, nextRegion);
    },
    [activeProvince, applyFilterChange],
  );

  const removeExitingCard = useCallback((key: string) => {
    setExitingCards((current) => current.filter((card) => card.key !== key));
  }, []);

  useLayoutEffect(() => {
    if (isFirstFilterRenderRef.current) {
      isFirstFilterRenderRef.current = false;
      return;
    }

    const session = flipSessionRef.current;
    if (!session) return;

    flipSessionRef.current = null;
    runFlipToRest(session);
  }, [activeProvince, activeRegion, runFlipToRest]);

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
          nextKeys: filterLocations(
            activeProvince,
            activeRegion,
            allProvinceLabel,
            allRegionLabel,
          ).map(getLocationKey),
        });
      }, RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, [
    activeProvince,
    activeRegion,
    allProvinceLabel,
    allRegionLabel,
    disabled,
    runFlipToRest,
  ]);

  const getCardMotion = useCallback(
    (key: string): CardMotion => cardMotions.get(key) ?? REST_MOTION,
    [cardMotions],
  );

  return {
    activeProvince,
    activeRegion,
    allProvinceLabel,
    allRegionLabel,
    changeProvince,
    changeRegion,
    filteredLocations,
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
