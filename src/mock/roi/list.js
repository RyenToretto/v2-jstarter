export default {
  code: '0000',
  result: {
    total: 100,
    'lists|10': [
      {
        dataDate: '@date',
        pkg: 'com.app.@integer(1,9)',
        pkgName: '应用xxx',
        dau: '@integer(1000, 99999)',
        newUser: '@integer(10, 999)',
        cost: '@float(1000, 999999, 0,3)',
        avgAddCost: '@float(0, 9, 0,3)',
        revenue: '@float(1000, 999999, 0,3)',
        roi: '@float(0, 2, 0,4)',
        totalCost: '@float(1000, 9999999, 0,3)',
        totalRevenue: '@float(0, 9999999, 0,3)',
        totalRoi: '@float(0, 2, 0,4)'
      }
    ],
    summary: {
      dau: '@integer(1000, 99999)',
      newUser: '@integer(10, 999)',
      cost: '@float(1000, 999999, 0,3)',
      avgAddCost: '@float(0, 9, 0,3)',
      revenue: '@float(1000, 999999, 0,3)',
      roi: '@float(0, 2, 0,4)',
      // totalCost: "@float(1000, 9999999, 0,3)",
      totalCost: null,
      totalRevenue: '@float(0, 9999999, 0,3)',
      totalRoi: '@float(0, 2, 0,4)'
    }
  }
}
