import vue from '@vitejs/plugin-vue2'
import { createHtmlPlugin } from 'vite-plugin-html'
import { getStaticVersion } from '../../hooks/utils/models/staticVersion'
import stickToDateTime from '../../hooks/utils/models/stickToDateTime'
import viteJsx from '../viteJsx'
import { mockPlugin } from './mockPlugin'

export function setupPlugins(isBuild, env) {
  const vitePlugins = [
    vue(),
    viteJsx({}),
    createHtmlPlugin({
      minify: isBuild,
      viteNext: true,
      inject: {
        data: {
          title: env.VITE_APP_PROJECT_NAME,
          STATIC_VERSION: getStaticVersion(),
          PUBLISH_TIME: stickToDateTime(Date.now())
        }
      }
    })
  ]

  if (isBuild) {
    vitePlugins.push(mockPlugin('void bootstrap()'))
  } else {
    vitePlugins.push(mockPlugin("import('@/mock').catch(bootstrap).finally(bootstrap)"))
  }
  return vitePlugins
}
