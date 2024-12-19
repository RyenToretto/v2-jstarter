const video = '.mp4,.rmvb,.flv,.mpeg,.avi,.swf,.mov,.3gp'
const image = '.gif,.svg,.jpg,.jpeg,.png,.bmp'
const audio = '.wav,.mp3,.aac,.flac,.ogg,.wma'

const upload = {
  accept: {
    video,
    image,
    audio,
    allMedia: `${video},${image},${audio}`,
    excel: '.xls,.xlsx,.xlsm,.xltx,.xltm,.csv,.pdf',
    isImage(picUrl) {
      if (!picUrl) {
        return false
      }
      return /.*\.(gif|svg|jpg|jpeg|png|bmp)(?=\?|$)/i.test(picUrl)
    },
    isVideo(videoLink) {
      if (!videoLink) {
        return false
      }
      return /.*\.(mp4|rmvb|flv|mpeg|avi|swf|mov|wav|3gp)(?=\?|$)/i.test(videoLink)
    }
  }
}
export default upload
