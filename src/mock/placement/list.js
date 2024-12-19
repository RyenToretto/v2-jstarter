const list = {
  code: '0000',
  message: '0000',
  success: true,
  result: {
    total: 2,
    'lists|10': [
      {
        'id|+1': 1001, // 行ID
        'appId|+1': '@pick([1, "1333592991541043202", "1342064506443923457"])', // 应用ID
        name: 'name_@cword(5,20)', // 广告位名称
        typeId: '@integer(5131,5140)', // 广告位类型ID
        'sid|+1': 221, // 广告位编码
        screenShot:
          'http://mv-res.xdplt.com/sandbox/2020/07/25/EF7C5661EEBE8530768F64E7BAD7482F.jpg', // 截图
        status: '@pick([0, 1])', // 状态，0-删除，1-正常
        pullMode: '@pick([0, 1])', // 拉取方式，0-串行 1-并行
        wt: '@integer(1,15000)', // [0-15000] 单位ms 最高优先级广告的最小等待时间,串行有效
        tmout: '@integer(1,15000)', // [1000-15000] 单位ms 广告拉取超时时间,串行有效
        orientation: '@pick([0, 1])', // 版式，0-横版 1-竖版

        createBy: '@cword(2,4)',
        createTime: '@integer(1616570591186, 1616656991186)',
        lastModifyBy: '@cword(2,4)',
        lastModifyTime: '@integer(1577836800000,1609372800000)'
      }
    ]
  }
}

export default list
