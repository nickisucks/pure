import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-runtime', { useESModules: true }],
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist', // Explicitly set outDir to 'dist'
  },
});