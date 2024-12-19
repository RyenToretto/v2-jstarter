const config = {
  code: '0000',
  result: {
    payFloorValue: '@pick(499, 599, 621)', // 机审生效底价收入最低值
    passValidPayRatio: '@pick(2.9, 2.99, 2.999)', // 机审通过有效收入占比
    rejectValidPayRatio: '@pick(4.299, 5.399, 6.499)' // 机审拒绝有效收入占比
  }
}
export default config
