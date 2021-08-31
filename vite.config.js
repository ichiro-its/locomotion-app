import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/suiryoku-app/" : "./",
  plugins: [reactRefresh(), eslintPlugin()],
});
