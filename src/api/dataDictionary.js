export default {
  /**
   * @description 查询数据字典列表
   * @param params { PaginationParams<{ code: string, name: string }> }
   *
   * @return { AjaxPromise<{ total: number, lists: Dictionary }> }
   */
  requestDataDictionary(params) {
    return axios.get('/data/dictionary', { params })
  },
  /**
   * @description 查询所有数据字典
   * @return { AjaxPromise<Array<Dictionary>> }
   */
  requestAllDataDictionary() {
    return axios.get('/data/dictionary/all')
  },
  /**
   * @description 添加数据字典
   * @param code { string }
   * @param name { string }
   *
   * @return { SuccessResponse }
   */
  addDataDictionary({ code, name }) {
    return axios.post(`/data/dictionary`, { code, name })
  },
  /**
   * @description 修改数据字典
   * @param id { string }
   * @param code { string }
   * @param name { string }
   *
   * @return { SuccessResponse }
   */
  updateDataDictionary({ id, code, name }) {
    return axios.put(`/data/dictionary/${id}`, { code, name })
  },
  /**
   * @description 删除数据字典
   * @param id { string }
   *
   * @return { SuccessResponse }
   */
  delDataDictionary({ id }) {
    return axios.delete(`/data/dictionary/${id}`)
  }
}
