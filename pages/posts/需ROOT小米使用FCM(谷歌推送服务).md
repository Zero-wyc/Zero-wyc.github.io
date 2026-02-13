---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: 需ROOT小米使用FCM(谷歌推送服务)-可以在无科学环境下离线接受外国APP的通知
date: 2026-2-14
updated: 2026-2-14
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260214004803273.webp
codeHeightLimit: 300 # 代码块限高
comment: false	# 关闭评论
tags:
  - 搞机日志
---

> 众所周知，HyperOS和MIUI是有谷歌框架的，但是其并不完整，而且自带的DNS是无法接收到谷歌服务器的
>
> 这里引用[MinaMiGo](https://blog.minamigo.moe/archives/1022)大佬的教程和说明
>
> 以及使用[systemless-fcm-hosts-magisk项目](https://github.com/Goooler/systemless-fcm-hosts)（更换谷歌FCM推送的DNS以再无科学上网环境下离线接受外国APP的通知）

<!-- more -->

---

1. 适配小米官方大陆版Miui12-14和HyperOS1-3
2. 不与fcmfix兼容，同时使用可能会导致部分功能不正常

---

下载链接：https://www.123pan.com/s/qjuiVv-OzFLh.html

---

1. 安装Xposed模块，并在Xposed管理器中激活Xposed模块后重启。（如果使用lsposed，需要注意勾选所有推荐应用）
   1. ![image-20260214003506986](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260214003514152.webp)
2. 在MIUIGMS应用中勾选需要FCM推送的应用以保留后台
   1. ![image-20260214003744791](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260214003744900.webp)
3. 刷入[systemless-fcm-hosts模块](https://github.com/Goooler/systemless-fcm-hosts)（可以使用Magisk、KernelSU、KernelSU-Next、SukiSU/ULTRA、Apatch）大部分的框架
   1. ![image-20260214004015003](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260214004015118.webp)
4. 刷入完成之后重启手机，打开MIUIGMS，点击右上角的三个点，点击 打开FCM Diagnostics
   1. ![image-20260214004131601](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260214004131700.webp)
   2. 确认是否连接到了FCM推送服务，若connect则成功
   3. ![image-20260214004207155](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260214004207233.webp)
5. 现在去试试能不能收到推送吧（如推，纸飞机等）

---

引用链接：https://blog.minamigo.moe/archives/1022