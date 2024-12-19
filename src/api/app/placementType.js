export default {
  /**
   * @description 查询广告位类型列表
   * @param params { PaginationParams<{
   *   code: string,
   *   name: string
   * }> }
   *
   * @return { AjaxPromise<{ total: number, lists: PlacementType }> }
   */
  requestPlacementTypeList(params) {
    return axios.get('/m/placement/type', { params })
  },
  /**
   * @description 查询所有广告位类型
   *
   * @return { AjaxPromise<Array[PlacementType]> }
   */
  requestAllPlacementType() {
    return axios.get('/m/placement/type/all')
  },
  /**
   * @description 添加广告位类型
   * @param code { string }
   * @param name { string }
   *
   * @return { SuccessResponse }
   */
  requestAddPlacementType({ id, code, name }) {
    return axios.post(`/m/placement/type`, { id, code, name })
  },
  /**
   * @description 修改广告位类型
   * @param id { string }
   * @param code { string }
   * @param name { string }
   *
   * @return { SuccessResponse }
   */
  requestUpdatePlacementType({ id, code, name }) {
    return axios.put(`/m/placement/type/${id}`, { code, name })
  },
  /**
   * @description 删除广告位类型
   * @param id { string }
   *
   * @return { SuccessResponse }
   */
  requestDeletePlacementType({ id }) {
    return axios.delete(`/m/placement/type/${id}`)
  }
}
