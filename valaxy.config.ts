import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
import { defineValaxyConfig } from 'valaxy'
import { addonLive2d } from 'valaxy-addon-live2d'
import { addonBangumi } from 'valaxy-addon-bangumi'
import { addonMeting } from 'valaxy-addon-meting'
import { addonVercount } from 'valaxy-addon-vercount'
import { addonTwikoo } from 'valaxy-addon-twikoo'

// add icons what you will need 
// 添加您需要的图标
const safelist = [
  'i-ri-home-line',
]


/**
  User Config 
  用户配置
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts 
  // 站点配置请参阅site.config.ts

  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },

  /*server: {
    allowedHosts: ['blog.zero251.xyz'], // 添加允许的域名
  },
  */

  theme: 'yun',
  themeConfig: {
    banner: {
      enable: true,
      title: 'Zero_wyc的小窝',
      cloud: {
        enable: true,
      },
    },
    nav: [
      { text: '标签', link: '/tags/', icon: 'i-ri-price-tag-3-line' },
      { text: '分类', link: '/categories/', icon: 'i-ri-list-unordered' },
      { text: 'OpenList', link: '/links/', icon: 'i-ri-triangle-line' },
      { text: '追番列表', link: '/Bangumi/', icon: 'i-ri-folder-video-line' },
      { text: '站点状态', link: '/status/', icon: 'i-ri-loader-2-line' },
      { text: '投喂喵~', link: '/love/', icon: 'i-ri-heart-add-line' },
    ],
    
    pages: [
      {
        name: '标签',
        url: '/tags/',
        icon: 'i-ri-price-tag-3-line',
        color: '#43abee',
      },
      {
        name: 'OpenList下载站',
        url: '/links/',
        icon: 'i-ri-triangle-line',
        color: 'dodgerblue',
      },
      {
        name: '追番列表',
        url: '/Bangumi/',
        icon: 'i-ri-folder-video-line',
        color: '#05AEEC',
      },
      {
        name: '站点状态',
        url: '/status/',
        icon: 'i-ri-loader-2-line',
        color: '#1BA15A',
      },
      {
        name: '喵~',
        url: '/love/',
        icon: 'i-ri-heart-add-line',
        color: '#43abee',
      },
    ],

    //主题色
    colors: {
      primary: "#0D92FF",
    },

    //鼠标点击特效
  	fireworks: {
      enable: true,
      colors: ['#0D92FF', '#7FFFFF', '#E8BBFF']
    },

    //网站背景图片
    bg_image: {
      enable: true,
      url: "https://github.cdn.zero251.xyz/Zero-wyc/Image/main/General/甘城2白_1.webp",	// 白日模式背景
      dark: "https://github.cdn.zero251.xyz/Zero-wyc/Image/main/General/甘城主图290黑_1.webp",	// 夜间模式背景
    },
    
    footer: {
      since: 2025,
      beian: {
        enable: true,
        icp: '闽ICP备2025091782号-1',
      },
    },
  },
  unocss: { safelist },

  addons: [
    //Bangumi页面配置
    addonBangumi({
      api: 'https://yi_xiao_jiu-bangumi.web.val.run',
      //自配vercel https://bilibili-bangumi-component-tau.vercel.app/api
      bilibiliUid: '539775193',
      bgmEnabled: false,
    }),

    addonLightGallery(),//相册配置
      
    addonTwikoo({ 
      envId: 'https://zerotwikoo.netlify.app/.netlify/functions/twikoo', // 替换为您的 Twikoo 环境 ID
    }),

    addonMeting({
      global: true, // 是否全局启用播放器
      props: {
        id: '5176495148',    // 音乐的 ID，可以是网易云或其他支持的平台
        server: 'netease',   // 支持 'netease' | 'tencent' | 'kugou' 等
        type: 'playlist',    // 类型可以是 'song', 'album', 'artist', 'playlist'
        theme: "#4FBCCD", // 播放器主题色
        preload: 'auto', // 是否预加载音乐
        mutex: true, // 是否互斥播放
        autoplay: false, // 是否自动播放
        fixed: true, // 是否固定在页面底部
        lyricColor: '#4FBCCD', // 歌词颜色
        volume: 0.3, // 初始音量大小
      },
      options: {
        lyricHidden: true,  // 是否默认隐藏歌词
        animationIn: true,  // 是否启动时有动画效果
        autoHidden: true,   // 是否自动隐藏播放器界面
      }
    }),

    addonVercount({
      api: 'cn'
    }),
    
    addonLive2d({
      skipHello: false, // 是否跳过控制台的初始问候
      widthLimit: 400, // 设置 Live2D 宽度限制
      randomCharacter: false, // 是否随机选择 Live2D 模型
      randomSkin: false, // 是否随机选择 Live2D 皮肤	
      safetyMargin: 0, // 安全边距，单位为像素
      enableLive2D: ['bcy','yazakura','BlackCat','pa15','Type95','kewei','beierfasite','chaijun','edu','bisimai','ankeleiqi','mori_miko','shengluyisi','nabulesi','ougen','qiye','aijier','dafeng','naximofu','HK416','guanghui','xingdengbao','wuqi','innong','hemin','tiancheng','sitelasibao','siwanshi','tianlangxing','zhaohe','yanusi','xinzexi','wuzang','yingrui','yingxianzuo','yunxian','zengkehaijunshangjiang','aersasi','luyijiushi','jianye','aerbien','mojiaduoer','BiliBili22','BiliBili33'],
      live2DCollection: {
        aerbien:{
          message: '来自 Azun Lane 的阿尔比恩 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/aerbien_3/aerbien.model3.json'],
        },
        aersasi:{
          message: '来自 Azun Lane 的阿尔萨斯 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/aersasi_2/aersasi_2.model3.json'],
        },
        chaijun: {
          message: '来自碧蓝航线的柴郡 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/chaijun_3/chaijun_3.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/chaijun_5/chaijun_5.model3.json'
          ],
        },
        // https://github.com/fghrsh/live2d_api
        beierfasite:{
          message: '来自碧蓝航线的贝尔法斯特 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/beierfasite_2/beierfasite_2.model3.json'],
        },
        ankeleiqi:{
          message: '来自 Azun Lane 的安克雷奇 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/ankeleiqi_3/ankeleiqi_3.model3.json'],
        },
        bisimai:{
          message: '来自 Azun Lane 的匹斯麦 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/bisimai_2_hx/bisimai_2_hx.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/bisimai_4/bisimai_4.model3.json',
          ],
        },
        aijier:{
          message: '来自碧蓝航线的埃吉尔 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/aijier_3_hx/aijier_3_hx.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/aijier_2/aijier_2.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/aijier_4/aijier_4.model3.json',
          ],
        },
        mori_miko: {
          message: '来自 Fox Hime Zero 的 MoriMiko ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/galgame live2d/Fox Hime Zero/mori_miko/mori_miko.model3.json'],
        },
        dafeng: {
          message: '来自 Azun Lane 的大凤 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/dafeng_2/dafeng_2.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/dafeng_3/dafeng_3.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/dafeng_4/dafeng_4.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/dafeng_6/dafeng_6.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/dafeng_7/dafeng_7.model3.json',
          ],
        },
        edu: {
          message: '来自 Azun Lane 的恶毒 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/edu_3/edu_3.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/edu_4/edu_4.model3.json',
          ],
        },
        guanghui:{
          message: '来自 Azun Lane 的光辉 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/guanghui_7/guanghui_7.model3.json',
          ],
        },
        bcy:{
          message: '来自崩坏2的八重樱 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/崩坏学园2/BYC/model.json'],
        },
        guangrong:{
          message: '来自 Azun Lane 的光荣 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/guangrong_3/guangrong_3.model3.json'],
        },  
        hemin:{
          message: '来自 Azun Lane 的赫敏 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/hemin_2/hemin_2.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/hemin_3/hemin_3.model3.json',
          ],
        },
        yazakura:{
          message: '来自崩坏2的八重樱 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/崩坏学园2/yazakura/model.json'],
        },
        BlackCat: {
          message: '来自 LOVE³-LOVE CUBE- 的黑猫 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/galgame live2d/LOVE³-LOVE CUBE-/live2d/kuroneko/kuroneko.model3.json'],
        },
        luyijiushi: {
          message: '来自 Azun Lane 的路易九世 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/luyijiushi_2/luyijiushi_2.model3.json'],
        },
        pa15: {
          message: '来自少女前线的 PA-15 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/少女前线 girls Frontline/live2dnew/pa15_4202/normal/normal.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/少女前线 girls Frontline/live2dnew/pa15_4202/destroy/destroy.model3.json',
          ],
        },  
        ougen:{
          message: '来自 Azun Lane 的欧根亲王 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/ougen_6/ougen_6.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/ougen_5/ougen_5.model3.json',
          ],
        },
        qiye:{
          message: '来自 Azun Lane 的企业 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/qiye_7/qiye_7.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/qiye_9/qiye_9.model3.json',
          ],
        },
        shengluyisi:{
          message: '来自 Azun Lane 的圣路易斯 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/shengluyisi_2/shengluyisi_2.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/shengluyisi_5/shengluyisi_5.model3.json',
          ],
        },
        BiliBili22: {
          models: [
            // https://github.com/summerscar/live2dDemo/tree/master/assets/22.2017.cba-normal
            'https://registry.npmmirror.com/weblive2d/latest/files/model/bilibili-live/22/index.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2017.cba-normal.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2017.newyear.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2017.school.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2017.summer.normal.1.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2017.summer.normal.2.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2017.tomo-bukatsu.high.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2017.tomo-bukatsu.low.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2017.valley.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2017.vdays.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2018.lover.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.2018.spring.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.default.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.xmas.1.model.json',
            'https://summerscar.me/live2dDemo/assets/22.2017.cba-normal/22.xmas.2.model.json',
          ],
        },
        BiliBili33: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/bilibili-live/33/index.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2016.xmas.1.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2016.xmas.2.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2017.cba-normal.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2017.newyear.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2017.school.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2017.summer.normal.1.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2017.summer.normal.2.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2017.tomo-bukatsu.high.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2017.tomo-bukatsu.low.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2017.valley.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2017.vdays.json',
            'https://summerscar.me/live2dDemo/assets/33.default/model.2018.lover.json',
            'https://summerscar.me/live2dDemo/assets/33.defaultmodel.2018.spring.json',
          ],
        },
        mojiaduoer: {
          message: '来自 Azun Lane 的莫加多尔 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/mojiaduoer_2/mojiaduoer_2.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/mojiaduoer_3/mojiaduoer_3.model3.json',
          ],
        },
        naximofu:{
          message: '来自 Azun Lane 的纳希莫夫 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/naximofu_2/naximofu_2.model3.json'],
        },
        nabulesi:{
          message: '来自 Azun Lane 的那不勒斯 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/nabulesi_2/nabulesi_2.model3.json'],
        },
        Type95: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/95type/95type_3702/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/95type/95type_3702/destroy/index.json',
          ],
        },
        HK416: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_805/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_3401/destroy/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_3401/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_805/destroy/index.json',
          ],
        },
        jianye: {
          message: '来自 Azun Lane 的樫野 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/jianye_2/jianye_2.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/jianye_3/jianye_3.model3.json',  
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/jianye_4/jianye_4.model3.json',
          ],
        },
        kewei: {
          message: '来自 Azun Lane 的可畏 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/kewei_4/kewei_4.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/kewei_6/kewei_6.model3.json',
          ],
        },
        sitelasibao:{
          message: '来自 Azun Lane 的斯特拉斯堡 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/sitelasibao_2/sitelasibao_2.model3.json'],
        },
        siwanshi:{
          message: '来自 Azun Lane 的四万十 ~',
          models: ['https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/siwanshi_3/siwanshi_3.model3.json'],
        },
        tianlangxing:{
          message: '来自 Azun Lane 的天狼星 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/tianlangxing_5/tianlangxing_5.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/tianlangxing_3/tianlangxing_3.model3.json',
          ],
        },
        tiancheng:{
          message: '来自 Azun Lane 的天城 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/tiancheng_3/tiancheng_3.model3.json',            
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/tiancheng_2/tiancheng_2.model3.json',
          ],
        },
        wuqi:{
          message: '来自 Azun Lane 的吾妻 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/wuqi_2/wuqi_2.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/wuqi_3/wuqi_3.model3.json',
          ],
        },
        xingdengbao:{
          message: '来自 Azun Lane 的兴登堡 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/xingdengbao_2/xingdengbao_2.model3.json',
          ],
        },
        xinnong:{
          message: '来自 Azun Lane 的信浓 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/xinnong_3/xinnong_3.model3.json',
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/xinnong_5/xinnong_5.model3.json',            
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/xinnong_4/xinnong_4.model3.json',
          ],
        },
        xinzexi:{
          message: '来自 Azun Lane 的新泽西 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/xinzexi_3/xinzexi_3.model3.json',
          ],
        },
        yanusi:{
          message: '来自 Azun Lane 的雅努斯 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/yanusi_3/yanusi_3.model3.json',
          ],
        },
        wuzang:{
          message: '来自 Azun Lane 的武藏 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/wuzang_3/wuzang_3.model3.json',
          ],
        },
        yingrui:{
          message: '来自 Azun Lane 的应瑞 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/yingrui_3/yingrui_3.model3.json',
          ],
        },
        yingxianzuo:{
          message: '来自 Azun Lane 的英仙座 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/yingxianzuo_3/yingxianzuo_3.model3.json',
          ],
        },
        yunxian:{
          message: '来自 Azun Lane 的云仙 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/yunxian_2/yunxian_2.model3.json',
          ],
        },
        zengkehaijunshangjiang:{
          message: '来自 Azun Lane 的曾克海军上将 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/zengkehaijunshangjiang_2/zengkehaijunshangjiang_2.model3.json',
          ],
        },
        zhaohe:{
          message: '来自 Azun Lane 的昭和 ~',
          models: [
            'https://github.cdn.zero251.xyz/Zero-wyc/Live2d-model/master/碧蓝航线 Azue Lane/Azue Lane(JP)/zhaohe_3/zhaohe_3.model3.json',
          ],
        },
      },

      live2dTips:{
        mouseover: [{
          selector: '#live2d-canvas',
          text: ['现在总计有45个人物哦,还有皮肤可探索~','点击Char换人,Skin换衣服哦~','我们一起加油吧！','摸摸头，你已经很棒了！','要保持微笑哦~','今天天气真好呢！','你好呀~','干嘛呢你，快把手拿开～～', '鼠…鼠标放错地方了！', '你要干嘛呀？', '喵喵喵？', '怕怕(ノ≧∇≦)ノ', '非礼呀！救命！', '这样的话，只能使用武力了！', '我要生气了哦', '不要动手动脚的！', '真…真的是不知羞耻！', 'Hentai！'],
        }, {
          selector: '#live2d-tool-hitokoto',
          text: ['猜猜我要说些什么？', '我从青蛙王子那里听到了不少人生经验。'],
        }, {
          selector: '#live2d-tool-asteroids',
          text: ['要不要来玩飞机大战？', '这个按钮上写着「不要点击」。', '怎么，你想来和我玩个游戏？', '听说这样可以蹦迪！'],
        }, {
          selector: '#live2d-tool-switch-model',
          text: ['你是不是不爱人家了呀，呜呜呜～', '要见见我的姐姐嘛？', '想要看我妹妹嘛？', '要切换看板娘吗？'],
        }, {
          selector: '#live2d-tool-switch-texture',
          text: ['喜欢换装 PLAY 吗？', '这次要扮演什么呢？', '变装！', '让我们看看接下来会发生什么！'],
        }, {
          selector: '#live2d-tool-photo',
          text: ['你要给我拍照呀？一二三～茄子～', '要不，我们来合影吧！', '保持微笑就好了～'],
        }, {
          selector: '#live2d-tool-info',
          text: ['想要知道更多关于我的事么？', '这里记录着我搬家的历史呢。', '你想深入了解我什么呢？'],
        }, {
          selector: '#live2d-tool-quit',
          text: ['到了要说再见的时候了吗？', '呜呜 QAQ 后会有期……', '不要抛弃我呀……', '我们，还能再见面吗……', '哼，你会后悔的！'],
        }, {
          selector: '.menu-item-home a',
          text: ['点击回到首页~', '让我们重新开始吧！','点击前往首页，想回到上一页可以使用浏览器的后退功能哦。', '点它就可以回到首页啦！', '回首页看看吧。'],
        }, {
          selector: '.menu-item-about a',
          text: ['你想知道我家主人是谁吗？', '这里有一些关于我家主人的秘密哦，要不要看看呢？', '发现主人出没地点！'],
        }, {
          selector: '.menu-item-tags a',
          text: ['点击就可以看文章的标签啦！', '点击来查看所有标签哦。'],
        }, {
          selector: '.menu-item-categories a',
          text: ['文章都分类好啦～', '点击来查看文章分类哦。'],
        }, {
          selector: '.menu-item-archives a',
          text: ['翻页比较麻烦吗，那就来看看文章归档吧。', '文章目录都整理在这里啦！'],
        }, {
          selector: '.menu-item-friends a',
          text: ['这是我的朋友们哦ヾ(◍°∇°◍)ﾉﾞ', '要去大佬们的家看看吗？', '要去拜访一下我的朋友们吗？'],
        }, {
          selector: '.menu-item-search a',
          text: ['找不到想看的内容？搜索看看吧！', '在找什么东西呢，需要帮忙吗？'],
        }, {
          selector: '.menu-item a',
          text: ['快看看这里都有什么呢？'],
        }, {
          selector: '.site-author',
          text: ['我家主人好看吗？', '这是我家主人(*´∇｀*)'],
        },{
          selector: '.site-title',
          text: ['欢迎来到我的小站！','欢迎来到我的小窝！', '这是我的小窝，欢迎光临～', '欢迎来到我的博客！'],
        },{
          selector: '.site-state',
          text: ['这是文章的统计信息～', '要不要点进去看看？'],
        }, {
          selector: '.feed-link a',
          text: ['这里可以使用 RSS 订阅呢！', '利用 feed 订阅器，就能快速知道博客有没有更新了呢。'],
        }, {
          selector: '.cc-opacity, .post-copyright-author',
          text: ['要记得规范转载哦。', '所有文章均采用 CC BY-NC-SA 4.0 许可协议～', '转载前要先注意下文章的版权协议呢。'],
        }, {
          selector: '.links-of-author',
          text: ['这里是主人的常驻地址哦。', '这里有主人的联系方式！'],
        }, {
          selector: '.followme',
          text: ['手机扫一下就能继续看，很方便呢～', '扫一扫，打开新世界的大门！'],
        }, {
          selector: '.fancybox img, img.medium-zoom-image',
          text: ['点击图片可以放大呢！'],
        }, {
          selector: '.copy-btn',
          text: ['代码可以直接点击复制哟。'],
        }, {
          selector: '.highlight .table-container, .gist',
          text: ['GitHub！我是新手！', 'PHP 是最好的语言！'],
        }, {
          selector: 'a[href^=\'mailto\']',
          text: ['邮件我会及时回复的！', '点击就可以发送邮件啦～'],
        }, {
          selector: 'a[href^=\'/tags/\']',
          text: ['要去看看 <span>{text}</span> 标签么？', '点它可以查看此标签下的所有文章哟！'],
        }, {
          selector: 'a[href^=\'/categories/\']',
          text: ['要去看看 <span>{text}</span> 分类么？', '点它可以查看此分类下的所有文章哟！'],
        }, {
          selector: '.post-title-link',
          text: ['要看看 <span>{text}</span> 这篇文章吗？'],
        }, {
          selector: 'a[rel=\'contents\']',
          text: ['点击来阅读全文哦。'],
        }, {
          selector: 'a[itemprop=\'discussionUrl\']',
          text: ['要去看看评论吗？'],
        }, {
          selector: '.beian a',
          text: ['我也是有户口的人哦。', '我的主人可是遵纪守法的好主人。'],
        }, {
          selector: '.container a[href^=\'http\'], .nav-link .nav-text',
          text: ['要去看看 <span>{text}</span> 么？', '去 <span>{text}</span> 逛逛吧。', '到 <span>{text}</span> 看看吧。'],
        }, {
          selector: '.back-to-top',
          text: ['点它就可以回到顶部啦！', '又回到最初的起点～', '要回到开始的地方么？'],
        }, {
          selector: '.reward-container',
          text: ['我是不是棒棒哒～快给我点赞吧！', '要打赏我嘛？好期待啊～', '主人最近在吃土呢，很辛苦的样子，给他一些钱钱吧～'],
        }, {
          selector: '#wechat',
          text: ['这是我的微信二维码～'],
        }, {
          selector: '#alipay',
          text: ['这是我的支付宝哦！'],
        }, {
          selector: '#bitcoin',
          text: ['这是我的比特币账号！'],
        }, {
          selector: '#needsharebutton-postbottom .btn',
          text: ['好东西要让更多人知道才行哦。', '觉得文章有帮助的话，可以分享给更多需要的朋友呢。'],
        }, {
          selector: '.need-share-button_weibo',
          text: ['微博？来分享一波喵！'],
        }, {
          selector: '.need-share-button_wechat',
          text: ['分享到微信吧！'],
        }, {
          selector: '.need-share-button_douban',
          text: ['分享到豆瓣好像也不错！'],
        }, {
          selector: '.need-share-button_qqzone',
          text: ['QQ 空间，一键转发，耶～'],
        }, {
          selector: '.need-share-button_twitter',
          text: ['Twitter？好像是不存在的东西？'],
        }, {
          selector: '.need-share-button_facebook',
          text: ['emmm…FB 好像也是不存在的东西？'],
        }, {
          selector: '.post-nav-item a[rel=\'next\']',
          text: ['来看看下一篇文章吧。', '点它可以看下一篇文章哦！', '要翻到下一篇文章吗？'],
        }, {
          selector: '.post-nav-item a[rel=\'prev\']',
          text: ['来看看上一篇文章吧。', '点它可以看上一篇文章哦！', '要翻到上一篇文章吗？'],
        }, {
          selector: '.extend.next',
          text: ['去下一页看看吧。', '点它可以前进哦！', '要翻到下一页吗？'],
        }, {
          selector: '.extend.prev',
          text: ['去上一页看看吧。', '点它可以后退哦！', '要翻到上一页吗？'],
        }, {
          selector: 'input.vnick',
          text: ['该怎么称呼你呢？', '留下你的尊姓大名！'],
        }, {
          selector: '.vmail',
          text: ['留下你的邮箱，不然就是无头像人士了！', '记得设置好 Gravatar 头像哦！', '为了方便通知你最新消息，一定要留下邮箱！'],
        }, {
          selector: '.vlink',
          text: ['快快告诉我你的家在哪里，好让我去参观参观！'],
        }, {
          selector: '.veditor',
          text: ['想要去评论些什么吗？', '要说点什么吗？', '觉得博客不错？快来留言和主人交流吧！'],
        }, {
          selector: '.vcontrol a',
          text: ['你会不会熟练使用 Markdown 呀？', '使用 Markdown 让评论更美观吧～'],
        }, {
          selector: '.vemoji-btn',
          text: ['要插入一个萌萌哒的表情吗？', '要来一发表情吗？'],
        }, {
          selector: '.vpreview-btn',
          text: ['要预览一下你的发言吗？', '快看看你的评论有多少负熵！'],
        }, {
          selector: '.vsubmit',
          text: ['评论没有审核，要对自己的发言负责哦～', '要提交了吗，请耐心等待回复哦～'],
        }, {
          selector: '.vcontent',
          text: ['哇，快看看这个精彩评论！', '如果有疑问，请尽快留言哦～'],
        }],
        click: [{
          selector: '#live2d',
          text: ['主人说过要好好爱护我的！','我们来聊天吧！','再摸我就生气了！','哎呀！轻点点~','是…是不小心碰到了吧…', '萝莉控是什么呀？', '你看到我的小熊了吗？', '再摸的话我可要报警了！⌇●﹏●⌇', '110 吗，这里有个变态一直在摸我(ó﹏ò｡)', '不要摸我了，我会告诉老婆来打你的！', '干嘛动我呀！小心我咬你！', '别摸我，有什么好摸的！'],
        }, {
          selector: '.veditor',
          text: ['要吐槽些什么呢？', '一定要认真填写喵～', '有什么想说的吗？'],
        }, {
          selector: '.vsubmit',
          text: ['输入验证码就可以提交评论啦～'],
        }],
        seasons: [{
          date: '01/01',
          text: '<span>元旦</span>了呢，新的一年又开始了，今年是{year}年～',
        }, {
          date: '02/14',
          text: '又是一年<span>情人节</span>，{year}年找到对象了嘛～',
        }, {
          date: '03/08',
          text: '今天是<span>国际妇女节</span>！',
        }, {
          date: '03/12',
          text: '今天是<span>植树节</span>，要保护环境呀！',
        }, {
          date: '04/01',
          text: '悄悄告诉你一个秘密～<span>今天是愚人节，不要被骗了哦～</span>',
        }, {
          date: '05/01',
          text: '今天是<span>五一劳动节</span>，计划好假期去哪里了吗～',
        }, {
          date: '06/01',
          text: '<span>儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…',
        }, {
          date: '09/03',
          text: '<span>中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。',
        }, {
          date: '09/10',
          text: '<span>教师节</span>，在学校要给老师问声好呀～',
        }, {
          date: '10/01',
          text: '<span>国庆节</span>到了，为祖国母亲庆生！',
        }, {
          date: '11/05-11/12',
          text: '今年的<span>双十一</span>是和谁一起过的呢～',
        }, {
          date: '12/20-12/31',
          text: '这几天是<span>圣诞节</span>，主人肯定又去剁手买买买了～',
        }],
        time: [{
          hour: '6-7',
          text: '早上好！一日之计在于晨，美好的一天就要开始了～',
        }, {
          hour: '8-11',
          text: '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！',
        }, {
          hour: '12-13',
          text: '中午了，工作了一个上午，现在是午餐时间！',
        }, {
          hour: '14-17',
          text: '午后很容易犯困呢，今天的运动目标完成了吗？',
        }, {
          hour: '18-19',
          text: '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～',
        }, {
          hour: '20-21',
          text: '晚上好，今天过得怎么样？',
        }, {
          hour: '22-23',
          text: ['已经这么晚了呀，早点休息吧，晚安～', '深夜时要爱护眼睛呀！'],
        }, {
          hour: '0-5',
          text: '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？',
        }],
        message: {
          default: ['今天也要元气满满哦！','好久不见，日子过得好快呢……', '大坏蛋！你都多久没理人家了呀，嘤嘤嘤～', '嗨～快来逗我玩吧！', '拿小拳拳锤你胸口！', '记得把小家加入收藏夹哦！'],
          console: '哈哈，你打开了控制台，是想要看看我的小秘密吗？',
          copy: '你都复制了些什么呀，转载要记得加上出处哦！',
          visibilitychange: '欢迎回来，主人！',
          clothes: ['我还没有其他衣服呢！'],
        },
        tool: {
          camera: ['照好了嘛，是不是很可爱呢？','茄子~拍得好看吗？'],
          display: ['愿你有一天能与重要的人重逢','想我了吗？我一直都在这里哦！'],
        },
      },
    }),
  ],  
})

