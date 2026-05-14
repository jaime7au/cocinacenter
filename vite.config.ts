import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  server: {
    host: true,
    port: 5174,
    allowedHosts: true
  },
  plugins: [react()],
  build: {
    // SE ELIMINÓ 'lib' para que compile el index.html principal
    // SE ELIMINÓ 'external' para que Vercel incluya React y React-DOM en la web
    sourcemap: true,
    minify: 'terser'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
