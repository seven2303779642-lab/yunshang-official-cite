import eventsManifest from "./eventsManifest.json";
import eventsTranslationsEn from "./eventsTranslations.en.json";
import type { Locale } from "./content/types";

export type EventItem = {
  id: string;
  title: string;
  date?: string;
  subtitle?: string;
  description?: string;
  paragraphs?: string[];
  compactLinesTitle?: string;
  compactLines?: string[];
  participatingStoresTitle?: string;
  participatingStores?: string[];
  note?: string;
  details?: string[];
  bullets?: string[];
  buttonText?: string;
  link?: string;
  image: string;
  imageEn?: string;
  imageFilename?: string;
};

type EventsManifest = {
  banner?: {
    desktop?: string;
    mobile?: string;
  };
  events: EventItem[];
};

const manifest = eventsManifest as EventsManifest;
const events = manifest.events;

type EventTranslationEn = {
  title: string;
  paragraphs?: string[];
  compactLinesTitle?: string;
  compactLines?: string[];
  participatingStoresTitle?: string;
  participatingStores?: string[];
  note?: string;
};

const eventTranslationMap = eventsTranslationsEn as Record<
  string,
  EventTranslationEn
>;

function getEventTranslation(event: EventItem): EventTranslationEn | undefined {
  return eventTranslationMap[event.id];
}

export function getEventTitle(event: EventItem, locale: Locale): string {
  if (locale === "en") {
    const translation = getEventTranslation(event);
    if (translation?.title) {
      return translation.title;
    }
  }

  return event.title;
}

export function getEventParagraphs(
  event: EventItem,
  locale: Locale,
): string[] {
  if (locale === "en") {
    const translation = getEventTranslation(event);
    if (translation?.paragraphs?.length) {
      return translation.paragraphs;
    }
  }

  if (event.paragraphs && event.paragraphs.length > 0) {
    return event.paragraphs;
  }

  return getDescriptionParagraphs(event.description);
}

export function getEventCompactLinesTitle(
  event: EventItem,
  locale: Locale,
): string | undefined {
  if (locale === "en") {
    const translation = getEventTranslation(event);
    if (translation?.compactLinesTitle) {
      return translation.compactLinesTitle;
    }
  }

  return event.compactLinesTitle;
}

export function getEventCompactLines(
  event: EventItem,
  locale: Locale,
): string[] | undefined {
  if (locale === "en") {
    const translation = getEventTranslation(event);
    if (translation?.compactLines?.length) {
      return translation.compactLines;
    }
  }

  return event.compactLines;
}

export function getEventParticipatingStoresTitle(
  event: EventItem,
  locale: Locale,
): string | undefined {
  if (locale === "en") {
    const translation = getEventTranslation(event);
    if (translation?.participatingStoresTitle) {
      return translation.participatingStoresTitle;
    }
  }

  return event.participatingStoresTitle;
}

export function getEventParticipatingStores(
  event: EventItem,
  locale: Locale,
): string[] | undefined {
  if (locale === "en") {
    const translation = getEventTranslation(event);
    if (translation?.participatingStores?.length) {
      return translation.participatingStores;
    }
  }

  return event.participatingStores;
}

export function getEventNote(event: EventItem, locale: Locale): string | undefined {
  if (locale === "en") {
    const translation = getEventTranslation(event);
    if (translation?.note) {
      return translation.note;
    }
  }

  return event.note;
}

export function getEventsBannerImage(): string | undefined {
  return manifest.banner?.desktop ?? manifest.banner?.mobile;
}

export function getAllEvents(): EventItem[] {
  return events;
}

export function getEventImage(event: EventItem, locale: Locale): string {
  if (locale === "en" && event.imageEn) {
    return event.imageEn;
  }

  return event.image;
}

export function getEventKey(event: EventItem): string {
  return event.id;
}

export function isEventLinkClickable(link?: string): boolean {
  // Reserved for future event detail pages; list UI is display-only (no card links/buttons).
  const trimmed = link?.trim();
  return Boolean(trimmed && trimmed !== "#");
}

export function getDescriptionParagraphs(description?: string): string[] {
  if (!description) return [];

  return description
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
