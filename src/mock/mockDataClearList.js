const mockDataClearList = {
  code: '0000',
  result: {
    total: 100,
    'lists|10': [
      {
        'id|+1': 10000000,
        pkg: 'com.qingli.qlsq.cc',
        token: '@pick(["revenue_others", "revenue_csj"])',
        type: '@pick([1, 2, 3])',
        status: '@pick(0, 1)',
        syncMsg: '清理的@pick("好呀", "妙啊", "哈哈")',
        createTime: '@integer(1606788321000,1609999999000)',
        createBy: 'mock'
      }
    ]
  }
}

export default mockDataClearList
