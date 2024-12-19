const distribution = {
  keyMap: {
    uv: 'uv',
    pv: 'pv'
  },
  chartOption: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      enterable: true,
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    grid: {
      containLabel: true,
      left: 30,
      top: 30,
      right: 40,
      bottom: 60
    },
    dataZoom: [
      {
        type: 'inside',
        zoomOnMouseWheel: false,
        startValue: 0,
        endValue: 9
      },
      {
        type: 'slider'
      }
    ],
    xAxis: {
      type: 'category',
      splitLine: {
        lineStyle: {
          color: '#f00'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#eee'
        }
      },
      axisLabel: {
        color: '#999'
      },
      data: []
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: '#eee',
          type: 'dashed'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      },
      axisLabel: {
        color: '#aaa',
        formatter: '{value}'
      }
    },
    series: []
  }
}
export default distribution
