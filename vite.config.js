import { loadEnv, defineConfig } from 'vite'
import dayjs from 'dayjs'
import { visualizer } from 'rollup-plugin-visualizer'

import pkg from './package.json'
import { getMyIp, parseEnv } from './vite/utils'
import { setupPlugins } from './vite/plugins'
import { alias } from './vite/alias'

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

export default ({ command, mode }) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))

  return defineConfig({
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
      dedupe: ['vue-demi']
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    clearScreen: true, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    server: {
      host: '127.0.0.1',
      https: false,
      port: env.VITE_APP_PORT,
      strictPort: false,
      open: `http://${getMyIp()}:${env.VITE_APP_PORT}/mock/`,
      proxy: {
        '/api': {
          target: env.VITE_APP_API_PROXY,
          changeOrigin: true
          // rewrite: path => path.replace(/^\/api/, '/api/v1')
        }
      }
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: env.VITE_APP_OUTPUT_DIR,
      minify: 'esbuild',
      // minify: 'terser',
      /**
       * 当 minify=“minify:'terser'” 解开注释
       */
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     drop_console:  env.VITE_DROP_CONSOLE,
      //   },
      // },
      brotliSize: false, // 关闭 brotliSize 显示可以稍微减少打包时间
      chunkSizeWarningLimit: 2000,
      // Rollup Options
      // https://vitejs.dev/config/build-options.html#build-rollupoptions
      rollupOptions: {
        output: {
          manualChunks: {
            // Split external library from transpiled code.
            vue: [
              'vue',
              'vue-router',
              'vue-router/composables',
              'vuex',
              // 'vuex-persist',
              // 'deepmerge',
              '@logue/vue2-helpers',
              '@logue/vue2-helpers/teleport',
              '@logue/vue2-helpers/vue-router',
              '@logue/vue2-helpers/vuex'
            ]
          },
          plugins: [
            mode === 'analyze'
              ? // rollup-plugin-visualizer
                // https://github.com/btd/rollup-plugin-visualizer
                visualizer({
                  open: true,
                  filename: 'dist/stats.html'
                  // gzipSize: true,
                  // brotliSize: true,
                })
              : undefined
          ]
        }
      }
    },
    esbuild: {
      pure: env.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    }
  })
}
