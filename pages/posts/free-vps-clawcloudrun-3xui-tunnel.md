---
hide: false
title: 免费VPS ClawCloudRun使用3XUI面板进行隧道搭建
date: 2025-8-23
updated: 2025-8-23
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250824221619820.gif
tags:
  - 搞机日志
  - WEB
  - Linux
---

> ​	==CLAW CLOUD RUN 云服务商如果使用Github超过180天的账户注册可以获得每月5美刀的服务器额度，额度十分充裕且无需绑定银行卡==
>
> ​	每月10GB高速流量，之后限速，但是在我这仍然能跑到10MB+（据说到70GB为上限，但如果单一时间过量使用可能导致限速1mps，但是几小时之后就恢复了），十分能用，而且是对单个容器进行限速，也就是说创建多个容器可让流量翻翻<!-- more -->
>
> ​	而且据我测试，最低0.1核心128mb内存的配置即可享受流畅网络，每天0.03刀的消费，一个月不到1刀的额度，甚至可以同时开5台VPS
>
> ​	目前提供日本，新加坡，美国东部和西部，德国五个免费节点。据我测试，日本服务器配置大，速度极快，延迟低，非常合适搭建；新加坡常年服务器资源紧张，部署重启配置都要好久时间，美国和德国延迟高，但均可较流畅使用
>
> ​	==WARNING!!! law Cloud 属于阿里巴巴，服务器及数据受中共《网安法》《数据安全法》等法律管控，部署服务存在被监控和数据风险。请自行斟酌使用==
>
> ​	~~另一方面，也提供了可靠的保障~~

1. ### 打开Claw Cloud Run网站（可能需要移动网络或提前预备一个梯子，仅在这个方面需要使用，后续的3XUI面板访问是不需要的）

   1. #### 访问网站[run.claw.cloud](https://run.claw.cloud/)，使用Github超过180天的账户注册

   2. #### 选择一个想要的地区

      - ![image-20250823230247584](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823230254692.png)

   3. #### 点击APP Launchpad

      - ![image-20250823230359826](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823230359939.png)

   4. #### 点击Create APP

      - ![image-20250823230442712](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823230442785.png)

   5. #### 配置面板

      - `Application Name`：可自定义想要的名字
      - `Image`：选择`Public`
      - `Image Name`：填入 `metaligh/3x-ui`
      - `Usage`:使用`0.1CPU`和`128M`的配置即可创建
      - ![image-20250823230533963](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823230534060.png)
      - Network配置80端口(用于vps访问)和2053端口（3XUI面板管理端口）并打开Public Access（公网访问链接）
      - ![image-20250823230837888](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823230837952.png)
      - Advanced Configuration只需要配置Local Storage（本地存储目录）
        - 点击add 添加如下目录 （Capacity (存储容量) 1Gib即可)
        - Mount Path （安装路径）填写
          - `/etc/letsencrypt/`和`/etc/letsencrypt/`
      - ![](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823231136225.png)
      - ![image-20250823231533230](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823231533363.png)

   6. #### 确认并保存容器等待域名和容器均为active状态

      - ![image-20250823231839061](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823231839178.png)

   7. #### 访问2053端口指向的域名，进入3xui面板

      1. #### 默认用户名和密码均为`admin`

      2. ![image-20250823232018161](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823232018277.png)

   8. #### 添加一个入站列表，并按照图中配置

      - ![image-20250823232355968](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823232356075.png)

   9. #### 导出链接并复制到V2ray或者其他代理软件中（clash不可以）

      - ![image-20250823232438224](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823232741500.png)

   10. #### ==注意导入后需要更改地址为vps的80端口的地址以及端口更改为443；传输层安全选择tls（https模式）==

       - ![image-20250823232937347](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823232937440.png)
       - ![image-20250823233040002](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250823233040075.png)

   11. #### 大功告成，享受免费而又快速的vps吧

       ---

       你问我vps为什么不叫VP*，当然是安全啦

       - Github地址：
         - [3X-UI面板](https://github.com/MHSanaei/3x-ui)
         - [v2rayN](https://github.com/2dust/v2rayN)
         - [v2rayNG](https://github.com/2dust/v2rayNG)
         - [NekoBoxForAndroid](https://github.com/MatsuriDayo/NekoBoxForAndroid)

       - 参考教程：
         - [Claw Cloud Run 免费容器 部署Docker应用](https://www.youtube.com/watch?v=4vEzjeYnUQk)
         - [claw容器免费搭建节点](https://www.youtube.com/watch?v=WPkgyytwLUw&t=9s)

   