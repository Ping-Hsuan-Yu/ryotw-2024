import type { Config } from "tailwindcss";

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: { 600: "#506219", 500: "#646f33", 400: "#9db453", 300: "#e3eab2" },
      },
    },
  },
  plugins: [],
} satisfies Config;
