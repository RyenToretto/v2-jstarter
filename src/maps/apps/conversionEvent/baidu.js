// 百度线索追踪：非App的转化追踪推荐采用“线索API”(https://dev2.baidu.com/content?sceneType=0&pageId=101207&nodeId=655&subhead=)
export const baiduForClue = [
  { code: '1', name: '咨询按钮点击' },
  { code: '2', name: '电话按钮点击' },
  { code: '3', name: '表单提交成功' },
  { code: '4', name: '激活' },
  { code: '5', name: '表单按钮点击' },
  { code: '10', name: '服务购买成功' },
  { code: '14', name: '订单提交成功' },
  { code: '18', name: '留线索' },
  { code: '25', name: '注册' },
  { code: '26', name: '付费/付费金额' },
  { code: '30', name: '电话拨通' },
  { code: '35', name: '微信复制按钮点击' },
  { code: '56', name: '到店' },
  { code: '67', name: '微信调起按钮点击' },
  { code: '72', name: '聊到相关业务' },
  { code: '73', name: '回访-电话接通' },
  { code: '74', name: '回访-信息确认' },
  { code: '75', name: '回访-发现意向' },
  { code: '76', name: '回访-高潜成交' },
  { code: '77', name: '回访-成单客户' },
  { code: '79', name: '微信加粉成功' },
  { code: '90', name: '商品支付成功' },
  { code: '112', name: '微信小程序调起' }
]
export default [
  // { code: 'activate', name: '激活' },
  { code: 'register', name: '注册' },
  { code: 'orders', name: '付费（成单）' },
  // { code: 'retain_1day', name: '次日留存' },
  { code: 'user_defined', name: '客户自定义' },
  { code: 'ec_buy', name: '商品下单成功' },
  { code: 'deep_page_access', name: '关键页面浏览' },
  { code: 'credit_granting', name: '授信' },
  { code: 'deeplink', name: '应用调起' },
  { code: 'retain_3day', name: '3日留存' },
  { code: 'retain_4day', name: '4日留存' },
  { code: 'retain_5day', name: '5日留存' },
  { code: 'retain_6day', name: '6日留存' },
  { code: 'retain_7day', name: '7日留存' },
  { code: 'retain_14day', name: '14日留存' },
  { code: 'pay_to_read', name: '付费阅读' },
  { code: 'enter_bookstore_read', name: '进入书城阅读' },
  { code: 'add_to_desktop', name: '添加至桌面' },
  { code: 'log_in', name: '登录' },
  { code: 'order_submit_success', name: '订单提交成功' },
  { code: 'pay_to_watch', name: '付费观剧' },
  { code: 'key_action', name: '关键行为' }
]