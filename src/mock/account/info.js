import { ACCOUNT_LEVEL_PERMISSIONS, ROLE_LEVEL_PERMISSIONS } from '@/config'
import { allPkgs } from '../apps/allApps'
// const allPkgs = apps.result.map(v => v.pkg)
const isMaster = false
export default {
  code: '0000',
  // code: '3001',
  result: {
    companyDepartmentId: '88888888',
    companyDepartmentName: '广告平台部',
    id: '1324954328988946433',
    name: 'lufeiMock',
    nickName: '测试账号',
    mail: 'lufei@do-global.com',
    isMaster,
    tenantId: '1625043857009897474',
    tenantName: '小熊集团',
    // 外层权限，超管为全部权限，其它用户为账户级权限
    permissions: isMaster
      ? [...ACCOUNT_LEVEL_PERMISSIONS, ...ROLE_LEVEL_PERMISSIONS]
      : ACCOUNT_LEVEL_PERMISSIONS,
    company: [
      {
        id: '1', // 公司ID
        name: '小熊博望', // 公司名
        role: 'COMPANY_ADMIN', // 用户在该公司的角色
        // 用户权限
        permissions: ROLE_LEVEL_PERMISSIONS,
        // 公司产品列表（仅显示当前角色有权限的app）
        apps: allPkgs
      },
      {
        id: '2',
        name: '测试公司-@word(1)',
        role: 'PM',
        permissions: [
          'REPORT_ROI_VIEW',
          'TIER_MANAGER'
          // 'SETTING_SDK-STRATEGY_VIEW', // 悬壶策略
          // 'SETTING_SDK-STRATEGY_CONFIG',

          // 'SETTING_SDK-MANAGE_VIEW', // SDK管理
          // 'SETTING_SDK-MANAGE_CONFIG' // SDK管理 > 编辑权限
        ],
        apps: ['com.coin.huahua.video']
      },
      {
        id: '3',
        name: '外部企业',
        role: null,
        // ⚠️超管登录时，外部企业的role和permissions后端接口不能正常返回，此时需要从外层取permissions来覆盖每个公司的permissions
        permissions: [
          // 'REPORT_PROMOTION_APP_VIEW'
          '@pick(["asd","aaa"])'
        ],
        apps: ['com.quick.gamebox.cloudgame.streaming']
      }
    ]
  }
}
