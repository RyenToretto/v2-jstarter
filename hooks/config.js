import { loadEnv } from 'vite'
import path from 'node:path'
import chalk from 'chalk'

import { parseEnv } from '../vite/utils'
export const env = parseEnv(loadEnv('production', process.cwd()))

export const PROJECT_PATH = path.resolve(__dirname, '../')
const BACKEND_PROJECT_MAP = {
  // user: '/path/to/backendProject',
  lufei: '/Users/lufei/work/huaweiCloud/book-manager',
  koujianfeng: '/Users/koujianfeng/Desktop/kjf/do-global/huaweiCloud/book-manager'
}
export let BACKEND_PROJECT_PATH
function checkTheMap() {
  const hasBackendMap = process.env.USER in BACKEND_PROJECT_MAP
  if (hasBackendMap) {
    BACKEND_PROJECT_PATH = path.resolve(__dirname, BACKEND_PROJECT_MAP[process.env.USER])
  } else {
    console.log(chalk`
    {red.bold 没有配置后端项目目录映射!}
    请在 {magenta.italic config.js -> BACKEND_PROJECT_MAP} 对象中增加如下配置：
    {green ${process.env.USER}: '/path/to/backendProject'}
    `)
    process.exitCode = 1
  }
}

checkTheMap()
const outputEnv = env.VITE_APP_OUTPUT_DIR
export const outputDir =
  outputEnv && outputEnv.startsWith('/') ? outputEnv : path.resolve(__dirname, `../${outputEnv}`)
