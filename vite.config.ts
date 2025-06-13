import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], server: {
    // Allow specific hosts
    allowedHosts: ['tristanspc.tailda327a.ts.net', 'tristanspc.tail3acc46.ts.net']
  }
})
