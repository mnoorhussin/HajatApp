import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

/**
 * Preload the navbar logo.
 *
 * Lighthouse reports that logo is the LCP element on both mobile and desktop,
 * and that it fails `requestDiscoverable`: this is a client-rendered app, so the
 * <img> is not in the HTML the server sends. The browser only learns the URL
 * after react-dom and the app chunk have downloaded, parsed and rendered, which
 * is why mobile LCP sat at 5.9s while FCP was 4.7s.
 *
 * The tag cannot simply be written into index.html because Vite content-hashes
 * the filename. So it is injected once the bundle exists and the real name is
 * known. In dev nothing is hashed, so the source path is used instead.
 */
function hajatiLogoPreload(): Plugin {
  return {
    name: 'hajati-logo-preload',
    // 'post' is what makes ctx.bundle available during build.
    enforce: 'post',
    transformIndexHtml(_html, ctx) {
      let href = '/src/assets/logo.webp';

      if (ctx.bundle) {
        const emitted = Object.keys(ctx.bundle).find((f) =>
          /(^|\/)logo-[\w-]+\.webp$/.test(f),
        );
        // If the asset is ever renamed, inject nothing rather than preload a
        // 404 — a broken preload costs a request and warns in the console.
        if (!emitted) return;
        href = `/${emitted}`;
      }

      return [
        {
          tag: 'link',
          attrs: { rel: 'preload', as: 'image', href, fetchpriority: 'high' },
          injectTo: 'head-prepend',
        },
      ];
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    hajatiLogoPreload(),
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
        /*
         * Keep the long-lived vendor code in its own cacheable chunks.
         *
         * This used to be the object form, keyed by package name, and it did
         * not work: that map is matched against resolved module ids, so
         * 'react-dom' never captured 'react-dom/client' (what main.tsx imports)
         * and 'react' never captured 'react/jsx-runtime'. vendor-react built
         * out to literally 1 byte, react and react-dom fell into the entry
         * chunk, and the JSX runtime was swept into vendor-markdown — so every
         * visitor downloaded the 117KB markdown chunk just to render JSX, which
         * is what Lighthouse was reporting as ~92KB of unused JavaScript.
         *
         * Matching on the path means subpath imports land in the right place.
         * The trailing slash matters: /react/ must not match react-markdown.
         */
        manualChunks(id) {
          const p = id.replace(/\\/g, '/');
          if (!p.includes('/node_modules/')) return;

          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(p)) return 'vendor-react';
          if (/\/node_modules\/react-router(-dom)?\//.test(p)) return 'vendor-router';
          if (/\/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(p)) return 'vendor-motion';

          // react-markdown and its unified/remark tree are deliberately NOT
          // named here. Both importers (ChatMarkdown, PolicyPage) are dynamic,
          // so Rollup gives them a shared chunk on its own — and because no
          // static edge names it, it stays out of the entry's preload list.
        },
      },
    },
  },
});
