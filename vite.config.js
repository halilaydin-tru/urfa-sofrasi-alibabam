import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/gmap-img': {
        target: 'https://lh3.googleusercontent.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gmap-img/, ''),
        headers: {
          'Referer': 'https://www.google.com/maps',
        },
      },
    },
  },
})
