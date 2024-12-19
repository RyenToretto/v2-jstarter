export default {
  /**
   * @description 查询渠道广告位配置列表
   * @param params { PaginationParams<{
   *   type: string,
   * }> }
   *
   * @return { AjaxPromise<{ total: number, lists: ChannelPlacementConfig }> }
   */
  requestChannelPlacementConfigList(params) {
    return axios.get('/m/channel/placement/config', { params })
  },

  /**
   * @description 添加渠道广告位配置
   * @param type { string } 广告位类型
   * @param width { string } 宽
   * @param height { string } 高
   * @param expressWidth { string }
   * @param expressHeight { string }
   * @param intervalTime { string } 间隔时间
   * @param orientation { string } 版式
   * @param remark { string } 描述
   * @param rewardNum { string } 奖励号码
   *
   * @return { SuccessResponse }
   */
  requestAddChannelPlacementConfig({
    type,
    width,
    height,
    expressWidth,
    expressHeight,
    intervalTime,
    orientation,
    remark,
    rewardNum
  }) {
    return axios.post(`/m/channel/placement/config`, {
      type,
      width,
      height,
      expressWidth,
      expressHeight,
      intervalTime,
      orientation,
      remark,
      rewardNum
    })
  },
  /**
   * @description 修改渠道广告位配置
   * @param id { string }
   * @param type { string } 广告位类型
   * @param width { string } 宽
   * @param height { string } 高
   * @param expressWidth { string }
   * @param expressHeight { string }
   * @param intervalTime { string } 间隔时间
   * @param orientation { string } 版式
   * @param remark { string } 描述
   * @param rewardNum { string } 奖励号码
   *
   * @return { SuccessResponse }
   */
  requestUpdateChannelPlacementConfig({
    id,
    type,
    width,
    height,
    expressWidth,
    expressHeight,
    intervalTime,
    orientation,
    remark,
    rewardNum
  }) {
    return axios.put(`/m/channel/placement/config/${id}`, {
      type,
      width,
      height,
      expressWidth,
      expressHeight,
      intervalTime,
      orientation,
      remark,
      rewardNum
    })
  },

  /**
   * @description 删除渠道广告位配置
   * @param id { string }
   *
   * @return { SuccessResponse }
   */
  requestDeleteChannelPlacementConfig({ id }) {
    return axios.delete(`/m/channel/placement/config/${id}`)
  }
}
