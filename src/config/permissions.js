import { AUTH_ALBUM_CONTROL } from '@/modules/easy/_store/sOriginMaterial/actions'

export const AUTH_SWITCH_FACE = 'CHANGE_FACE'

export const AUTH_GOODS_MATERIAL_R = 'GOODS_VIEW'
export const AUTH_GOODS_MATERIAL_W = 'GOODS_MANAGER'

export const AUTH_VIDEO_JOINT_R = 'VIDEO_JOINT_VIEW'
export const AUTH_VIDEO_JOINT_W = 'VIDEO_JOINT_MANAGER'

export const ROI_STRATEGY_R = 'ROI_STRATEGY_CLOSE'
export const ROI_STRATEGY_W = 'ROI_STRATEGY_APP_CLOSE'

export const ELB_CONFIG_R = 'ELB_CONFIG_VIEW'
export const ELB_CONFIG_W = 'ELB_CONFIG_MODIFY'
export const ELB_SMALL_TRAFFIC_R = 'ELB_APP_CONFIG'

export const OTHER_STRATEGY_R = 'WATCH_DATA_STRATEGY_CLOSE'

export const COMPANY_DEPARTMENT_R = 'COMPANY_DEPT_MANAGER'
export const SUB_DEPARTMENT_R = 'DEPT_MANAGER'
export const PAGE_ROLE_AUTH_R = 'DATA_AUTH_MANAGER'

// 账户级别权限
export const ACCOUNT_LEVEL_PERMISSIONS = [
  'ROI_PAY', // 变现分析付费日龄指标
  'PAYMENT_DISPLAY_DATA', // 收钱宝基础权限
  'RECHARGE_DISPLAY_DATA', // 充值类业务基础权限
  'SMART_DELIVERY', // 智能化投放
  'WZ_DISPLAY_DATA', // 网赚产品基础权限（钱不易菜单、报表网赚指标显示与否）
  'OVERSEA_MEDIA_EXCEL', // 海外投放媒体报表导出功能
  'OFFLINE', // 线下渠道管理
  'OVERSEA_GLOBAL_GAID_DATA', // 海外全局用户(GAID)数据
  'ADX_DATA', // BiddingWin基础权限
  'ADX_FINANCE_DATA', // 对账单
  'HU_LI_LE', // 互利乐一级菜单权限
  'STORE_MERCHANT', // 线下门店管理
  'BUSINESS_CENTER', // [海外]iHippoRtb
  'DA_HANG_HAI', // 大航海
  'FX_PAY', // 变现分析，订阅日龄、次领指标
  'WZ_DAY_AGE' // 变现分析，网赚指标的日龄数据权限
]
// 角色绑定权限
export const ROLE_LEVEL_PERMISSIONS = [
  'REPORT_OVERVIEW', // 总概览
  'REPORT_PROMOTION_APP_VIEW', // 投放产品报表
  'REPORT_PROMOTION_ADVERTISER_VIEW', // 投放账号报表
  'REPORT_PROMOTION_CAMPAIGN_VIEW', // 广告组报表
  'REPORT_PROMOTION_AD_VIEW', // 广告计划报表 / 深度报表
  'AD_UPDATE_OPT_STATUS', // 广告计划批量操作
  'REPORT_PROMOTION_CREATIVE_VIEW', // 广告创意报表
  'REPORT_PROMOTION_METERIAL_VIEW', // 广告素材报表
  'REPORT_PROMOTION__DATA__ACC', // 投放数据“投放账号相关”数据权限
  'REPORT_PROMOTION_MEDIA_VIEW', // 投放媒体报表
  'REPORT_PROMOTION_UNION-SITE_VIEW', // 广告位（UnionSite）报表
  'REPORT_PROMOTION_FLOW-PACKAGE', // 媒体包配置
  'MONITORING_VIEW', // 数据监控

  /** ** 巨赢广告 ****/
  'ADX_NATIVE_REPORT', // 巨赢广告 => 国内ADX报表 / Top Offer

  'SHORT_PLAY_DATA', // 数据报表 / 短剧数据
  'DRAMA_DATA', // 数据报表 / 短剧数据 / 短剧收入
  'DRAMA_DATA_AUTH', // 系统管理 / 短剧权限配置
  'XH_FILE_UPLOAD', // 工具-文件上传
  'EVENT_LOG_VIEW', // 事件日志、实时日志、事件分布
  ELB_CONFIG_R, // ELB - ELB配置 [读]
  ELB_CONFIG_W, // ELB - ELB配置 [写]
  ELB_SMALL_TRAFFIC_R, // ELB - 小流量配置 [读]
  'APP_BEHAVIOR_DATA', // 应用事件管理 / 属性 / 报表
  'TOOL_VIDEO-TASK', // ==换脸==
  'REPORT_PROMOTION_TOPIC', // 投放管理 > 留言权限
  'REPORT_PROMOTION__DATA__ALL-OPTIMIZER', // 投放数据 > 所有优化师数据
  'APP_PLACEMENT_VIEW', // 广告位管理
  'APP_PLACEMENT_CONFIG', // 广告位管理 操作权限
  'APP_PLACEMENT-TYPE_VIEW', // 广告位类型管理
  'APP_PLACEMENT-TYPE_CONFIG', // 广告位类型管理  操作权限
  'APP_CHANNEL-PLACEMENT-TYPE_VIEW', // 渠道广告位类型管理
  'APP_CHANNEL-PLACEMENT-TYPE_CONFIG', // 渠道广告位类型管理 操作权限
  'CHANNEL_APP_VIEW', // 渠道应用管理
  'CHANNEL_APP_CONFIG', // 渠道应用管理 操作权限
  'CHANNEL_PLACEMENT_VIEW', // 渠道广告位管理
  'CHANNEL_PLACEMENT_CONFIG', // 渠道广告位管理 操作权限
  'CHANNEL_PLACEMENT_CONFIG_VIEW', // 渠道广告位配置管理
  'CHANNEL_PLACEMENT_CONFIG_CONFIG', // 渠道广告位配置管理 操作权限
  'CHANNEL_PLACEMENT_MEDIATION_VIEW', // 渠道广告位Mediation管理
  'CHANNEL_PLACEMENT_MEDIATION_CONFIG', // 渠道广告位Mediation管理 操作权限
  'REPORT_EARNING_VIEW', // 产品收入
  'REPORT_ROI_VIEW', // 变现分析
  'BD_REVENUE_EXPORT',
  'SOURCE_REVENUE_GAP', // 国内Gap数据
  'PRODUCT_ROI', // 产品ROI
  'ROI_SKU_ESTIMATE_LIST', // 留存预估 [访问]
  'USER_FEEDBACK_USER', // 用户反馈 [菜单访问]
  'USER_FEEDBACK', // 用户反馈 [产品下拉框]
  'ROI_SKU_ESTIMATE_MODIFY', // 留存预估 [操作]
  'REPORT_MEDIATION_VIEW', // Mediation报表
  'MATERIAL_OVERVIEW_VIEW', // 国内素材概览
  'MATERIAL_RANK_VIEW', // 国内素材排行
  'MATERIAL_LIST_VIEW', // 国内素材
  'MATERIAL_OVERSEA-LIST_VIEW', // 海外素材列表
  'MATERIAL_OVERSEA-RANK_VIEW', // 海外素材排行榜
  'TOOL_TRACKING-URL', // 点击链接转换
  'TOOL_TEST-CLICK', // 渠道点击联调
  'TOOL_ENTER-REVENUE', // 收入数据录入
  'TOOL_CLEAN_CACHE', // 测试数据清理
  'TOOL_TURN-TEST', // 转化联调
  'SYS_APP_VIEW', // APP管理
  'SYS_APP_CONFIG', // APP管理 > 编辑权限
  'SYS_APP-REDIS-MAP_VIEW', // Redis 配置
  'SYS_APP-REDIS-MAP_CONFIG', // Redis 配置 > 编辑权限
  'SETTING_APP-VERSION_VIEW', // 版本管理
  'SETTING_APP-VERSION_CONFIG', // 版本管理 > 编辑权限
  'SETTING_EVENT_VIEW', // 事件配置
  'SETTING_EVENT_CONFIG', // 事件配置 > 编辑权限
  'SETTING_APPID_VIEW', // 变现配置
  // 'INCOME_SOURCE_VIEW',  // 变现账号
  'SETTING_APPID_CONFIG', // 变现配置 > 编辑权限
  'CONFIG_KEY_META', // 通用配置 > 字段配置
  'MODULE_COMMON_KEY', // 系统管理 - 网赚元数据 - 用于超管和反作弊专员配置创建是否公开
  'TASK_TEMPLATE_CONFIG', // 系统管理 > 任务模板管理
  'SYS_SOURCE_VIEW', // 渠道管理
  'SETTING_SDK-STRATEGY_VIEW', // 悬壶策略
  'SETTING_SDK-STRATEGY_CONFIG', // 悬壶策略 > 编辑权限
  'SETTING_SDK-MANAGE_VIEW', // SDK管理
  'SETTING_SDK-MANAGE_CONFIG', // SDK管理 > 编辑权限
  'SETTING_REBATE_VIEW', // 返点配置
  'SETTING_REBATE_CONFIG', // 返点配置 > 编辑权限
  'TIER_MANAGER', // 梯队管理
  'SYS_COMPANY_VIEW', // 企业管理、集团管理
  'SYS_ACCOUNT-MANAGE_VIEW', // 账号管理
  'SYS_ACCOUNT-MANAGE_CONFIG', // 账号管理 操作权限
  'SYS_DATA_DICTIONARY_CONFIG', // 数据字典管理 > 编辑权限
  'SYS_COMPANY_CONFIG-MANAGER', // 企业管理 > 高级编辑权限
  'SYS_COMPANY_CONFIG-DEFAULT', // 企业管理 > 默认编辑权限
  'SYS_MEMBER_VIEW', // 人员管理
  'SYS_MEMBER_CONFIG', // 用户管理
  'SYS_LOG_VIEW', // 操作日志

  // == BiddingWin ==
  'ADX_DATA', // 收入数据

  // == 收钱宝「订阅产品」 ==
  'PAYMENT_MERCHANT_DATA', // 商户转账记录
  'PAYMENT_ORDER', // 订单明细 / 退款列表
  'PAYMENT_ORDER_REFUND', // 退款相关
  'PAYMENT_OPERATION_LOG', // 运营日志
  'PAYMENT_APP_CONFIG', // 「配置管理」策略配置
  'FUNCTIONAL_PLAN', // 「配置管理」产品功能方案
  'PAYMENT_MERCHANT', // 「商户配置」阿里云短信配置 / 阿里云短信详情
  'PAYMENT_SPU_SKU', // 商品类型 / 商品管理 / 商品包 [页面权限]
  'PAYMENT_SKU_BUSINESS', // 商品类型[编辑权限]

  // == 充值类业务 ==
  'RECHARGE_SKU', // 充值类商品管理

  'REPORT_PROMOTION_TIXIAN_VIEW', // 工作室报表 | 用户标签报表 | 提现监控 | 底价分布
  'REPORT_PROMOTION_TIXIAN_USER_CONFIG', // 提现监控 可写权限
  'CONFIG_KEY_META_APP', // 网赚策略配置
  'CONFIG_KEY_META_GLOBAL_VIEW', // 钱不易 - 全局策略配置 - 查看权限
  'CONFIG_KEY_META_GLOBAL', // 钱不易 - 全局策略配置 - 编辑权限
  'WZ_OFFER_VIEW', // 网赚Offer标签
  'TIXIAN_WECHAT_MERCHANT', // 商户消耗数据
  'OVERSEA_WZ', // 用户分级数据
  'TASK_GLOBAL_CONFIG_VIEW', // 钱不易 - 全局任务配置 - 查看权限
  'TASK_GLOBAL_CONFIG', // 钱不易 - 全局任务配置 - 编辑权限
  'USER_PERMISSION', // 1、全局任务配置 > 权限管理权限； 2、网赚权限管理
  'TASK_APP_CONFIG', // 钱不易 - 应用任务配置
  // 财务管理相关
  'MERCHANT_MANAGER', // 代理公司、商户管理、财务管理（借款单、付款单、充值记录、商户余额报表）的查看权限
  'MERCHANT_MANAGER_UPDATE', // 编辑权限
  // 租户管理
  'TENANT_MANAGER',
  // 租户配置
  'TENANT_CONFIG',
  // 主体管理
  'ENTITY_MANAGER',
  // 收入账号管理
  'ACCOUNT_CONFIG_REVENUE_MANAGER',
  // 登录管理
  'THIRD_SIGN_IN_CONFIG',
  // 短信配置管理 / Firebase配置管理
  'THIRD_SMS_CONFIG',
  // 配置管理 / 产品配置 / 华为成本配置
  'HUAWEI_COST_CONFIG',
  // 成本账号管理
  'ACCOUNT_CONFIG_COST_MANAGER',
  // 收入&成本账号管理上传文件
  'ACCOUNT_CONFIG_FILE',
  'REPORT_ROI_SIMPLE_VIEW', // by:老姜 变现分析：有该权限KEY的用户 不可显示变现平台、广告位类型级别的数据
  'REPORT_EARNING_SIMPLE_VIEW', // by:老姜 广告收入：有该权限KEY的用户 不可显示变现平台、广告位类型,广告位D级别的数据,数据细分，以及变现平台的对比
  'OFFER_VIEW', // 变现数据 > offer报表
  'KEY_MANAGER', // 用户管理 > 个人权限分配
  'OFFLINE_PKG_DATA', // 线下渠道包含包名的页面

  // == 智能化投放 ==
  'INFORMATION_DATA', // 信息库
  'GRANT_AI_MANAGER_USER', // 人员分配 [原料库]
  AUTH_ALBUM_CONTROL, // 专辑增删改 [原料库]
  'MATERIAL_MANAGER', // 素材管理 [原料库]
  AUTH_SWITCH_FACE, // 视频换脸
  AUTH_GOODS_MATERIAL_R, // 成品库 读
  AUTH_GOODS_MATERIAL_W, // 成品库 写
  AUTH_VIDEO_JOINT_R, // 视频拼接 读
  AUTH_VIDEO_JOINT_W, // 视频拼接 写
  ROI_STRATEGY_R, // ROI盯盘策略
  ROI_STRATEGY_W, // ROI盯盘策略 [应用配置 的操作权限]
  OTHER_STRATEGY_R, // 其他盯盘策略

  // == 系统管理 ==
  COMPANY_DEPARTMENT_R,
  SUB_DEPARTMENT_R,
  PAGE_ROLE_AUTH_R,

  // == 互利乐 ==
  'MATERIAL_AUDIT', // 内容审核
  'SYS_APP_CONFIG' // 运营配置
]
