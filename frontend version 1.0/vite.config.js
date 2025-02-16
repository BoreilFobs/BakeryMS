import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mui/material": "@mui/material/esm",
      "@mui/icons-material": "@mui/icons-material/esm",
    },
  },
});
