import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional, if you want to remove `/api` from the request path
      },
    },
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
    },
  },
});
