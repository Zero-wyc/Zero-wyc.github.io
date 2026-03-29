---
hide: false
title: 使用Vercount替代不蒜子 - Valaxy
date: 2025-7-16
updated: 2025-8-4
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804193109903.jpg
tags:
  - 搞机日志
  - WEB
  - Valaxy
---

> 卜蒜子的访问自6月以来一直502，故更换计数器
>
> 看到Evan Luo大佬的[Vercount: 一个比不蒜子更好的网站计数器 | EvanNotFound's Blog](https://ohevan.com/vercount-website-counter-busuanzi-alternative.html)，<!-- more -->而Valaxy的插件仓库正好也提供了这个插件
>
> 遂使用

> Valaxy官方的配置文章提供了最基础的放置于页面上的方法，但是我们想要变成原来卜蒜子的样式怎么办呢？于是就有这篇教程

### 安装插件

```powershell
pnpm add valaxy-addon-vercount
```

### 基本插件的配置（在valaxy.config.ts下）

```ts
import { defineValaxyConfig } from 'valaxy'
import { addonVercount } from 'valaxy-addon-vercount'

export default defineValaxyConfig({
  addons: [
    addonVercount({
      api: 'cn'
    }),
  ],
})
```

#### 在components/YunFooter.vue下改为这样

```vue
<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

const { page, site } = useAddonVercount()
</script>

<template>
    <YunFooter>
      <span>本文总阅读量 {{ page.pv }} 次</span>
      <span>本文总访客量 {{ page.uv }} 人</span>
      <span>本站总访问量 {{ site.pv }}</span>
      <span>本站总访客数 {{ site.uv }}</span>
    </YunFooter>
</template>

```

