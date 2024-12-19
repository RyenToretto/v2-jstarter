import BasePagination from '@/components/BasePagination.vue'

export const defaultSortOrders = ['descending', 'ascending', null]

export default {
  components: {
    BasePagination
  },
  data() {
    const defaultSort = { prop: 'createTime', order: 'descending' }
    return {
      defaultSort,
      defaultSortOrders,
      tableLoading: false,
      query: {
        pageNum: 1,
        pageSize: 20,
        orderBy: defaultSort.prop,
        sequence: defaultSort.order
      },
      total: 0,
      tableData: []
    }
  },
  computed: {
    // 判断是否为海外环境
    overseaEnv() {
      return !!this.$store.state.oversea
    },
    // 页面权限KEY
    PAGE_PERMISSION_KEY() {
      return this.$route.meta?.permission || ''
    }
  },
  methods: {
    handlePnChange(pn) {
      this.query.pageNum = pn
      this.search()
    },
    handleSizeChange(size) {
      this.query.pageSize = size
      // this.$store.commit('setPageSize', size)
      this.search && this.search(true)
    },
    handleSortChange({ prop, order, column }) {
      if (column.sortable === 'custom') {
        this.query.orderBy = prop
        this.query.sequence = order
        this.search(true)
      }
    }
  }
}
