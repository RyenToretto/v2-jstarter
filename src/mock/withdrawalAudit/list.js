const list = {
  code: '0000',
  result: {
    total: 1000,
    'lists|10': [
      {
        'id|+1': 32324833248386,
        createTime:
          '@pick([1606748321000, 1606758321000, 1606768321000, 1606778321000, 1606788321000])', // 订单创建时间
        pkg: '@pick(["com.shuhyakigame.balls", "com.coin.huahua.video", "com.quick.gamebox.cloudgame.streaming"])',
        userId: '@pick([12230, 18540, 11650, "24560", "15560"])',
        vdId: '@pick([12230, 18540, 11650, "24560", "15560"])',
        token: '@word(10,20)',
        arpu: '@pick(["0.1990", "0.2020", "0.8764", "0.303"])', // 总的arpu [保留2位小数]
        amount: '@pick([1990, 0, 29, 100, 8990, 9999])', // 提现金额: 单位 分
        status: '@pick([0, 1, 2, 301, 302, 303])',
        remark: '@cword(10,20)', // 说明
        operator: '@cword(2,4)'
      }
    ]
  }
}
export default list
