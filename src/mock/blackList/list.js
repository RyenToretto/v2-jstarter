const list = {
  code: '0000',
  result: {
    total: 1000,
    'lists|10': [
      {
        pkg: '@pick(["com.shuhyakigame.balls", "com.coin.huahua.video", "com.quick.gamebox.cloudgame.streaming"])',
        openId: '@pick([12230, 18540, 11650, "24560", "15560"])',
        unionId: '@pick([12230, 18540, 11650, "24560", "15560"])',
        token: '@word(10,20)',
        desc: '@cword(10,20)',
        createTime:
          '@pick([1606748321000, 1606758321000, 1606768321000, 1606778321000, 1606788321000])', // 创建时间
        lastModifyTime:
          '@pick([1606748321000, 1606758321000, 1606768321000, 1606778321000, 1606788321000])' // 创建时间
      }
    ]
  }
}
export default list
