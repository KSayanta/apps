import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgrConf = {
  svgrOptions: { exportType: "named", ref: true, svgo: false, titleProp: true },
  include: "**/*.svg",
};

export default defineConfig({
  plugins: [react(), svgr(svgrConf)],
  base: "/apps/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "chef-claude": resolve(__dirname, "chef-claude/index.html"),
        "meme-generator": resolve(__dirname, "meme-generator/index.html"),
        tenzies: resolve(__dirname, "tenzies/index.html"),
        "assembly-endgame": resolve(__dirname, "assembly-endgame/index.html"),
        mmdb: resolve(__dirname, "mmdb/index.html"),
        watchlist: resolve(__dirname, "mmdb/watchlist/index.html"),
      },
    },
  },
});
