import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { alias, build } from "./vite.config.paths";
import macros from "vite-plugin-babel-macros";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    macros(),
    svgr({ exportAsDefault: true }),
    VitePWA({
      manifest: {
        name: "Shmorhun DevIT Client",
        short_name: "SDT",
        theme_color: "#D81B60",
        background_color: "#263238",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [],
      },
    }),
  ],
  resolve: {
    alias,
  },
  build,
  preview: {
    port: 3000,
    open: true,
  },
  server: {
    host: true,
    port: 3000,
    open: true,
  },
});
