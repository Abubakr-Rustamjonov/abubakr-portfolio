import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` keeps asset URLs relative, so the site works both at
// github.io/<repo>/ and on any other static host or custom domain.
export default defineConfig({
  base: './',
  plugins: [react()],
})
