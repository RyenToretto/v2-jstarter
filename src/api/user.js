import Axios from 'axios'

export default {
  getUserInfo() {
    return axios.get('/account/info')
  },
  updateInfo(payload) {
    return axios.put('/account/info', payload)
  },
  changePwd(payload) {
    return axios.put('/user/changePwd', payload)
  }
}
