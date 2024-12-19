export default {
  sample(params) {
    return axios.get('./sample', {
      params
    })
  }
}
