export default {
  code: '0000',
  result: {
    total: 100,
    'lists|10': [
      {
        id: '@integer(100000, 199999)', // 唯一id
        taskId: '@integer(20000, 29999)', // 任务id
        video: {
          id: 1234,
          title: '',
          url: 'https://xhn.xdplt.com/xh/video/378a30b2021cc371a5b41e47ff1ae6c7.mp4'
        },
        image: [
          {
            srcId: 123,
            srcTitle: '', // 原人脸图，单人视频无值
            srcUrl: '', // 原人脸图，单人视频无值
            id: 988,
            title: '', // 替换后的人脸图
            url: '' // 替换后的人脸图
          }
        ],
        type: '@pick(["single", "multiple"])', // single: 单人视频， multiple: 多人视频
        createTime: '@now', // 创建时间，相同的任务id，创建时间相同
        url: 'https://xhn.xdplt.com/xh/video/97955300e00aef7686f9f76357522f67.mp4', // 已完成状态，该字段才有值
        status: '@pick([1,2,3,4])', // 1已完成，2待处理，3处理中，4处理失败
        info: 'xxx' // 处理失败原因
      }
    ]
  }
}
