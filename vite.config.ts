import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Brotli + Gzip for server delivery
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
    compression({ algorithm: 'gzip', ext: '.gz' }),
  ],
  build: {
    // Warn only above 400KB — not the default 500KB
    chunkSizeWarningLimit: 400,
    // Use esbuild (faster) — terser is slower and marginal gain
    minify: 'esbuild',
    // Inline assets only if very tiny (keep below 4KB)
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        // Split framer-motion and react-router into their own chunks
        // so the hero/above-the-fold code is tiny
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-markdown': ['react-markdown'],
        },
      },
    },
  },
});
