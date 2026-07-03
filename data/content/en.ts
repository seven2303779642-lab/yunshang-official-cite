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
      "titleImage": "/images/home/order-banner/order-title-en.svg",
      "titleImageAlt": "your perfect noodle bowl awaits!",
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
    "values": {
      "title": "Savor the Legacy of China’s Most Beloved Rice Noodles",
      "items": [
        {
          "title": "Authentic Rice Noodles",
          "description": "Made from 100% pure rice, gluten-free, and crafted with traditional techniques for a perfectly chewy, silky bite.",
          "image": "/images/about/values/rice-noodle-yunshang.jpg",
          "imageAlt": "Authentic rice noodles"
        },
        {
          "title": "12-Hour Slow-Simmered Broth",
          "description": "Rich and aromatic, made with real pork bones, free-range chicken, and Yunnan ham—no shortcuts, just pure flavour.",
          "image": "/images/about/values/real-bone-yunshang.jpg",
          "imageAlt": "12-hour slow-simmered broth"
        },
        {
          "title": "Fresh, Quality Ingredients",
          "description": "Only the freshest meats and vegetables, carefully selected every day for a meal you can taste and trust.",
          "image": "/images/about/values/fresh-yunshang.jpg",
          "imageAlt": "Fresh, quality ingredients"
        },
        {
          "title": "A Bowl for Every Craving",
          "description": "From comforting classics to bold new flavours, there’s something for everyone.",
          "image": "/images/about/values/variety-yunshang.jpg",
          "imageAlt": "A bowl for every craving"
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
          "tagline": "",
          "image": "/images/about/popular/original.jpg",
          "imageAlt": "Original Crossing-the-Bridge Rice Noodle Soup",
          "tagImage": "/images/about/en/popular/about-popular-original-tag-en.png"
        },
        {
          "title": "Tomato Crossing-the-Bridge Rice Noodle Soup",
          "tagline": "",
          "image": "/images/about/popular/tomato.jpg",
          "imageAlt": "Tomato Crossing-the-Bridge Rice Noodle Soup",
          "tagImage": "/images/about/en/popular/about-popular-tomato-tag-en.png"
        },
        {
          "title": "Chinese Sauerkraut Fish Rice Noodle Soup",
          "tagline": "",
          "image": "/images/about/popular/sour-fish.jpg",
          "imageAlt": "Chinese Sauerkraut Fish Rice Noodle Soup",
          "tagImage": "/images/about/en/popular/about-popular-sour-fish-tag-en.png"
        },
        {
          "title": "Tomato Rice Noodle Soup with Beef & Enoki Mushroom",
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
    },
    "featuredItems": {
      "title": "Popular Picks",
      "subtitle": "Find your next bowl from Yunshang’s signature rice noodle soups.",
      "ctaLabel": "Online Order",
      "ctaHref": "/en/order",
      "items": [
        {
          "title": "Original Crossing-the-Bridge Rice Noodle Soup",
          "description": "A rich bone broth simmered for 12 hours, paired with 12 flavourful toppings and rice noodles. The broth is delicious and nutrient-rich.",
          "image": "/images/menu/items/original-bone-broth.jpg",
          "imageAlt": "Original Crossing-the-Bridge Rice Noodle Soup",
          "badges": [
            "Classic"
          ]
        },
        {
          "title": "Tomato Crossing-the-Bridge Rice Noodle Soup",
          "description": "Made with a tangy-sweet broth from fresh tomatoes, paired with 12 fresh ingredients and rice noodles. The broth is tangy and delicious.",
          "image": "/images/menu/items/tomato-rice-noodle.jpg",
          "imageAlt": "Tomato Crossing-the-Bridge Rice Noodle Soup",
          "badges": [
            "Signature",
            "Vegetarian Option Available"
          ]
        },
        {
          "title": "Chinese Sauerkraut Fish Rice Noodle Soup",
          "description": "Made with sauerkraut and fresh fish slices as the main ingredients, paired with a unique sauerkraut broth.",
          "image": "/images/menu/items/pickled-fish.jpg",
          "imageAlt": "Chinese Sauerkraut Fish Rice Noodle Soup",
          "badges": [
            "Medium Spicy",
            "Must Try"
          ]
        },
        {
          "title": "Spicy & Sour Rice Noodle Soup With Beef & Enoki Mushroom",
          "description": "Featuring a bold, tangy, and spicy broth, complemented by tender beef slices and delicate enoki mushrooms.",
          "image": "/images/menu/items/sour-beef.jpg",
          "imageAlt": "Spicy & Sour Rice Noodle Soup With Beef & Enoki Mushroom",
          "badges": [
            "Hot",
            "Signature"
          ]
        },
        {
          "title": "Spicy Crossing-the-Bridge Rice Noodle Soup",
          "description": "Made with a signature Sichuan spicy base, featuring a rich and bold broth paired with 12 fresh ingredients and rice noodles. Full of spice and aroma, it offers a unique Sichuan flavour experience.",
          "image": "/images/menu/items/spicy-rice-noodle.jpg",
          "imageAlt": "Spicy Crossing-the-Bridge Rice Noodle Soup",
          "badges": [
            "Medium Spicy"
          ]
        },
        {
          "title": "Green Peppercorn Rice Noodle Soup",
          "description": "Made with a broth of Sichuan peppercorns and spicy flavours, paired with 12 fresh ingredients and rice noodles, it offers a fragrant, spicy taste with a numbing aroma and refreshing flavour.",
          "image": "/images/menu/items/peppercorn-rice-noodle.jpg",
          "imageAlt": "Green Peppercorn Rice Noodle Soup",
          "badges": [
            "Medium Spicy"
          ]
        }
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
    "filters": {
      "title": "Select Province",
      "items": [
        "All",
        "Alberta",
        "British Columbia",
        "Ontario",
        "Manitoba"
      ]
    },
    "locations": {
      "title": "Yunshang Locations",
      "subtitle": "Find a YUNSHANG Store nearest you to visit or order online for pickup or delivery.",
      "directionsLabel": "Get Directions",
      "items": [
        {
          "name": "Warden",
          "province": "Ontario",
          "region": "Scarborough",
          "address": "Unit C1-1a, 7060 Warden Ave., Markham, ON L3R 5V1",
          "phone": "(905) 604-1258",
          "hours": "Mon-Sun 11:00AM – 11:00PM",
          "image": "/images/stores/locations/warden.png",
          "imageAlt": "Warden",
          "directionsHref": "#"
        },
        {
          "name": "First Markham Place Branch",
          "province": "Ontario",
          "region": "Markham",
          "address": "Unit 16, 3235 Highway 7 East, Markham, ON L3R 3P3",
          "phone": "(905) 604-5789",
          "hours": "Mon-Sun 11:00AM – 02:00AM",
          "image": "/images/stores/locations/fmp.png",
          "imageAlt": "First Markham Place Branch",
          "directionsHref": "#"
        },
        {
          "name": "Bayview Hill",
          "province": "Ontario",
          "region": "Richmond Hill",
          "address": "Unit 16, 9665 Bayview Ave, Richmond Hill, ON L4C 9V4",
          "phone": "(905) 237-9758",
          "hours": "Mon-Sun 11:30AM – 10:00PM",
          "image": "/images/stores/locations/bayview.png",
          "imageAlt": "Bayview Hill",
          "directionsHref": "#"
        },
        {
          "name": "Unionville",
          "province": "Ontario",
          "region": "Markham",
          "address": "Unit C4, 8380 Kennedy Rd, Markham, ON L3R 0W4",
          "phone": "(905) 305-6661",
          "hours": "Mon-Sun 11:00AM – 10:00PM",
          "image": "/images/stores/locations/unionville.png",
          "imageAlt": "Unionville",
          "directionsHref": "#"
        },
        {
          "name": "North York",
          "province": "Ontario",
          "region": "North York",
          "address": "Unit 5, 5285 Yonge St, North York, ON M2N 5R3",
          "phone": "(416) 223-6662",
          "hours": "Mon-Sun 11:30AM – 5:00AM",
          "image": "/images/stores/locations/north-york.png",
          "imageAlt": "North York",
          "directionsHref": "#"
        },
        {
          "name": "Scarborough",
          "province": "Ontario",
          "region": "Scarborough",
          "address": "Unit 32, 4186 Finch Ave E, Scarborough, ON M1S 3V1",
          "phone": "(416) 298-4567",
          "hours": "Mon-Sun 11:00AM – 02:00AM",
          "image": "/images/stores/locations/scarborough.png",
          "imageAlt": "Scarborough",
          "directionsHref": "#"
        },
        {
          "name": "Downtown Toronto",
          "province": "Ontario",
          "region": "Toronto",
          "address": "414 Dundas St W, Toronto, ON M5T 1G7",
          "phone": "(647) 523-5555",
          "hours": "Mon-Thur & Sun 11:00AM – 10:30PM\nFri-Sat 11:00AM – 11:00PM",
          "image": "/images/stores/locations/downtown-toronto.png",
          "imageAlt": "Downtown Toronto",
          "directionsHref": "#"
        },
        {
          "name": "Burnaby",
          "province": "British Columbia",
          "region": "Burnaby",
          "address": "Unit 1605, 4500 Kingsway, Burnaby, BC V5H 2A9",
          "phone": "(604) 568-1616",
          "hours": "Mon-Sun 10:00AM – 12:00AM",
          "image": "/images/stores/locations/burnaby.png",
          "imageAlt": "Burnaby",
          "directionsHref": "#"
        },
        {
          "name": "UBC Branch",
          "province": "British Columbia",
          "region": "Vancouver",
          "address": "Unit 201, 5728 University Blvd, Vancouver, BC V6T 1K6",
          "phone": "(604) 558-3816",
          "hours": "Mon-Sun 10:00AM – 10:00PM",
          "image": "/images/stores/locations/vancouver.png",
          "imageAlt": "UBC Branch",
          "directionsHref": "#"
        },
        {
          "name": "Calgary",
          "province": "Alberta",
          "region": "Calgary",
          "address": "111 2 Ave SE , Calgary, AB T2G 0B2",
          "phone": "(587) 353-5488",
          "hours": "Mon-Sun 11:00AM – 10:00PM",
          "image": "/images/stores/locations/calgary.png",
          "imageAlt": "Calgary",
          "directionsHref": "#"
        },
        {
          "name": "Edmonton",
          "province": "Alberta",
          "region": "Edmonton",
          "address": "10167 109 St. NW, Edmonton, AB T5J 3M5",
          "phone": "(587) 402-8979",
          "hours": "Mon-Sun 11:00AM – 11:00PM",
          "image": "/images/stores/locations/edmonton.png",
          "imageAlt": "Edmonton",
          "directionsHref": "#"
        }
      ]
    }
  },
  "events": {
    "hero": {
      "title": "Events",
      "subtitle": "Discover Yunshang’s latest promotions and brand events.",
      "desktopImage": "/images/events/hero/rice-noodle-festival-web.webp",
      "mobileImage": "/images/events/hero/rice-noodle-festival-mobile.webp",
      "imageAlt": "Yunshang event banner"
    },
    "list": {
      "title": "Events",
      "subtitle": "Stay updated on Yunshang promotions, seasonal campaigns, and new dishes.",
      "ctaLabel": "View Details",
      "items": [
        {
          "title": "2026 Rice Noodle Festival | 2nd Bowl 50% Off",
          "date": "May 25 – May 31, 2026",
          "excerpt": "The annual Yunshang Rice Noodle Festival is back! VIP members who dine in and order any two rice noodle bowls in the same transaction will receive 50% off the lower-priced bowl.",
          "image": "/images/events/hero/rice-noodle-festival-web.webp",
          "imageAlt": "2026 Rice Noodle Festival | 2nd Bowl 50% Off",
          "href": "#",
          "tag": "Festival"
        },
        {
          "title": "Yunshang 9th Anniversary",
          "date": "Aug 30 – Sept 1, 2025",
          "excerpt": "Nine amazing years, same delicious promise — and we’re celebrating big! For 3 days only, enjoy 9 of our most-loved noodle bowls for just $9.99 each.",
          "image": "/images/events/cards/ninth-anniversary.png",
          "imageAlt": "Yunshang 9th Anniversary",
          "href": "#",
          "tag": "Anniversary"
        },
        {
          "title": "Free Coconut Lava Ball for Kids",
          "date": "February 17–19, 2024",
          "excerpt": "Happy Family Day long weekend! From February 17th, 2024 to February 19th, 2024, children under 12 years old will receive a complimentary dessert.",
          "image": "/images/events/cards/family-day.jpg",
          "imageAlt": "Free Coconut Lava Ball for Kids",
          "href": "#",
          "tag": "Holiday"
        },
        {
          "title": "New Dish Tasting Event",
          "date": "November 15th, 2024 ~ December 15th, 2024",
          "excerpt": "The New fall-winter limited edition—Chicken & Pork Tripe Rice Noodle Soup with Peppercorn is now available! Redeem your New Dish Coupon and complete a survey to enjoy a free taste.",
          "image": "/images/events/cards/pork-tripe-web.jpg",
          "imageAlt": "New Dish Tasting Event",
          "href": "#",
          "tag": "New Dish"
        }
      ]
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
