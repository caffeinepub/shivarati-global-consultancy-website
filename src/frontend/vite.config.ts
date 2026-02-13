import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        'product-offerings': resolve(__dirname, 'product-offerings.html'),
        gdpr: resolve(__dirname, 'gdpr.html'),
        'why-choose-us': resolve(__dirname, 'why-choose-us.html'),
        contact: resolve(__dirname, 'contact.html'),
        disclaimer: resolve(__dirname, 'disclaimer.html'),
      },
    },
  },
  base: './',
});
