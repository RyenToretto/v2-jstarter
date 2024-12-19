export default {
  code: '0000',
  result: {
    pkg: 'com.shuhyakigame.untierope',
    mode: '@pick(["self", [self, tenjin]])',
    guiyin_day: '@integer(3,31)',
    list: [
      {
        source: 'csj',
        active_type: 'arpu-cpm',
        active: '1.2',
        conversion_type: '',
        conversion_event: '25',
        conversion: ''
      },
      {
        source: 'gdt',
        active_type: 'key',
        active: 'rv_1',
        conversion_type: 'key',
        conversion_event: 'START_APP',
        conversion: 'rv_3'
      },
      {
        source: 'ks',
        active_type: 'arpu-cpm',
        active: '0.2',
        conversion_type: 'arpu-cpm',
        conversion_event: '3',
        conversion: '1.2'
      }
    ]
  }
}
