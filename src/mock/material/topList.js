export default {
  code: '0000',
  result: {
    total: 100,
    'lists|10': [
      {
        'ranking|+1': 1000,
        appPkg: 'com.pkg.@word(2,5)',
        appName: 'APP-@integer(1,99)',
        icon: "@pick([\
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2616307531,1672298646&fm=15&gp=0.jpg',\
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3495969793,2296653722&fm=15&gp=0.jpg',\
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3891661215,2956156265&fm=15&gp=0.jpg',\
          ''\
        ])", // icon地址
        corporationName: '公司名@cword(10, 18)', // 公司名字
        linkUrl: 'test.link', // 包下载地址
        materialNum: '', // 素材数量
        platforms: ['csj', 'gdt', 'ks', 'baidu'],
        pv: '@integer(0,9999)', // 投放广告数-pv
        pvTotal: '@integer(100,99999999)', // 累计投放广告数-pv
        pvRecent: [1324, 34534, 3452, 64351], //近30天投放广告数-pv，数组长度固定为30，不足会补0
        days: 45, // 投放天数
        cates: ['@integer(1,10)', '@integer(11,20)', '@integer(21,29)'], // 分类
        startTime: "@pick(['2020-12-01', null])",
        endTime: "@pick(['2020-12-01', null])"
      }
    ]
  }
}
