export default {
  /**
   * @description 查询渠道应用列表
   * @param params { PaginationParams<{
   *   name: string,
   *   appId: string,
   *   source: string,
   *   myAppId: string,
   *   status: string
   * }> }
   *
   * @return { AjaxPromise<{ total: number, lists: ChannelApp }> }
   */
  requestChannelAppList(params) {
    return axios.get('/m/channel/app', { params })
  },
  /**
   * @description 添加渠道应用
   * @param name { string } 渠道应用名称
   * @param appId { string } 渠道应用ID
   * @param source { string } 渠道
   * @param myAppId { string } 应用ID
   * @param status { string } 状态：0已删除；1正常
   *
   * @return { SuccessResponse }
   */
  requestAddChannelApp({ name, appId, source, myAppId, status }) {
    return axios.post(`/m/channel/app`, { name, appId, source, myAppId, status })
  },
  /**
   * @description 修改渠道应用
   * @param id { string } 行ID
   * @param name { string } 渠道应用名称
   * @param appId { string } 渠道应用ID
   * @param source { string } 渠道
   * @param myAppId { string } 应用ID
   * @param status { string } 状态：0已删除；1正常
   *
   * @return { SuccessResponse }
   */
  requestUpdateChannelApp({ id, name, appId, source, myAppId, status }) {
    return axios.put(`/m/channel/app/${id}`, { name, appId, source, myAppId, status })
  },
  /**
   * @description 删除渠道应用
   * @param id { string }
   *
   * @return { SuccessResponse }
   */
  requestDeleteChannelApp({ id }) {
    return axios.delete(`/m/channel/app/${id}`)
  }
}
