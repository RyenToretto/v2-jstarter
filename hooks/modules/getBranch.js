import { execSync } from 'child_process'

/**
 * 获取当前分支名称
 * @param {String} _path 项目路径
 * @returns {String} 分支名
 */
function getBranch(_path = './') {
  let branch = execSync('git branch --show-current', {
    cwd: _path,
    encoding: 'utf-8'
  })
  return branch.trim()
}

export default getBranch
