const list = {
  code: '0000',
  message: '0000',
  success: true,
  result: {
    total: 2,
    'lists|10': [
      {
        'id|+1': 1001, // 行ID
        'channelAppId|+1': '@pick([1, "1333592991541043202", "1342064506443923457"])', // 应用ID
        aid: '@pick([6666, 6667, 6668, 6669])', // 广告位ID
        name: 'name_@cword(5,8)', // 渠道广告位名称
        basePrice: '@integer(10, 200)', // 底价
        type: '@pick(["code_601", "code_602", "code_603", "code_604", "code_605", "code_606"])', // 广告位类型
        isMediation: '@pick([true, false])', // 是否是mediation
        tmout: '@integer(1, 1440)', // [1-1440] 单位分钟, 广告缓存超时时间
        status: '@pick([0, 1])', // 状态，0-删除 1-正常

        createBy: '@cword(2,4)',
        createTime: '@integer(1616570591186, 1616656991186)',
        lastModifyBy: '@cword(2,4)',
        lastModifyTime: '@integer(1577836800000,1609372800000)'
      }
    ]
  }
}

export default list
