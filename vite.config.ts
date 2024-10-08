/// <reference types="vitest" />
import path from "path";
import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  server: {
    host: "0.0.0.0",
    port: 7000,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
