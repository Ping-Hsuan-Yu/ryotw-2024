import { styled } from "styled-components";
import WindowBg from "../../assets/announcement/window.webp";
import WindowBgM from "../../assets/announcement/window_m.webp";
import Dot from "../../assets/dot.webp";
import Sketch from "../../assets/announcement/sketch.webp";

const Window = styled.div`
  @media (min-width: 640px) {
    background-image: url(${WindowBg});
  }
  background-image: url(${WindowBgM});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TitleWithDot = styled.h1`
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-image: url(${Dot});
    background-repeat: no-repeat;
    background-size: contain;
    width: 8px;
    height: 8px;
    top: 12px;
    @media (min-width: 640px) {
      width: 11px;
      height: 10px;
      top: 28px;
    }
  }

  &::before {
    left: -20px;
  }

  &::after {
    right: -20px;
  }
  @media (min-width: 640px) {
    &::before {
      left: -30px;
    }

    &::after {
      right: -30px;
    }
  }
`;

export default function Announcement() {
  return (
    <section id="announcement">
      <div className="relative h-16 sm:h-32">
        <img className="absolute w-full sm:top-[-32px]" src={Sketch} alt="" />
      </div>
      <div className="flex justify-center md:mx-16 mx-4">
        <Window className="flex flex-col lg:w-[861px] w-full lg:h-[1083px] md:h-[calc((100vw-8rem)*1.26)] h-[117vw] z-[1]">
          <div className="basis-[21%] text-xl sm:text-4xl lg:text-[48px] font-bold text-white text-center tracking-widest flex justify-center items-center">
            <div className="border-primary-500 border-y sm:border-y-2 px-6 sm:px-20 lg:px-28">
              <TitleWithDot className="py-1 sm:py-6">活動辦法</TitleWithDot>
            </div>
          </div>
          <div className="basis-[45%] flex justify-center items-center">
            <p className="text-primary-500 text-center font-bold text-xs leading-[2.5] sm:text-2xl sm:leading-[55px] lg:text-[28px] lg:leading-[62px] tracking-widest">
              2024年11月25日至2025年1月14日活動期間
              <br />
              凡於各大官方通路購買
              <span className="underline-yellow">呂、魅尚萱、一理潤</span>產品
              <br />
              <span className="text-[#ff7f01]">消費總額滿$</span>
              <span className="text-[#ff7f01] text-2xl sm:text-[44px] tracking-normal">
                399
              </span>
              <br />
              即可獲得
              <span className="text-[#ff7f01] text-lg sm:text-[35px] underline-yellow">
                「韓國首爾雙人來回機票」
              </span>
              <br />及
              <span className="text-[#ff7f01] text-lg sm:text-[35px] underline-yellow">
                各品牌熱銷商品
              </span>
              抽獎資格！
              <br />
            </p>
          </div>
          <div className="basis-[30%] text-primary-500 font-bold tracking-widest text-center flex justify-center items-start">
            <div className="border border-primary-500 px-3 py-2 lg:px-[50px] sm:pt-[35px] sm:pb-[25px] relative rounded-2xl sm:rounded-3xl">
              <p className="absolute text-lg top-[-14px] px-2 sm:text-[28px] sm:top-[-20px] sm:px-4 left-1/2 transform translate-x-[-50%] bg-[#f4fbff]">
                注意事項
              </p>
              <p className="text-sm sm:text-[25px] leading-loose sm:leading-[41px]">
                每張發票<span className="underline-yellow">僅限登錄一次</span>，
                <span className="underline-yellow">獎項不累贈</span>
                <br />
                敬請把握機會！
              </p>
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
}
