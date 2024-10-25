import { styled } from "styled-components";
import TicketBg from "../../assets/ticket.svg";
import WatsonsLogo from "../../assets/logo/watsons_logo.svg";
import CosmedLogo from "../../assets/logo/cosmed_logo.svg";
import MomoLogo from "../../assets/logo/momo-logo.webp";
import CarrefourLogo from "../../assets/logo/carrefour_logo.svg";
import AmartLogo from "../../assets/logo/amart_logo.svg";
import ShopeeLogo from "../../assets/logo/shopee_logo.svg";
import TomodsLogo from "../../assets/logo/Tomods-logo.webp";
import MatsukiyoLogo from "../../assets/logo/matsukiyo-logo.svg";

const Ticket = styled.section`
  background-image: url(${TicketBg});
  background-repeat: no-repeat;
  background-size: 115%;
  background-position: center;
  height: 53vw;
  max-height: 678px;
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

export default function Coupon() {
  return (
    <Ticket id="coupon">
      <div className="text-[48px] font-bold text-white text-center tracking-widest pt-[5vw] min-[1280px]:pt-[64px]">各通路優惠券</div>
      <div className="flex mt-20">
        <div className="basis-2/3">
          <div className="grid grid-cols-3 gap-x-4 gap-y-16 items-center justify-items-center">
            <div>
              <img src={WatsonsLogo} alt="" width={179} />
            </div>
            <div>
              <img src={CosmedLogo} alt="" width={181} />
            </div>
            <div>
              <img src={MomoLogo} alt="" width={180} />
            </div>
            <div>
              <img src={CarrefourLogo} alt="" width={174} />
            </div>
            <div>
              <img src={AmartLogo} alt="" width={182} />
            </div>
            <div>
              <img src={ShopeeLogo} alt="" width={180} />
            </div>
            <div>
              <img src={TomodsLogo} alt="" width={200} />
            </div>
            <div>
              <img src={MatsukiyoLogo} alt="" width={182} />
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex">
          <div className="m-auto flex items-center">
            <Triangle className="me-4" />
            <p className="text-center text-[#ff7f01] text-[34px] font-bold tracking-[0.09em] leading-[41px]">
              <span>點擊左邊各通路</span>
              <br />
              <span className="text-[36px]">【領取折扣碼】</span>
            </p>
          </div>
        </div>
      </div>
    </Ticket>
  );
}
