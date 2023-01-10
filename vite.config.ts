import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

const pathSrc = path.resolve(__dirname, "./src");


// https://vitejs.dev/config/
export default defineConfig({
  base: "/bennx-homepage/",
  plugins: [react(), tsconfigPaths()],
  build: {
    manifest: false,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
