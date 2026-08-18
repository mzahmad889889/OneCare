import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// `base` is relative so the same build works on Vercel (served at /) and on
// GitHub Pages (served at /OneCare/).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
