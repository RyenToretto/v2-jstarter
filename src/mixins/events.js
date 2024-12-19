/**
 * @file: events.js
 * @author: lufei
 * @description: 投放数据>事件列
 **/
export default {
  name: 'eventsMixins',
  components: {},

  data() {
    return {
      // 事件指标
      eventsColumns: []
    }
  },
  props: {
    attrKey: {
      type: String,
      default() {
        return 'eventKey'
      }
    }
  },
  computed: {},
  methods: {
    /**
     * 生成事件数据
     * @param {Object} row 行数据
     * @param {Boolean} buildHeader 是否构建行表头数据
     */
    generateEventData(row, buildHeader = false, eventSort = false) {
      // const rawData = this.$utils.deepClone(row.events || [])
      const rawData = row?.events?.filter((v, index) => index < 100) || []
      // 过滤特定规则的事件，防止事件过多导致页面渲染异常 2022-03-25
      // const rawData = row.events.filter(v => /^(xh)_/.test(v[this.attrKey]))
      // 按type排序（0:注册，1: 买量，2: 其它）
      if (eventSort) {
        this.$utils.sortByKey(rawData, 'type')
      }
      // 渲染表头列
      if (buildHeader) {
        // 清空表头数据
        this.eventsColumns = []
      }
      rawData.forEach((v, i) => {
        this.injectRowData({
          row: row,
          buildHeader,
          data: v,
          dataIndex: i
        })
      })
    },
    /**
     * 向表格行数据插入事件
     * @param {Object} options 配置项
     * prefixName: 前缀名
     * row: 表格行数据
     * buildHeader: 是否构建表头
     * data: events单条数据 样例：{ [this.attrKey]:'xxx', type: 0, value: 123.45, name: '注册事件'}
     */
    injectRowData({ row, buildHeader, data, dataIndex }) {
      // const eventType = data.type
      // 键名前缀
      let prefixName = `evt__${data[this.attrKey]}`
      // 表头label
      const headerLabel = data[this.attrKey]
      // switch (eventType) {
      //   // 注册事件
      //   case 0:
      //     headerLabel = '注册'
      //     break
      //   // 付费事件
      //   case 1:
      //     headerLabel = '付费'
      //     break
      //   default:
      //     // headerLabel = `事件${dataIndex + 1}`
      //     headerLabel = data[this.attrKey]
      // }
      // 注入事件数据
      // 事件次数
      row[`${prefixName}__num`] = data.value
      // 转化率
      row[`${prefixName}__rate`] = data.activeRate
      // roi
      row[`${prefixName}__roi`] = data.roi
      // // 广告覆盖度（展示UV/事件UV）
      // row[`${prefixName}__adUvRate`] = data.adUserCoverageRate
      // // 人均PV（广告展示上报PV / UV）
      // row[`${prefixName}__pcPv`] = data.pvDivUv
      // 注入表头
      if (buildHeader) {
        // push规则（xh_alive强制第一个）
        const pushRule = data[this.attrKey] === 'xh_alive' ? 'unshift' : 'push'
        this.eventsColumns[pushRule](
          {
            prop: `${prefixName}__num`,
            label: headerLabel,
            // type: data.type,
            align: 'right',
            minWidth: 120,
            // className: 'event-column__item',
            // showOverflowTooltip: true,
            format: {
              type: 'integer'
            },
            compareLabel: 'ROI',
            compareWith: `${prefixName}__roi`, // 人均PV
            compareFormat: {
              type: 'float',
              decimal: 2
            },
            dataCell: true,
            labelTip: {
              key: data[this.attrKey],
              name: data.name
            },
            evt: data
          }
          // {
          //   prop: `${prefixName}__rate`, // 转化率
          //   compareWith: `${prefixName}__adUvRate`,
          //   label: '转化率',
          //   compareLabel: '广告覆盖率',
          //   align: 'right',
          //   width: 70,
          //   // showOverflowTooltip: true,
          //   dataCell: true,
          //   format: {
          //     type: 'percent',
          //     decimal: 1
          //   }
          // }
        )
      }
    },
    eventColClass(index, total) {
      let className = ''
      if (index === 1) {
        className = 'event-column_left-edge'
      }
      if (index === total) {
        className = 'event-column_right-edge'
      }
      return className
    },
    // 获取行数据中，指定eventKey的数据
    getEventDataFromRow(row, lineEvent) {
      return row.events.find((item) => {
        return item[this.attrKey] === lineEvent
      })
    }
  },
  watch: {},

  created() {},
  mounted() {},
  destroyed() {}
}
