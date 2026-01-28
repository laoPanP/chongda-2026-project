/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite'
// 配置开发服务器、构建行为、插件等，影响整个项目的开发和打包流程。
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { fileURLToPath, URL } from 'node:url'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 获取各种环境下对应的变量
  //@ts-ignore
  const _env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
      VueSetupExtend(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], //矢量图转换vue
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // 新配置项：是否启用 mock localEnabled 和 prodEnabled 等旧配置项已被废弃
        enable: process.env.NODE_ENV === 'development', // 仅在开发环境启用
        // 其他配置
        mockPath: './mock', // Mock 文件存放目录
        logger: true, // 是否显示请求日志
      }),
    ],
    base: '/chongda-2026-project/',
    build: {
      //vite打包优化 手动分包，把对应库放到对应包里面
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
            axios: ['axios'],
            echarts: ['echarts'],
            lodash: ['lodash'],
            element: ['element-plus'],
            moment: ['moment'],
            nprogress: ['nprogress'],
          } as Record<string, string[]>,
        },
      },
    },
    test: {
      // 启用类似 Jest 的全局 API
      globals: true,
      // 使用 happy-dom 模拟 DOM
      environment: 'happy-dom',
      // 支持 TS
      typecheck: {
        // ✅ 修正为对象格式
        enabled: true,
        checker: 'tsc',
      },
      // 测试覆盖率
      coverage: {
        provider: 'v8', // 或 'istanbul'
        reporter: ['text', 'json', 'html'],
      },
    },
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, './src') //基于 文件所在目录（__dirname）解析路径，静态固定，不依赖运行时环境
        // '@': path.resolve('./src')//基于 当前工作目录（process.cwd()）解析路径，动态依赖运行时环境。
        '@': fileURLToPath(new URL('./src', import.meta.url)), // 现代项目更推荐 ESM如果项目使用 ESM 模块（"type": "module")，该方法最优 完全兼容 ESM 和 CJS，路径解析与运行时环境无关
      },
    },
    // scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variable.scss" as *;`,
        },
      },
    },
    // 配置代理——无接口地址，暂用mock模拟数据
    // server: {
    //   proxy: {
    //     [env.VITE_APP_BASE_API]: {
    //       target: env.VITE_SERVE,
    //       // 是否代理跨域
    //       changeOrigin: true,
    //       // 是否重写
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // }
  }
})
