const photoMeterialList = {
  code: '0000',
  result: {
    total: 1000,
    'lists|10': [
      {
        id: '@string(number, 19)', // ID
        title: '图片@cword(3,5)', // 图片名称
        createTime:
          '@pick([1606748321000, 1606758321000, 1606768321000, 1606778321000, 1606788321000])', // 创建时间
        url: '@pick(["http://mv-res.xdplt.com/sandbox/2020/07/25/EF7C5661EEBE8530768F64E7BAD7482F.jpg"])', // 图片
        fileMd5: 'xxx', // 文件md5
        w: 1280,
        h: 720,
        size: 2147483648
      }
    ]
  }
}
export default photoMeterialList
