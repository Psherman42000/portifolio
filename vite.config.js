import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three') || id.includes('@react-three') || id.includes('@react-spring/three')) {
            return 'three-core'
          }

          if (id.includes('framer-motion') || id.includes('gsap')) {
            return 'motion'
          }
        },
      },
    },
  },
})
