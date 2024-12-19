export default {
  lists: [
    {
      eventKey: 'event_register',
      value: '@integer(100,10000)',
      activeRate: '@float(0.01, 0.9, 0,4)',
      name: '注册',
      type: 0,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    },
    {
      eventKey: 'event_purchase_longer_and_longer',
      value: '@integer(100,10000)',
      activeRate: '@float(0.01, 0.9, 0,4)',
      name: '应用内购买',
      type: 1,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    },
    {
      eventKey: 'xh_alive',
      value: '@integer(100,10000)',
      activeRate: '@float(0.01, 0.9, 0,4)',
      name: '自定义事件1',
      type: 2,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    },
    {
      eventKey: 'event_other2',
      value: '@integer(100,10000)',
      activeRate: '@float(0.01, 0.9, 0,4)',
      name: '自定义事件2',
      type: 2,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    },
    // { eventKey: "event_other3", value: '@integer(100,10000)', activeRate: '@float(0.01, 0.9, 0,4)', name: "自定义事件3", type: 2, adUserCoverageRate: '@float(0, 0.8, 4)', pvDivUv: '@float(0, 5, 3)' },
    {
      eventKey: 'event_other4',
      value: '@integer(100,10000)',
      activeRate: '@float(0.01, 0.9, 0,4)',
      name: '自定义事件4',
      type: 2,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    }
  ],
  summary: [
    {
      eventKey: 'event_register',
      value: '@integer(100,10000)',
      activeRate: '@float(0, 0.999, 0,4)',
      name: '注册',
      type: 0,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    },
    {
      eventKey: 'event_purchase_longer_and_longer',
      value: '@integer(100,10000)',
      activeRate: '@float(0, 0.9, 0,4)',
      name: '应用内购买',
      type: 1,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    },
    {
      eventKey: 'xh_alive',
      value: '@integer(100,10000)',
      activeRate: '@float(0, 0.9, 0,4)',
      name: '自定义事件1',
      type: 2,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    },
    {
      eventKey: 'event_other2',
      value: '@integer(100,10000)',
      activeRate: '@float(0, 0.9, 0,4)',
      name: '自定义事件2',
      type: 2,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    },
    {
      eventKey: 'event_other3',
      value: '@integer(100,10000)',
      activeRate: '@float(0, 0.9, 0,4)',
      name: '自定义事件3',
      type: 2,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    },
    {
      eventKey: 'event_other4',
      value: '@integer(100,10000)',
      activeRate: '@float(0, 0.9, 0,4)',
      name: '自定义事件4',
      type: 2,
      adUserCoverageRate: '@float(0, 0.8, 4)',
      pvDivUv: '@float(0, 5, 3)'
    }
  ],
  min: [
    {
      eventKey: 'xh_alive',
      value: 100,
      activeRate: 0,
      name: '自定义事件1',
      type: 2,
      adUserCoverageRate: 0,
      pvDivUv: 0
    },
    {
      eventKey: 'event_register',
      value: 100,
      activeRate: 0,
      name: '注册',
      type: 0,
      adUserCoverageRate: 0,
      pvDivUv: 0
    },
    {
      eventKey: 'event_purchase_longer_and_longer',
      value: 100,
      activeRate: 0,
      name: '应用内购买',
      type: 1,
      adUserCoverageRate: 0,
      pvDivUv: 0
    },
    {
      eventKey: 'event_other2',
      value: 100,
      activeRate: 0,
      name: '自定义事件2',
      type: 2,
      adUserCoverageRate: 0,
      pvDivUv: 0
    },
    {
      eventKey: 'event_other3',
      value: 100,
      activeRate: 0,
      name: '自定义事件3',
      type: 2,
      adUserCoverageRate: 0,
      pvDivUv: 0
    },
    {
      eventKey: 'event_other4',
      value: 100,
      activeRate: 0,
      name: '自定义事件4',
      type: 2,
      adUserCoverageRate: 0,
      pvDivUv: 0
    }
  ],
  max: [
    {
      eventKey: 'xh_alive',
      value: 10000,
      activeRate: 0.999,
      name: '自定义事件1',
      type: 2,
      adUserCoverageRate: 1,
      pvDivUv: 6
    },
    {
      eventKey: 'event_register',
      value: 10000,
      activeRate: 0.999,
      name: '注册',
      type: 0,
      adUserCoverageRate: 1,
      pvDivUv: 6
    },
    {
      eventKey: 'event_purchase_longer_and_longer',
      value: 10000,
      activeRate: 0.999,
      name: '应用内购买',
      type: 1,
      adUserCoverageRate: 1,
      pvDivUv: 6
    },
    {
      eventKey: 'event_other2',
      value: 10000,
      activeRate: 0.999,
      name: '自定义事件2',
      type: 2,
      adUserCoverageRate: 1,
      pvDivUv: 6
    },
    {
      eventKey: 'event_other3',
      value: 10000,
      activeRate: 0.999,
      name: '自定义事件3',
      type: 2,
      adUserCoverageRate: 1,
      pvDivUv: 6
    },
    {
      eventKey: 'event_other4',
      value: 10000,
      activeRate: 0.999,
      name: '自定义事件4',
      type: 2,
      adUserCoverageRate: 1,
      pvDivUv: 6
    }
  ]
}
