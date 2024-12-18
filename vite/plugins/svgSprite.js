/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export function configSvgIconsPlugin(isBuild) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], // 指定 icon 目录
    symbolId: 'icon-[dir]-[name]', // Specify symbolId format
    inject: 'body-last', // 'body-first' | 'body-last'
    customDomId: '__svg__icons__dom__', // custom dom id , default: __svg__icons__dom__
    svgoOptions: isBuild
  })
}
