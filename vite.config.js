import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages разворачивает проект по адресу /ppp/,
  // а локально удобно открывать корень http://localhost:3000/
  base: command === "build" ? "/ppp/" : "/",
  server: {
    port: 3000,
    open: true,
  },
}));
