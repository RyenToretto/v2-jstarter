export default {
  code: '0000',
  result: {
    total: 100,
    'lists|20': [
      {
        'id|+1': 10000,
        dataDate: 1607961600000,
        appPkg: 'com.pkg.@word(2,5)',
        appName: 'APP-@integer(1,99)',
        icon: '', // icon地址
        corporationName: '', // 公司名字
        title: 'Title_@cword(5,20)', // 标题
        description: 'desc_@cword(5,20)', // 描述
        type: "@pick(['image', 'video', 'text'])", // 形式，图文 or 视频 or 纯文
        linkUrl: '', // 投放链接
        imageUrl:
          '@pick([\
          "http://mv-res.xdplt.com/sandbox/2020/07/16/AAD7BF62E7619E6D38AC0C326422EB50.jpg",\
          "http://mv-res.xdplt.com/sandbox/2020/07/25/FC8A606F21F147A80EAEAC1F9A451DFB.jpg"\
        ])',
        vimage:
          '@pick([\
          "http://mv-res.xdplt.com/sandbox/2020/07/16/AAD7BF62E7619E6D38AC0C326422EB50.jpg",\
          "http://mv-res.xdplt.com/sandbox/2020/07/25/FC8A606F21F147A80EAEAC1F9A451DFB.jpg"\
        ])',
        videoUrl:
          '@pick([\
          "http://mv-res.xdplt.com/sandbox/2020/07/16/5612F070069CEF261A82198C18E92D54.mp4",\
          "http://mv-res.xdplt.com/sandbox/2020/07/25/5D11C5733D23A140B140620F217CEDE1.mp4"\
        ])',
        cates: ['@integer(1,10)', '@integer(11,20)', '@integer(21,29)'], // 分类
        platforms: ['csj', 'gdt', 'baidu', 'ks'], // 投放平台
        pv: 134234, // 投放广告数-pv
        date: '2020-12-01', // 日期
        days: '@pick([99, null])' // 投放天数
      }
    ]
  }
}
