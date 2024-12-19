export default {
  code: '0000',
  'result|10': [
    {
      'id|+1': 1,
      entityName: '主体@cword(2,6)',
      entityId: '@pick(["1", "2"])',
      pkgName: '应用@cword(2,6)',
      pkg: 'com.@word().@word(3)',
      appid: '@uuid',
      source: "@pick(['revenue_csj', 'revenue_admob', 'revenue_ks', 'revenue_ylh'])",
      remark: '@cword(0,20)',
      createBy: '@cname',
      createTime: '@integer(1577836800000,1609372800000)',
      lastModifyBy: '@cname',
      lastModifyTime: '@integer(1577836800000,1609372800000)'
    }
  ]
}
