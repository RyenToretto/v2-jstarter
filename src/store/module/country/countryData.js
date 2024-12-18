import alpha2to3 from './alpha2to3'
const data = [
  {
    name: '阿尔巴尼亚',
    code: 'AL'
  },
  {
    name: '阿尔及利亚',
    code: 'DZ'
  },
  {
    name: '阿富汗',
    code: 'AF'
  },
  {
    name: '阿根廷',
    code: 'AR'
  },
  {
    name: '阿联酋',
    code: 'AE'
  },
  {
    name: '阿鲁巴',
    code: 'AW'
  },
  {
    name: '阿曼',
    code: 'OM'
  },
  {
    name: '阿塞拜疆',
    code: 'AZ'
  },
  {
    name: '埃及',
    code: 'EG'
  },
  {
    name: '埃塞俄比亚',
    code: 'ET'
  },
  {
    name: '爱尔兰',
    code: 'IE'
  },
  {
    name: '爱沙尼亚',
    code: 'EE'
  },
  {
    name: '安道尔',
    code: 'AD'
  },
  {
    name: '安哥拉',
    code: 'AO'
  },
  {
    name: '安圭拉',
    code: 'AI'
  },
  {
    name: '安提瓜和巴布达',
    code: 'AG'
  },
  {
    name: '奥地利',
    code: 'AT'
  },
  {
    name: '奥兰群岛',
    code: 'AX'
  },
  {
    name: '澳大利亚',
    code: 'AU'
  },
  {
    name: '澳门',
    code: 'MO'
  },
  {
    name: '巴巴多斯',
    code: 'BB'
  },
  {
    name: '巴布亚新几内亚',
    code: 'PG'
  },
  {
    name: '巴哈马',
    code: 'BS'
  },
  {
    name: '巴基斯坦',
    code: 'PK'
  },
  {
    name: '巴拉圭',
    code: 'PY'
  },
  {
    name: '巴勒斯坦',
    code: 'PS'
  },
  {
    name: '巴林',
    code: 'BH'
  },
  {
    name: '巴拿马',
    code: 'PA'
  },
  {
    name: '巴西',
    code: 'BR'
  },
  {
    name: '白俄罗斯',
    code: 'BY'
  },
  {
    name: '百慕大',
    code: 'BM'
  },
  {
    name: '保加利亚',
    code: 'BG'
  },
  {
    name: '北马里亚纳群岛',
    code: 'MP'
  },
  {
    name: '贝宁',
    code: 'BJ'
  },
  {
    name: '比利时',
    code: 'BE'
  },
  {
    name: '冰岛',
    code: 'IS'
  },
  {
    name: '波多黎各',
    code: 'PR'
  },
  {
    name: '波黑',
    code: 'BA'
  },
  {
    name: '波兰',
    code: 'PL'
  },
  {
    name: '玻利维亚',
    code: 'BO'
  },
  {
    name: '伯利兹',
    code: 'BZ'
  },
  {
    name: '博茨瓦纳',
    code: 'BW'
  },
  {
    name: '不丹',
    code: 'BT'
  },
  {
    name: '布基纳法索',
    code: 'BF'
  },
  {
    name: '布隆迪',
    code: 'BI'
  },
  {
    name: '布韦岛',
    code: 'BV'
  },
  {
    name: '朝鲜',
    code: 'KP'
  },
  {
    name: '赤道几内亚',
    code: 'GQ'
  },
  {
    name: '丹麦',
    code: 'DK'
  },
  {
    name: '德国',
    code: 'DE'
  },
  {
    name: '东帝汶',
    code: 'TL'
  },
  {
    name: '多哥',
    code: 'TG'
  },
  {
    name: '多米尼加',
    code: 'DO'
  },
  {
    name: '多米尼克',
    code: 'DM'
  },
  {
    name: '俄罗斯',
    code: 'RU'
  },
  {
    name: '厄瓜多尔',
    code: 'EC'
  },
  {
    name: '厄立特里亚',
    code: 'ER'
  },
  {
    name: '法国',
    code: 'FR'
  },
  {
    name: '法罗群岛',
    code: 'FO'
  },
  {
    name: '法属波利尼西亚',
    code: 'PF'
  },
  {
    name: '法属圭亚那',
    code: 'GF'
  },
  {
    name: '法属南部领地',
    code: 'TF'
  },
  {
    name: '法属圣马丁',
    code: 'MF'
  },
  {
    name: '梵蒂冈',
    code: 'VA'
  },
  {
    name: '菲律宾',
    code: 'PH'
  },
  {
    name: '斐济群岛',
    code: 'FJ'
  },
  {
    name: '芬兰',
    code: 'FI'
  },
  {
    name: '佛得角',
    code: 'CV'
  },
  {
    name: '冈比亚',
    code: 'GM'
  },
  {
    name: '刚果（布）',
    code: 'CG'
  },
  {
    name: '刚果（金）',
    code: 'CD'
  },
  {
    name: '哥伦比亚',
    code: 'CO'
  },
  {
    name: '哥斯达黎加',
    code: 'CR'
  },
  {
    name: '格林纳达',
    code: 'GD'
  },
  {
    name: '格陵兰',
    code: 'GL'
  },
  {
    name: '格鲁吉亚',
    code: 'GE'
  },
  {
    name: '根西',
    code: 'GG'
  },
  {
    name: '古巴',
    code: 'CU'
  },
  {
    name: '瓜德罗普(法国)',
    code: 'GP'
  },
  {
    name: '关岛',
    code: 'GU'
  },
  {
    name: '圭亚那',
    code: 'GY'
  },
  {
    name: '哈萨克斯坦',
    code: 'KZ'
  },
  {
    name: '海地',
    code: 'HT'
  },
  {
    name: '韩国',
    code: 'KR'
  },
  {
    name: '和南桑威奇群岛',
    code: 'GS'
  },
  {
    name: '荷兰',
    code: 'NL'
  },
  {
    name: '荷兰加勒比区',
    code: 'BQ'
  },
  {
    name: '荷属圣马丁',
    code: 'SX'
  },
  {
    name: '赫德岛和麦克唐纳群岛',
    code: 'HM'
  },
  {
    name: '黑山',
    code: 'ME'
  },
  {
    name: '洪都拉斯',
    code: 'HN'
  },
  {
    name: '基里巴斯',
    code: 'KI'
  },
  {
    name: '吉布提',
    code: 'DJ'
  },
  {
    name: '吉尔吉斯斯坦',
    code: 'KG'
  },
  {
    name: '几内亚',
    code: 'GN'
  },
  {
    name: '几内亚比绍',
    code: 'GW'
  },
  {
    name: '加拿大',
    code: 'CA'
  },
  {
    name: '加纳',
    code: 'GH'
  },
  {
    name: '加蓬',
    code: 'GA'
  },
  {
    name: '柬埔寨',
    code: 'KH'
  },
  {
    name: '捷克',
    code: 'CZ'
  },
  {
    name: '津巴布韦',
    code: 'ZW'
  },
  {
    name: '喀麦隆',
    code: 'CM'
  },
  {
    name: '卡塔尔',
    code: 'QA'
  },
  {
    name: '开曼群岛',
    code: 'KY'
  },
  {
    name: '科科斯群岛',
    code: 'CC'
  },
  {
    name: '科摩罗',
    code: 'KM'
  },
  {
    name: '科特迪瓦',
    code: 'CI'
  },
  {
    name: '科威特',
    code: 'KW'
  },
  {
    name: '克罗地亚',
    code: 'HR'
  },
  {
    name: '肯尼亚',
    code: 'KE'
  },
  {
    name: '库克群岛',
    code: 'CK'
  },
  {
    name: '库拉索',
    code: 'CW'
  },
  {
    name: '拉脱维亚',
    code: 'LV'
  },
  {
    name: '莱索托',
    code: 'LS'
  },
  {
    name: '老挝',
    code: 'LA'
  },
  {
    name: '黎巴嫩',
    code: 'LB'
  },
  {
    name: '立陶宛',
    code: 'LT'
  },
  {
    name: '利比里亚',
    code: 'LR'
  },
  {
    name: '利比亚',
    code: 'LY'
  },
  {
    name: '列支敦士登',
    code: 'LI'
  },
  {
    name: '留尼汪',
    code: 'RE'
  },
  {
    name: '卢森堡',
    code: 'LU'
  },
  {
    name: '卢旺达',
    code: 'RW'
  },
  {
    name: '罗马尼亚',
    code: 'RO'
  },
  {
    name: '马达加斯加',
    code: 'MG'
  },
  {
    name: '马恩岛',
    code: 'IM'
  },
  {
    name: '马尔代夫',
    code: 'MV'
  },
  {
    name: '马尔维纳斯群岛',
    code: 'FK'
  },
  {
    name: '马耳他',
    code: 'MT'
  },
  {
    name: '马拉维',
    code: 'MW'
  },
  {
    name: '马来西亚',
    code: 'MY'
  },
  {
    name: '马里',
    code: 'ML'
  },
  {
    name: '马其顿',
    code: 'MK'
  },
  {
    name: '马绍尔群岛',
    code: 'MH'
  },
  {
    name: '马提尼克',
    code: 'MQ'
  },
  {
    name: '马约特',
    code: 'YT'
  },
  {
    name: '毛里求斯',
    code: 'MU'
  },
  {
    name: '毛里塔尼亚',
    code: 'MR'
  },
  {
    name: '美国',
    code: 'US'
  },
  {
    name: '美国本土外小岛屿',
    code: 'UM'
  },
  {
    name: '美属萨摩亚',
    code: 'AS'
  },
  {
    name: '美属维尔京群岛',
    code: 'VI'
  },
  {
    name: '蒙古',
    code: 'MN'
  },
  {
    name: '蒙塞拉特岛',
    code: 'MS'
  },
  {
    name: '孟加拉国',
    code: 'BD'
  },
  {
    name: '秘鲁',
    code: 'PE'
  },
  {
    name: '密克罗尼西亚联邦',
    code: 'FM'
  },
  {
    name: '缅甸',
    code: 'MM'
  },
  {
    name: '摩尔多瓦',
    code: 'MD'
  },
  {
    name: '摩洛哥',
    code: 'MA'
  },
  {
    name: '摩纳哥',
    code: 'MC'
  },
  {
    name: '莫桑比克',
    code: 'MZ'
  },
  {
    name: '墨西哥',
    code: 'MX'
  },
  {
    name: '纳米比亚',
    code: 'NA'
  },
  {
    name: '南非',
    code: 'ZA'
  },
  {
    name: '南极洲',
    code: 'AQ'
  },
  {
    name: '南苏丹',
    code: 'SS'
  },
  {
    name: '瑙鲁',
    code: 'NR'
  },
  {
    name: '尼泊尔',
    code: 'NP'
  },
  {
    name: '尼加拉瓜',
    code: 'NI'
  },
  {
    name: '尼日尔',
    code: 'NE'
  },
  {
    name: '尼日利亚',
    code: 'NG'
  },
  {
    name: '纽埃',
    code: 'NU'
  },
  {
    name: '挪威',
    code: 'NO'
  },
  {
    name: '诺福克岛',
    code: 'NF'
  },
  {
    name: '帕劳',
    code: 'PW'
  },
  {
    name: '皮特凯恩群岛',
    code: 'PN'
  },
  {
    name: '葡萄牙',
    code: 'PT'
  },
  {
    name: '日本',
    code: 'JP'
  },
  {
    name: '瑞典',
    code: 'SE'
  },
  {
    name: '瑞士',
    code: 'CH'
  },
  {
    name: '萨尔瓦多',
    code: 'SV'
  },
  {
    name: '萨摩亚',
    code: 'WS'
  },
  {
    name: '塞尔维亚',
    code: 'RS'
  },
  {
    name: '塞拉利昂',
    code: 'SL'
  },
  {
    name: '塞内加尔',
    code: 'SN'
  },
  {
    name: '塞浦路斯',
    code: 'CY'
  },
  {
    name: '塞舌尔',
    code: 'SC'
  },
  {
    name: '沙特阿拉伯',
    code: 'SA'
  },
  {
    name: '圣巴泰勒米岛',
    code: 'BL'
  },
  {
    name: '圣诞岛',
    code: 'CX'
  },
  {
    name: '圣多美和普林西比',
    code: 'ST'
  },
  {
    name: '圣赫勒拿',
    code: 'SH'
  },
  {
    name: '圣基茨和尼维斯',
    code: 'KN'
  },
  {
    name: '圣卢西亚',
    code: 'LC'
  },
  {
    name: '圣马力诺',
    code: 'SM'
  },
  {
    name: '圣皮埃尔和密克隆',
    code: 'PM'
  },
  {
    name: '圣文森特和格林纳丁斯',
    code: 'VC'
  },
  {
    name: '斯里兰卡',
    code: 'LK'
  },
  {
    name: '斯洛伐克',
    code: 'SK'
  },
  {
    name: '斯洛文尼亚',
    code: 'SI'
  },
  {
    name: '斯瓦尔巴群岛和扬马延岛',
    code: 'SJ'
  },
  {
    name: '斯威士兰',
    code: 'SZ'
  },
  {
    name: '苏丹',
    code: 'SD'
  },
  {
    name: '苏里南',
    code: 'SR'
  },
  {
    name: '所罗门群岛',
    code: 'SB'
  },
  {
    name: '索马里',
    code: 'SO'
  },
  {
    name: '塔吉克斯坦',
    code: 'TJ'
  },
  {
    name: '台湾',
    code: 'TW'
  },
  {
    name: '泰国',
    code: 'TH'
  },
  {
    name: '坦桑尼亚',
    code: 'TZ'
  },
  {
    name: '汤加',
    code: 'TO'
  },
  {
    name: '特克斯和凯科斯群岛',
    code: 'TC'
  },
  {
    name: '特立尼达和多巴哥',
    code: 'TT'
  },
  {
    name: '突尼斯',
    code: 'TN'
  },
  {
    name: '图瓦卢',
    code: 'TV'
  },
  {
    name: '土耳其',
    code: 'TR'
  },
  {
    name: '土库曼斯坦',
    code: 'TM'
  },
  {
    name: '托克劳',
    code: 'TK'
  },
  {
    name: '瓦利斯和富图纳',
    code: 'WF'
  },
  {
    name: '瓦努阿图',
    code: 'VU'
  },
  {
    name: '危地马拉',
    code: 'GT'
  },
  {
    name: '委内瑞拉',
    code: 'VE'
  },
  {
    name: '文莱',
    code: 'BN'
  },
  {
    name: '乌干达',
    code: 'UG'
  },
  {
    name: '乌克兰',
    code: 'UA'
  },
  {
    name: '乌拉圭',
    code: 'UY'
  },
  {
    name: '乌兹别克斯坦',
    code: 'UZ'
  },
  {
    name: '西班牙',
    code: 'ES'
  },
  {
    name: '西撒哈拉',
    code: 'EH'
  },
  {
    name: '希腊',
    code: 'GR'
  },
  {
    name: '香港',
    code: 'HK'
  },
  {
    name: '新加坡',
    code: 'SG'
  },
  {
    name: '新喀里多尼亚',
    code: 'NC'
  },
  {
    name: '新西兰',
    code: 'NZ'
  },
  {
    name: '匈牙利',
    code: 'HU'
  },
  {
    name: '叙利亚',
    code: 'SY'
  },
  {
    name: '牙买加',
    code: 'JM'
  },
  {
    name: '亚美尼亚',
    code: 'AM'
  },
  {
    name: '也门',
    code: 'YE'
  },
  {
    name: '伊拉克',
    code: 'IQ'
  },
  {
    name: '伊朗',
    code: 'IR'
  },
  {
    name: '以色列',
    code: 'IL'
  },
  {
    name: '意大利',
    code: 'IT'
  },
  {
    name: '印度',
    code: 'IN'
  },
  {
    name: '印尼',
    code: 'ID'
  },
  {
    name: '英国',
    code: 'GB'
  },
  {
    name: '英属维尔京群岛',
    code: 'VG'
  },
  {
    name: '英属印度洋领地',
    code: 'IO'
  },
  {
    name: '约旦',
    code: 'JO'
  },
  {
    name: '越南',
    code: 'VN'
  },
  {
    name: '赞比亚',
    code: 'ZM'
  },
  {
    name: '泽西岛',
    code: 'JE'
  },
  {
    name: '乍得',
    code: 'TD'
  },
  {
    name: '直布罗陀',
    code: 'GI'
  },
  {
    name: '智利',
    code: 'CL'
  },
  {
    name: '中非',
    code: 'CF'
  },
  {
    name: '中国',
    code: 'CN'
  }
].map((v) => {
  const code = v.code
  v.code3 = alpha2to3[code] || ''
  return v
})
export default data
