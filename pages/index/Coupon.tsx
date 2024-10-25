import { styled } from "styled-components";
import TicketBg from "../../assets/ticket.webp";
import WatsonsLogo from "../../assets/logo/watsons_logo.svg";
import CosmedLogo from "../../assets/logo/cosmed_logo.svg";
import MomoLogo from "../../assets/logo/momo-logo.webp";
import CarrefourLogo from "../../assets/logo/carrefour_logo.svg";
import AmartLogo from "../../assets/logo/amart_logo.svg";
import ShopeeLogo from "../../assets/logo/shopee_logo.svg";
import TomodsLogo from "../../assets/logo/Tomods-logo.webp";
import MatsukiyoLogo from "../../assets/logo/matsukiyo-logo.svg";

import WatsonsCoupon from "../../assets/coupon/watsons-coupon.png";
import CosmedCoupon from "../../assets/coupon/cosmed-coupon.png";
import MomoCoupon from "../../assets/coupon/momo-coupon.png";
import CarrefourCoupon from "../../assets/coupon/carrefour-coupon.png";
import AmartCoupon from "../../assets/coupon/amart-coupon.png";
import ShopeeCoupon from "../../assets/coupon/shopee-coupon.png";
import TomodsCoupon from "../../assets/coupon/tomod-coupon.png";
import MatsukiyoCoupon from "../../assets/coupon/matsukiyo-coupon.png";

import { useState } from "react";

const Ticket = styled.section`
  background-image: url(${TicketBg});
  background-repeat: no-repeat;
  background-position: center;
  height: 60vw;
  max-height: 727px;
`;

const Triangle = styled.div`
  display: inline-block;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 10px 17.3px 10px 0;
  border-color: transparent #9db453 transparent transparent;
  transform: rotate(0deg);
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
    <Ticket id="coupon">
      <div className="text-[48px] font-bold text-white text-center tracking-widest pt-[5vw] min-[1280px]:pt-[64px]">
        各通路優惠券
      </div>
      <div className="flex">
        <div className="basis-[65%] mt-20">
          <div className="grid grid-cols-3 gap-y-16 items-center justify-items-center">
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
                />
              </div>
            ))}
          </div>
        </div>
        <div className="basis-[35%] mt-4 flex">
          <div className="m-auto flex items-center h-[482px]">
            {!showCoupon && (
              <>
                <Triangle className="me-2" />
                <p className="text-center text-[#ff7f01] text-[34px] font-bold tracking-[0.09em] leading-[41px]">
                  <span>點擊左邊各通路</span>
                  <br />
                  <span className="text-[36px]">【領取折扣碼】</span>
                </p>
              </>
            )}
            {showCoupon && (
              <img src={couponInfo.src} width={couponInfo.width} alt="" />
            )}
          </div>
        </div>
      </div>
    </Ticket>
  );
}
