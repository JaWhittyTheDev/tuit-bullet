import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import obfuscator from 'vite-plugin-obfuscator';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === 'production'
      ? [
          obfuscator({
            compact: true,
            controlFlowFlattening: true,
            deadCodeInjection: true,
            stringArray: true,
            rotateStringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayThreshold: 0.75,
          }),
        ]
      : []),
  ],
  server: {
    host: true,
    allowedHosts: ['localhost', '373e-81-26-204-133.ngrok-free.app'],
  },
}));