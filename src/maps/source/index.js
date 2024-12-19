import { internalSource, overseaSource } from './mediationSource'
import revenueSource from '@/store/module/source/revenueSource'
const mediationSource =
  sessionStorage.getItem('oversea') === 'true' ? overseaSource : internalSource
export default {
  // 投放渠道
  list: {},
  revenueSource,
  // mediation渠道
  mediationSource
}
