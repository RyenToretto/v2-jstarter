import MAPS from '@/maps'
import { msToHMS, percent } from '@/filters'

export const normalTooltipRender = ({
  params,
  ticket,
  callback,

  appendTotal = '(累加)',
  indicators = [],
  dMap = MAPS.summary.indicator,
  percentKeys = ['dayTotalRevenue', 'adRevenue', 'appProfit', 'totalCost', 'cost'],
  durationKeys = ['watchDuration', 'newWatchDuration'],
  barPercentCondition = null,
  cannotSort = (e) =>
    e.seriesName &&
    e.seriesName.includes('「') &&
    e.seriesName.includes('-') &&
    e.seriesName.includes('」'),
  mustPercent = null,
  indicatorGetter = null,
  xLabelMap = {},
  appendSeriesName = ''
}) => {
  const percentLabels = percentKeys.map((i) => ({
    key: `【${dMap[i]}】`,
    totalLabel: `${dMap[i]}${appendTotal}`
  }))
  const durationLabels = durationKeys.map((i) => ({
    key: `【${dMap[i]}】`,
    totalLabel: `${dMap[i]}${appendTotal}`
  }))

  const vArr = indicators
    .map((i) => ({ key: `【${dMap[i]}】`, list: [] }))
    .concat({ key: 'withoutName', list: [] })

  let inLabels = indicators.map((i) => dMap[i])
  inLabels = inLabels.concat(inLabels.map((i) => `${i}${appendTotal}`))

  let USE_DURATION = false
  const appendParams = []
  for (const eachParam of params) {
    const indexInfo = percentLabels.findIndex((e) => eachParam.seriesName === e.totalLabel)
    if (indexInfo >= 0) {
      percentLabels[indexInfo].totalValue = eachParam.value[1] || 0
    }
    const indexDuration = durationLabels.findIndex((e) => eachParam.seriesName === e.totalLabel)
    if (indexDuration >= 0) {
      USE_DURATION = true
    }

    const plIndex = vArr.findIndex((v) => eachParam.seriesName.includes(v.key))
    const doNotSort = !cannotSort ? false : !!cannotSort(eachParam)
    if (inLabels.includes(eachParam.seriesName) || doNotSort) {
      const indexNew = percentLabels.findIndex((e) => `【${eachParam.seriesName}】`.includes(e.key))
      if (indexNew >= 0) {
        eachParam.__use_percent = true
        eachParam.__percent_value = `${+percent(eachParam.value[1] || 0, 2)}%`
      }
      if (USE_DURATION) {
        eachParam.value[1] = msToHMS(eachParam.value[1])
      }
      appendParams.push(eachParam)
    } else if (plIndex >= 0) {
      vArr[plIndex].list.push(eachParam)
    } else {
      vArr[vArr.length - 1].list.push(eachParam)
    }
  }

  const sortedArr = vArr
    .reduce((newArr, eachGroup) => {
      const newGroup = eachGroup.list
        .reduce((eachArr, eachInfo) => {
          if (barPercentCondition && barPercentCondition(eachInfo)) {
            eachInfo.__use_percent = true
            eachInfo.__percent_value = `${+percent(eachInfo.value[1] || 0, 2)}%`
          }
          const indexNew = percentLabels.findIndex((e) => eachInfo.seriesName.includes(e.key))
          if (indexNew >= 0 && percentLabels[indexNew].totalValue) {
            eachInfo.__with_percent = `(${percent((eachInfo.value[1] || 0) / percentLabels[indexNew].totalValue)}%)`
          }
          if (USE_DURATION) {
            eachInfo.value[1] = msToHMS(eachInfo.value[1])
          }
          return [...eachArr, eachInfo]
        }, [])
        .sort((a, b) => b.value[1] - a.value[1])
      return newArr.concat(newGroup)
    }, [])
    .concat(appendParams)
  const topTitle = (xLabelMap && xLabelMap[sortedArr[0].name]) || sortedArr[0].name
  return `<div class="do-charts-tooltip clearfix pannel-report-summary">
            <div class="tooltip-pannel-content clearfix">
              <div class="tooltip-pannel-x-label">${topTitle}</div>
              <div class="tooltip-pannel-detail clearfix">
                ${sortedArr.reduce((newStr, eachLine) => {
                  // const currentIndicator = indicatorGetter && indicatorGetter(eachLine.seriesId)
                  const isRatio =
                    eachLine.seriesName.endsWith('Ratio') ||
                    eachLine.seriesName.endsWith('RATIO') ||
                    eachLine.seriesName.endsWith(`Ratio${appendTotal}`) ||
                    eachLine.seriesName.endsWith(`RATIO${appendTotal}`) ||
                    eachLine.seriesName.endsWith('占比') ||
                    (mustPercent && mustPercent(eachLine))
                  if (isRatio && !eachLine.__use_percent) {
                    eachLine.__use_percent = true
                    eachLine.__percent_value = `${+percent(eachLine.value[1] || 0, 2)}%`
                  }
                  if (eachLine.__use_percent) {
                    return (
                      newStr +
                      `<div class="tooltip-pannel-line">
                                       <div class="tooltip-pannel-ico" style="background-color: ${eachLine.color}"></div>
                                       <div class="tooltip-pannel-label">${eachLine.seriesName} ${appendSeriesName}</div>
                                       <div class="tooltip-pannel-value">${eachLine.__percent_value}</div>
                                     </div>`
                    )
                  }
                  return (
                    newStr +
                    `<div class="tooltip-pannel-line">
                                     <div class="tooltip-pannel-ico" style="background-color: ${eachLine.color}"></div>
                                     <div class="tooltip-pannel-label">${eachLine.seriesName} ${appendSeriesName}</div>
                                     <div class="tooltip-pannel-value"><span>${eachLine.value[1] || 0}</span
                                       ><span class="chart-percent">${eachLine.__with_percent || ''}</span
                                     ></div>
                                   </div>`
                  )
                }, '')}
              </div>
            </div>
          </div>`
}
