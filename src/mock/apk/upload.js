export default {
  code: '0000',
  result: {
    source: '@pick(["gdt", "csj", "ks"])', // 必填0: "csj"
    url: 'https://xhn.xdplt.com/xh/b82b81da73d4ee10910b00268c8030a1.apk', // 如果该字段为空，则表示上传失败
    curl: 'https://xhn.xdplt.com/xh',
    pkg: 'com.shuhyakigame.balls', // 如果上传的不是apk文件，则pkg为空
    md5: 'gmbinbidnbduinfiwueifuwiufnwiuefnwiuefnwiuefnwiuenfwie',
    name: '王能清理大师',
    appvn: '1.0.1', // 字符串
    appvc: 323, // 正整数
    adsdkvn: '@pick(["1.3.1", "2.5.1"])', // 必填
    adsdkvc: '@pick(["8765", "87654"])', // 必填
    xhsdkvn: '@pick(["1.4.1", "2.8.1"])', // 必填
    icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3891661215,2956156265&fm=15&gp=0.jpg',
    size: 13.23 // 单位：MB
  }
}
