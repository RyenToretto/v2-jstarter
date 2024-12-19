/**
 * facebook: https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group
 * 参考文档 > campaign
 */
const status = {
  ACTIVE: {
    type: 'success',
    name: 'ACTIVE'
  },
  PAUSED: {
    type: 'warning',
    name: 'PAUSED'
  },
  DELETED: {
    type: 'normal',
    name: 'DELETED'
  },
  ARCHIVED: {
    type: 'normal',
    name: 'ARCHIVED'
  }
}
export default {
  campaign: status,
  ad: status,
  creative: status
}
