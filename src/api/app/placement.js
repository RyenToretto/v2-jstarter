export default {
  /**
   * @description 查询广告位列表
   * @param params { PaginationParams<{
   *   pkg: string,
   *   sid: string,
   *   status: string,
   *   name: string
   * }> }
   *
   * @return { AjaxPromise<{ total: number, lists: Placement }> }
   */
  requestPlacementList(params) {
    return axios.get('/m/placement', { params })
  },
  /**
   * @description 查询全部广告位
   * @return { AjaxPromise<Placement[]> }
   */
  requestAllPlacement() {
    return axios.get('/m/placement/all')
  },
  /**
   * @description 添加广告位
   * @param appId { string }
   * @param name { string }
   * @param orientation { string }
   * @param typeId { string }
   * @param screenShot { string }
   *
   * @return { SuccessResponse }
   */
  requestAddPlacement({ appId, name, orientation, typeId, screenShot }) {
    return axios.post(`/m/placement`, { appId, name, orientation, typeId, screenShot })
  },
  /**
   * @description 修改广告位
   * @param id { string }
   * @param appId { string }
   * @param name { string }
   * @param orientation { string }
   * @param typeId { string }
   * @param screenShot { string }
   *
   * @return { SuccessResponse }
   */
  requestUpdatePlacement({ id, appId, name, orientation, typeId, screenShot }) {
    return axios.put(`/m/placement/${id}`, { appId, name, orientation, typeId, screenShot })
  },
  /**
   * @description 删除广告位
   * @param id { string }
   * @param status { number }
   *
   * @return { SuccessResponse }
   */
  requestDeletePlacement({ id }, status) {
    return axios.delete(`/m/placement/${id}/${status}`)
  }
}
