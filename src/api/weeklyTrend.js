export default {
  getChart({ url, params }) {
    return axios.get(url, {
      params
    })
  }
}
