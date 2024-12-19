export default {
  /**
   * @description 查询账号列表
   * @param params { PaginationParams<{
   *   accountId: string,
   *   companyId: string,
   *   type: string
   * }> }
   *
   * @return { AjaxPromise<{ total: number, lists: Account }> }
   */
  requestAccountList(params) {
    return axios.get('/m/account', { params })
  },
  /**
   * @description 添加账号
   * @param accountId { string }
   * @param companyId { string }
   * @param type { string }
   *
   * @return { SuccessResponse }
   */
  requestAddAccount({ accountId, companyId, type }) {
    return axios.post(`/m/account`, { accountId, companyId, type })
  },
  /**
   * @description 修改账号
   * @param id { string }
   * @param accountId { string }
   * @param companyId { string }
   * @param type { string }
   *
   * @return { SuccessResponse }
   */
  requestUpdateAccount({ id, accountId, companyId, type }) {
    return axios.put(`/m/account/${id}`, { accountId, companyId, type })
  },
  /**
   * @description 删除账号
   * @param id { string }
   *
   * @return { SuccessResponse }
   */
  requestDeleteAccount({ id }) {
    return axios.delete(`/m/account/${id}`)
  }
}
