export default {
  code: '0000',
  message: null,
  success: true,
  result: {
    total: 109,
    lists: [
      {
        id: 12345, // 主键，不用显示
        status: '@pick(0,1)', // 1成功，0失败
        msg: `差点就成功了`,
        type: 'conversion', // active or conversion
        event: '25', // 如果type=conversion，该字段有值，需要映射成可视化（和下拉框看到的一样）
        url: 'http://192.168.236.96:8700/mock/#/tools/turn/test',
        clickid: 'xxx',
        source: 'csj',
        cid: 10645,
        oaid: 'xxxx',
        createTime: 1685317626427, // 前端进行格式化为 yyyy-MM-dd hh:mm:ss
        ip: '116.28.1.6',
        ua: 'Mozilla/5.0 (Linux; Android 10; V1938CT Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36'
      }
    ]
  }
}
