import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import packageJson from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(packageJson.version)
  },
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    host: true
  },
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    host: true
  }
})
