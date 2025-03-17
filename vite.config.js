import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rvinoth11-Portfolio",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
