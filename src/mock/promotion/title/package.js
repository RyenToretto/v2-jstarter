export default {
  code: '0000',
  result: {
    total: 100,
    'lists|20': [
      {
        'id|+1': 1,
        name: '标题包-@id',
        num: '@integer(0,999)',
        'titles|0-10': [
          {
            'id|+1': 1,
            name: '标题-@id'
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
