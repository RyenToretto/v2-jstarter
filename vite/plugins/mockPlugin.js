/**
 * https://www.npmjs.com/package/vite-plugin-mock/v/2.9.6?activeTab=code
 */
import fs from 'fs'
import { resolve } from 'path'
import { normalizePath } from 'vite'

function fileExists(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.W_OK)
    return true
  } catch (error) {
    return false
  }
}

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}

const getMainPath = () => {
  let mainEntry = pathResolve(`src/main.js`)
  if (!fileExists(mainEntry)) {
    mainEntry = pathResolve(`src/main.js`)
    if (!fileExists(mainEntry)) {
      return ''
    }
  }
  return mainEntry
}

export function mockPlugin(injectCode) {
  const mainPath = getMainPath()
  const injectFile = normalizePath.call(void 0, mainPath)

  return {
    name: 'vite:mock',
    enforce: 'pre',
    async transform(code, id) {
      if (!injectCode || !injectFile || !id.endsWith(injectFile)) {
        return null
      }
      return {
        map: null,
        code: `${code}
${injectCode}`
      }
    }
  }
}
