const features = [
  {
    title: "12小时鲜骨熬汤",
    image: "/images/featurecard/fc1-1.png",
    icon: "/images/featurecard/fc1-2.png",
    imageAlt: "鲜骨熬汤",
    iconAlt: "12小时鲜骨熬汤图标",
    lines: [
      "拒绝科技与狠活，",
      "只用猪骨、老母鸡、火腿等新鲜好料。100%无添加，天天熬汤看得见！",
    ],
  },
  {
    title: "米线无限续",
    image: "/images/featurecard/fc2-1.png",
    icon: "/images/featurecard/fc2-2.png",
    imageAlt: "米线",
    iconAlt: "米线无限续图标",
    lines: ["纯大米米线，", "堂食无限量供应，", "想续就续，吃饱吃好不加价！"],
  },
  {
    title: "新鲜食材,本地优选",
    image: "/images/featurecard/fc3-1.png",
    icon: "/images/featurecard/fc3-2.png",
    imageAlt: "新鲜番茄食材",
    iconAlt: "新鲜食材图标",
    lines: ["实打实的真材实料，品质无忧，每一口都放心！"],
  },
];

export default function FeatureCards() {
  return (
    <section className="relative overflow-hidden bg-[#fff4ec] py-20 min-[1025px]:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/images/featurecard/featurecard-background.png")',
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-6 min-[768px]:grid-cols-3 min-[1025px]:gap-8">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="grid grid-rows-[auto_1fr] overflow-hidden bg-[var(--color-red)] text-white"
          >
            <div className="aspect-[368/176] w-full overflow-hidden">
              <img
                src={feature.image}
                alt={feature.imageAlt}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <div className="grid grid-rows-[52px_auto_1fr] px-9 pb-10 pt-5 min-[1025px]:px-10">
              <h3 className="type-feature-title flex items-center justify-center text-center">
                {feature.title}
              </h3>

              <div className="mt-5 h-px w-full bg-white/90" />

              <div className="mt-7 grid grid-cols-[92px_1fr] items-center gap-6 min-[1025px]:grid-cols-[96px_1fr] min-[1025px]:gap-8">
                <img
                  src={feature.icon}
                  alt={feature.iconAlt}
                  className="w-[92px] select-none min-[1025px]:w-[96px]"
                  draggable={false}
                />

                <p className="type-body-copy-emphasis text-white">
                  {feature.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
