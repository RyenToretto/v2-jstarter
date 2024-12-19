const videoMeterialList = {
  code: '0000',
  result: {
    total: 1000,
    'lists|10': [
      {
        id: '@string(number, 19)', // ID
        title: '视频@cword(10,20)', // 视频名称
        createTime:
          '@pick([1606748321000, 1606758321000, 1606768321000, 1606778321000, 1606788321000])', // 创建时间
        url: '@pick(["http://mv-res.xdplt.com/sandbox/2020/07/25/EB7650B54A904B6A3DEE813F2911D64E.mp4","http://adsmind.ugdtimg.com/ads_svp_video__0b53maaoqaaapeac5rjdhjqruyae5bqab2ca.f140112.mp4?dis_k=be0ddab5642b3b515c867116d61606f6&dis_t=1629734714&m=5a17db8dcdd481798db845a609e8cd4b&stdfrom=15"])', // 视频
        cover: 'http://mv-res.xdplt.com/sandbox/2020/07/25/EF7C5661EEBE8530768F64E7BAD7482F.jpg',
        duration: '@pick([12230, 18540, 11650, "24560", "15560"])', // 时长
        fileMd5: 'xxx', // 文件md5
        w: 1280,
        h: 720,
        size: 2147483648
      }
    ]
  }
}
export default videoMeterialList
