import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Esto repara los ruteos con '@/' que vimos en tu componente Home
      '@': path.resolve(__dirname, './src'),
    },
  },
});