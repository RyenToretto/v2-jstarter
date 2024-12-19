export default {
  code: '0000',
  result: {
    total: 100,
    'lists|10': [
      {
        'id|+1': 1,
        pkg: '@pick("id1237623466","id1386928477566984193","id1540536170","com.android.internal","com.android.oversea","wx1234567890","tt1234567890","com.quickapp.test","web.mangu.camera.ai")',
        name: '事件名@cword(2,6)',
        eventKey: 'KEY_@string("upper", 5)_@string("upper", 5)',
        eventGroupId:
          '@pick("7144283331281","7144283331282","7144283331283","7144283331284","7144283331285")',
        eventGroupName:
          '@pick("梦幻西游组","消消乐组","泡泡堂组","跑跑卡丁车组","网赚组","大富翁组","问道组")',
        eventGroupPath: 'event_group_@eventGroupId',
        eventGroupLevel: 1,
        type: '@pick([0,1,2])',
        depth: '@integer(1,10)',
        sort: '@integer(1,10)',
        createBy: '@cname',
        createTime: '@integer(1577836800000,1609372800000)',
        lastModifyBy: '@cname',
        lastModifyTime: '@integer(1577836800000,1609372800000)'
      }
    ]
  }
}
