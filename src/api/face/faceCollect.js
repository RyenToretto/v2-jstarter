export const postFaceCollect = (payload) => {
  return axios.post('/face/collect', payload)
}
