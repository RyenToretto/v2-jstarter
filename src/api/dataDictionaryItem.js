export default {
  requestDataDictionaryItem(params) {
    return axios.get('/data/dictionary/item', { params })
  },
  /**
   * @description 查询 数据字典 的所有字典项
   * @param code { string }
   *
   * @return { AjaxPromise<Array<DictionaryItem>> }
   */
  requestDictionaryOptions({ code }) {
    return axios.get('/data/dictionary/item/code', { params: { code } })
  },
  /**
   * @description 添加数据字典项
   * @param code { string }
   * @param name { string }
   * @param dataDictionaryId { string } 数据字典ID
   * @param sort { string } 排序
   *
   * @return { SuccessResponse }
   */
  addDataDictionaryItem({ code, name, dataDictionaryId, sort }) {
    return axios.post(`/data/dictionary/item`, { code, name, dataDictionaryId, sort })
  },
  /**
   * @description 修改数据字典项
   * @param id { string } 字典项ID
   * @param code { string }
   * @param name { string }
   * @param dataDictionaryId { string } 数据字典ID
   * @param sort { string } 排序
   *
   * @return { SuccessResponse }
   */
  updateDataDictionaryItem({ id, code, name, dataDictionaryId, sort }) {
    return axios.put(`/data/dictionary/item/${id}`, { code, name, dataDictionaryId, sort })
  },
  /**
   * @description 删除数据字典项
   * @param id { string } 字典项ID
   *
   * @return { SuccessResponse }
   */
  delDataDictionaryItem({ id }) {
    return axios.delete(`/data/dictionary/item/${id}`)
  }
}
