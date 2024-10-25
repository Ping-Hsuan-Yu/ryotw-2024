import { styled } from "styled-components";
import WindowBg from "../../assets/announcement/window.webp";
import Dot from "../../assets/dot.webp";
import AnnouncementDetail from "./AnnouncementDetail";

const Window = styled.div`
  background-image: url(${WindowBg});
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
    background-size: auto;
    width: 11px;
    height: 10px;
    top: 32px;
  }

  &::before {
    left: -30px;
  }

  &::after {
    right: -30px;
  }
`;

export default function Announcement() {
  return (
    <section id="announcement">
      <div className="w-full flex justify-center">
        <Window className="w-[861px] h-[1083px] z-[1]">
          <div className="text-[48px] font-bold text-white text-center tracking-widest mt-20 flex justify-center">
            <div className="border-primary-500 border-y-2 px-28 py-1">
              <TitleWithDot>活動辦法</TitleWithDot>
            </div>
          </div>
          <p className="text-primary-500 text-center font-bold text-[28px] leading-[62px] tracking-widest mt-[160px]">
            2024年11月25日至2025年1月14日活動期間
            <br />
            凡於各大官方通路購買
            <span className="underline-yellow">呂、魅尚萱、一理潤</span>產品
            <br />
            <span className="text-[#ff7f01]">消費總額滿$</span>
            <span className="text-[#ff7f01] text-[44px] tracking-normal">
              399
            </span>
            <br />
            即可獲得
            <span className="text-[#ff7f01] text-[35px] underline-yellow">
              「韓國首爾雙人來回機票」
            </span>
            <br />及
            <span className="text-[#ff7f01] text-[35px] underline-yellow">
              各品牌熱銷商品
            </span>
            抽獎資格！
            <br />
          </p>
          <div className="text-primary-500 font-bold tracking-widest text-center flex justify-center mt-[100px]">
            <div className="border border-primary-500 px-[50px] pt-[35px] pb-[25px] relative rounded-3xl">
              <p className="text-[28px] absolute top-[-20px] left-1/2 transform translate-x-[-50%] bg-[#f4fbff] px-4">
                注意事項
              </p>
              <p className="text-[25px] leading-[41px]">
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
