import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  base: './',
  plugins: [
    react(),
  ],
  server: {
    host: true,
    allowedHosts: ['localhost'],
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
}));