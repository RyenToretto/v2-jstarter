// import OSS from 'ali-oss'
import { dateFormat } from '@/filters'

function OSS() {
  return {
    multipartUpload: () => Promise.reject('error: npm i ali-oss')
  }
}

/**
 * @param {{getSTSToken, STSParams}}
 * @return {Promise<{ossTokenInfo: any, ossClient: any}>}
 * */
export const getAliOssClient = async ({ getSTSToken, STSParams }) => {
  const ossTokenInfo = await getSTSToken(STSParams)
  if (!ossTokenInfo) {
    throw new Error('fail to get ali oss token')
  }

  const parseMast = {
    bucket: ossTokenInfo.bucket, // bucket名称
    region: ossTokenInfo.endpoint, // 地域
    accessKeyId: ossTokenInfo.accessKeyId,
    accessKeySecret: ossTokenInfo.accessKeySecret,
    stsToken: ossTokenInfo.securityToken,
    expiration: ossTokenInfo.expiration, // 有效期
    refreshSTSToken: async () => {
      // 刷新临时访问凭证的回调，在上传大文件的时候会用到
      const info = await getSTSToken(STSParams)
      return {
        accessKeyId: info?.accessKeyId,
        accessKeySecret: info?.accessKeySecret,
        stsToken: info?.securityToken
      }
    },
    // 刷新临时访问凭证的时间间隔，单位为毫秒，在过期前一分钟刷新
    // 过期时间是后端配的，这里配合后端把时间写死也可以，例如 15 分钟过期，10 分钟就可以刷新一次
    refreshSTSTokenInterval: new Date(ossTokenInfo.expiration).getTime() - Date.now() - 1000 * 60
  }
  return { ossTokenInfo, ossClient: new OSS(parseMast) }
}

/**
 * @param fileRaw
 * @param { getSTSToken, STSParams }
 * @param progressCallback
 * @return {Promise<OssUploadResponse>}
 * */
export const requestOssUpload = (fileRaw, { getSTSToken, STSParams }, progressCallback) => {
  return new Promise((resolve, reject) => {
    getAliOssClient({ getSTSToken, STSParams })
      .then(({ ossClient, ossTokenInfo }) => {
        const filename = fileRaw.name || dateFormat(Date.now(), 'yyyy_MM_dd_hh_mm_ss')
        ossClient
          .multipartUpload(`${ossTokenInfo.dir}${filename}`, fileRaw, {
            parallel: 4,
            partSize: 1024 * 1024, // 分片上传大小: 一般是1M
            progress: async (p, checkpoint) => {
              if (!progressCallback) {
                return
              }
              await progressCallback(p, checkpoint, ossTokenInfo, fileRaw)
            }
          })
          .then((res) => {
            if (res && res.name) {
              resolve(res)
              return
            }
            reject(res)
          })
          .then((err) => reject(err))
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}
