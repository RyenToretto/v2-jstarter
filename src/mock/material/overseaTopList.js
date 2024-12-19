const overseaTopList = {
  code: '0000',
  message: null,
  success: true,
  result: {
    total: 12322,
    'lists|10': [
      {
        icon: "@pick([\
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2616307531,1672298646&fm=15&gp=0.jpg',\
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3495969793,2296653722&fm=15&gp=0.jpg',\
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3891661215,2956156265&fm=15&gp=0.jpg',\
          ''\
        ])", // icon地址
        name: 'APP-@integer(1,99)',
        pkg: 'com.pkg.@word(2,5)',
        appDeveloper: '开发者-@integer(1,5)', // 开发者
        channel: '2,10,1,6,5', // 来源，多个逗号分隔
        category: '5005,5003,5009,5014', // 分类，字符串，逗号分隔
        categoryArr: [5002, 5008, 5015, 5006], // 分类，数组
        countries: 'USA,CNINA', // 投放国家，字符串，逗号分隔
        countriesArr: ['USA', 'CNINA'], // 投放国家，数组
        days: 32, // 最长投放天数
        impression: '@integer(100,99999999)', // 展示数
        interaction: '@integer(100,99999999)', // 互动数
        conversion: '@integer(100,99999999)', // 转化数
        firstSeen: 1592064000000, // 最早投放时间
        lastSeen: 1624118400000 // 最后投放时间
      }
    ]
  }
}

export default overseaTopList
