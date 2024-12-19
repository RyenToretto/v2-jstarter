export default {
  /**
   * @description 查询渠道下的，全部广告位类型
   *
   * @return { AjaxPromise<ChannelPlacementType[]> }
   */
  requestAllChannelPlacementType() {
    return axios.get('/m/placement/channel/type/all')
  },
  /**
   * @description 查询渠道广告位类型列表
   * @param params { PaginationParams<{
   *   code: string,
   *   name: string,
   *   placementTypeId: string
   * }> }
   *
   * @return { AjaxPromise<{ total: number, lists: ChannelPlacementType }> }
   */
  requestChannelPlacementTypeList(params) {
    return axios.get('/m/placement/channel/type', { params })
  },
  /**
   * @description 添加渠道广告位类型
   * @param source { string }
   * @param placementTypeId { string }
   *
   * @return { SuccessResponse }
   */
  requestAddChannelPlacementType({ source, placementTypeId }) {
    return axios.post(`/m/placement/channel/type`, { source, placementTypeId })
  },
  /**
   * @description 修改渠道广告位类型
   * @param id { string }
   * @param source { string }
   * @param placementTypeId { string }
   *
   * @return { SuccessResponse }
   */
  requestUpdateChannelPlacementType({ id, source, placementTypeId }) {
    return axios.put(`/m/placement/channel/type/${id}`, { source, placementTypeId })
  },
  /**
   * @description 删除渠道广告位类型
   * @param id { string }
   *
   * @return { SuccessResponse }
   */
  requestDeleteChannelPlacementType({ id }) {
    return axios.delete(`/m/placement/channel/type/${id}`)
  }
}
