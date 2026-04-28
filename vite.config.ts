import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
    hmr: { overlay: false },
  },
  preview: {
    port: 4173,
  },
})
