const DIC_MEDIATION_CHANNEL = {
  shouldInit: true,
  name: 'mediation 渠道',
  defaultExtraClass: 'status-info',
  optionsMap: {
    ks: {
      label: '快手',
      types: [
        {
          label: '信息流模版渲染',
          value: 'ksNativeExpress',
          mapSlot: ['605_0', '605_1', '606_']
        },
        {
          label: '信息流自渲染',
          value: 'ksNative',
          mapSlot: ['605_0', '605_1', '606_']
        },
        {
          label: '全屏视频(竖屏)',
          value: 'ksFullscreenVideo_portrait',
          mapSlot: ['604_1', '601_']
        },
        {
          label: '全屏视频(横屏)',
          value: 'ksFullscreenVideo_landscape',
          mapSlot: ['604_0', '601_']
        },
        {
          label: '开屏',
          value: 'ksSplash',
          mapSlot: ['602_']
        },
        {
          label: '激励视频(竖屏)',
          value: 'ksRewardVideo_portrait',
          mapSlot: ['607_1']
        },
        {
          label: '激励视频(横屏)',
          value: 'ksRewardVideo_landscape',
          mapSlot: ['607_0']
        },
        {
          label: 'Draw视频广告',
          value: 'ksDrawVideo',
          mapSlot: ['606_']
        },
        {
          label: '插屏-模版渲染',
          value: 'ksInterstitialExpress',
          mapSlot: ['601_']
        }
      ]
    },
    csj: {
      label: '穿山甲',
      types: [
        {
          label: '信息流自渲染',
          value: 'csjNative',
          mapSlot: ['605_0', '605_1', '606_']
        },
        {
          label: '信息流自渲染(Mediation)',
          value: 'cmNative',
          mapSlot: ['605_0', '605_1', '606_']
        },
        {
          label: '信息流模版渲染',
          value: 'csjNativeExpress',
          mapSlot: ['605_0', '605_1', '606_']
        },
        {
          label: '信息流模版渲染(Mediation)',
          value: 'cmNativeExpress',
          mapSlot: ['605_0', '605_1', '606_']
        },
        // {
        //   label: 'Banner广告',
        //   value: 'csjBanner',
        //   mapSlot: ['603_']
        // },
        {
          label: 'Banner广告（Mediation）',
          value: 'cmBanner',
          mapSlot: ['603_']
        },
        {
          label: '原生banner广告（自渲染）',
          value: 'csjBannerNative',
          mapSlot: ['603_']
        },
        {
          label: 'Banner广告（模板渲染）600x300',
          value: 'csjBannerExpress_600x300',
          mapSlot: ['603_']
        },
        {
          label: 'Banner广告（模板渲染）600x400',
          value: 'csjBannerExpress_600x400',
          mapSlot: ['603_']
        },
        {
          label: 'Banner广告（模板渲染）600x500',
          value: 'csjBannerExpress_600x500',
          mapSlot: ['603_']
        },
        {
          label: 'Banner广告（模板渲染）600x260',
          value: 'csjBannerExpress_600x260',
          mapSlot: ['603_']
        },
        {
          label: 'Banner广告（模板渲染）600x90',
          value: 'csjBannerExpress_600x90',
          mapSlot: ['603_']
        },
        {
          label: 'Banner广告（模板渲染）600x150',
          value: 'csjBannerExpress_600x150',
          mapSlot: ['603_']
        },
        {
          label: 'Banner广告（模板渲染）600x100',
          value: 'csjBannerExpress_600x100',
          mapSlot: ['603_']
        },
        {
          label: 'Banner广告（模板渲染）600x388',
          value: 'csjBannerExpress_600x388',
          mapSlot: ['603_']
        },
        // {
        //   label: '插屏广告（自渲染）',
        //   value: 'csjInterstitial',
        //   mapSlot: ['601_']
        // },
        {
          label: '插屏/全屏/新插屏',
          value: 'csjInterstitial2',
          mapSlot: ['601_']
        },
        {
          label: '插屏广告（Mediation）',
          value: 'cmInterstitial',
          mapSlot: ['601_']
        },
        {
          label: '插屏广告（模版渲染）1:1',
          value: 'csjInterstitialExpress_600x600',
          mapSlot: ['601_']
        },
        {
          label: '插屏广告（模版渲染）3:2',
          value: 'csjInterstitialExpress_900x600',
          mapSlot: ['601_']
        },
        {
          label: '插屏广告（模版渲染）2:3',
          value: 'csjInterstitialExpress_600x900',
          mapSlot: ['601_']
        },
        {
          label: '开屏广告',
          value: 'csjSplash',
          mapSlot: ['602_']
        },
        {
          label: '开屏广告（Mediation）',
          value: 'cmSplash',
          mapSlot: ['602_']
        },
        {
          label: '全屏视频（Mediation）',
          value: 'cmFullscreenVideo',
          mapSlot: ['604_', '601_']
        },
        {
          label: '全屏视频（竖屏）',
          value: 'csjFullscreenVideo_portrait',
          mapSlot: ['604_1', '601_']
        },
        {
          label: '全屏视频（横屏）',
          value: 'csjFullscreenVideo_landscape',
          mapSlot: ['604_0', '601_']
        },
        {
          label: '激励视频（Mediation）',
          value: 'cmRewardVideo',
          mapSlot: ['607_']
        },
        {
          label: '激励视频（竖屏）',
          value: 'csjRewardVideo_portrait',
          mapSlot: ['607_1']
        },
        {
          label: '激励视频（横屏）',
          value: 'csjRewardVideo_landscape',
          mapSlot: ['607_0']
        },
        {
          label: 'Draw信息流广告',
          value: 'csjDrawVideo',
          mapSlot: ['606_', '605_0', '605_1']
        },
        {
          label: 'Draw自渲染广告',
          value: 'csjDrawNative',
          mapSlot: ['606_', '605_0', '605_1']
        }
      ]
    },
    gdt: {
      label: '优量汇',
      types: [
        {
          label: '原生自渲染2.0广告',
          value: 'gdtNativeUnified',
          mapSlot: ['605_0', '605_1', '606_']
        },
        {
          label: '原生模板渲染',
          value: 'gdtNativeExpress',
          mapSlot: ['605_0', '605_1', '606_']
        },
        {
          label: '原生模板渲染2.0',
          value: 'gdtNativeExpress2',
          mapSlot: ['605_0', '605_1', '606_']
        },
        {
          label: 'Banner2.0',
          value: 'gdtUnifiedBanner',
          mapSlot: ['603_']
        },
        {
          label: '开屏',
          value: 'gdtSplash',
          mapSlot: ['602_']
        },
        {
          label: '插屏2.0',
          value: 'gdtUnifiedInterstitial',
          mapSlot: ['601_']
        },
        {
          label: '全屏视频（插屏2.0）',
          value: 'gdtFullscreenVideo',
          mapSlot: ['604_0', '604_1', '601_']
        },
        {
          label: '激励视频',
          value: 'gdtRewardVideo',
          mapSlot: ['607_0', '607_1']
        }
      ]
    },
    baidu: {
      label: '百度',
      types: [
        {
          label: '插屏',
          value: 'baiduInterstitial',
          mapSlot: ['601_']
        },
        {
          label: '开屏',
          value: 'baiduSplash',
          mapSlot: ['602_']
        },
        {
          label: '信息流广告',
          value: 'baiduFeed',
          mapSlot: ['605_0', '605_1']
        },
        {
          label: '信息流广告（模板渲染）',
          value: 'baiduFeedExpress',
          mapSlot: ['605_0', '605_1']
        },
        {
          label: '百度内容联盟广告',
          value: 'baiduNativeCpu',
          mapSlot: ['605_0', '605_1']
        },
        {
          label: '激励视频',
          value: 'baiduRewardVideo',
          mapSlot: ['607_0', '607_1']
        },
        {
          label: '全屏视频',
          value: 'baiduFullScreenVideo',
          mapSlot: ['604_0', '604_1']
        }
      ]
    },
    kds: {
      label: '快电商',
      types: [
        {
          label: 'Draw视频流',
          value: 'kdsDrawVideo',
          mapSlot: ['606_']
        },
        {
          label: '原生视频',
          value: 'kdsNativeVideo',
          mapSlot: ['605_0', '605_1']
        },
        {
          label: '全屏视频',
          value: 'kdsFullscreenVideo',
          mapSlot: ['601_', '604_0', '604_1']
        },
        {
          label: '激励视频',
          value: 'kdsRewardVideo',
          mapSlot: ['607_0', '607_1']
        },
        {
          label: '激励视频2',
          value: 'kdsRewardVideo2',
          mapSlot: ['607_0', '607_1']
        }
      ]
    },
    jy: {
      label: '巨赚',
      types: [
        {
          label: '原生',
          value: 'jyNative',
          mapSlot: ['605_0', '605_1']
        },
        {
          label: '插屏',
          value: 'jyInterstitial',
          mapSlot: ['601_']
        },
        {
          label: '开屏',
          value: 'jySplash',
          mapSlot: ['602_']
        },
        {
          label: '激励视频',
          value: 'jyRewardVideo',
          mapSlot: ['607_0', '607_1']
        },
        {
          label: 'Draw视频',
          value: 'jyDrawVideo',
          mapSlot: ['606_']
        }
      ]
    }
  }
}

export default DIC_MEDIATION_CHANNEL
