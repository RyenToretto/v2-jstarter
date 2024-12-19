/**
 * 获取视频的信息
 * @param {String} url 视频地址
 * @returns {Object}
 */
function getVideoInfoFromUrl(url) {
  let video = document.createElement('video')
  video.setAttribute('preload', 'metadata')
  video.src = url

  return new Promise((resolve, reject) => {
    video.onloadedmetadata = function (e) {
      const data = {}
      data.width = e.target.videoWidth
      data.height = e.target.videoHeight
      data.duration = e.target.duration

      // 清空视频资源，防止revoke链接后video元素继续加载该链接导致控制台报错
      video.src = ''
      // 释放临时视频对象
      video = null

      resolve(data)
    }
    video.onerror = function (e) {
      reject(e)
    }
  })
}
export default getVideoInfoFromUrl
