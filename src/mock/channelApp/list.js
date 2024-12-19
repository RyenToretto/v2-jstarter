const list = {
  code: '0000',
  message: '0000',
  success: true,
  result: {
    total: 2,
    'lists|10': [
      {
        'id|+1': 1001, // 行ID
        name: 'name_@cword(5,8)', // 渠道应用名称
        'appId|+1': '@pick([1, "1333592991541043202", "1342064506443923457"])', // 渠道应用ID
        source: '@pick(["ks", "csj", "gdt", "baidu", "kds", "jy"])', // 渠道
        'myAppId|+1': '@pick([1, "1333592991541043202", "1342064506443923457"])', // 应用ID
        status: '@pick([0, 1])', // 状态

        createBy: '@cword(2,4)',
        createTime: '@integer(1616570591186, 1616656991186)',
        lastModifyBy: '@cword(2,4)',
        lastModifyTime: '@integer(1577836800000,1609372800000)'
      }
    ]
  }
}

export default list
