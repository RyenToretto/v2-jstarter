export const requestDeleteFacePhotoMaterial = ({ id }) => {
  return window.axios.delete(`/face/image/${id}`)
}

export const requestFacePhotoMaterial = ({
  photoWidth,
  photoHeight,
  date,
  title,

  sequence,
  orderBy,
  pageNum,
  pageSize
}) => {
  return window.axios.get('/face/image/list', {
    params: {
      w: photoWidth,
      h: photoHeight,
      date,
      title,

      sequence,
      orderBy,
      pageNum,
      pageSize
    }
  })
}
