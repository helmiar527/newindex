import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "vitejspreview.helmiar527.my.id",
      "vitejsdev.helmiar527.my.id",
      // host lain yang diizinkan jika ada
    ],
  },
});
