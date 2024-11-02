import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "呂｜魅尚萱｜一理潤 登錄發票抽獎活動",
  description: "購買呂、魅尚萱、一理潤產品，消費總額滿$399，即可獲得「韓國首爾雙人來回機票」及各品牌熱銷商品抽獎資格！",

  extends: vikeReact,
} satisfies Config;
