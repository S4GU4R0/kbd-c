import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets: ['assets/icon/*'],
    // base: "/kbd-c/",
    manifest: {
      name: 'kbd-c',
      short_name: 'c',
      description: 'skill development tool',
      display: 'standalone',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      icons: [
        {
          "src": "assets/icon/favicon.ico",
          "type": "x-icon",
          "purpose": "any maskable"
        },
        {
          "src": "assets/icon/android-chrome-192x192.svg",
          "sizes": "192x192",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/android-chrome-512x512.svg",
          "sizes": "512x512",
          "type": "image/svg+xml",
          "purpose": "any maskable"
        },
        {
          "src": "assets/icon/apple-touch-icon-57x57.svg",
          "sizes": "57x57",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/apple-touch-icon-60x60.svg",
          "sizes": "60x60",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/apple-touch-icon-72x72.svg",
          "sizes": "72x72",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/apple-touch-icon-76x76.svg",
          "sizes": "76x76",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/apple-touch-icon-114x114.svg",
          "sizes": "114x114",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/apple-touch-icon-120x120.svg",
          "sizes": "120x120",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/apple-touch-icon-144x144.svg",
          "sizes": "144x144",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/apple-touch-icon-152x152.svg",
          "sizes": "152x152",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/apple-touch-icon-167x167.svg",
          "sizes": "167x167",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/apple-touch-icon-180x180.svg",
          "sizes": "180x180",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/favicon-16x16.svg",
          "sizes": "16x16",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/favicon-32x32.svg",
          "sizes": "32x32",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/favicon-96x96.svg",
          "sizes": "96x96",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/favicon-128x128.svg",
          "sizes": "128x128",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/favicon-196x196.svg",
          "sizes": "196x196",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/mstile-70x70.svg",
          "sizes": "70x70",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/mstile-144x144.svg",
          "sizes": "144x144",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/mstile-150x150.svg",
          "sizes": "150x150",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/mstile-310x150.svg",
          "sizes": "310x150",
          "type": "image/svg+xml"
        },
        {
          "src": "assets/icon/mstile-310x310.svg",
          "sizes": "310x310",
          "type": "image/svg+xml"
        }
      ]
    }
  })],
  build: {
    outDir: "build", // Keep same as CRA for gh-pages
  },
  // base: "/rations/",
  server: {
    port: 3000,
  },
});