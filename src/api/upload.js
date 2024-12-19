export default {
  /**
   * @description 查询广告位列表
   * @param formData { FormData }
   *
   * @return { AjaxPromise<{ url: string }> }
   */
  uploadFile(formData) {
    // formData {file}
    return axios.post('/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  }
}
