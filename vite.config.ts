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
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@pages': path.resolve(__dirname, './src/pages'),
      //
      '@assets': path.resolve(__dirname, './src/assets'),
      '@assets/fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@assets/images': path.resolve(__dirname, './src/assets/images'),
      //
      '@components': path.resolve(__dirname, './src/components'),
      '@components/ui': path.resolve(__dirname, './src/components/ui'),
      //
      '@services': path.resolve(__dirname, './src/services'),
      '@services/api': path.resolve(__dirname, './src/services/api'),
      '@services/route': path.resolve(__dirname, './src/services/route'),
      //
      '@utils': path.resolve(__dirname, './src/utils'),
      '@utils/constants': path.resolve(__dirname, './src/utils/constants'),
      '@utils/hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@utils/string': path.resolve(__dirname, './src/utils/string'),
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
