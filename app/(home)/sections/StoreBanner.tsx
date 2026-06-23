import BrandButton from "@/components/BrandButton";

export default function StoreBanner() {
  return (
    <section className="relative h-[530px] overflow-hidden bg-black min-[1025px]:h-[520px]">
      <img
        src="/images/门店.jpg"
        alt="云尚米线门店环境"
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="type-display-title !text-white">
          全加拿大18家分店
        </h2>

        <p className="type-body-copy-emphasis mt-6 text-white">
          寻找离您最近的云尚米线分店
        </p>

        <div className="relative mt-7 inline-flex items-center justify-center">
          <BrandButton href="/stores">查看附近门店</BrandButton>
        </div>
      </div>
    </section>
  );
}
