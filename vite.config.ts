import { defineConfig } from 'vite';
//@ts-expect-error
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      //@ts-expect-error
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
});
