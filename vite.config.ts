import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
// import { visualizer } from 'rollup-plugin-visualizer';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
  plugins: [
    react(),
    // visualizer({ open: true }),
  ],
  css: {
    modules: {
      generateScopedName: '[hash:base64:6]',
    },
    preprocessorOptions: {
      sass: {
        silenceDeprecations: [
          'import',
          'slash-div',
          'global-builtin',
          'legacy-js-api',
          'mixed-decls',
          'color-functions',
        ],
        quietDeps: true,
      },
      scss: {
        silenceDeprecations: [
          'import',
          'slash-div',
          'global-builtin',
          'legacy-js-api',
          'mixed-decls',
          'color-functions',
        ],
        quietDeps: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
