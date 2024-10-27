import { styled } from "styled-components";
import WindowBg from "../../assets/announcement/window.webp";
import Dot from "../../assets/dot.webp";
import Sketch from "../../assets/announcement/sketch.webp";

const Window = styled.div`
  background-image: url(${WindowBg});
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
      <div className="relative h-32">
        <img className="absolute w-full top-[-32px]" src={Sketch} alt="" />
      </div>
      <div className="flex justify-center px-4 md:mx-16">
        <Window className="lg:w-[861px] w-full md:h-[1083px] h-[100vw] z-[1]">
          <div className="text-2xl sm:text-[48px] font-bold text-white text-center tracking-widest mt-8 sm:mt-20 flex justify-center">
            <div className="border-primary-500 border-y-2 px-6 sm:px-28">
              <TitleWithDot className="py-4">活動辦法</TitleWithDot>
            </div>
          </div>
          <p className="text-primary-500 text-center font-bold text-sm sm:text-[28px] leading-[2.5] sm:leading-[62px] tracking-widest mt-10 sm:mt-[160px]">
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
            <span className="text-[#ff7f01] text-xl sm:text-[35px] underline-yellow">
              「韓國首爾雙人來回機票」
            </span>
            <br />及
            <span className="text-[#ff7f01] text-xl sm:text-[35px] underline-yellow">
              各品牌熱銷商品
            </span>
            抽獎資格！
            <br />
          </p>
          <div className="text-primary-500 font-bold tracking-widest text-center flex justify-center mt-6 sm:mt-[100px]">
            <div className="border border-primary-500 px-3 sm:px-[50px] py-2 sm:pt-[35px] sm:pb-[25px] relative rounded-2xl sm:rounded-3xl">
              <p className="text-xl sm:text-[28px] absolute top-[-20px] left-1/2 transform translate-x-[-50%] bg-[#f4fbff] px-4">
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
