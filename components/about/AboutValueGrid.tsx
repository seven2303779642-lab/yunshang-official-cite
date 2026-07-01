import type { AboutContent } from "@/data/siteContent";

const TITLE_ICON = "/images/about/decorative/white-icon.png";

type AboutValueGridProps = {
  content: AboutContent["values"];
};

export default function AboutValueGrid({ content }: AboutValueGridProps) {
  return (
    <section className="about-value-grid relative overflow-hidden bg-[#fff4ec] px-[10px] py-[100px] min-[768px]:px-[50px] min-[1025px]:flex min-[1025px]:min-h-[700px] min-[1025px]:items-center min-[1025px]:py-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/images/about/decorative/Key-Feature-Bg.png")',
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 justify-items-center gap-6 min-[768px]:grid-cols-2 min-[768px]:justify-center min-[1025px]:grid-cols-[repeat(4,calc((min(100vw,1440px)-100px-72px)/4))] min-[1025px]:max-h-full">
        {content.items.map((item) => (
          <article
            key={item.title}
            className="grid w-full max-w-[370px] grid-rows-[auto_1fr] overflow-hidden bg-[var(--color-red)] text-white min-[768px]:max-w-none min-[768px]:w-full min-[1025px]:w-[calc((min(100vw,1440px)-100px-72px)/4)]"
          >
            <div className="aspect-[368/176] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <div className="grid grid-rows-[auto_auto_1fr] px-5 pb-8 pt-4 min-[768px]:px-7 min-[1025px]:px-6">
              <h3 className="type-feature-title flex items-center justify-center gap-2 text-center min-[1025px]:gap-3">
                <img
                  src={TITLE_ICON}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 select-none min-[768px]:h-6 min-[768px]:w-6"
                  draggable={false}
                />
                <span className="text-[28px] leading-tight min-[768px]:text-[32px] min-[1025px]:text-[30px]">
                  {item.title}
                </span>
                <img
                  src={TITLE_ICON}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 select-none min-[768px]:h-6 min-[768px]:w-6"
                  draggable={false}
                />
              </h3>

              <div className="mx-auto mt-4 h-[2px] w-[85%] bg-white/90 min-[768px]:mt-5" />

              <p className="type-body-copy mt-5 text-center text-white min-[768px]:mt-6 min-[768px]:text-[15px] min-[768px]:leading-[1.8]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
