export type Locale = "zh" | "en";

export type FeatureCardContent = {
  title: string;
  imageAlt: string;
  iconAlt: string;
  lines: string[];
  mobileLines?: string[];
  nowrap?: boolean;
  /** Multi-line title at all breakpoints (e.g. English home cards). */
  titleLines?: string[];
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

export type OrderPopupContent = {
  title: string;
  closeAriaLabel: string;
  pickupButton: string;
  deliveryButton: string;
};

export type WelcomeContent = {
  logoImage: string;
  logoAlt: string;
  backgroundImage: string;
  cloudTopLeft: string;
  cloudBottomRight: string;
  whiteIcon: string;
  chineseButton: string;
  englishButton: string;
  chineseHref: string;
  englishHref: string;
};

export type FooterLinkContent = {
  label: string;
  href: string;
  opensOrderPopup?: boolean;
};

export type FooterSocialContent = {
  label: string;
  ariaLabel: string;
};

export type NavContent = {
  logoImage: string;
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
  directionsLabel: string;
};

export type EventsContent = {
  hero: {
    title: string;
    subtitle?: string;
    desktopImage?: string;
    mobileImage?: string;
    imageAlt?: string;
  };
};

export type AboutEnToppingsContent = {
  title: string;
  titleIcon: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
};

export type AboutEnBridgeContent = {
  titleLines: string[];
  paragraphs: string[];
  decorationImage: string;
  signOverlayImage: string;
  cloudBackgroundImage: string;
  illustrationImage: string;
  illustrationAlt: string;
};

export type AboutEnVideoContent = {
  src: string;
};

export type AboutEnSectionsContent = {
  toppings: AboutEnToppingsContent;
  bridge: AboutEnBridgeContent;
  video: AboutEnVideoContent;
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
    title?: string;
  };
  enSections?: AboutEnSectionsContent;
  values: {
    title: string;
    items: {
      title: string;
      titleLines?: string[];
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
      titleLines?: string[];
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
      titleLines?: string[];
      mobileTitleLines?: string[];
      headingLines: string[];
      mobileHeadingLines?: string[];
      pickupButton: string;
      deliveryButton: string;
      pickupButtonHref: string;
      deliveryButtonHref: string;
    };
  };
  about: AboutContent;
  menu: MenuContent;
  locations: LocationsContent;
  events: EventsContent;
  footer: FooterContent;
  orderPopup: OrderPopupContent;
  placeholderPages: {
    comingSoon: string;
    about: PlaceholderPageContent;
    menu: PlaceholderPageContent;
    locations: PlaceholderPageContent;
    events: PlaceholderPageContent;
    order: PlaceholderPageContent;
  };
};
