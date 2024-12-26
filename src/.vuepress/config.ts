import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "冰美式",
  description: "冰美式",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
