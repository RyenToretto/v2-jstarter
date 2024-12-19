const appData = [
  {
    id: 'g00001',
    icon: 'https://xhn.xdplt.com/icon/39ff34cfc5f7b03019f92c83cce749c8.png',
    name: '全球业务产品',
    pkg: 'id1237623466',
    platform: 'ios',
    companyId: '1',
    category: 'social',
    mode: ['self', 'adjust'],
    guiyinDay: 7,
    abtest: 0,
    tags: ['oversea', 'internal'],
    iosPackage: 'com.global.test',
    yyb: null,
    isConfigRoiAutoClose: true
  },
  {
    id: '28477566984193',
    icon: 'https://xhn.xdplt.com/icon/ebc2e30d9def84e6b35535767e02bb38.png',
    name: 'iOS付费产品',
    pkg: 'id1386928477566984193',
    platform: 'ios',
    companyId: '1',
    category: 'social',
    mode: ['self'],
    guiyinDay: 7,
    abtest: 0,
    tags: ['internal'],
    iosPackage: 'com.ios.vip',
    yyb: null,
    isConfigRoiAutoClose: true
  },
  {
    id: 'ios1234',
    icon: 'https://xhn.xdplt.com/icon/2e8e559b72226722e770402b7ac96f10.png',
    name: 'iOS海外产品',
    pkg: 'id1540536170',
    platform: 'ios',
    companyId: '1',
    category: 'video',
    mode: 'tenjin',
    guiyinDay: 3,
    abtest: 0,
    tags: ['oversea'],
    iosPackage: 'com.ios.oversea',
    yyb: null,
    isConfigRoiAutoClose: true
  },
  {
    id: 'a0001',
    icon: 'https://xhn.xdplt.com/icon/44fca47fddeba3680a5d1d110c698fdc.png',
    name: '安卓测试产品',
    pkg: 'com.android.internal',
    platform: 'android',
    companyId: '1',
    category: 'tool',
    mode: ['self'],
    huaweiAppId: 'hw123456',
    guiyinDay: 3,
    abtest: 0,
    tags: ['internal', 'wz', 'jifen'],
    iosPackage: null,
    yyb: null,
    isConfigRoiAutoClose: true
  },
  {
    id: 'p0001',
    name: '付费测试产品',
    pkg: 'com.android.paid',
    platform: 'android',
    companyId: '1',
    category: 'tool',
    mode: ['self'],
    isPay: true,
    guiyinDay: 3,
    abtest: 0,
    tags: ['internal', 'jifen'],
    iosPackage: null,
    yyb: null,
    isConfigRoiAutoClose: true
  },
  {
    id: 'a0002',
    icon: null,
    name: '简易网赚测试',
    pkg: 'com.android.internal.wg',
    platform: 'android',
    companyId: '1',
    category: 'video',
    mode: ['self'],
    guiyinDay: 3,
    abtest: 0,
    tags: ['internal', 'wg'],
    iosPackage: null,
    yyb: null,
    isConfigRoiAutoClose: true
  },
  {
    id: 't0001',
    icon: null,
    name: '工具网赚测试',
    pkg: 'com.android.wz.tools',
    platform: 'android',
    companyId: '1',
    category: 'tool',
    mode: ['self'],
    guiyinDay: 3,
    abtest: 0,
    tags: ['internal', 'wz'],
    iosPackage: null,
    yyb: null
  },
  {
    id: '1517062830061268994',
    icon: 'https://xhn.xdplt.com/icon/e08441007c09c58f1980b32554a4e401.png',
    name: '海外安卓产品',
    pkg: 'com.android.oversea',
    platform: 'android',
    companyId: '1',
    category: 'tool',
    mode: ['adjust'],
    guiyinDay: 3,
    abtest: 0,
    tags: ['oversea'],
    iosPackage: null,
    yyb: null
  },
  {
    id: 'wx0001',
    icon: 'https://xhn.xdplt.com/icon/e08441007c09c58f1980b32554a4e401.png',
    name: '微信小程序测试产品',
    pkg: 'wx1234567890',
    platform: 'mp_weixin',
    companyId: '1',
    category: 'social',
    mode: ['self'],
    guiyinDay: 7,
    abtest: 0,
    tags: ['internal'],
    ext: '{"gh_id":"gh12345","path":[{"name":"默认启动页","path":"pages/splash/splash"},{"name":"订阅页","path":"pages/vip"},{"name":"其它页面","path":"pages/other"}]}',
    iosPackage: null,
    yyb: null
  },
  {
    id: 'tt0001',
    icon: 'https://xhn.xdplt.com/icon/8942ea379e83fdd6141faa11bd83a39a.png',
    name: '抖音小程序测试产品',
    pkg: 'tt1234567890',
    platform: 'mp_douyin',
    companyId: '1',
    category: 'social',
    mode: ['self'],
    guiyinDay: 7,
    abtest: 0,
    tags: ['internal'],
    ext: '{"tt_id":"tt12345","path":[{"name":"默认启动页","path":"pages/splash/splash"},{"name":"订阅页","path":"pages/vip"},{"name":"其它页面","path":"pages/other"}]}',
    iosPackage: null,
    yyb: null
  },
  {
    id: 'q0001',
    icon: 'https://xhn.xdplt.com/icon/692c7696c589ecd16e5e4653841b33de.png',
    name: '快应用测试产品',
    pkg: 'com.quickapp.test',
    platform: 'quickapp',
    companyId: '1',
    category: 'social',
    mode: ['self'],
    guiyinDay: 7,
    abtest: 0,
    tags: ['internal'],
    ext: '{"path":[{"name":"默认启动页","path":"pages/splash/splash"},{"name":"订阅页","path":"pages/vip"},{"name":"其它页面","path":"pages/other"}]}',
    iosPackage: null,
    yyb: null
  },
  {
    id: 'web0001',
    icon: 'https://xhn.xdplt.com/icon/bc6183de6672f16d08ec8b77316edc74.png',
    name: 'web测试产品',
    pkg: 'web.mangu.camera.ai',
    platform: 'web',
    companyId: '1',
    category: '',
    mode: ['self'],
    guiyinDay: 7,
    abtest: 0,
    tags: ['internal'],
    iosPackage: null,
    yyb: null
  }
]
export default {
  success: true,
  code: '0000',
  message: null,
  result: appData
}
export const allPkgs = appData.map((v) => v.pkg)