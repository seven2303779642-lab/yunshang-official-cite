import eventsManifest from "./eventsManifest.json";

export type EventItem = {
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

export function getEventsBannerImage(): string | undefined {
  return manifest.banner?.desktop ?? manifest.banner?.mobile;
}

export function getAllEvents(): EventItem[] {
  return events;
}

export function getEventKey(event: EventItem): string {
  return `${event.title}-${event.imageFilename ?? event.image}`;
}

export function isEventLinkClickable(link?: string): boolean {
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
