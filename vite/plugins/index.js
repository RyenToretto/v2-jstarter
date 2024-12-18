import vue from '@vitejs/plugin-vue2'
import { createHtmlPlugin } from 'vite-plugin-html'
import { getStaticVersion } from '../../hooks/utils/models/staticVersion'
import stickToDateTime from '../../hooks/utils/models/stickToDateTime'
import { configSvgIconsPlugin } from './svgSprite'

export function setupPlugins(isBuild, env) {
  const plugins = [vue()]

  plugins.push(
    createHtmlPlugin({
      minify: isBuild,
      inject: {
        data: {
          title: env.VITE_APP_PROJECT_NAME,
          STATIC_VERSION: getStaticVersion(),
          PUBLISH_TIME: stickToDateTime(Date.now())
        }
      }
    })
  )

  plugins.push(configSvgIconsPlugin(isBuild))

  return plugins
}
