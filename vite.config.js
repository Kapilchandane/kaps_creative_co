
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/kaps_creative_co/",
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },
});
