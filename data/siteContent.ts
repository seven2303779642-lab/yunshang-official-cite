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

export type StoresContent = {
  hero: {
    title: string;
    subtitle: string;
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
      slideAlts: string[];
      slideIndicatorAriaLabelTemplate: string;
    };
    aboutIntro: {
      headingLines: [string, string];
      body: string;
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
      items: MenuShowcaseItemContent[];
      viewMenuButton: string;
      viewMenuHref: string;
    };
    orderBanner: {
      imageAlt: string;
      headingLines: [string, string];
      pickupButton: string;
      deliveryButton: string;
      orderButtonHref: string;
    };
  };
  about: AboutContent;
  menu: MenuContent;
  stores: StoresContent;
  events: EventsContent;
  footer: FooterContent;
  placeholderPages: {
    comingSoon: string;
    about: PlaceholderPageContent;
    menu: PlaceholderPageContent;
    stores: PlaceholderPageContent;
    events: PlaceholderPageContent;
    order: PlaceholderPageContent;
  };
};

export const zhContent: SiteContent = {
  locale: "zh",
  nav: {
    logoAlt: "云尚米线",
    home: "首页",
    about: "关于",
    menu: "菜单",
    stores: "门店",
    events: "活动",
    languageSwitch: "English",
    orderOnline: "线上点单",
    mobileMenuOpenLabel: "打开菜单",
    mobileMenuCloseLabel: "关闭菜单",
    homeAriaLabel: "返回首页",
    languageSwitchAriaLabel: "切换语言",
    homeHref: "/",
    languageHref: "/en",
    orderHref: "/order",
  },
  home: {
    heroSlider: {
      slideAlts: [
        "云尚首页轮播图 1",
        "云尚首页轮播图 2",
        "云尚首页轮播图 3",
        "云尚首页轮播图 4",
        "云尚首页轮播图 5",
      ],
      slideIndicatorAriaLabelTemplate: "切换到第 {n} 张轮播图",
    },
    aboutIntro: {
      headingLines: ["一碗有温度的米线，", "从匠心开始"],
      body:
        "云尚米线，传承云南百年米线文化，以滚烫鲜骨浓汤激发食材本味，醇厚鲜香，一口暖心！严选央企华润五丰米线，100%纯大米研磨，0胶添加，爽滑Q弹，吸汁入味。高汤精选优质鲜骨，慢熬12小时以上，浓郁纯正，无添加更安心。搭配本地新鲜食材，锁住天然美味。每一碗都是实打实的真材实料，肉足菜丰，汤鲜味美，满足感拉满！",
      titleImageAlt: "不想做饭？来碗云尚米线！",
      aboutButton: "关于云尚",
      aboutButtonHref: "/about",
      boneSoupImageAlt: "云尚米线骨汤熬制画面",
      playVideoAriaLabel: "播放云尚米线介绍视频",
      videoDialogAriaLabel: "云尚米线介绍视频播放窗口",
      closeVideoAriaLabel: "关闭视频",
      videoTitle: "云尚米线介绍视频",
    },
    featureCards: {
      features: [
        {
          title: "12小时鲜骨熬汤",
          imageAlt: "鲜骨熬汤",
          iconAlt: "12小时鲜骨熬汤图标",
          lines: [
            "拒绝科技与狠活，",
            "只用猪骨、老母鸡、火腿等新鲜好料。100%无添加，天天熬汤看得见！",
          ],
          nowrap: true,
        },
        {
          title: "米线无限续",
          imageAlt: "米线",
          iconAlt: "米线无限续图标",
          lines: ["纯大米米线，", "堂食无限量供应，", "想续就续，吃饱吃好不加价！"],
          nowrap: true,
        },
        {
          title: "新鲜食材,本地优选",
          imageAlt: "新鲜番茄食材",
          iconAlt: "新鲜食材图标",
          lines: ["实打实的真材实料，品质无忧，每一口都放心！"],
          nowrap: true,
          mobileTitleLines: ["新鲜食材,", "本地优选"],
        },
      ],
    },
    storeBanner: {
      imageAlt: "云尚米线门店环境",
      title: "全加拿大18家分店",
      subtitle: "寻找离您最近的云尚米线分店",
      storesButton: "查看附近门店",
      storesButtonHref: "/stores",
    },
    menuShowcase: {
      leftLabelAlt: "一碗好米线",
      rightLabelAlt: "半碗都是料",
      items: [
        {
          title: "过桥米线",
          text: "源自云南的非物质文化遗产，凭借“一汤锁鲜”的匠心智慧传承百年。云尚过桥米线提供多种汤底口味选择，并搭配12款精美配菜。食材与滚烫高汤分开出品，食用时按“先荤后素”依次烫熟，最后加入爽滑米线，滚烫高汤瞬间激发食材本味，鲜香扑鼻！",
        },
        {
          title: "特色米线",
          text: "除了经典过桥米线，我们还将传统骨汤米线与独特风味完美融合，打造惊喜满满的特色米线系列！酸辣开胃的老坛酸菜鱼米线、甘香爽口的番茄肥牛米线、麻辣过瘾的川香爆肠旺米线……每一款都让人一口接一口，停不下来！还能自由搭配配菜，想怎么吃就怎么吃，打造你的专属米线体验！",
        },
        {
          title: "凉菜小吃",
          text: "云尚米线菜品丰富，除了经典米线，还有各式精美凉菜、小吃和甜品。香辣开胃的口水鸡、酸甜爽脆的土豆丝、每桌必点的夫妻肺片，款款都是开胃神器！还有盐酥鸡、奥尔良鸡翅、蒜泥炸豆腐等特色小吃，香酥可口，一口接一口，停不下来！",
        },
      ],
      viewMenuButton: "查看菜单",
      viewMenuHref: "/menu",
    },
    orderBanner: {
      imageAlt: "云尚米线热汤与米线",
      headingLines: ["累了别开火,来碗热乎的!", "价格实惠,份量实在"],
      pickupButton: "自取外卖",
      deliveryButton: "送餐到家",
      orderButtonHref: "/order",
    },
  },
  about: {
    hero: {
      desktopImage: "/images/about/hero/top-banner-desktop.jpg",
      mobileImage: "/images/about/hero/top-banner-mobile.jpg",
      alt: "云尚米线关于页面横幅",
    },
    intro: {
      icon: "/images/about/decorative/white-icon.png",
      image: "/images/about/story/rice-noodle-yunshang.jpg",
      imageAlt: "云尚米线",
      paragraphs: [
        "自2016年以来，云尚米线始终坚持以一碗好米线连接人与味道。我们精选优质食材，坚持慢火熬汤，把时间与匠心熬进每一碗汤里。",
        "传承云南过桥米线的经典吃法，同时不断推出创新口味，让传统与新意在一碗中相遇，带来熟悉而温暖的家的味道。",
      ],
    },
    values: {
      title: "云尚坚持",
      items: [
        {
          title: "精选米线",
          description: "严选优质大米米线，爽滑Q弹，吸汁入味，是每一碗云尚米线的扎实根基。",
          image: "/images/about/story/rice-noodle-yunshang.jpg",
          imageAlt: "精选米线",
        },
        {
          title: "秘制高汤",
          description: "精选鲜骨慢火熬制，汤底醇厚鲜香，无添加更安心，天天熬汤看得见。",
          image: "/images/about/values/real-bone-yunshang.jpg",
          imageAlt: "秘制高汤",
        },
        {
          title: "优质食材",
          description: "本地优选新鲜食材，肉足菜丰，真材实料，锁住天然美味。",
          image: "/images/about/values/fresh-yunshang.jpg",
          imageAlt: "优质食材",
        },
        {
          title: "菜品多样",
          description: "从经典过桥米线到特色风味米线，凉菜小吃丰富选择，满足不同口味。",
          image: "/images/about/values/variety-yunshang.jpg",
          imageAlt: "菜品多样",
        },
      ],
    },
    popularDishes: {
      title: "人气推荐",
      subtitle: "每一碗都是云尚的味道名片",
      ctaLabel: "查看菜单",
      ctaHref: "/menu",
      items: [
        {
          title: "经典原味过桥米线",
          tagline: "传承经典，一汤锁鲜",
          image: "/images/about/popular/original.jpg",
          imageAlt: "经典原味过桥米线",
        },
        {
          title: "鲜香番茄过桥米线",
          tagline: "甘香爽口，番茄鲜香",
          image: "/images/about/popular/tomato.jpg",
          imageAlt: "鲜香番茄过桥米线",
        },
        {
          title: "老坛酸菜鱼米线",
          tagline: "酸辣开胃，回味无穷",
          image: "/images/about/popular/sour-fish.jpg",
          imageAlt: "老坛酸菜鱼米线",
        },
        {
          title: "酸汤金针菇肥牛米线",
          tagline: "酸香浓郁，肥牛鲜嫩",
          image: "/images/about/popular/sour-beef.jpg",
          imageAlt: "酸汤金针菇肥牛米线",
        },
      ],
    },
    stores: {
      title: "全加拿大18家分店",
      subtitle: "寻找离您最近的云尚米线分店",
      mapImage: "/images/about/stores/yunshang-map.png",
      mapAlt: "云尚米线加拿大门店分布图",
      ctaLabel: "查看附近门店",
      ctaHref: "/stores",
    },
  },
  menu: {
    hero: {
      title: "菜单",
      subtitle: "浏览云尚米线经典菜品与人气小吃。",
    },
    categories: {
      title: "菜品分类",
      items: ["全部", "过桥米线", "特色米线", "凉菜", "小吃", "甜品"],
    },
    featuredItems: {
      title: "人气菜品",
      subtitle: "从经典骨汤到酸辣风味，挑一碗你想吃的云尚米线。",
      ctaLabel: "线上点单",
      ctaHref: "/order",
      items: [
        {
          title: "原味骨汤过桥米线",
          description: "传承经典骨汤，一汤锁鲜，醇厚鲜香。",
          image: "/images/menu/items/original-bone-broth.jpg",
          imageAlt: "原味骨汤过桥米线",
          badges: ["经典", "人气"],
        },
        {
          title: "鲜香番茄米线",
          description: "番茄鲜香，甘香爽口，开胃又暖心。",
          image: "/images/menu/items/tomato-rice-noodle.jpg",
          imageAlt: "鲜香番茄米线",
          badges: ["经典", "推荐"],
        },
        {
          title: "酸菜鱼米线",
          description: "老坛酸菜风味，酸辣开胃，回味无穷。",
          image: "/images/menu/items/pickled-fish.jpg",
          imageAlt: "酸菜鱼米线",
          badges: ["酸爽", "人气"],
        },
        {
          title: "酸汤金针菇肥牛米线",
          description: "酸香浓郁，肥牛鲜嫩，金针菇爽脆。",
          image: "/images/menu/items/sour-beef.jpg",
          imageAlt: "酸汤金针菇肥牛米线",
          badges: ["酸爽", "推荐"],
        },
        {
          title: "川味香辣米线",
          description: "麻辣过瘾，川香地道，嗜辣必点。",
          image: "/images/menu/items/spicy-rice-noodle.jpg",
          imageAlt: "川味香辣米线",
          badges: ["香辣", "人气"],
        },
        {
          title: "藤椒过桥米线",
          description: "藤椒麻香，过桥经典，层次丰富。",
          image: "/images/menu/items/peppercorn-rice-noodle.jpg",
          imageAlt: "藤椒过桥米线",
          badges: ["经典", "香辣"],
        },
      ],
    },
  },
  stores: {
    hero: {
      title: "云尚米线门店",
      subtitle: "寻找离您最近的云尚米线，查看地址、电话与营业时间。",
    },
    filters: {
      title: "选择省份",
      items: ["全部", "Ontario", "British Columbia", "Alberta", "Manitoba"],
    },
    locations: {
      title: "门店列表",
      subtitle: "云尚米线已在加拿大多个城市开设分店。",
      directionsLabel: "查看导航",
      items: [
        {
          name: "Warden 总店",
          province: "Ontario",
          region: "Scarborough",
          address: "Scarborough, ON",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/warden.png",
          imageAlt: "Warden 总店",
          directionsHref: "#",
        },
        {
          name: "First Markham Place",
          province: "Ontario",
          region: "Markham",
          address: "Markham, ON",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/fmp.png",
          imageAlt: "First Markham Place 门店",
          directionsHref: "#",
        },
        {
          name: "Bayview",
          province: "Ontario",
          region: "Richmond Hill",
          address: "Richmond Hill, ON",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/bayview.png",
          imageAlt: "Bayview 门店",
          directionsHref: "#",
        },
        {
          name: "Unionville",
          province: "Ontario",
          region: "Markham",
          address: "Unionville, ON",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/unionville.png",
          imageAlt: "Unionville 门店",
          directionsHref: "#",
        },
        {
          name: "North York",
          province: "Ontario",
          region: "North York",
          address: "North York, ON",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/north-york.png",
          imageAlt: "North York 门店",
          directionsHref: "#",
        },
        {
          name: "Scarborough",
          province: "Ontario",
          region: "Scarborough",
          address: "Scarborough, ON",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/scarborough.png",
          imageAlt: "Scarborough 门店",
          directionsHref: "#",
        },
        {
          name: "Downtown Toronto",
          province: "Ontario",
          region: "Toronto",
          address: "Downtown Toronto, ON",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/downtown-toronto.png",
          imageAlt: "Downtown Toronto 门店",
          directionsHref: "#",
        },
        {
          name: "Burnaby",
          province: "British Columbia",
          region: "Burnaby",
          address: "Burnaby, BC",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/burnaby.png",
          imageAlt: "Burnaby 门店",
          directionsHref: "#",
        },
        {
          name: "Vancouver",
          province: "British Columbia",
          region: "Vancouver",
          address: "Vancouver, BC",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/vancouver.png",
          imageAlt: "Vancouver 门店",
          directionsHref: "#",
        },
        {
          name: "Calgary",
          province: "Alberta",
          region: "Calgary",
          address: "Calgary, AB",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/calgary.png",
          imageAlt: "Calgary 门店",
          directionsHref: "#",
        },
        {
          name: "Edmonton",
          province: "Alberta",
          region: "Edmonton",
          address: "Edmonton, AB",
          phone: "请以门店信息为准",
          hours: "营业时间请以门店信息为准",
          image: "/images/stores/locations/edmonton.png",
          imageAlt: "Edmonton 门店",
          directionsHref: "#",
        },
      ],
    },
  },
  events: {
    hero: {
      title: "活动",
      subtitle: "查看云尚米线最新活动、节日优惠与品牌资讯。",
      desktopImage: "/images/events/hero/rice-noodle-festival-web.webp",
      mobileImage: "/images/events/hero/rice-noodle-festival-mobile.webp",
      imageAlt: "云尚米线活动横幅",
    },
    list: {
      title: "最新活动",
      subtitle: "关注限时优惠、节日活动与新品信息。",
      ctaLabel: "查看详情",
      items: [
        {
          title: "2026 云尚米线节",
          date: "2026",
          excerpt: "一年一度的云尚米线节即将回归，敬请期待更多活动详情。",
          image: "/images/events/hero/rice-noodle-festival-web.webp",
          imageAlt: "2026 云尚米线节",
          href: "#",
          tag: "节日活动",
        },
        {
          title: "云尚九周年",
          date: "2024",
          excerpt: "感谢一路相伴，云尚米线九周年感恩回馈活动。",
          image: "/images/events/cards/ninth-anniversary.png",
          imageAlt: "云尚九周年",
          href: "#",
          tag: "周年庆",
        },
        {
          title: "Family Day 活动",
          date: "2024年2月",
          excerpt: "Family Day 限时优惠，与家人共享一碗热乎米线。",
          image: "/images/events/cards/family-day.jpg",
          imageAlt: "Family Day 活动",
          href: "#",
          tag: "节日优惠",
        },
        {
          title: "新品猪肚鸡米线试吃",
          date: "2024年10月",
          excerpt: "猪肚鸡米线新品上市，欢迎到店试吃体验。",
          image: "/images/events/cards/pork-tripe-web.jpg",
          imageAlt: "新品猪肚鸡米线试吃",
          href: "#",
          tag: "新品",
        },
      ],
    },
  },
  footer: {
    logoAlt: "云尚米线",
    homeAriaLabel: "返回首页",
    homeHref: "/",
    linksLeft: [
      { label: "关于云尚", href: "/about" },
      { label: "活动", href: "/events" },
    ],
    linksRight: [
      { label: "门店", href: "/stores" },
      { label: "菜单", href: "/menu" },
      { label: "线上点单", href: "/order" },
    ],
    social: [
      { label: "Facebook", ariaLabel: "Facebook" },
      { label: "Instagram", ariaLabel: "Instagram" },
      { label: "Redbook", ariaLabel: "小红书" },
    ],
    wechatSupport: "微信小客服",
    wechatQrAlt: "微信客服二维码",
    copyright: "© 2023 YUNSHANG RICE NOODLE.",
    copyrightMobile: " ALL RIGHTS RESERVED.",
  },
  placeholderPages: {
    comingSoon: "页面建设中，敬请期待。",
    about: {
      title: "关于云尚",
      subtitle: "了解云尚米线的品牌故事与匠心传承。",
    },
    menu: {
      title: "菜单",
      subtitle: "浏览云尚米线完整菜单与特色菜品。",
    },
    stores: {
      title: "门店",
      subtitle: "查找离您最近的云尚米线门店。",
    },
    events: {
      title: "活动",
      subtitle: "查看最新优惠与品牌活动。",
    },
    order: {
      title: "线上点单",
      subtitle: "在线下单，自取或送餐到家。",
    },
  },
};

export const enContent: SiteContent = {
  locale: "en",
  nav: {
    logoAlt: "Yunshang Rice Noodle",
    home: "Home",
    about: "About",
    menu: "Menu",
    stores: "Stores",
    events: "Events",
    languageSwitch: "中文",
    orderOnline: "Order Online",
    mobileMenuOpenLabel: "Open menu",
    mobileMenuCloseLabel: "Close menu",
    homeAriaLabel: "Go to home page",
    languageSwitchAriaLabel: "Toggle language",
    homeHref: "/en",
    languageHref: "/",
    orderHref: "/en/order",
  },
  home: {
    heroSlider: {
      slideAlts: [
        "Yunshang homepage slider image 1",
        "Yunshang homepage slider image 2",
        "Yunshang homepage slider image 3",
        "Yunshang homepage slider image 4",
        "Yunshang homepage slider image 5",
      ],
      slideIndicatorAriaLabelTemplate: "Go to slide {n}",
    },
    aboutIntro: {
      headingLines: [
        "A bowl of rice noodles with heart,",
        "crafted with care from the start",
      ],
      body:
        "Yunshang Rice Noodle carries forward Yunnan's century-old rice noodle culture. Our rich bone broth brings out the natural flavor of every ingredient in a warm, satisfying bowl. We use China Resources Wufeng rice noodles made from 100% rice with no additives—smooth, springy, and full of flavor. Our broth is slow-simmered for over 12 hours from quality fresh bones, pure and additive-free. Paired with locally sourced ingredients, every bowl is generous, hearty, and deeply satisfying.",
      titleImageAlt: "No time to cook? Try Yunshang Rice Noodle!",
      aboutButton: "About Yunshang",
      aboutButtonHref: "/en/about",
      boneSoupImageAlt: "Yunshang bone broth preparation",
      playVideoAriaLabel: "Play Yunshang introduction video",
      videoDialogAriaLabel: "Yunshang introduction video player",
      closeVideoAriaLabel: "Close video",
      videoTitle: "Yunshang introduction video",
    },
    featureCards: {
      features: [
        {
          title: "12-Hour Fresh Bone Broth",
          imageAlt: "Fresh bone broth",
          iconAlt: "12-hour fresh bone broth icon",
          lines: [
            "No shortcuts—just pork bones, old hens, ham, and other quality ingredients.",
            "100% additive-free broth, made fresh every day.",
          ],
          nowrap: true,
        },
        {
          title: "Unlimited Noodle Refills",
          imageAlt: "Rice noodles",
          iconAlt: "Unlimited noodle refills icon",
          lines: [
            "Pure rice noodles,",
            "unlimited refills for dine-in,",
            "eat your fill at no extra cost!",
          ],
          nowrap: true,
        },
        {
          title: "Fresh, Locally Sourced Ingredients",
          imageAlt: "Fresh tomato ingredients",
          iconAlt: "Fresh ingredients icon",
          lines: [
            "Real ingredients you can trust—every bite with confidence!",
          ],
          nowrap: true,
          mobileTitleLines: ["Fresh ingredients,", "locally sourced"],
        },
      ],
    },
    storeBanner: {
      imageAlt: "Yunshang restaurant interior",
      title: "18 Locations Across Canada",
      subtitle: "Find the Yunshang location nearest to you",
      storesButton: "Find Nearby Stores",
      storesButtonHref: "/en/stores",
    },
    menuShowcase: {
      leftLabelAlt: "A great bowl of rice noodles",
      rightLabelAlt: "Half a bowl of toppings",
      items: [
        {
          title: "Crossing-the-Bridge Rice Noodles",
          text: "A Yunnan intangible cultural heritage dish, perfected over generations with broth that locks in freshness. Yunshang offers multiple broth flavors with 12 premium side dishes. Ingredients and hot broth are served separately—add meat first, then vegetables, then noodles for an aromatic, flavorful experience.",
        },
        {
          title: "Signature Rice Noodles",
          text: "Beyond the classic crossing-the-bridge style, we blend traditional bone broth with bold flavors for a signature series you'll love. Try sour and spicy pickled fish noodles, tomato beef noodles, or spicy intestine noodles—and customize your bowl your way.",
        },
        {
          title: "Cold Dishes & Snacks",
          text: "Our menu goes beyond rice noodles with cold dishes, snacks, and desserts. From mouth-watering chicken to crispy potato shreds and classic couple's lung slices—plus salt-and-pepper chicken, wings, and fried tofu bites.",
        },
      ],
      viewMenuButton: "View Menu",
      viewMenuHref: "/en/menu",
    },
    orderBanner: {
      imageAlt: "Yunshang hot broth and rice noodles",
      headingLines: [
        "Skip the stove—enjoy a warm bowl!",
        "Great value, generous portions",
      ],
      pickupButton: "Pickup",
      deliveryButton: "Delivery",
      orderButtonHref: "/en/order",
    },
  },
  about: {
    hero: {
      desktopImage: "/images/about/hero/top-banner-desktop.jpg",
      mobileImage: "/images/about/hero/top-banner-mobile.jpg",
      alt: "Yunshang About page banner",
    },
    intro: {
      icon: "/images/about/decorative/white-icon.png",
      image: "/images/about/story/rice-noodle-yunshang.jpg",
      imageAlt: "Yunshang Rice Noodle",
      paragraphs: [
        "Since 2016, Yunshang Rice Noodle has been dedicated to connecting people through a great bowl of noodles. We select quality ingredients and slow-simmer our broth, putting time and craft into every bowl.",
        "Honoring the heritage of Yunnan crossing-the-bridge rice noodles while introducing innovative flavors, we bring together tradition and creativity in every bowl—a taste that feels like home.",
      ],
    },
    values: {
      title: "What We Stand For",
      items: [
        {
          title: "Selected Rice Noodles",
          description: "Premium rice noodles that are smooth, springy, and full of flavor—the foundation of every Yunshang bowl.",
          image: "/images/about/story/rice-noodle-yunshang.jpg",
          imageAlt: "Selected rice noodles",
        },
        {
          title: "Signature Broth",
          description: "Slow-simmered from quality fresh bones—rich, aromatic, additive-free, made fresh every day.",
          image: "/images/about/values/real-bone-yunshang.jpg",
          imageAlt: "Signature bone broth",
        },
        {
          title: "Quality Ingredients",
          description: "Locally sourced fresh ingredients, generous portions, and real ingredients you can trust.",
          image: "/images/about/values/fresh-yunshang.jpg",
          imageAlt: "Quality ingredients",
        },
        {
          title: "Menu Variety",
          description: "From classic crossing-the-bridge noodles to signature flavors, plus cold dishes and snacks for every taste.",
          image: "/images/about/values/variety-yunshang.jpg",
          imageAlt: "Menu variety",
        },
      ],
    },
    popularDishes: {
      title: "Popular Picks",
      subtitle: "Signature bowls that define the Yunshang experience",
      ctaLabel: "View Menu",
      ctaHref: "/en/menu",
      items: [
        {
          title: "Classic Original Crossing-the-Bridge Noodles",
          tagline: "Heritage flavor, broth that locks in freshness",
          image: "/images/about/popular/original.jpg",
          imageAlt: "Classic original crossing-the-bridge noodles",
        },
        {
          title: "Tomato Crossing-the-Bridge Noodles",
          tagline: "Bright, savory tomato aroma",
          image: "/images/about/popular/tomato.jpg",
          imageAlt: "Tomato crossing-the-bridge noodles",
        },
        {
          title: "Pickled Fish Rice Noodles",
          tagline: "Sour, spicy, and irresistibly appetizing",
          image: "/images/about/popular/sour-fish.jpg",
          imageAlt: "Pickled fish rice noodles",
        },
        {
          title: "Sour Soup Enoki Beef Rice Noodles",
          tagline: "Tangy broth with tender beef",
          image: "/images/about/popular/sour-beef.jpg",
          imageAlt: "Sour soup enoki beef rice noodles",
        },
      ],
    },
    stores: {
      title: "18 Locations Across Canada",
      subtitle: "Find the Yunshang location nearest to you",
      mapImage: "/images/about/stores/yunshang-map.png",
      mapAlt: "Yunshang store locations across Canada",
      ctaLabel: "Find Nearby Stores",
      ctaHref: "/en/stores",
    },
  },
  menu: {
    hero: {
      title: "Menu",
      subtitle:
        "Explore Yunshang’s signature rice noodles, sides, snacks, and desserts.",
    },
    categories: {
      title: "Categories",
      items: [
        "All",
        "Crossing-the-Bridge Rice Noodles",
        "Specialty Rice Noodles",
        "Cold Dishes",
        "Snacks",
        "Desserts",
      ],
    },
    featuredItems: {
      title: "Popular Picks",
      subtitle:
        "From classic bone broth to bright and spicy flavors, find your next bowl.",
      ctaLabel: "Order Online",
      ctaHref: "/en/order",
      items: [
        {
          title: "Original Bone Broth Crossing-the-Bridge Rice Noodle",
          description:
            "Heritage bone broth that locks in freshness—rich, aromatic, and satisfying.",
          image: "/images/menu/items/original-bone-broth.jpg",
          imageAlt: "Original bone broth crossing-the-bridge rice noodle",
          badges: ["Classic", "Popular"],
        },
        {
          title: "Tomato Rice Noodle",
          description: "Bright tomato aroma with a savory, refreshing finish.",
          image: "/images/menu/items/tomato-rice-noodle.jpg",
          imageAlt: "Tomato rice noodle",
          badges: ["Classic", "Recommended"],
        },
        {
          title: "Pickled Fish Rice Noodle",
          description: "Sour and spicy pickled fish flavor that opens the appetite.",
          image: "/images/menu/items/pickled-fish.jpg",
          imageAlt: "Pickled fish rice noodle",
          badges: ["Tangy", "Popular"],
        },
        {
          title: "Sour Beef Rice Noodle",
          description: "Tangy broth with tender beef and crisp enoki mushrooms.",
          image: "/images/menu/items/sour-beef.jpg",
          imageAlt: "Sour beef rice noodle",
          badges: ["Tangy", "Recommended"],
        },
        {
          title: "Sichuan Spicy Rice Noodle",
          description: "Bold Sichuan heat for spice lovers—numbing and fiery.",
          image: "/images/menu/items/spicy-rice-noodle.jpg",
          imageAlt: "Sichuan spicy rice noodle",
          badges: ["Spicy", "Popular"],
        },
        {
          title: "Peppercorn Crossing-the-Bridge Rice Noodle",
          description: "Peppercorn aroma meets crossing-the-bridge tradition.",
          image: "/images/menu/items/peppercorn-rice-noodle.jpg",
          imageAlt: "Peppercorn crossing-the-bridge rice noodle",
          badges: ["Classic", "Spicy"],
        },
      ],
    },
  },
  stores: {
    hero: {
      title: "Yunshang Locations",
      subtitle:
        "Find your nearest Yunshang Rice Noodle and check store details.",
    },
    filters: {
      title: "Select Province",
      items: ["All", "Ontario", "British Columbia", "Alberta", "Manitoba"],
    },
    locations: {
      title: "Store List",
      subtitle: "Yunshang serves guests across multiple Canadian cities.",
      directionsLabel: "Get Directions",
      items: [
        {
          name: "Warden (Flagship)",
          province: "Ontario",
          region: "Scarborough",
          address: "Scarborough, ON",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/warden.png",
          imageAlt: "Warden flagship store",
          directionsHref: "#",
        },
        {
          name: "First Markham Place",
          province: "Ontario",
          region: "Markham",
          address: "Markham, ON",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/fmp.png",
          imageAlt: "First Markham Place store",
          directionsHref: "#",
        },
        {
          name: "Bayview",
          province: "Ontario",
          region: "Richmond Hill",
          address: "Richmond Hill, ON",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/bayview.png",
          imageAlt: "Bayview store",
          directionsHref: "#",
        },
        {
          name: "Unionville",
          province: "Ontario",
          region: "Markham",
          address: "Unionville, ON",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/unionville.png",
          imageAlt: "Unionville store",
          directionsHref: "#",
        },
        {
          name: "North York",
          province: "Ontario",
          region: "North York",
          address: "North York, ON",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/north-york.png",
          imageAlt: "North York store",
          directionsHref: "#",
        },
        {
          name: "Scarborough",
          province: "Ontario",
          region: "Scarborough",
          address: "Scarborough, ON",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/scarborough.png",
          imageAlt: "Scarborough store",
          directionsHref: "#",
        },
        {
          name: "Downtown Toronto",
          province: "Ontario",
          region: "Toronto",
          address: "Downtown Toronto, ON",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/downtown-toronto.png",
          imageAlt: "Downtown Toronto store",
          directionsHref: "#",
        },
        {
          name: "Burnaby",
          province: "British Columbia",
          region: "Burnaby",
          address: "Burnaby, BC",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/burnaby.png",
          imageAlt: "Burnaby store",
          directionsHref: "#",
        },
        {
          name: "Vancouver",
          province: "British Columbia",
          region: "Vancouver",
          address: "Vancouver, BC",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/vancouver.png",
          imageAlt: "Vancouver store",
          directionsHref: "#",
        },
        {
          name: "Calgary",
          province: "Alberta",
          region: "Calgary",
          address: "Calgary, AB",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/calgary.png",
          imageAlt: "Calgary store",
          directionsHref: "#",
        },
        {
          name: "Edmonton",
          province: "Alberta",
          region: "Edmonton",
          address: "Edmonton, AB",
          phone: "Call store for details",
          hours: "Hours may vary; please contact the store",
          image: "/images/stores/locations/edmonton.png",
          imageAlt: "Edmonton store",
          directionsHref: "#",
        },
      ],
    },
  },
  events: {
    hero: {
      title: "Events",
      subtitle:
        "Discover Yunshang’s latest promotions, seasonal events, and brand updates.",
      desktopImage: "/images/events/hero/rice-noodle-festival-web.webp",
      mobileImage: "/images/events/hero/rice-noodle-festival-mobile.webp",
      imageAlt: "Yunshang event banner",
    },
    list: {
      title: "Latest Events",
      subtitle:
        "Stay updated on limited-time offers, seasonal campaigns, and new dishes.",
      ctaLabel: "View Details",
      items: [
        {
          title: "2026 Yunshang Rice Noodle Festival",
          date: "2026",
          excerpt:
            "Our annual rice noodle festival returns—stay tuned for more details.",
          image: "/images/events/hero/rice-noodle-festival-web.webp",
          imageAlt: "2026 Yunshang Rice Noodle Festival",
          href: "#",
          tag: "Festival",
        },
        {
          title: "Yunshang 9th Anniversary",
          date: "2024",
          excerpt:
            "Celebrating nine years with special offers and thank-you promotions.",
          image: "/images/events/cards/ninth-anniversary.png",
          imageAlt: "Yunshang 9th Anniversary",
          href: "#",
          tag: "Anniversary",
        },
        {
          title: "Family Day Event",
          date: "February 2024",
          excerpt:
            "Limited-time Family Day offers—share a warm bowl with loved ones.",
          image: "/images/events/cards/family-day.jpg",
          imageAlt: "Family Day Event",
          href: "#",
          tag: "Holiday",
        },
        {
          title: "Pork Tripe Chicken Rice Noodle Tasting",
          date: "October 2024",
          excerpt:
            "Try our new pork tripe chicken rice noodle—available in stores now.",
          image: "/images/events/cards/pork-tripe-web.jpg",
          imageAlt: "Pork tripe chicken rice noodle tasting",
          href: "#",
          tag: "New",
        },
      ],
    },
  },
  footer: {
    logoAlt: "Yunshang Rice Noodle",
    homeAriaLabel: "Go to home page",
    homeHref: "/en",
    linksLeft: [
      { label: "About Yunshang", href: "/en/about" },
      { label: "Events", href: "/en/events" },
    ],
    linksRight: [
      { label: "Stores", href: "/en/stores" },
      { label: "Menu", href: "/en/menu" },
      { label: "Order Online", href: "/en/order" },
    ],
    social: [
      { label: "Facebook", ariaLabel: "Facebook" },
      { label: "Instagram", ariaLabel: "Instagram" },
      { label: "Redbook", ariaLabel: "Redbook" },
    ],
    wechatSupport: "WeChat Support",
    wechatQrAlt: "WeChat customer service QR code",
    copyright: "© 2023 YUNSHANG RICE NOODLE.",
    copyrightMobile: " ALL RIGHTS RESERVED.",
  },
  placeholderPages: {
    comingSoon: "This page is under construction.",
    about: {
      title: "About",
      subtitle: "Learn about Yunshang Rice Noodle and our heritage.",
    },
    menu: {
      title: "Menu",
      subtitle: "Browse our full menu and signature dishes.",
    },
    stores: {
      title: "Stores",
      subtitle: "Find the Yunshang location nearest to you.",
    },
    events: {
      title: "Events",
      subtitle: "See the latest promotions and brand events.",
    },
    order: {
      title: "Order Online",
      subtitle: "Order online for pickup or delivery.",
    },
  },
};

export function getLanguageFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
}

export function getSiteContent(pathname: string): SiteContent {
  return getLanguageFromPathname(pathname) === "en" ? enContent : zhContent;
}
