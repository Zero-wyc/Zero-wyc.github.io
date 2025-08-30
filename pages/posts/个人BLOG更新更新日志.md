---
hide: false
title: 个人BLOG更新更新日志
date: 2025-3-14
updated: 2025-8-30
categories: 搞机日志
cover: https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250804192855060.jpg
top: 1
tags:
  - 搞机日志
  - WEB
  - Valax
  - Daily life
---

> 一切的缘起**<!-- more -->**

##### 咕咕咕

> 初次建站时间应该是25年3月份，当时尝试了HEXO进行搭建，可是搭建到了一半突然看到了云游大佬开发的Valaxy框架，因其部署的快捷性和配置的便捷等等，一眼相中

#### 2025.3.23

> 初次使用Valaxy，当时还放在NAS的Docker环境下运行，进行初次体验

#### 2025.4.3

> BLOG站点基本配置完成，趁着阿里云大促购买了域名和一台云服务器配置宝塔，进行一系列工作

#### 2025.4.4

> 使用EasyImage在云服务器上搭建了简易图床，将本地的Valaxy博客迁移至云服务器
>
> 自此开始稳定运行

#### 2025.7.13

> 更新Valaxy发现主页顶栏和个人头像下的栏目代码分离，可独自配置，但配置页面没有及时更新，前往github查看提交日志，遂得知，
>
> 配置顶栏为
>
> ```typescript
>  nav: [
>    { text: '分类', link: '/categories/', icon: 'i-ri-list-unordered' },
>  ],
> ```
>
> 配置头像下的栏目为
>
> ```typescript
> pages: [
>    {
>      name: '分类',
>      url: '/categories/',
>      icon: 'i-ri-list-unordered',
>      color: '#43abee',
>    },
> ]
> ```
>
> 

#### 2025.7.14

> 更新了BLOG的白色和深色背景为甘城 (ˉ▽￣～)

#### 2025.7.15

> 添加了网页播放器

#### 2025.7.16

> 配置Live2d小人
>
> 更换卜蒜子为Vercount进行网站计数，但是计数重置了 (⊙︿⊙)
>
> ~~后来发现上线了配置网站，并将原来的计数添加回去了~~

#### 2025.7.17

> 添加Live2d至44个
>
> 更改评论系统，从Waline改为Twikoo，并从Vercel托管改为自有docker部署，让原版需要梯子才能发评论变为能访问网站就能评论

#### 2025.7.18

> 重新配置，全新安装EasyImage2.0，并配置PicList，将全站以及以后的图片变为Github图床，并使用Jsdelivr作为加速，虽图片访问速度变慢（有些家庭宽带直接无法使用，但是移动网络可以用）
>
> 减少服务器带宽使用（~~为以后全站挂载云服务作准备~~）

#### 2025.8.4

> 为所有文章添加头图和文章摘要
>
> 启用图片预览（Medium Zoom）
>
> 更新Vercount计数器

### 2025.8.27

> 伴随着NAS整体性迁移，Alist迁移为OpenList

### 2025.8.29

> 阿里云服务器从基于CentOS的Alibaba3迁移至Debian12以修复每次重启后DNS错误的问题，以及centos是真的不好用（unbuntu的snap惹人恨）

### 2025.8.30

> 在Github推送了pages，并部署了博客，也就是在Github上部署了自己的博客（~~md，之前不行是因为我自己把.github目录删了，我说为什么找不到~~）[Github Zero‘s Blog](https://zero-wyc.github.io/)
>
> 当日晚上10点，再了套一个Cloudflare CDN，套过的地址为 [Blog.Zero251.xyz](https://blog.zero251.xyz/)
>
> 大概率阿里云服务器的Blog会延迟更新，~~因为Github的自动推送自动打包太方便了~~
>
> 目前可访问的地址有
>
> [Github Pages](https://zero-wyc.github.io/)
>
> [Cloudflare](https://blog.zero251.xyz/)~~因为CDN的缘故，可能会延迟2~3小时更细，因该也没人在意这个吧~~
>
> [阿里云](Zero251.xyz)不定时更新

