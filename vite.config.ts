import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  //to allow const Home = { template: '<div>Home</div>' }
  resolve: { 
    alias: { 'vue': 'vue/dist/vue.esm-bundler.js' } 
  }
})
