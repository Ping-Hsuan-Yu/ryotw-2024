import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [vike({ prerender: true }), react({})],
  base:"/ryotw-2024/"
});