---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: LSPosed IT 群组加入教程
date: 2026-3-29
updated: 2026-3-29
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329142543981.webp
tags:
  - 搞机日志
  - Root
---

> LSPosed IT 群组是什么？ 想必看到的都知道这是什么了
>
> 自从2年前lsposed关闭公开发版 ，转入推特的私有群组发版
>
> 目前能公开下载的都是泄露的版本，这些版本的安全性无法知晓，甚至会有人在里面投毒，在闭源之后，也不是没有人使用之前的lsp仓库继续修复使用，但终归还是lsp的本体版本最好使
>
> 至于为什么我在lsp闭源2年后才写这个，其实是因为我昨天才成功进入群组（
>

<!-- more -->

---

### 需要的东西

1. 一个Github账号，需要注册满足一年半以上，且有项目（其实只要有个fork项目就可以了
2. Telegram账号，国内的运营商现在已经全面封禁了telegram的短信和电话验证码，想要注册的话，需要去买个虚拟手机号注册

---

1. ### 先说下我踩的坑（

   1. 第一次的时候，telegram群组的加入申请，操作失误申请失败了，之后重新尝试，提示让我等一会，tm我隔了几个月再去试，还是让我等一会，期间我还照猫画虎的对机器人发`/start`结果根本没反应，结果到了昨天晚上，我突然想起来，那个认证测试是在加入群组时弹出的

      ![image-20260329125201636](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329125208802.webp)

   2. 也就是说，你在失败后，重复点击验证按钮是根本错误的方法

      ![image-20260329125453254](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329125453404.webp)

   3. 正确的方法是重新点击加入群组的链接，然后机器人就会重新私信，发送新的测试

      `https://t.me/+NfHztfyNBZs2ZDll`

   4. 之后每次失败重新点击上面的群组链接，机器人就会重新私信，再次进行操作即可

   5. 我真是个XX

2. ### 教程正式开始

   1. 前往Github，进入Add new SSH Key页面

      ![image-20260329130835391](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329130835634.webp)

      ![image-20260329130939991](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329130940190.webp)

   2. 打开telegram，对自己私信`https://t.me/+NfHztfyNBZs2ZDll`，并点击，这个时候会有个机器人给你发测试,
      如果之后操作失误就重新点击这个链接，机器人就会重新发测试（一定要这样，不要踩我踩过的坑）

      ​	![image-20260329132307635](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329132307725.webp)

      1. 打开验证页面，复制下面`挑战码`，不要带引号，(以及加粗的才是Github用户名（虽然说用过github的一般肯定不会错

         ![image-20260329133342122](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329133342227.webp)

         ![image-20260329133505450](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329133505521.webp)

   3. 打开浏览器，下载注册脚本（其实这个脚本也没简化多少就是了 

      1. [（-En修复版）LSPosed申请辅助工具解压后打开](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329131500413.zip)（如果你的申请链接是下图这样的，密钥之间有 `/`的用这个）
         1. ![image-20260329131810670](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329131810758.webp)
      2. [LSPosed申请辅助](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329131610258.webp)（如果你的申请链接是下图这样的，密钥之间没 `/` 的用这个）
         1. ![image-20260329131928253](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329131928355.webp)
      3. 打开mt管理器，勾选扩展包和root权限，使用脚本
         1. ![image-20260329132019024](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329132019150.webp)

   4. 输入Github邮箱,将更新出来的ssh key导入到github ssh key中，注意如果是上面第一个脚本，在第一次申请后，在申请，会弹出一个ssh是否重置，如果选y，则需要重新将ssh key更新到github中，如果选n,则直接输入上面复制的`挑战码`即可（注mt的命令行长按选中完，单击选中内容复制）

         ![https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329132057382.webp](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329132057382.webp)

         ​	![Screenshot_2026-03-29-13-55-15-797_bin.mt.plus](C:\Users\Zero_\Downloads\Screenshot_2026-03-29-13-55-15-797_bin.mt.plus.jpg)

         ![image-20260329134224107](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329134224353.webp)

   5. 输入完`挑战码`，弹出签名结果，复制begin到end的内容，回到验证界面，输入复制内容，点击验证，通过即可成功

   6. ![20260329-141122-5814a4](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329141141206.webp)

   7. ![image-20260329131928253](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260329142305626.webp)

---

引用链接：https://www.coolapk.com/feed/70494321?s=MWRiODU1MmU2YmFjZDlnNjljOGFjY2N6a1603