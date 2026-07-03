"use client";

import {
  useLocationsFlip,
  type CardRect,
} from "@/components/locations/useLocationsFlip";
import type { Locale, LocationsContent } from "@/data/siteContent";
import {
  getProvinceDisplayName,
  getProvinceOptions,
  getRegionDisplayName,
  getRegionOptions,
  getLocationKey,
  getLocationName,
  LOCATION_ICONS,
  type Location,
} from "@/data/locations";
import { motion } from "framer-motion";
import type { KeyboardEvent, MouseEvent } from "react";

const LOCATION_EASE = [0.22, 1, 0.36, 1] as const;

const MOVE_TRANSITION = {
  duration: 0.48,
  ease: LOCATION_EASE,
};

const SCALE_TRANSITION = {
  duration: 0.38,
  ease: LOCATION_EASE,
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

type LocationsContentProps = {
  locale: Locale;
  directionsLabel: string;
  filterAria: LocationsContent["filterAria"];
};

function formatTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function openPhoneLink(
  event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>,
  phone: string,
) {
  event.preventDefault();
  event.stopPropagation();
  window.location.href = formatTelHref(phone);
}

function LocationCardContent({
  location,
  locale,
  directionsLabel,
}: {
  location: Location;
  locale: Locale;
  directionsLabel: string;
}) {
  const displayName = getLocationName(location, locale);

  const body = (
    <>
      <div className="location-card-image-wrap">
        <div className="location-card-image-hover-layer">
          <img
            src={location.image}
            alt={displayName}
            className="location-card__image"
            draggable={false}
          />
        </div>
      </div>

      <div className="location-card__body">
        <h3 className="location-card__title">{displayName}</h3>
        <p className="location-card__meta">
          {location.displayProvince} · {location.displayRegion}
        </p>

        <div className="location-card__details">
          {location.address ? (
            <div className="location-info-row">
              <img
                src={LOCATION_ICONS.address}
                alt=""
                aria-hidden="true"
                className="location-info-row__icon"
                draggable={false}
              />
              <span className="location-info-row__text">{location.address}</span>
            </div>
          ) : null}
          {location.phone ? (
            <div className="location-info-row">
              <img
                src={LOCATION_ICONS.phone}
                alt=""
                aria-hidden="true"
                className="location-info-row__icon"
                draggable={false}
              />
              <span
                role="link"
                tabIndex={0}
                className="location-info-row__text location-info-row__phone"
                onClick={(event) => openPhoneLink(event, location.phone)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    openPhoneLink(event, location.phone);
                  }
                }}
              >
                {location.phone}
              </span>
            </div>
          ) : null}
          {location.hours ? (
            <div className="location-info-row">
              <img
                src={LOCATION_ICONS.hours}
                alt=""
                aria-hidden="true"
                className="location-info-row__icon"
                draggable={false}
              />
              <span className="location-info-row__text">{location.hours}</span>
            </div>
          ) : null}
        </div>

        {location.mapLink ? (
          <div className="location-card__cta">
            <a
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="location-card-nav-button"
            >
              {directionsLabel}
            </a>
          </div>
        ) : null}
      </div>
    </>
  );

  return <div className="location-card-link">{body}</div>;
}

function ExitingLocationCard({
  location,
  locale,
  rect,
  directionsLabel,
  disabled,
  onComplete,
}: {
  location: Location;
  locale: Locale;
  rect: CardRect;
  directionsLabel: string;
  disabled: boolean;
  onComplete: () => void;
}) {
  return (
    <div
      className="location-card location-card--exiting"
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
        className="location-card-inner"
        initial={disabled ? false : { scale: 1, opacity: 1 }}
        animate={disabled ? { opacity: 0 } : { scale: 0.75, opacity: 0 }}
        transition={disabled ? { duration: 0 } : CARD_CONTENT_TRANSITION}
        style={{ transformOrigin: "center center" }}
        onAnimationComplete={onComplete}
      >
        <LocationCardContent
          location={location}
          locale={locale}
          directionsLabel={directionsLabel}
        />
      </motion.div>
    </div>
  );
}

export default function LocationsContent({
  locale,
  directionsLabel,
  filterAria,
}: LocationsContentProps) {
  const {
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
  } = useLocationsFlip(locale);

  const provinceOptions = getProvinceOptions(locale);
  const regionOptions = getRegionOptions(activeProvince, allProvinceLabel);

  return (
    <section className="locations-content bg-[#fff4ec] px-[18px] pb-[120px] pt-6 min-[768px]:px-10 min-[768px]:pb-[160px] min-[768px]:pt-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="locations-filters-panel">
          <select
            className="locations-filter-select"
            value={activeProvince}
            aria-label={filterAria.province}
            onChange={(event) => changeProvince(event.target.value)}
          >
            <option value={allProvinceLabel}>{allProvinceLabel}</option>
            {provinceOptions.map((province) => (
              <option key={province} value={province}>
                {getProvinceDisplayName(province)}
              </option>
            ))}
          </select>

          <select
            className="locations-filter-select"
            value={activeRegion}
            aria-label={filterAria.region}
            onChange={(event) => changeRegion(event.target.value)}
          >
            <option value={allRegionLabel}>{allRegionLabel}</option>
            {regionOptions.map((region) => (
              <option key={region} value={region}>
                {getRegionDisplayName(region)}
              </option>
            ))}
          </select>
        </div>

        <div ref={gridRef} className="locations-grid">
          {filteredLocations.map((location) => {
            const key = getLocationKey(location);
            const cardMotion = getCardMotion(key);

            return (
              <motion.article
                key={key}
                ref={registerCardRef(key)}
                className="location-card"
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
                  className="location-card-inner"
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
                  <LocationCardContent
                    location={location}
                    locale={locale}
                    directionsLabel={directionsLabel}
                  />
                </motion.div>
              </motion.article>
            );
          })}

          <div className="locations-exit-layer" aria-hidden="true">
            {exitingCards.map(({ key, location, rect }) => (
              <ExitingLocationCard
                key={key}
                location={location}
                locale={locale}
                rect={rect}
                directionsLabel={directionsLabel}
                disabled={disabled}
                onComplete={() => removeExitingCard(key)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
