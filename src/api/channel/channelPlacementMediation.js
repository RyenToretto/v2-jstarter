export default {
  /**
   * @description 查询渠道广告位Mediation列表
   * @param params { PaginationParams<{
   *   channelPlacementId: string,
   * }> }
   *
   * @return { AjaxPromise<{ total: number, lists: ChannelPlacementMediation }> }
   */
  requestChannelPlacementMediationList(params) {
    return axios.get('/m/channel/placement/mediation', { params })
  },

  /**
   * @description 添加渠道广告位Mediation
   * @param channelPlacementId { string } 渠道广告位ID
   * @param aid { string } 广告位ID
   * @param name { string } 名称
   * @param basePrice { string } 底价
   * @param type { string } 广告位类型
   *
   * @return { SuccessResponse }
   */
  requestAddChannelPlacementMediation({ channelPlacementId, aid, name, basePrice, type }) {
    return axios.post(`/m/channel/placement/mediation`, {
      channelPlacementId,
      aid,
      name,
      basePrice,
      type
    })
  },
  /**
   * @description 修改渠道广告位Mediation
   * @param id { string }
   * @param channelPlacementId { string } 渠道广告位ID
   * @param aid { string } 广告位ID
   * @param name { string } 名称
   * @param basePrice { string } 底价
   * @param type { string } 广告位类型
   *
   * @return { SuccessResponse }
   */
  requestUpdateChannelPlacementMediation({ id, channelPlacementId, aid, name, basePrice, type }) {
    return axios.put(`/m/channel/placement/mediation/${id}`, {
      channelPlacementId,
      aid,
      name,
      basePrice,
      type
    })
  },

  /**
   * @description 删除渠道广告位Mediation
   * @param id { string }
   *
   * @return { SuccessResponse }
   */
  requestDeleteChannelPlacementMediation({ id }) {
    return axios.delete(`/m/channel/placement/mediation/${id}`)
  }
}
