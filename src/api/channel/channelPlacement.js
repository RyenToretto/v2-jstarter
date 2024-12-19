export default {
  /**
   * @description 查询渠道广告位列表
   * @param params { PaginationParams<{
   *   channelAppId: string,
   *   aid: string,
   *   name: string
   * }> }
   *
   * @return { AjaxPromise<{ total: number, lists: ChannelPlacement }> }
   */
  requestChannelPlacementList(params) {
    return axios.get('/m/channel/placement', { params })
  },

  /**
   * @description 添加渠道广告位
   * @param channelAppId { string } 渠道应用 ID
   * @param aid { string } 广告位ID
   * @param name { string } 名称
   * @param basePrice { string } 底价
   * @param type { string } 广告位类型
   * @param isMediation { boolean } 是否是mediation
   * @param tmout { string } 广告缓存超时时间
   * @param status { string } 状态
   *
   * @return { SuccessResponse }
   */
  requestAddChannelPlacement({
    channelAppId,
    aid,
    name,
    basePrice,
    type,
    isMediation,
    tmout,
    status
  }) {
    return axios.post(`/m/channel/placement`, {
      channelAppId,
      aid,
      name,
      basePrice,
      type,
      isMediation,
      tmout,
      status
    })
  },
  /**
   * @description 修改渠道广告位
   * @param id { string }
   * @param channelAppId { string }
   * @param aid { string }
   * @param name { string }
   * @param basePrice { string }
   * @param type { string }
   * @param isMediation { boolean }
   * @param tmout { string }
   * @param status { string }
   *
   * @return { SuccessResponse }
   */
  requestUpdateChannelPlacement({
    id,
    channelAppId,
    aid,
    name,
    basePrice,
    type,
    isMediation,
    tmout,
    status
  }) {
    return axios.put(`/m/channel/placement/${id}`, {
      channelAppId,
      aid,
      name,
      basePrice,
      type,
      isMediation,
      tmout,
      status
    })
  },

  /**
   * @description 删除渠道广告位
   * @param id { string }
   *
   * @return { SuccessResponse }
   */
  requestDeleteChannelPlacement({ id }) {
    return axios.delete(`/m/channel/placement/${id}`)
  }
}
