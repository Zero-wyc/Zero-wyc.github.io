import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://blog.zero251.xyz/',
  favicon: "https://p.zero251.xyz/i/2025/03/28/甘城.svg", // 网页图标链接
  lang: 'zh-CN',
  title: 'Zero_wyc的窝',
  subtitle: '二向无常', //副标题
  author: {
    name: 'Zero-无常',
    avatar: "https://p.zero251.xyz/i/2025/03/28/辛.webp",	//头像链接
    status: {
      emoji: '🖥️'	// 头像旁边的emoji
    },
  },
  
  timezone: 'Asia/Shanghai', //add
  

  /**
   * 默认 Frontmatter
  */
  frontmatter: {
    time_warning: true,
  },
  
  description: 'Zero_wyc的公式化',
  
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/Zero-wyc',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Bilibili',
      link: 'https://space.bilibili.com/539775193',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'QQ 群 717047754',
      link: 'https://qm.qq.com/q/tr40uN8Aj6',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'Steam',
      link: 'https://steamcommunity.com/profiles/76561199062579234/',
      icon: 'i-ri-steam-line',
      color: '#137FAF',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=3728464360',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: 'Twitter',
      link: 'https://x.com/Zero_wyc0721',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'Pixiv',
      link: 'https://www.pixiv.net/users/59653138',
      icon: 'i-ri-parking-box-line',
      color: '#0096F9',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/zero_wyc',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: '酷安',
      link: 'https://www.coolapk.com/u/7056601',
      icon: 'i-ri-infinity-line',
      color: '#409A45',
    },
    {
      name: 'GAME Account',
      link: 'https://zero251.xyz/posts/Game',
      icon: 'i-ri-gamepad-line',
      color: '#409A45',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/7395123860',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/yu-chen-98-28-85',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: 'E-Mail',
      link: 'https://zero251.xyz/posts/Email',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
  ],
  // 图片预览（Medium Zoom） 
  mediumZoom: { enable: true },

  search: {
    enable: true,
    type: 'fuse',	//"algolia"或"engine"或"fuse"，代码有注释
  },

  /**
   * 开启阅读统计
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  // 代码块高度限制 并自动折叠 odeHeightLimit: 300


  
  /*
  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
  */
})
