import { styled } from "styled-components";

import MainBg from "../../assets/noise.webp";
import Navigation from "./Navigation";
import Kv from "./Kv";
import Coupon from "./Coupon";
import Announcement from "./Announcement";
import Register from "./Register";
import AnnouncementDetail from "./AnnouncementDetail";

const Main = styled.main`
  background-image: url(${MainBg});
`;

const Limit = styled.div`
  width: calc(100dvw - 15px) ;
  max-width: 1280px;
`;

export default function Page() {
  return (
    <Limit>
      <Navigation />
      <Kv />
      <Main className="bg-primary-300 lg:pt-24 pt-20">
        <Coupon />
        <Announcement />
        <AnnouncementDetail />
        <Register />
      </Main>
    </Limit>
  );
}
