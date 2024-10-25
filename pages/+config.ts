import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "登錄發票就抽韓國首爾雙人機票",
  description: "登錄發票就抽韓國首爾雙人機票",

  extends: vikeReact,
} satisfies Config;
