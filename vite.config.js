import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
  },
  optimizeDeps: {
    exclude: ["@nomicfoundation/solidity-analyzer-linux-x64-musl", "@nomicfoundation/solidity-analyzer-linux-x64-gnu"],
    esbuildOptions: {
      target: 'es2020',
    },
  },
})
