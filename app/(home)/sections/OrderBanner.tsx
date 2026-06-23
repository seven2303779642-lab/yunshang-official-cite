import BrandButton from "@/components/BrandButton";



export default function OrderBanner() {

  return (

    <section className="relative min-h-[460px] overflow-hidden bg-black text-white min-[1025px]:min-h-[500px]">

      <img

        src="/images/orderbanner.png"

        alt="云尚米线热汤与米线"

        className="absolute inset-0 h-full w-full object-cover object-center"

        draggable={false}

      />



      <div className="absolute inset-0 bg-black/30" />



      <div className="relative z-20 flex min-h-[460px] flex-col items-center justify-center px-6 pb-[118px] pt-16 text-center min-[1025px]:min-h-[500px] min-[1025px]:pb-[135px] min-[1025px]:pt-20">

        <h2 className="type-display-title !text-white">

          累了别开火,来碗热乎的!

          <br />

          价格实惠,份量实在

        </h2>



        <div className="mt-10 flex flex-col items-center gap-5 min-[768px]:flex-row min-[768px]:gap-[120px]">

          <BrandButton href="/order">自取外卖</BrandButton>

          <BrandButton href="/order">送餐到家</BrandButton>

        </div>

      </div>

    </section>

  );

}

