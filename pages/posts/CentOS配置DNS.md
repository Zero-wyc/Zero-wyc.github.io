---
hide: false
title: CentOS配置DNS
date: 2025-8-23
updated: 2025-8-23
categories: 搞机日志
cover: https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20250824221751222.webp
tags:
  - 搞机日志
---

> - 阿里云的Alibaba Cloud 3 基于Cent OS，却在我这多次有DNS问题，每次却都想不来为什么访问不了
>   - 特征为能访问其挂载的网页和服务，却无法续签HTTPS证书，在日常使用时没有差别很难判断出为什么~~因为没有GUI~~
>   - ~~md每次都以为是那个b阿里云的端口放行问题~~<!-- more -->

1. ### 使用 nmcli 命令

   - ```bash
     # 查看网络连接名称
     nmcli con show
     #会返回下面类似的输出，下文的YourConnectionName填写UUID即可
     
     #NAME             UUID                                  TYPE      DEVICE          
     #System eth0      5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0            
     #tailscale0       3aa1eaad-8b7d-4cdc-8902-5bdc2cbfca2c  tun       tailscale0      
     #br-98e0784aed06  7dea6bcd-d510-4628-8c9f-9fbf11734644  bridge    br-98e0784aed06 
     #br-227aa749a5a3  cb989a0e-29ab-4c5d-93f0-4804d970db19  bridge    br-227aa749a5a3 
     #docker0          5b7fdfd9-5e44-4287-a8d2-0237febf2e70  bridge    docker0         
     
     # 修改 DNS 设置 (替换 YourConnectionName 和 DNS 地址)
     nmcli con mod YourConnectionName ipv4.dns "8.8.8.8 8.8.4.4"
     nmcli con mod YourConnectionName ipv4.ignore-auto-dns yes
     
     # 重启网络连接以生效
     nmcli con up YourConnectionName
     ```

     

