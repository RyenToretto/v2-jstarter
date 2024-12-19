export default {
  code: '0000',
  result: {
    total: 100,
    'lists|10': [
      {
        'id|+1': 1,
        'companyId|+1': ['1', '2'],
        'companyName|+1': ['小熊博望', '测试企业2'],
        name: '应用@cword(2,6)',
        'platform|+1': ['android', 'ios', 'quick_app'],
        'pkg|+1': ['com.android.internal', 'id1237623466', 'xxx.com'],
        mode: ['self', 'tenjin'],
        guiyinDay: '@integer(1,30)',
        huaweiAppId: 'hw123456',
        ymAppKey: '@uuid',
        'isFindClick|+1': [0, 1], // 无条件初始化友盟
        abtest: '@pick([0,1])',
        // 停用APP
        // appClose: null,
        appClose: {
          status: 1, // 0: 不停用；1: 停用
          coverRange: 'all', // all: 全部产品; version: 指定版本
          versionCode: '', // 版本号（停用<=该版本号的产品）
          action: 1, // 交互形式  （1: 正常推出； 2: 弹窗提示；）
          content: '产品已下架，我们将不再继续提供服务！感谢您的使用'
        },
        // 自归因-激活
        active: {
          // csj: "key",
          gdt: 'arpu-cpm'
          // ks: "arpu-cpc",
          // baidu: ""
        },
        // 自归因-转化
        conversion: {
          csj: {
            event: 'xxx',
            type: 'key'
          },
          gdt: {
            event: 'xxx',
            type: 'arpu-cpm'
          },
          ks: {
            event: 'xxx',
            type: 'arpu-cpc'
          },
          baidu: {
            event: 'xxx',
            type: 'key'
          }
        },
        entity: 'xxxxxx软著实体',
        appType: '@pick(["ad", "vip", "other"])',
        category: '@pick(["game", "tool", "other"])',
        'users|0-20': [
          {
            id: `@integer(1,99999)`,
            name: '@last',
            nickName: '@cname'
          }
        ],
        createBy: '@cname',
        createTime: '@integer(1577836800000,1609372800000)',
        lastModifyBy: '@cname',
        lastModifyTime: '@integer(1577836800000,1609372800000)'
      }
    ]
  }
}
