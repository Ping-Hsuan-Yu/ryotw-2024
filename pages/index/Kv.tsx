import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import KvRyo from "../../assets/kv/Ryo_KV.webp";
import KvIlliyoon from "../../assets/kv/illiyoon_KV.webp";
import KvMiseenscene from "../../assets/kv/miseenscene_KV.webp";
import KvRyoM from "../../assets/kv/Ryo_KV_m.webp";
import KvIlliyoonM from "../../assets/kv/illiyoon_KV_m.webp";
import KvMiseensceneM from "../../assets/kv/miseenscene_KV_m.webp";
import { useEffect, useState } from "react";

export default function Kv() {
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        pagination
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
      >
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={KvRyo}
              type="image/webp"
            />
            <img src={KvRyoM} alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={KvMiseenscene}
              type="image/webp"
            />
            <img src={KvMiseensceneM} alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={KvIlliyoon}
              type="image/webp"
            />
            <img src={KvIlliyoonM} alt="" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
