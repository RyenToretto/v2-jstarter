export default {
  code: '0000',
  result: {
    total: 100,
    'lists|10': [
      {
        pkg: 'com.pkg.@word(1)',
        inventory:
          '@pick([\
          "INVENTORY_FEED",\
          "INVENTORY_VIDEO_FEED",\
          "INVENTORY_HOTSOON_FEED",\
          "INVENTORY_AWEME_FEED",\
          "INVENTORY_UNION_SLOT",\
          "UNION_BOUTIQUE_GAME"\
        ])',
        cost: '@float(1000, 999999, 0,3)',
        active: '@integer(100, 9999)',
        unitPrice: '@float(0, 9, 0,4)',
        attributionNextDayOpenCntRate: '@float(0, 0.8, 0,4)',
        show: '@integer(100, 99999)',
        click: '@integer(100, 9999)',
        downloadStart: '@integer(100, 9999)',
        downloadFinish: '@integer(100, 9999)',
        installFinish: '@integer(100, 9999)',
        ctr: '@float(0, 0.9, 0,4)',
        ecpm: '@float(0, 9, 0,2)',
        cvr: '@float(0, 0.9, 0,4)'
      }
    ]
  }
}
