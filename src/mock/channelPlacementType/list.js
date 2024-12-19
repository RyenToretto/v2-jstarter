const list = {
  code: '0000',
  message: '0000',
  success: true,
  result: {
    total: 2,
    'lists|10': [
      {
        'id|+1': 1001, // 行ID
        type: 'type_@word(3,6)', // 渠道广告位类型管理ID
        name: 'name_@cword(5,20)', // 广告位名称
        source: '@pick(["ks", "csj", "gdt", "baidu", "kds", "jy"])', // 渠道
        placementTypeId: '@integer(5131,5140)', // 广告位类型ID

        createBy: '@cword(2,4)',
        createTime: '@integer(1616570591186, 1616656991186)',
        lastModifyBy: '@cword(2,4)',
        lastModifyTime: '@integer(1577836800000,1609372800000)'
      }
    ]
  }
}

export default list
