import type { SiteContent } from "./types";
import { ORDER_DELIVERY_URL, ORDER_PICKUP_URL } from "../orderLinks";

export const enContent: SiteContent = {
  "locale": "en",
  "nav": {
    "logoAlt": "Yunshang Rice Noodle",
    "home": "Home",
    "about": "About Us",
    "menu": "Menu",
    "stores": "Locations",
    "events": "Promo",
    "languageSwitch": "中文",
    "orderOnline": "Online Order",
    "mobileMenuOpenLabel": "Open menu",
    "mobileMenuCloseLabel": "Close menu",
    "homeAriaLabel": "Go to home page",
    "languageSwitchAriaLabel": "Switch language",
    "homeHref": "/en",
    "languageHref": "/home"
  },
  "home": {
    "heroSlider": {
      "slides": [
        {
          "desktopImage": "/images/home/en/hero-sliders/slider-2.jpg",
          "mobileImage": "/images/home/en/hero-sliders/slider-2.jpg",
          "alt": "Yunshang rice noodle promotion"
        },
        {
          "desktopImage": "/images/home/en/hero-sliders/slider-3.jpg",
          "mobileImage": "/images/home/en/hero-sliders/slider-3.jpg",
          "alt": "Yunshang rice noodle promotion"
        },
        {
          "desktopImage": "/images/home/en/hero-sliders/slider-4.jpg",
          "mobileImage": "/images/home/en/hero-sliders/slider-4.jpg",
          "alt": "Yunshang rice noodle promotion"
        },
        {
          "desktopImage": "/images/home/en/hero-sliders/slider-5.jpg",
          "mobileImage": "/images/home/en/hero-sliders/slider-5.jpg",
          "alt": "Yunshang rice noodle promotion"
        }
      ],
      "slideAlts": [
        "Yunshang rice noodle promotion",
        "Yunshang rice noodle promotion",
        "Yunshang rice noodle promotion",
        "Yunshang rice noodle promotion"
      ],
      "slideIndicatorAriaLabelTemplate": "Go to slide {n}"
    },
    "aboutIntro": {
      "headingLines": [
        "A bowl of comfort,",
        "made from the heart."
      ],
      "body": "At Yunshang Rice Noodle, we honor the rich tradition of Yunnan-style rice noodles, where a steaming, flavourful broth brings every ingredient to life. Our signature broth is slow-simmered for over 12 hours, using only high-quality bones to create a naturally rich, delicate taste—no MSG, just pure goodness. We pair it with premium rice noodles made from 100% pure rice, free from additives, for the perfect balance of smoothness and bite. Fresh, locally sourced ingredients complete the bowl, ensuring every bite is nourishing, hearty, and deeply satisfying.",
      "titleImage": "/images/home/en/about-intro/home-about-intro-title-en.png",
      "titleImageAlt": "No time to cook? Try Yunshang Rice Noodle!",
      "aboutButton": "About Us",
      "aboutButtonHref": "/en/about",
      "boneSoupImageAlt": "Yunshang bone broth preparation",
      "playVideoAriaLabel": "Play Yunshang introduction video",
      "videoDialogAriaLabel": "Yunshang introduction video player",
      "closeVideoAriaLabel": "Close video",
      "videoTitle": "Yunshang introduction video"
    },
    "featureCards": {
      "features": [
        {
          "title": "12-Hour Slow-Simmered Broth",
          "titleLines": ["12-Hour", "Slow-Simmered Broth"],
          "imageAlt": "12-hour slow-simmered broth",
          "iconAlt": "12-hour slow-simmered broth icon",
          "lines": [
            "Made with premium pork bones, ham, and chicken, simmered to perfection for deep, rich flavour.",
            "No MSG, no additives — just pure, slow-cooked broth with natural, aromatic richness."
          ]
        },
        {
          "title": "Unlimited Rice Noodle Refills",
          "titleLines": ["Unlimited", "Rice Noodle Refills"],
          "imageAlt": "Rice noodles",
          "iconAlt": "Unlimited rice noodle refills icon",
          "lines": [
            "100% pure rice noodles,",
            "no additives.",
            "Dine-in guests enjoy free refills!"
          ]
        },
        {
          "title": "Fresh & Locally Sourced",
          "titleLines": ["Fresh &", "Locally Sourced"],
          "imageAlt": "Fresh locally sourced ingredients",
          "iconAlt": "Fresh locally sourced ingredients icon",
          "lines": [
            "We use fresh, locally sourced ingredients for the best quality in every bite."
          ]
        }
      ]
    },
    "storeBanner": {
      "imageAlt": "Yunshang restaurant interior",
      "title": "18 Locations Across Canada",
      "subtitle": "Find a Store Near You",
      "storesButton": "Locations",
      "storesButtonHref": "/en/locations"
    },
    "menuShowcase": {
      "leftLabelAlt": "A great bowl of rice noodles",
      "rightLabelAlt": "Half a bowl of toppings",
      "assets": {
        "leftLabel": "/images/home/en/menu-showcase/home-menu-showcase-true-flavours-en.png",
        "rightLabel": "/images/home/en/menu-showcase/home-menu-showcase-top-ingredients-en.png",
        "items": [
          {
            "tag": "/images/home/en/menu-showcase/home-menu-showcase-classic-en.png",
            "image": "/images/home/menu-showcase/过桥米线.png",
            "titleImage": "/images/home/en/menu-showcase/home-menu-showcase-crossing-the-bridge-rice-noodles-en.png"
          },
          {
            "tag": "/images/home/en/menu-showcase/home-menu-showcase-popular-en.png",
            "image": "/images/home/menu-showcase/特色米线.png",
            "titleImage": "/images/home/en/menu-showcase/home-menu-showcase-specialty-rice-noodles-en.png"
          },
          {
            "tag": "/images/home/en/menu-showcase/home-menu-showcase-must-try-en.png",
            "image": "/images/home/menu-showcase/凉菜小吃.png",
            "titleImage": "/images/home/en/menu-showcase/home-menu-showcase-cold-dishes-appetizers-en.png"
          }
        ]
      },
      "items": [
        {
          "title": "Crossing-the-Bridge Series",
          "text": "A timeless dish rooted in Yunnan’s culinary heritage, renowned for its signature steaming broth and delicate flavours. At Yunshang, we honor this tradition with a selection of rich soup bases and 12 carefully chosen ingredients. Served separately, the fresh meats and vegetables are gently cooked in the piping hot broth right at your table before silky rice noodles are added. The result is a perfectly balanced, aromatic, and soul-warming experience in every bite."
        },
        {
          "title": "Signature Rice Noodle Soup",
          "text": "Beyond our classic Crossing-the-Bridge Rice Noodle, we’ve taken traditional bone broth noodles and turned them into an unforgettable experience with bold, unique flavours! From the zesty and spicy Sauerkraut Fish Rice Noodle Soup to the sweet and savory Tomato Rice Noodle Soup With Beef & Enoki Mushroom, and the fiery and irresistible Sichuan-style Braised Pork Intestine & Red Konjac in Rice Noodle Soup—each bowl is packed with flavour that’ll keep you coming back for more! Plus, with endless options to customize your toppings, you can even create your own personalized rice noodle experience!"
        },
        {
          "title": "Cold Dishes, Appetizers & Desserts",
          "text": "At Yunshang Rice Noodle, we offer more than just noodles – our menu is filled with bold, irresistible cold dishes, appetizers, and desserts that will leave you coming back for more! Dive into the fiery, mouthwatering Cold Cut Chicken with Chili Sauce, the tangy, crunchy Potato Slices with Chili Sauce, or the unforgettable, Beef with Chili Sauce and Cilantro—each one bursting with flavour! Don’t miss the addictive Salty Popcorn Chicken, juicy New Orleans Fried Chicken Wings, and crispy, savory Deep Fried Tofu with Garlic Sauce—each bite a flavour explosion you won’t want to stop eating!"
        }
      ],
      "viewMenuButton": "See Menu",
      "viewMenuHref": "/en/menu"
    },
    "orderBanner": {
      "imageAlt": "Yunshang hot broth and rice noodles",
      "titleText": "your perfect noodle bowl awaits!",
      "headingLines": [
        "AFTER A LONG DAY, SKIP THE COOKING",
        "AND ENJOY A WARM, HEARTY NOODLE BOWL!"
      ],
      "pickupButton": "Pick Up",
      "deliveryButton": "Delivery",
      "pickupButtonHref": ORDER_PICKUP_URL,
      "deliveryButtonHref": ORDER_DELIVERY_URL
    }
  },
  "about": {
    "hero": {
      "desktopImage": "/images/about/en/hero/about-hero-desktop-en.jpg",
      "mobileImage": "/images/about/en/hero/about-hero-mobile-en.jpg",
      "alt": "Yunshang About page banner"
    },
    "intro": {
      "icon": "/images/about/decorative/white-icon.png",
      "image": "/images/about/values/rice-noodle-yunshang.jpg",
      "imageAlt": "Yunshang Rice Noodle",
      "title": "Savor the Legacy of China’s Most Beloved Rice Noodles",
      "paragraphs": [
        "With a history spanning over a century, Rice Noodles is one of China’s most treasured culinary traditions. Originating from Yunnan, China, this dish carries a remarkable cultural heritage, passed down through generations.",
        "Unlike ramen or pho, Chinese Crossing-the-Bridge Rice Noodles are served with a steaming hot broth and fresh toppings on the side, allowing you to mix and customize every bite. Simply add the silky rice noodles, let the flavours come together, and enjoy a fresh, flavourful, and soul-warming experience like no other!"
      ]
    },
    "enSections": {
      "toppings": {
        "title": "OUR RICE NOODLE TOPPINGS",
        "titleIcon": "/images/about/decorative/white-icon.png",
        "desktopImage": "/images/about/en/toppings/sidedish-scaled.jpg",
        "mobileImage": "/images/about/en/toppings/sidedish-mobile-990x1024.jpg",
        "imageAlt": "Yunshang rice noodle toppings"
      },
      "bridge": {
        "titleLines": [
          "Why Is It Called",
          "\"Crossing-the-Bridge\" Rice Noodles?",
          "Why Are the Toppings",
          "Served Separately?"
        ],
        "paragraphs": [
          "Legend has it that hundreds of years ago, a devoted wife would bring lunch to her scholar husband, who spent long hours studying on a secluded island. Each day, she crossed a bridge to deliver his meal, but the challenge was keeping the soup hot. She discovered that a layer of oil on top acted as insulation, preserving the broth’s heat. To keep the rice noodles, thinly sliced meats, and tofu skin fresh, she carried them separately, preventing them from getting soggy.",
          "By the time she arrived, the soup was still steaming hot. With a quick mix, the delicate meats cooked instantly, the noodles softened, and a hearty, comforting meal was ready to enjoy. Over the years, this simple act of love became a treasured tradition, and Crossing-the-Bridge Rice Noodles evolved into a symbol of warmth, devotion, and care.",
          "Today, this serving style isn’t just about tradition—it’s an immersive dining experience, allowing you to mix and customize every bite just the way you like it."
        ],
        "decorationImage": "/images/about/en/bridge/resource-2.svg",
        "signOverlayImage": "/images/about/en/bridge/yunshang-and-sign.svg",
        "cloudBackgroundImage": "/images/about/decorative/white-clound-pattern-yunshang.svg",
        "illustrationImage": "/images/about/en/bridge/yunshang-en-rice-noodle-girl-647x1024.png",
        "illustrationAlt": "Yunshang Crossing-the-Bridge Rice Noodles illustration"
      },
      "video": {
        "src": "/images/about/en/video/about-intro.mp4"
      }
    },
    "values": {
      "title": "Savor the Legacy of China’s Most Beloved Rice Noodles",
      "items": [
        {
          "title": "Authentic Rice Noodles",
          "titleLines": ["Authentic", "Rice Noodles"],
          "description": "Made from 100% pure rice, gluten-free, and crafted with traditional techniques for a perfectly chewy, silky bite.",
          "image": "/images/about/values/rice-noodle-yunshang.jpg",
          "imageAlt": "Authentic rice noodles"
        },
        {
          "title": "12-Hour Slow-Simmered Broth",
          "titleLines": ["12-Hour", "Slow-Simmered Broth"],
          "description": "Rich and aromatic, made with real pork bones, free-range chicken, and Yunnan ham—no shortcuts, just pure flavour.",
          "image": "/images/about/values/real-bone-yunshang.jpg",
          "imageAlt": "12-hour slow-simmered broth"
        },
        {
          "title": "A Bowl for Every Craving",
          "titleLines": ["A Bowl", "for Every Craving"],
          "description": "From comforting classics to bold new flavours, there’s something for everyone.",
          "image": "/images/about/values/variety-yunshang.jpg",
          "imageAlt": "A bowl for every craving"
        },
        {
          "title": "Fresh, Quality Ingredients",
          "titleLines": ["Fresh,", "Quality Ingredients"],
          "description": "Only the freshest meats and vegetables, carefully selected every day for a meal you can taste and trust.",
          "image": "/images/about/values/fresh-yunshang.jpg",
          "imageAlt": "Fresh, quality ingredients"
        }
      ]
    },
    "popularDishes": {
      "title": "Our Signature Picks",
      "subtitle": "",
      "ctaLabel": "See Menu",
      "ctaHref": "/en/menu",
      "items": [
        {
          "title": "Original Crossing-the-Bridge Rice Noodle Soup",
          "titleLines": [
            "Original",
            "Crossing-the-Bridge",
            "Rice Noodle Soup"
          ],
          "tagline": "",
          "image": "/images/about/popular/original.jpg",
          "imageAlt": "Original Crossing-the-Bridge Rice Noodle Soup",
          "tagImage": "/images/about/en/popular/about-popular-original-tag-en.png"
        },
        {
          "title": "Tomato Crossing-the-Bridge Rice Noodle Soup",
          "titleLines": [
            "Tomato",
            "Crossing-the-Bridge",
            "Rice Noodle Soup"
          ],
          "tagline": "",
          "image": "/images/about/popular/tomato.jpg",
          "imageAlt": "Tomato Crossing-the-Bridge Rice Noodle Soup",
          "tagImage": "/images/about/en/popular/about-popular-tomato-tag-en.png"
        },
        {
          "title": "Chinese Sauerkraut Fish Rice Noodle Soup",
          "titleLines": [
            "Chinese",
            "Sauerkraut Fish",
            "Rice Noodle Soup"
          ],
          "tagline": "",
          "image": "/images/about/popular/sour-fish.jpg",
          "imageAlt": "Chinese Sauerkraut Fish Rice Noodle Soup",
          "tagImage": "/images/about/en/popular/about-popular-sour-fish-tag-en.png"
        },
        {
          "title": "Tomato Rice Noodle Soup with Beef & Enoki Mushroom",
          "titleLines": [
            "Tomato Rice",
            "Noodle Soup with",
            "Beef & Enoki Mushroom"
          ],
          "tagline": "",
          "image": "/images/about/popular/sour-beef.jpg",
          "imageAlt": "Tomato Rice Noodle Soup with Beef & Enoki Mushroom",
          "tagImage": "/images/about/en/popular/about-popular-sour-beef-tag-en.png"
        }
      ]
    },
    "stores": {
      "title": "18 Locations Across Canada",
      "subtitle": "Find a Store Near You",
      "mapImage": "/images/about/stores/yunshang-map.png",
      "mapAlt": "Yunshang store locations across Canada",
      "ctaLabel": "Locations",
      "ctaHref": "/en/locations"
    }
  },
  "menu": {
    "hero": {
      "title": "Menu",
      "subtitle": "Explore Yunshang’s signature rice noodle soups, cold dishes, appetizers, and desserts."
    },
    "categories": {
      "title": "Categories",
      "items": [
        "All",
        "Crossing-the-Bridge Series",
        "Signature Rice Noodle Soup",
        "Cold Dishes",
        "Appetizers",
        "Desserts"
      ]
    }
  },
  "locations": {
    "hero": {
      "title": "Yunshang Locations",
      "subtitle": "Find a YUNSHANG Store nearest you to visit or order online for pickup or delivery."
    },
    "filterAria": {
      "province": "Province filter",
      "region": "Region filter"
    },
    "directionsLabel": "Get Directions"
  },
  "events": {
    "hero": {
      "title": "Events",
      "subtitle": "Discover Yunshang’s latest promotions and brand events.",
      "desktopImage": "/images/events/hero/rice-noodle-festival-web.webp",
      "mobileImage": "/images/events/hero/rice-noodle-festival-mobile.webp",
      "imageAlt": "Yunshang event banner"
    }
  },
  "footer": {
    "logoAlt": "Yunshang Rice Noodle",
    "homeAriaLabel": "Go to home page",
    "homeHref": "/en",
    "linksLeft": [
      {
        "label": "About Us",
        "href": "/en/about"
      },
      {
        "label": "Promo",
        "href": "/en/events"
      }
    ],
    "linksRight": [
      {
        "label": "Locations",
        "href": "/en/locations"
      },
      {
        "label": "Menu",
        "href": "/en/menu"
      },
      {
        "label": "Online Order",
        "href": "/en/order",
        "opensOrderPopup": true
      }
    ],
    "social": [
      {
        "label": "Facebook",
        "ariaLabel": "Facebook"
      },
      {
        "label": "Instagram",
        "ariaLabel": "Instagram"
      },
      {
        "label": "Redbook",
        "ariaLabel": "Redbook"
      }
    ],
    "wechatSupport": "WeChat",
    "wechatQrAlt": "WeChat QR code",
    "copyright": "© 2023 YUNSHANG RICE NOODLE.",
    "copyrightMobile": " ALL RIGHTS RESERVED."
  },
  "orderPopup": {
    "title": "Online Order",
    "closeAriaLabel": "Close online order dialog",
    "pickupButton": "Pick Up",
    "deliveryButton": "Delivery"
  },
  "placeholderPages": {
    "comingSoon": "This page is under construction.",
    "about": {
      "title": "About Us",
      "subtitle": "Savor the legacy of China’s most beloved rice noodles."
    },
    "menu": {
      "title": "Menu",
      "subtitle": "Explore Yunshang’s rice noodle soups, cold dishes, appetizers, and desserts."
    },
    "locations": {
      "title": "Locations",
      "subtitle": "Find a YUNSHANG Store nearest you to visit or order online for pickup or delivery."
    },
    "events": {
      "title": "Promo",
      "subtitle": "See the latest Yunshang promotions and brand events."
    },
    "order": {
      "title": "Order Delivery",
      "subtitle": "Choose pickup or delivery from participating Yunshang locations."
    }
  }
};
