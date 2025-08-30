---
hide: false
title: Valaxy个人博客如何添加一个音乐播放器 - 基于 APlayer 和 MetingJS 的全球音乐播放器
date: 2025-7-15
updated: 2025-8-4
categories: 搞机日志
cover: https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250718180948060.gif
tags:
  - 搞机日志
  - WEB
  - Valaxy
---

### 实际效果

![效果](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250718180948060.gif)

<!-- more -->

### 在项目根目录的Valaxy.config.ts下添加

```typescript
//引入valaxy-addon-meting这个插件
import { addonMeting } from 'valaxy-addon-meting'
```

```typescript
//添加addonMeting的主题配置文件
export default defineValaxyConfig<UserThemeConfig>({
  addons: [
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
      },
      options: {
        lyricHidden: true,  // 是否默认隐藏歌词
        animationIn: true,  // 是否启动时有动画效果
        autoHidden: false,   // 是否自动隐藏播放器界面
      }
    }),
  ]
})
```

