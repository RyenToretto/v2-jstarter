import chalk from 'chalk'
import enquirer from 'enquirer'
import { execSync } from 'child_process'

import { PROJECT_PATH, BACKEND_PROJECT_PATH, outputDir } from './config'
import getBranch from './modules/getBranch'
import getStatus from './modules/getStatus'

import { generateStaticVersionFile } from './utils/generateStaticVersionFile'

const log = console.log
const commitInfo = getCommitInfo()

// 获取提交信息
function getCommitInfo(_path = PROJECT_PATH) {
  let logText = execSync('git log --oneline -n 1', {
    cwd: _path,
    encoding: 'utf-8'
  })
  const branch = getBranch()
  const commitSHA = logText.substring(0, 7)
  const commitMessage = logText.substring(8)
  // log(chalk.green(newMessage))
  return `[${branch}:${commitSHA}] ${commitMessage}`
}

// 询问是否提交后端代码
function confirmCommit() {
  const _confirm = new enquirer.prompt({
    message: '是否提交后端代码？'
  })
  return new Promise((resolve, reject) => {
    _confirm
      .run()
      .then((answer) => {
        // log('answer:', answer, typeof answer)
        resolve(answer)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 提交后端代码
function commitBackendProject() {
  const status = getStatus(BACKEND_PROJECT_PATH)
  if (status) {
    log(status)
    execSync(`git add . && git commit -m '${commitInfo}'`, {
      cwd: BACKEND_PROJECT_PATH,
      encoding: 'utf-8'
    })
    log(chalk.green('提交成功！请到后端项目手动push代码'))
    log(
      execSync('git log --oneline -1', {
        cwd: BACKEND_PROJECT_PATH,
        encoding: 'utf-8'
      })
    )
  } else {
    log('没有要提交的代码')
  }
}

function init() {
  confirmCommit()
    .then((result) => {
      if (result) {
        commitBackendProject()
      } else {
        log(chalk`{green 稍后可手动提交。 提交信息如下：}\n${commitInfo}`)
      }
    })
    .catch((e) => {})
}

generateStaticVersionFile(`${outputDir}/data/version.json`)
  .then((licenses) => {
    init()
  })
  .catch((e) => {
    throw e
  })
  .finally(() => {})
