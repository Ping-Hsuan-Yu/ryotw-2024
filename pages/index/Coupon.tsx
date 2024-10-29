import { styled } from "styled-components";
import AmartLogo from "../../assets/logo/amart_logo.svg";
import CarrefourLogo from "../../assets/logo/carrefour_logo.svg";
import CosmedLogo from "../../assets/logo/cosmed_logo.svg";
import MatsukiyoLogo from "../../assets/logo/matsukiyo-logo.svg";
import MomoLogo from "../../assets/logo/momo-logo.webp";
import ShopeeLogo from "../../assets/logo/shopee_logo.svg";
import TomodsLogo from "../../assets/logo/Tomods-logo.webp";
import WatsonsLogo from "../../assets/logo/watsons_logo.svg";
import TicketBg from "../../assets/ticket.webp";
import TicketBgM from "../../assets/ticket_m.webp";

import AmartCoupon from "../../assets/coupon/amart-coupon.png";
import CarrefourCoupon from "../../assets/coupon/carrefour-coupon.png";
import CosmedCoupon from "../../assets/coupon/cosmed-coupon.png";
import MatsukiyoCoupon from "../../assets/coupon/matsukiyo-coupon.png";
import MomoCoupon from "../../assets/coupon/momo-coupon.png";
import ShopeeCoupon from "../../assets/coupon/shopee-coupon.png";
import TomodsCoupon from "../../assets/coupon/tomod-coupon.png";
import WatsonsCoupon from "../../assets/coupon/watsons-coupon.png";

import Stamp from "../../assets/stamp.svg";

import { useState } from "react";

const Ticket = styled.section`
  background-image: url(${TicketBgM});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: calc((100vw - 1.5rem) * 2.07);
  @media (min-width: 768px) {
    background-image: url(${TicketBg});
    height: 56.8vw;
    max-height: 727px;
  }
`;

const Triangle = styled.div`
  display: inline-block;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 10px 17.3px 10px 0;
  border-color: transparent #9db453 transparent transparent;
  transform: rotate(90deg);
  @media (min-width: 640px) {
    transform: rotate(0deg);
  }
`;

const brandData = [
  {
    id: "watsons-coupon",
    logo: WatsonsLogo,
    canme: "屈臣氏",
    logoWidth: 179,
    coupon: WatsonsCoupon,
    couponWidth: 356,
  },
  {
    id: "cosmed-coupon",
    logo: CosmedLogo,
    canme: "康是美",
    logoWidth: 181,
    coupon: CosmedCoupon,
    couponWidth: 356,
  },
  {
    id: "carrefour-coupon",
    logo: CarrefourLogo,
    canme: "家樂褔",
    logoWidth: 174,
    coupon: CarrefourCoupon,
    couponWidth: 298,
  },
  {
    id: "amart-coupon",
    logo: AmartLogo,
    canme: "愛買",
    logoWidth: 182,
    coupon: AmartCoupon,
    couponWidth: 298,
  },
  {
    id: "momo-coupon",
    logo: MomoLogo,
    canme: "MOMO",
    logoWidth: 180,
    coupon: MomoCoupon,
    couponWidth: 355,
  },
  {
    id: "shopee-coupon",
    logo: ShopeeLogo,
    canme: "蝦皮商城",
    logoWidth: 180,
    coupon: ShopeeCoupon,
    couponWidth: 355,
  },
  {
    id: "tomods-coupon",
    logo: TomodsLogo,
    canme: "tomods",
    logoWidth: 200,
    coupon: TomodsCoupon,
    couponWidth: 298,
  },
  {
    id: "matsukiyo-coupon",
    logo: MatsukiyoLogo,
    canme: "松本清",
    logoWidth: 182,
    coupon: MatsukiyoCoupon,
    couponWidth: 298,
  },
];

export default function Coupon() {
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponInfo, setCouponInfo] = useState({ src: "", width: 0 });

  const handleLogoOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setShowCoupon(true);
    const { id } = e.currentTarget;
    const newCouponInfo = brandData.find((data) => data.id === id);
    if (newCouponInfo) {
      const { coupon, couponWidth } = newCouponInfo;
      setCouponInfo({ src: coupon, width: couponWidth });
    }
  };
  return (
    <Ticket id="coupon" className="mx-3 md:mx-0 flex flex-col">
      {/* <div className="relative ">
        <img
          className="absolute xl:right-[260px] lg:right-[170px] md:right-[140px] right-[-40px] md:top-[-80px] top-[20px] md:w-[155px] w-[86px]"
          src={Stamp}
          alt=""
        />
      </div> */}
      <div className="text-[24px] sm:text-[36px] lg:text-[48px] font-bold flex text-white tracking-widest h-[calc((100vw-1.5rem)*0.184)] md:h-[13.61vw]">
        <p className="m-auto">各通路優惠券</p>
      </div>
      <div className="grow flex flex-col md:flex-row">
        <div className="basis-1/2 md:basis-[65%]">
          <div className="grid grid-cols-2 ps-8 pe-10 pt-[7vw] gap-x-10 gap-y-[12vw] md:px-10 md:pt-10 md:grid-cols-3 md:gap-y-16 items-center justify-items-center">
            {brandData.map((brand) => (
              <div
                key={brand.id}
                className="cursor-pointer"
                id={brand.id}
                onClick={handleLogoOnClick}
              >
                <img
                  src={brand.logo}
                  alt={brand.canme}
                  width={brand.logoWidth}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/2 md:basis-[35%] flex justify-center items-center md:items-start">
          <div className="flex flex-col items-center">
            {!showCoupon && (
              <div className="flex flex-col sm:flex-row items-center">
                <Triangle className="mb-2 sm:me-2" />
                <p className="text-center text-[#ff7f01] text-xl lg:text-[34px] font-bold tracking-[0.09em] lg:leading-[41px]">
                  <span className="hidden md:inline-block">點擊左邊各通路</span>
                  <span className="md:hidden">點擊上方各通路</span>
                  <br />
                  <span className="text-[23px] lg:text-[36px]">
                    【領取折扣碼】
                  </span>
                </p>
              </div>
            )}
            {showCoupon && (
              <>
                <img
                  src={couponInfo.src}
                  width={couponInfo.width}
                  alt=""
                  className="object-contain h-[calc((100vw-1.5rem)*0.9-48px)] md:h-[35vw]"
                />
                <p className="block sm:hidden mt-2 text-primary-400 tracking-widest text-xs">
                  *手機長按儲存圖片
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Ticket>
  );
}
