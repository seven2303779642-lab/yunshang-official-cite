export type Locale = "zh" | "en";

export type FeatureCardContent = {
  title: string;
  imageAlt: string;
  iconAlt: string;
  lines: string[];
  nowrap?: boolean;
  mobileTitleLines?: string[];
};

export type MenuShowcaseItemContent = {
  title: string;
  text: string;
};

export type PlaceholderPageContent = {
  title: string;
  subtitle: string;
};

export type FooterLinkContent = {
  label: string;
  href: string;
};

export type FooterSocialContent = {
  label: string;
  ariaLabel: string;
};

export type NavContent = {
  logoAlt: string;
  home: string;
  about: string;
  menu: string;
  stores: string;
  events: string;
  languageSwitch: string;
  orderOnline: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
  homeAriaLabel: string;
  languageSwitchAriaLabel: string;
  homeHref: string;
  languageHref: string;
  orderHref: string;
};

export type FooterContent = {
  logoAlt: string;
  homeAriaLabel: string;
  homeHref: string;
  linksLeft: FooterLinkContent[];
  linksRight: FooterLinkContent[];
  social: FooterSocialContent[];
  wechatSupport: string;
  wechatQrAlt: string;
  copyright: string;
  copyrightMobile: string;
};

export type MenuContent = {
  hero: {
    title: string;
    subtitle: string;
  };
  categories: {
    title: string;
    items: string[];
  };
  featuredItems: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    items: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      badges: string[];
    }[];
  };
};

export type LocationsContent = {
  hero: {
    title: string;
    subtitle: string;
  };
  filterAria: {
    province: string;
    region: string;
  };
  filters: {
    title: string;
    items: string[];
  };
  locations: {
    title: string;
    subtitle: string;
    directionsLabel: string;
    items: {
      name: string;
      province: string;
      region: string;
      address: string;
      phone: string;
      hours: string;
      image: string;
      imageAlt: string;
      directionsHref: string;
    }[];
  };
};

export type EventsContent = {
  hero: {
    title: string;
    subtitle: string;
    desktopImage?: string;
    mobileImage?: string;
    imageAlt?: string;
  };
  list: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    items: {
      title: string;
      date: string;
      excerpt: string;
      image: string;
      imageAlt: string;
      href: string;
      tag?: string;
    }[];
  };
};

export type AboutContent = {
  hero: {
    desktopImage: string;
    mobileImage: string;
    alt: string;
  };
  intro: {
    icon: string;
    image: string;
    imageAlt: string;
    paragraphs: string[];
  };
  values: {
    title: string;
    items: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    }[];
  };
  popularDishes: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    items: {
      title: string;
      tagline: string;
      image: string;
      imageAlt: string;
      tagImage: string;
    }[];
  };
  stores: {
    title: string;
    subtitle: string;
    mapImage: string;
    mapAlt: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export type SiteContent = {
  locale: Locale;
  nav: NavContent;
  home: {
    heroSlider: {
      slides: {
        desktopImage: string;
        mobileImage?: string;
        alt: string;
      }[];
      slideAlts: string[];
      slideIndicatorAriaLabelTemplate: string;
    };
    aboutIntro: {
      headingLines: [string, string];
      body: string;
      titleImage: string;
      titleImageAlt: string;
      aboutButton: string;
      aboutButtonHref: string;
      boneSoupImageAlt: string;
      playVideoAriaLabel: string;
      videoDialogAriaLabel: string;
      closeVideoAriaLabel: string;
      videoTitle: string;
    };
    featureCards: {
      features: FeatureCardContent[];
    };
    storeBanner: {
      imageAlt: string;
      title: string;
      subtitle: string;
      storesButton: string;
      storesButtonHref: string;
    };
    menuShowcase: {
      leftLabelAlt: string;
      rightLabelAlt: string;
      assets: {
        leftLabel: string;
        rightLabel: string;
        items: {
          tag: string;
          image: string;
          titleImage?: string;
        }[];
      };
      items: MenuShowcaseItemContent[];
      viewMenuButton: string;
      viewMenuHref: string;
    };
    orderBanner: {
      imageAlt: string;
      titleImage?: string;
      titleImageAlt?: string;
      headingLines: [string, string];
      pickupButton: string;
      deliveryButton: string;
      orderButtonHref: string;
    };
  };
  about: AboutContent;
  menu: MenuContent;
  locations: LocationsContent;
  events: EventsContent;
  footer: FooterContent;
  placeholderPages: {
    comingSoon: string;
    about: PlaceholderPageContent;
    menu: PlaceholderPageContent;
    locations: PlaceholderPageContent;
    events: PlaceholderPageContent;
    order: PlaceholderPageContent;
  };
};
