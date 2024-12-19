const list = {
  success: true,
  code: '0000',
  message: null,
  result: [
    // 为了图表可视化，数组长度最大为100
    {
      xaxis: 'vivo',
      uv: '31',
      pv: '231' // pv 100%准确，uv 数据在百万级别以上有5%以内的误差
    },
    {
      xaxis: 'oppo',
      uv: '43',
      pv: '321' // pv 100%准确，uv 数据在百万级别以上有5%以内的误差
    },
    {
      xaxis: 'huawei',
      uv: '382',
      pv: '2021' // pv 100%准确，uv 数据在百万级别以上有5%以内的误差
    },
    {
      xaxis: '小米',
      uv: '182',
      pv: '1421' // pv 100%准确，uv 数据在百万级别以上有5%以内的误差
    },
    {
      xaxis: '魅族',
      uv: '94',
      pv: '142' // pv 100%准确，uv 数据在百万级别以上有5%以内的误差
    },
    {
      xaxis: '一加',
      uv: '132',
      pv: '184' // pv 100%准确，uv 数据在百万级别以上有5%以内的误差
    }
  ]
}

export default list
