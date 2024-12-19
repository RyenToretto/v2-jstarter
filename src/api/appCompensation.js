export default {
  getList(params) {
    // v1: /app/compensation
    // v2: /pay/for
    return axios.get('/pay/for', {
      params
    })
  }
}
