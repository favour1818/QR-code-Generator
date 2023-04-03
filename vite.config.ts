import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://favour1818.github.io/QR-code-Generator',
  plugins: [react()],
})
