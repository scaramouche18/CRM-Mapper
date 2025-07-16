import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { resolve } from "path";
import zipPack from "vite-plugin-zip-pack";
import terser from "@rollup/plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl(), zipPack(), tailwindcss()],
  base: "./",
  // server: { port: 5000 },
  build: {
    outDir: "dist/app",
    manifest: false,
    emptyOutDir: true,
    // Minify and compress production bundle using esbuild
    minify: "esbuild",
    rollupOptions: {
      input: {
        main: resolve("./", "index.html"),
        widget: resolve("./", "settings.html"),
      },
      plugins: [
        // Terser for advanced minification (adjust options as needed)
        terser({
          ecma: "2020", // Target latest supported ES version
          compress: {
            drop_console: true, // Remove console logs (production-safe)
            drop_debugger: true, // Remove debugger statements
          },
        }),
      ],
      // Tree-shaking for unused code elimination
      output: {
        manualChunks: (id) => {
          // Consider creating custom chunks for larger libraries
          // eslint-disable-next-line no-useless-escape
          if (/node_modules([\\/][^\/]+(?:[\\/][^\\/]+)*)/.test(id)) {
            const [, packageName] = id.split("/");
            return packageName;
          }
          return "vendor"; // Chunk for common dependencies
        },
      },
    },
    // Remove sourcemaps for smaller bundle size (consider in dev vs prod)
    sourcemap: false,
  },
});
