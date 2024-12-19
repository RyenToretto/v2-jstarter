import appSeries from '@/modules/setting/appSeries/_mock'
import eventGroup from '@/modules/setting/eventGroup/_mock'
import promotionConfig from '@/modules/setting/promotionConfig/_mock'
import signConfig from '@/modules/setting/signConfig/_mock'
import firebaseConfig from '@/modules/setting/firebaseConfig/_mock'
import costPulling from '@/modules/setting/costPulling/_mock'
import huaweiCostConfig from '@/modules/setting/huaweiCostConfig/_mock'
import smsConfig from '@/modules/setting/smsConfig/_mock'
import xhSdk from '@/modules/setting/xhSdk/_mock'
import tier from '@/modules/setting/tier/_mock'
import abTest from '@/modules/setting/abTest/_mock'
import appManager from '@/modules/setting/appManager/_mock'
export default [
  ...appManager,
  ...appSeries,
  ...eventGroup,
  ...promotionConfig,
  ...signConfig,
  ...firebaseConfig,
  ...costPulling,
  ...huaweiCostConfig,
  ...smsConfig,
  ...xhSdk,
  ...tier,
  ...abTest
]
