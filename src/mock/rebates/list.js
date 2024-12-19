export default {
  code: '0000',
  result: {
    total: 100,
    'lists|20': [
      {
        apppkg: 'com.app.test',
        channelCode: 'csj',
        accountName: '账号名称-@string(3,20)',
        accountId: '@string(number, 13)',
        accountStatus: '@pick(["STATUS_ENABLE"])',
        // 配置
        'crc|0-4': [
          {
            'id|+1': 1000000,
            apppkg: 'com.app.test',
            channelCode: 'csj',
            accountName: '账号名称-@string(3,20)',
            accountId: '@string(number, 13)',
            rate: '@float(0,0.9, 0,1)',
            beginTime: '@integer(1606788321000,1609999999000)',
            endTime: 1609999999000,
            createTime: '@integer(1606788321000,1609999999000)',
            createBy: 'mock',
            lastModifyTime: '@integer(1606788321000,1609999999000)',
            lastModifyBy: 'mock'
          }
        ]
      }
    ]
  }
}
