import csj from './csj'
import ks from './ks'
import gdt from './gdt'
import baidu, { baiduForClue } from './baidu'
import oppo from './oppo'
import vivo from './vivo'
import huawei from './huawei'
import rongyao from './rongyao'
import jinghong from './jinghong'
import huichuan from './huichuan'
import xiaomi from './xiaomi'

export default {
  csj,
  // 星图(复用巨量的转化事件)
  xingtu: csj,
  ks,
  gdt,
  baidu,
  // 百度线索追踪：非App的转化追踪推荐采用“线索API”(https://dev2.baidu.com/content?sceneType=0&pageId=101207&nodeId=655&subhead=)
  baiduForClue,
  oppo,
  vivo,
  huawei,
  rongyao,
  huichuan,
  jinghong,
  xiaomi,
  facebook: [
    { code: 'login', name: '登录' },
    { code: 'register', name: '注册' },
    { code: 'pay', name: '付费' }
  ],
  google: [
    { code: 'login', name: '登录' },
    { code: 'register', name: '注册' },
    { code: 'pay', name: '付费' }
  ],
  tiktok: [
    { code: 'login', name: '登录' },
    { code: 'register', name: '注册' },
    { code: 'pay', name: '付费' }
  ],
  ios: [
    { code: 'login', name: '登录' },
    { code: 'register', name: '注册' },
    { code: 'pay', name: '付费' }
  ]
}
