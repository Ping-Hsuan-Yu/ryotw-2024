import "swiper/css";
import "swiper/css/navigation";
import KvRyo from "../../assets/kv/Ryo_KV.webp";
import KvMiseenscene from "../../assets/kv/miseenscene_KV.webp";
import KvIlliyoon from "../../assets/kv/illiyoon_KV.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import 'swiper/css/pagination';


export default function Kv() {
  return (
    <section>
      <Swiper modules={[Navigation, Autoplay, Pagination]} pagination navigation autoplay={{ delay: 2500, disableOnInteraction: false }} loop>
        <SwiperSlide>
          <img src={KvRyo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={KvMiseenscene} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={KvIlliyoon} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
