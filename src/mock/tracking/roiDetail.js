let today = new Date().getTime()
function dataDate() {
  today -= 1000 * 60 * 60 * 24
  return today
}
export default {
  code: '0000',
  result: {
    total: 13,
    appName: 'App-@cword(3,5)',
    campaignName: '广告组_@cword(3,5)',
    adName: '计划_@cword(3,5)',
    creativeId: '@string("number", 16)',
    'lists|7': [
      {
        dataDate: dataDate,
        cost: '@float(0, 999999, 0, 2)',
        active: '@integer(0, 99999)',
        activeCost: '@float(0, 10, 0, 4)',
        'detail|1-15': [
          {
            roi: '@float(0, 9, 0, 4)',
            uvRate: '@float(0, 0.9, 0, 4)',
            showUvRate: '@float(0, 0.9, 0, 4)'
          }
        ]
      }
    ],
    summary: {
      dataDate: null,
      cost: '@float(0, 999999, 0, 2)',
      active: '@integer(0, 99999)',
      activeCost: '@float(0, 10, 0, 4)',
      'detail|5-20': [
        {
          roi: '@float(0, 9, 0, 4)',
          uvRate: '@float(0, 0.9, 0, 4)',
          showUvRate: '@float(0, 0.9, 0, 4)'
        }
      ]
    }
  }
}
