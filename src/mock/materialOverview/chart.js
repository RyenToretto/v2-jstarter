const values = [
  {
    date: '2021-05-01',
    value: '@integer(0,999)'
  },
  {
    date: '2021-05-02',
    value: '@integer(0,999)'
  },
  {
    date: '2021-05-03',
    value: '@integer(0,999)'
  },
  {
    date: '2021-05-04',
    value: '@integer(0,999)'
  }
]
export default {
  code: '0000',
  result: [
    {
      key: 'com.test.1', // 分产品，显示包名；分渠道，显示渠道代号；
      name: '产品1', // 分产品，显示产品名称；分渠道，显示渠道名称；
      values: values
    },
    {
      key: 'com.test.2',
      name: '产品2',
      values: values
    }
  ]
}
