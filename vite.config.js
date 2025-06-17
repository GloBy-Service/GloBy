import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://dev.globy.space',
        changeOrigin: true,
        // rewrite silindi, çünki backend də /api prefiksini gözləyir
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
  optimizeDeps: {
    include: ['pdfjs-dist/legacy/build/pdf'],
    exclude: ['pdfjs-dist']
  }
})
