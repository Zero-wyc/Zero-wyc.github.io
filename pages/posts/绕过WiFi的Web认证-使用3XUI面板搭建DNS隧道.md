---
hide: false
title: FZBZ-绕过WiFi的Web认证-使用3XUI面板搭建DNS隧道
date: 2025-9-20
updated: 2025-9-20
categories: 搞机日志
cover: https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920223900030.webp
tags:
  - 搞机日志
  - FZBZ
  - WEB
---

> 原理说明：
>
> 当我们访问使用某个Web认证热点访问某个HTTP网站，网关会对这个[HTTP响应](https://so.csdn.net/so/search?q=HTTP响应&spm=1001.2101.3001.7020)报文劫持并纂改302重定向给我们一个web认证界面。网关（或者说交换机）都默认放行DHCP（用于分配IP）和DNS（用于劫持用户数据报）。

> 总而言之
>
> 就是在有Web认证的网络里，并不会阻断所有网络访问，因为需要有DNS服务来跳转到Web认证的页面，但在限制更严格的环境下，使用了SNI阻断或者其他方法，这个方法就会失效，但绝大部分的网络环境都能成功
>
> 就是说作为DNS解析的53端口或67端口是可以访问外部网络的
>
> 借此，通过伪装DNS包，将VPN的链接端口设置为53(也可再加上DNS分片伪装)即可实现无需认证访问网络

> 需要的东西：
>
> - 一台VPS - 尽量在国内且水管大一些，访问才流畅
>
>
> - 一个可解析的域名
>
>
> 实现的工具：
>
> - [3x-Ui面板(一个基于Xray的网页编辑面板)](https://github.com/MHSanaei/3x-ui)
> - [V2rayNG(安卓代理软件)](https://github.com/2dust/v2rayNG)（clash和singbox不行）
> - [Termux(安卓测试DNS端口是否可以访问)](https://github.com/termux/termux-app)

### 教程开始

1. ### 先查看是否有DNS阻断

   1. #### Windows使用nslookup用于dns解析的，没有认证的情况下可以成功的解析到结果，说明dns的端口53是开放的

      ![image-20250920214513089](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920214520249.webp)

   2. #### 安卓使用Termux终端测试

      1. ```bash
         pkg update && pkg install dnsutils #安装nslookup
         ```

      2. ```bash
         nslookup baidu.com #测试是否可以DNS解析
         ```

      3. 出现如下类似结果，即是成功

         1. ![Screenshot_2025-09-20-21-58-49-559_com.termux](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920215905034.webp)

2. ### 使用3X-UI面板进行隧道搭建

   1. #### 这里使用宝塔以及docker的3xui面板方便配置

   2. #### `docker-compose`

      ```docker-compose
      services:
        3xui:
          image: ghcr.io/mhsanaei/3x-ui:latest
          container_name: 3xui_app
          # hostname: yourhostname <- optional
          volumes:
            - '/www/wwwroot/3xui/db/:/etc/x-ui/'
            - '/www/wwwroot/3xui/cert/:/root/cert/'
          environment:
            XRAY_VMESS_AEAD_FORCED: "false"
            XUI_ENABLE_FAIL2BAN: "true"
          tty: true
          network_mode: host
          restart: unless-stopped
      ```

      ![image-20250920220924177](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920220944331.webp)

   3. #### 打开网址 `http：//<your-ip>：2053` 并登录面板。凭据如下：

      - 👤 用户名: `admin`

      - 🔑 密码: `admin`
        - 如果想不使用docker，本地搭建的话 [看这里](https://github.com/MHSanaei/3x-ui/wiki/Installation#install-in-one-line-recommended)

   4. #### 在域名方面配置，这里以Cloudflare为例

      - ![image-20250920221218274](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920221218430.webp)

      - #### 然后在宝塔面板配置反向代理

      - ![image-20250920221329626](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920221329884.webp)

   5. ### 配置3XUI面板，添加如下隧道

      - ![image-20250920221642818](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920221643074.webp)

   6. ### 如果显示53端口被占用，先在终端查看是否真的被占用

      1. ```bash
         sudo ss -ulnp | grep :53
         # udp53方向应该只出现Xray，若有出现其他程序占用则被占用
         ```

      2. #### 将系统默认的DNS解析切换为TCP53端口，几乎不影响VPSDNS解析

         - ```bash
           sudo mkdir -p /etc/systemd/resolved.conf.d
           sudo nano /etc/systemd/resolved.conf.d/10-tcp-only.conf
           ```

         - #### 写入内容

         - ```bash
           [Resolve]
           DNSStubListenerExtra=tcp://127.0.0.1:53
           DNSStubListener=no        # 关闭默认 UDP+TCP 混合监听
           ```

         - #### 重启服务

         - ```bash
           sudo systemctl restart systemd-resolved
           ```

         - #### 验证，如果udp53端口出现xray即成功

         - ```bash
           sudo ss -tulnp | grep :53
           ```

   7. ### 在3XUI面板导出链接并导入代理软件

      - ![image-20250920223149463](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920223149620.webp)

   8. #### 导入V2Ray（~~这里用Neko-ray，V2ray的二刺猿改版为例~~）

      - 导入

      - ![7c9a26a84c047b55dd91e6ee21c9eefa](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920223258257.webp)

      - #### 进去之后找到路由选项然后全部关掉

        - ![2281d7f1750bb0c961a6975a02f2f45c](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920223416161.webp)

      - #### 将设置改为这样，最终要的是那个DNS代理解析按钮

        - ![78a44de4860a92f1a8f082558f5a9dc4](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250920223453947.webp)

      - #### 点击主页右下角的小飞机开起来，去浏览器或者软件上上网，看看然后去3XUI面板看看是否全局流量通过

      - #### 如果有即可成功

   9. ### 电脑端我就不细说了

   10. ### 现在连上有Web登录限制的网络试试吧，享受世界! MAKE THE WORLD GREAT AGAIN

