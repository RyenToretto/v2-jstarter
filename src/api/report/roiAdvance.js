export default {
  getList(params) {
    let url = ''
    const dimension = params.dimension
    switch (dimension) {
      case 'userGroup':
        url = '/roi/app/user/group'
        break
      default:
        url = `/roi/app/${dimension}`
    }
    return axios.get(url, {
      params
    })
  }
}
