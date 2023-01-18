import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solidPlugin(), 
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "sitelen pona tester",
        short_name: "sitelen pona",
        icons: [
          {
            src: 'logo192.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: 'logo512.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      }
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  base: "",
});
