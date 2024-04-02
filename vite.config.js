import { fileURLToPath, URL } from 'node:url'
import { setupBuild } from './build/index'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // github仓库名称
  plugins: [
    vue(),
  ],
  build: setupBuild(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // 将static资源也映射到根路径，使得可以直接访问
    // 比如可以用http://localhost:3000/logo.png来访问public下的logo.png文件
    // 默认忽略所有以.开头的文件，所以需要特别配置，以便访问以.开头的文件如.gitignore
    fs: {
      strict: false,
      allow: ['.']
    }
  }
})
