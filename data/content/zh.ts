import type { SiteContent } from "./types";
import { ORDER_DELIVERY_URL, ORDER_PICKUP_URL } from "../orderLinks";

export const zhContent: SiteContent = {
  locale: "zh",
  nav: {
    logoImage: "/images/common/logos/云尚-1.png",
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
    homeHref: "/home",
    languageHref: "/en",
  },
  home: {
    heroSlider: {
      slides: [
        {
          desktopImage: "/images/home/sliders/zh/desktop/zh-sliders-1.jpg",
          mobileImage: "/images/home/sliders/zh/mobile/zh-sliders-1.jpg",
          alt: "云尚首页轮播图 1",
        },
        {
          desktopImage: "/images/home/sliders/zh/desktop/zh-sliders-2.jpg",
          mobileImage: "/images/home/sliders/zh/mobile/zh-sliders-2.jpg",
          alt: "云尚首页轮播图 2",
        },
        {
          desktopImage: "/images/home/sliders/zh/desktop/zh-sliders-3.jpg",
          mobileImage: "/images/home/sliders/zh/mobile/zh-sliders-3.jpg",
          alt: "云尚首页轮播图 3",
        },
        {
          desktopImage: "/images/home/sliders/zh/desktop/zh-sliders-4.jpg",
          mobileImage: "/images/home/sliders/zh/mobile/zh-sliders-4.jpg",
          alt: "云尚首页轮播图 4",
        },
        {
          desktopImage: "/images/home/sliders/zh/desktop/zh-sliders-5.jpg",
          mobileImage: "/images/home/sliders/zh/mobile/zh-sliders-5.jpg",
          alt: "云尚首页轮播图 5",
        },
      ],
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
        "云尚米线，传承云南百年米线文化，以滚烫鲜骨浓汤激发食材本味，醇厚鲜香，一口暖心！严选央企华润五丰米线，100%纯大米研磨，0胶0添加，爽滑Q弹，吸汁入味。高汤精选优质鲜骨，慢熬12小时以上，浓郁纯正，无添加更安心。搭配本地新鲜食材，锁住天然美味。每一碗都是实打实的真材实料，肉足菜丰，汤鲜味美，满足感拉满！",
      titleImage: "/images/home/about-intro/aboutintro-title.png",
      titleImageAlt: "不想做饭？来碗云尚米线！",
      aboutButton: "关于云尚",
      aboutButtonHref: "/about-us",
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
          mobileLines: [
            "拒绝科技与狠活，",
            "只用猪骨、老母鸡、",
            "火腿等新鲜好料。",
            "100% 无添加，",
            "天天熬汤看得见！",
          ],
          nowrap: true,
        },
        {
          title: "米线无限续",
          imageAlt: "米线",
          iconAlt: "米线无限续图标",
          lines: ["纯大米米线，", "堂食无限量供应，", "想续就续，吃饱吃好不加价！"],
          mobileLines: ["纯大米米线，", "堂食无限量供应，", "想续就续，吃饱吃好不加价！"],
          nowrap: true,
        },
        {
          title: "新鲜食材,本地优选",
          imageAlt: "新鲜番茄食材",
          iconAlt: "新鲜食材图标",
          lines: ["实打实的真材实料，品质无忧，每一口都放心！"],
          mobileLines: ["实打实的真材实料，", "品质无忧，每一口都放心！"],
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
      storesButtonHref: "/locations",
    },
    menuShowcase: {
      leftLabelAlt: "一碗好米线",
      rightLabelAlt: "半碗都是料",
      assets: {
        leftLabel: "/images/home/menu-showcase/一碗好米线.png",
        rightLabel: "/images/home/menu-showcase/半碗都是料.png",
        items: [
          {
            tag: "/images/home/menu-showcase/经典.png",
            image: "/images/home/menu-showcase/过桥米线.png",
          },
          {
            tag: "/images/home/menu-showcase/人气.png",
            image: "/images/home/menu-showcase/特色米线.png",
          },
          {
            tag: "/images/home/menu-showcase/必点.png",
            image: "/images/home/menu-showcase/凉菜小吃.png",
          },
        ],
      },
      items: [
        {
          title: "过桥米线",
          text: "源自云南的非物质文化遗产，凭借“一汤锁鲜”的匠心智慧传承百年。云尚过桥米线提供多种汤底口味选择，并搭配12款精美配菜。食材与滚烫高汤分开出品，食用时按“先荤后素”依次烫熟，最后加入爽滑米线，滚烫高汤瞬间激发食材本味，鲜香扑鼻！",
        },
        {
          title: "特色米线",
          text: "除了经典过桥米线，我们还将传统骨汤米线与独特风味完美融合，打造惊喜满满的特色米线系列！酸辣开胃的老坛酸菜鱼米线、甘香爽口的番茄肥牛米线、麻辣过瘾的川香烟熏肠旺米线……每一款都让人一口接一口，停不下来！还能自由搭配配菜，想怎么吃就怎么吃，打造你的专属米线体验！",
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
      pickupButtonHref: ORDER_PICKUP_URL,
      deliveryButtonHref: ORDER_DELIVERY_URL,
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
      image: "/images/about/values/rice-noodle-yunshang.jpg",
      imageAlt: "云尚米线",
      paragraphs: [
        "自2016年以来，我们始终坚持做一碗真正用心的米线。精选好食材，慢火熬高汤，只为呈现最纯正的米线本味。在传承云南过桥米线精髓的同时，我们不断创新口味与体验，让每一位顾客都能感受到新鲜与惊喜。",
        "我们相信，一碗米线不仅是味觉的满足，更是一份家的味道和心灵的慰藉。无论是钟爱传统风味的长辈、喜欢尝试新事物的年轻人，还是挑食的小朋友，都能在这里找到属于自己的那一碗热腾腾的美味。",
      ],
    },
    values: {
      title: "云尚坚持",
      items: [
        {
          title: "精选米线",
          description:
            "选用华润五丰100%纯大米米线，经过传统工艺精心制作，0添加、无胶质，口感Q弹爽滑，为您呈现最地道的米线体验。",
          image: "/images/about/values/rice-noodle-yunshang.jpg",
          imageAlt: "精选米线",
        },
        {
          title: "秘制高汤",
          description:
            "每一锅高汤都凝聚了我们的匠心，精选猪筒骨、老母鸡、火腿等优质食材，经过12小时慢火熬制，汤底醇厚鲜香，回味悠长，温暖您的每一餐。",
          image: "/images/about/values/real-bone-yunshang.jpg",
          imageAlt: "秘制高汤",
        },
        {
          title: "优质食材",
          description:
            "我们每天精心挑选新鲜蔬菜、肉类等原材料，严格把控品质，确保每一份菜品都新鲜健康、高品质，让您吃得放心。",
          image: "/images/about/values/fresh-yunshang.jpg",
          imageAlt: "优质食材",
        },
        {
          title: "菜品多样",
          description:
            "从经典过桥米线到创意特色口味，我们的菜品丰富多样，满足不同人群的需求，让每一位客人都能找到属于自己的美味。",
          image: "/images/about/values/variety-yunshang.jpg",
          imageAlt: "菜品多样",
        },
      ],
    },
    popularDishes: {
      title: "云尚米线口碑之选",
      subtitle: "",
      ctaLabel: "查看菜单",
      ctaHref: "/menu",
      items: [
        {
          title: "经典原味过桥米线",
          tagline: "每天热销 3000 碗!",
          image: "/images/about/popular/original.jpg",
          imageAlt: "经典原味过桥米线",
          tagImage: "/images/about/decorative/icon-white-01.png",
        },
        {
          title: "鲜香番茄过桥米线",
          tagline: "每一口都是鲜甜!",
          image: "/images/about/popular/tomato.jpg",
          imageAlt: "鲜香番茄过桥米线",
          tagImage: "/images/about/decorative/icon-white-02.png",
        },
        {
          title: "老坛酸菜鱼米线",
          tagline: "米线界里最好吃的酸菜鱼!",
          image: "/images/about/popular/sour-fish.jpg",
          imageAlt: "老坛酸菜鱼米线",
          tagImage: "/images/about/decorative/icon-white-03.png",
        },
        {
          title: "酸汤金针菇肥牛米线",
          tagline: "肉多料足汤更鲜!",
          image: "/images/about/popular/sour-beef.jpg",
          imageAlt: "酸汤金针菇肥牛米线",
          tagImage: "/images/about/decorative/icon-white-04.png",
        },
      ],
    },
    stores: {
      title: "全加拿大18家分店",
      subtitle: "寻找离您最近的云尚米线分店",
      mapImage: "/images/about/stores/yunshang-map.png",
      mapAlt: "云尚米线加拿大门店分布图",
      ctaLabel: "查看附近门店",
      ctaHref: "/locations",
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
  },
  locations: {
    hero: {
      title: "云尚米线门店",
      subtitle:
        "寻找离您最近的云尚米线，亲自到店体验，或在线下单选择自取或外送服务。",
    },
    filterAria: {
      province: "省份筛选",
      region: "区域筛选",
    },
    directionsLabel: "查看导航",
  },
  events: {
    hero: {
      title: "活动",
      subtitle: "查看云尚米线最新活动、节日优惠与品牌资讯。",
      desktopImage: "/images/events/hero/rice-noodle-festival-web.webp",
      mobileImage: "/images/events/hero/rice-noodle-festival-mobile.webp",
      imageAlt: "云尚米线活动横幅",
    },
  },
  footer: {
    logoAlt: "云尚米线",
    homeAriaLabel: "返回首页",
    homeHref: "/home",
    linksLeft: [
      { label: "关于云尚", href: "/about-us" },
      { label: "活动", href: "/events" },
    ],
    linksRight: [
      { label: "门店", href: "/locations" },
      { label: "菜单", href: "/menu" },
      { label: "线上点单", href: "/order", opensOrderPopup: true },
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
  orderPopup: {
    title: "线上点单",
    closeAriaLabel: "关闭线上点单窗口",
    pickupButton: "到店自取",
    deliveryButton: "外卖送餐",
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
    locations: {
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
