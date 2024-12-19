export const fetchVideoTaskList = (params) => {
  return axios.get('/face/task/list', {
    params
  })
}

export const postVideoTask = (videoList) => {
  const list = videoList.reduce((newArr, item) => {
    const newItem = {
      videoId: item.id,
      imageId: item.face && item.face[0].target.id
    }
    return [...newArr, newItem]
  }, [])
  return axios.post('/face/task', {
    type: 'single',
    list
  })
}

export const requestDeleteFaceVideoMaterial = ({ id }) => {
  return window.axios.delete(`/face/video/${id}`)
}

export const requestFaceVideoMaterial = ({
  videoWidth,
  videoHeight,
  date,
  title,

  sequence,
  orderBy,
  pageNum,
  pageSize
}) => {
  return window.axios.get('/face/video/list', {
    params: {
      w: videoWidth,
      h: videoHeight,
      date,
      title,

      sequence,
      orderBy,
      pageNum,
      pageSize
    }
  })
}
