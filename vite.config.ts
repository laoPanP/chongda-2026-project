import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueSetupExtend()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') //基于 文件所在目录（__dirname）解析路径，静态固定，不依赖运行时环境
      // '@': path.resolve('./src')//基于 当前工作目录（process.cwd()）解析路径，动态依赖运行时环境。
      // '@': fileURLToPath(new URL('./src', import.meta.url))// 现代项目更推荐 ESM如果项目使用 ESM 模块（"type": "module")，该方法最优 完全兼容 ESM 和 CJS，路径解析与运行时环境无关
    }
  }
})
