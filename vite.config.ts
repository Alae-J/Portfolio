import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true,
      }
    }),
  ],
  resolve: {
    alias: {
      root: path.resolve(__dirname, './src/root'),
      helpers: path.resolve(__dirname, './src/helpers'),
      views: path.resolve(__dirname, './src/views'),
      components: path.resolve(__dirname, './src/components'),
      templates: path.resolve(__dirname, './src/templates'),
      assets: path.resolve(__dirname, './src/assets'),
      context: path.resolve(__dirname, './src/context'),
    },
  },
})
