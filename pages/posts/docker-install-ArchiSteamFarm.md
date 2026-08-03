---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: 使用docker安装ArchiSteamFarm进行steam挂卡挂游戏等
date: 2026-6-13
updated: 2026-6-13
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613090929040.webp
codeHeightLimit: 300 # 代码块限高
tags:
  - 搞机日志
  - Linux
  - Steam
---

> CP From Github
>
> ASF 是一款 C#应用程序，其主要功能是从多个账户同时管理 Steam 游戏卡。与 Idle Master 不同，ASF  可以同时管理多个账户，无需在后台运行 Steam 客户端，也无需启动额外的进程来模拟“游戏玩法”。ASF  完全不需要在后台运行任何进程，能够同时处理无限数量的 Steam  账户。此外，它还可以运行在服务器或其他无桌面环境的设备上，并且支持跨操作系统运行，因此可以在 Windows、Linux 和 macOS  等操作系统上通过.NET Core 运行时环境来运行。ASF 能够成功开发出来，得益于 SteamKit2 库所做出的巨大贡献。
>
> 如今，ASF 已成为 Steam 平台上最实用的工具之一，它提供了许多随着时间而不断完善的功能。除了用于刷取 Steam 卡片之外，ASF  还具备许多其他功能，比如可以作为 Steam 身份验证器或聊天记录工具使用。此外，ASF  还拥有插件系统，因此任何人都可以根据自己需求对其进行扩展

> ASF确实好用，就是在Docker上部署有点难
>
> Github项目地址：[ArchiSteamFarm](https://github.com/JustArchiNET/ArchiSteamFarm)
>
> 对于主要教程，官方的文档已经相当完善，可以先看官方的教程再来看我，我仅作我踩的坑做补充

<!-- more -->

---

1. ### 部署docker镜像

   1. #### 首先需要先创建一个目录用于放置asf配置文件的文件夹，

      1. asf需要俩个文件夹，plugins和config

         ![image-20260613094142342](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613094142462.webp)

      2. 创建完后进入终端，找到路径，赋予所有人都可以访问的权限（因为docker asf默认的访问权限不足，会导致即使docker上映射了目录仍无法读写配置文件）

         ```
         chmod -R 777 ./plugins
         chmod -R 777 ./config
         ```

         ![image-20260613094753815](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613094753918.webp)

         

   2. #### 官方的命令限制了端口访问的ip，导致仅能在自己的主机上访问

      1. ```bash
         docker run -p 127.0.0.1:1242:1242 -p [::1]:1242:1242 -v /home/archi/ASF/config:/app/config -v /home/archi/ASF/plugins:/app/plugins --name asf --pull always --restart unless-stopped justarchi/archisteamfarm
         ```

      2. 我将端口选项调整为全部网络均可在1242访问，以支持外部访问

      3. 修改后的命令（需要自行修改里面的config和plugins的路径）

         ```
         docker run -p 0.0.0.0:1242:1242 -p [::]:1242:1242 -v /volume4/data/asf/config:/app/config -v /volume4/data/asf/plugins:/app/plugins --name asf --pull always --restart unless-stopped justarchi/archisteamfarm
         ```

      4. 也可以使用docker compose（自行修改里面的config和plugins的路径）

         1. ```
            version: "3.8"
            services:
              asf:
                image: justarchi/archisteamfarm
                container_name: ArchiSteamFarm
                restart: unless-stopped
                ports:
                  - "0.0.0.0:1242:1242"
                  - "[::]:1242:1242"
                volumes:
                  - /volume4/data/asf/config:/app/config
                  - /volume4/data/asf/plugins:/app/plugins
            ```

            

2. ### 添加`IPC.config`文件

   1. 由于asf在默认的docker容器环境下，处于回环接口中，同样导致无法在docker外访问镜架内部网络，所以我们要添加一个允许外部访问的配置文件

   2. #### 将文件名命名为`IPC.config`,并添加如下内容，并放置于config文件夹下

      ```
      {
      	"Kestrel": {
      		"Endpoints": {
      			"HTTP": {
      				"Url": "http://*:1242"
      			}
      		}
      	}
      }
      ```

      ![image-20260613095641650](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613095641736.webp)

3. ### 设置 `IPCPassword`

   1. #### 刚才的操作进行完后，启动容器，访问`设备ip:1242`,看看能不能进入网页，如果可以的话，那么应该会出现这样的页面

      1. ![image-20260613101428857](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613101429056.webp)

   2. #### 回到`config`目录，添加一个`ASF.json`文件，并输入以下内容(`IPCPassword`为asf的登录密码，自行设置)

      1. `SteamOwnerID`填写自己的steamid，查看方式为点击查看我的个人资料后网页最后的一串数字

         ![image-20260613101938622](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613101938755.webp)

      2. ```
         {
         	"IPCPassword": "0000",
         	"SteamOwnerID": 00000
         }
         ```
   
      3. #### 刷新网页，输入先前填写的ipc密码

         ![image-20260613102019260](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613102019448.webp)

3. ### 配置ASF

      1. #### 进入网页后，先点击ASF配置，将HEADLESS打勾,然后划到最底下点击保存

      2. 其他的配置参数可以点击参数后面的问号，ASF的中文翻译十分完善，基本读一遍就知道要做什么了

         ![image-20260613102249653](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613102249888.webp)

      3. #### 点击机器人，选择创建

         ![image-20260613102426978](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613102427180.webp)

      4. #### 先填写图中的三行参数

         1. Name：机器人名字，自己随便取
         2. Steamlogin：为你登录steam时的登录账号，即如下图打码的部分
            1. ![image-20260613102627216](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613102627299.webp)
      
         3. SteamPassword：为登录Steam的密码
         4. ![image-20260613102527334](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613102527477.webp)
      
      5. #### 启动机器人（话说现在应该没有人没给steam绑手机验证器吧，如果没有就去绑一下）

         1. 第一次启动的时候可能不会弹出steam手机验证码的弹窗，等待一会它自己关闭后再开启就有这个弹窗开了
         2. ![image-20260613103315430](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613103315631.webp)
         3. ![image-20260613103450009](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613103450210.webp)
         4. #### 输入此时的手机令牌验证码刷新一下网页，就会发现已经登入成功了
            
         1. ![image-20260613103550153](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613103550351.webp)
            
         5. 接下来，继续配置机器人，由于ASF的汉化十分完整，基本上只要点一下问号，之后出现的解释十分详尽，是个正常人都能读懂，这里就不做过多挂卡的配置教程了
            1. ![image-20260613103613939](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613103614066.webp)
            2. ![image-20260613103633696](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260613103633858.webp)


​      

​      


---

引用链接：

[Docker配置ArchiSteamFarm实现steam游戏自动挂卡（以飞牛OS为例](https://www.cnblogs.com/lightmon5210/p/19880178)

[使用 Docker 搭建 Steam 挂机平台 ArchiSteamFarm (ASF)](https://zhuanlan.zhihu.com/p/1931119669051364538)

