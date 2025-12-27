---
hide: false
title: 求生之路2之使用FRP反代获得低延迟体验
date: 2025-5-16
updated: 2025-8-4
categories: Game
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/PixPin_2025-06-08_13-29-52.png
tags:
  - 搞机日志
  - Game
  - Steam
---

- ###### 本篇文档算是故技重施，算是在先前的致命公司FRP的基础之上进行的相似操作**<!-- more -->**

- ###### 原理就是需要有一个可以*公网连接*的机器，尽可能IPV4，在此之上搭建FRPS进行代理即可（IPV6也不是不行，就是还需要一个本地转换地址的步骤，因为求生之路2太老了不支持IPV6直连）

- ## 还有一个很重要的一点求生之路2不支持使用<u>127.0.0.1</u>进行反代，也是因为太老的原因，这致使我耗费了1周的时间检查问题所在

- ### 基础的配置可以看我博客中的关于FRP的文章这里仅作简要说明


---

1. #### 基础的FRP文件，我这里简要写了个.bat文件方便一键开启
   
   ![](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/PixPin_2025-06-08_13-29-52.png)
   
2. #### FRPC的文件内容

   ```toml
   serverAddr = "1.1.1.1"		# 服务端公网IP地址，自行配置
   serverPort = 7000       			# 服务端通信端口，可自行配置
   auth.method = "token"
   auth.token = "test"  			# token 与服务端保持一直
   
   
   [[proxies]]
   name = "LEFT4"
   type = "udp"					   # 求生之路默认使用27015 UDP端口进行联机
   localIP = "192.168.1.98"			# 本机IP，不能是127.0.0.1必须是本机IP
   localPort = 27015				# 求生之路默认使用27015 UDP端口进行联机
   remotePort = 27015				# 尽量一样即可，防止混淆
   
   ```

3. #### 简易bat文件内容（使用记得打开开发者选项）

   ```powershell
   @echo off
   echo 正在启动 frpc...
   frpc -c frpc.toml
   pause
   ```

4. #### 记得先开游戏再开FRPC，不然游戏会换端口

5. #### 启动游戏后按下~键打开开发者控制台，根据自己的公网IP地址加上端口输入

   ```powershell
   connect 192.168.1.98:27015 #自行更改connect后面的内容
   ```

6. #### 不出意外你应该成功了

---

#### PS:建议控制台再输入（只需房主输入）

```toml
sv_consistency 0 #用于关闭服务器一致性检查，以防止模组冲突
```

