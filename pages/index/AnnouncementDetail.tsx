import { styled } from "styled-components";
import Airplane from "../../assets/announcement/airplane.webp";
import CloudBg from "../../assets/announcement/announcement-bg.svg";
import Seoul from "../../assets/announcement/seoul.webp";
import detail from "./data.json";

const Cloud = styled.div`
  background-image: url(${CloudBg});
  background-position: center;
  position: absolute;
  width: 100%;
  height: 340px;
  top: -330px;
`;

export default function AnnouncementDetail() {
  return (
    <section id="announcement-detail">
      <div className="relative w-full">
        <Cloud />
      </div>
      <div className="flex justify-center bg-white relative">
        <img src={Airplane} alt="" className="absolute lg:w-[1031px]" />
        <section className="flex flex-col gap-8 lg:w-[900px] mt-[112px] px-4">
          {detail.map((text) => (
            <div key={text.title} className="font-bold">
              <h2 className="text-primary-400 text-lg sm:text-[28px] tracking-[0.05em] leading-[51px]">{text.title}</h2>
              {text.content.map((content,index) => (
                <p key={`${content}${index}`} className="text-primary-600 text-base sm:text-[19px] tracking-[0.05em] leading-[31px]">
                  {content}
                </p>
              ))}
            </div>
          ))}
        </section>
      </div>
      <img src={Seoul} alt="" className="bg-white" />
    </section>
  );
}
