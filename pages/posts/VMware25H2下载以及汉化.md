---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: VMware25H2下载以及汉化
date: 2025-12-20
updated: 2025-12-20
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220204158878.webp
nav: false	# 关闭页面导航
aside: false	# 关闭目录边栏
codeHeightLimit: 300 # 代码块限高
comment: false	# 关闭评论
tags:
  - 搞机日志
  - 软件推荐
---

> 众所周知，博通收购了VMware，而直接免费了VMware PRO
>
> 可谓利好全人类，但是最新版的25H2默认安装却没有中文汉化，那么现在就来一个汉化教程

<!-- more -->

---

### 下载VMware

1. [来到VM的官网](https://www.vmware.com/)
   1. ![image-20251220204623214](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220204623456.webp)
2. 点击搜索，输入Desktop Hypervisor，出来的第一个就是了，点击即可
   1. ![image-20251220204717809](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220204718003.webp)
3. 点击下载，去注册一个并去注册一个博通账户
   1. ![image-20251220204918858](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220204919010.webp)
4. 来到这里，点击我的下载，点击免费软件下载
   1. ![image-20251220205051483](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220205051647.webp)
   2. ![image-20251220205141828](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220205141951.webp)
5. 找到VMware Workstation Pro并选择最新版
   1. ![image-20251220205217118](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220205217314.webp)
   2. ![image-20251220205334821](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220205334958.webp)
6. 如下图，然后就可以下载了
   1. ![image-20251220205655313](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220205655540.webp)
7. 安装就不说了

---

### 汉化

[汉化下载链接](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220205916047.zip)

1. 我们能看到一开始是没有汉化的
   1. ![image-20251220205819900](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220205820043.webp)
2. 将汉化文件解压并放入安装文件夹的`Vmware\messages`目录下
   1. ![image-20251220210103513](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220210103726.webp)
   2. ![image-20251220210143649](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220210143850.webp)
3. 接下来来到`C:\Users\用户名\AppData\Roaming\VMware`或者win+R输入`%APPDATA%VMware`
   1. ![image-20251220210454215](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220210454444.webp)
4. 打开`preferences.ini`文件，在文件末尾添加`pref.locale = "zh_CN"`
   1. ![image-20251220210640678](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220210640781.webp)
5. 保存并关闭再去启动VMware看看，能看到已经成功汉化
   1. ![image-20251220210713812](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251220210713928.webp)

