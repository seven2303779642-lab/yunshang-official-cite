import locationsManifest from "./locationsManifest.json";
import locationIconManifest from "./locationIconManifest.json";
import locationTranslationsEn from "./locationTranslations.en.json";
import type { Locale } from "./content/types";

export type Location = {
  province: string;
  displayProvince: string;
  region: string;
  displayRegion: string;
  name: string;
  address: string;
  postalCode?: string;
  phone: string;
  hours: string;
  mapLink: string;
  orderLink?: string;
  pickupLink?: string;
  deliveryLink?: string;
  status?: string;
  image: string;
  imageFilename?: string;
};

export const LOCATION_ICONS = locationIconManifest as {
  address: string;
  phone: string;
  hours: string;
};

const locations = locationsManifest as Location[];
const locationNameMap = locationTranslationsEn as Record<string, string>;

export function getLocationName(location: Location, locale: Locale): string {
  if (locale !== "en") {
    return location.name;
  }

  return locationNameMap[location.phone] ?? location.name;
}

export function getAllProvinceLabel(locale: Locale): string {
  return locale === "zh" ? "全部" : "All";
}

export function getAllRegionLabel(locale: Locale): string {
  return locale === "zh" ? "全部" : "All";
}

export function getAllLocations(): Location[] {
  return locations;
}

export function getLocationKey(location: Location): string {
  return `${location.province}-${location.region}-${location.name}`;
}

export function getProvinceOptions(locale: Locale): Location["province"][] {
  const seen = new Set<string>();
  const options: string[] = [];

  for (const location of locations) {
    if (!seen.has(location.province)) {
      seen.add(location.province);
      options.push(location.province);
    }
  }

  return options.sort();
}

export function getRegionOptions(
  activeProvince: string,
  allProvinceLabel: string,
): string[] {
  const pool =
    activeProvince === allProvinceLabel
      ? locations
      : locations.filter((location) => location.province === activeProvince);

  const seen = new Set<string>();
  const options: string[] = [];

  for (const location of pool) {
    if (!seen.has(location.region)) {
      seen.add(location.region);
      options.push(location.region);
    }
  }

  return options.sort();
}

export function getProvinceDisplayName(province: string): string {
  return (
    locations.find((location) => location.province === province)
      ?.displayProvince ?? province
  );
}

export function getRegionDisplayName(region: string): string {
  return (
    locations.find((location) => location.region === region)?.displayRegion ??
    region
  );
}

export function filterLocations(
  activeProvince: string,
  activeRegion: string,
  allProvinceLabel: string,
  allRegionLabel: string,
): Location[] {
  return locations.filter((location) => {
    if (
      activeProvince !== allProvinceLabel &&
      location.province !== activeProvince
    ) {
      return false;
    }

    if (activeRegion !== allRegionLabel && location.region !== activeRegion) {
      return false;
    }

    return true;
  });
}
