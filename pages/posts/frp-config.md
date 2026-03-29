---
hide: false
title: FRP配置
date: 2025-05-16
updated: 2025-8-4
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804193828764.png
tags:
  - 搞机日志
  - Linux
  - Windows
---
frp 是什么？
frp 是一款高性能的反向代理应用，专注于内网穿透。它支持多种协议，包括 TCP、UDP、HTTP、HTTPS 等，<!-- more -->并且具备 P2P 通信功能。使用 frp，您可以安全、便捷地将内网服务暴露到公网，通过拥有公网 IP 的节点进行中转。

---

下载地址：[fatedier/frp: A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.](https://github.com/fatedier/frp)

---



### Frp配置

---


- #### Linux环境下

  - #### FRPC

  - #### 运行命令 在frpc目录下

    ```toml
    ./frpc -c ./frpc.toml  #frpc.toml为运行配置文件
    ```
  - #### frpc.toml配置文件

    ```toml
    serverAddr = "1.1.1.1"    # 服务端公网IP地址，可自行配置
    serverPort = 7000             # 服务端通信端口，可自行配置
    auth.method = "token"
    auth.token = "12345678"       # token 与服务端保持一直
    
    [[proxies]]
    name = "test-http"
    type = "tcp"
    localIP = "127.0.0.1"     # 需要暴露的服务的IP
    localPort = 8080        # 将本地9000端口的服务暴露在公网的6060端口
    remotePort = 6060         # 暴露服务的公网入口
    
    [[proxies]]
    name = "test-http"
    type = "tcp"
    localIP = "127.0.0.1"     # 需要暴露的服务的IP
    localPort = 8080        # 将本地9000端口的服务暴露在公网的6060端口
    remotePort = 6060         # 暴露服务的公网入口
    ```

  - ### 使用systemd进行开机自启

    - #### 安装systemd

      ```toml
      apt install systemd
      ```

    - #### 创建 frps.service 文件

      ```toml
      vim /etc/systemd/system/frps.service
      ```

    - #### 写入

      ```toml
      [Unit]
      # 服务名称，可自定义
      Description = frp server
      After = network.target syslog.target
      Wants = network.target
      
      [Service]
      Type = simple
      # 启动frps的命令，需修改为您的frps的安装路径
      ExecStart = /path/to/frps -c /path/to/frps.toml
      
      [Install]
      WantedBy = multi-user.target
      ```

    - #### PS:如何加载多个配置文件，进行多vps服务器穿透

      ```toml
      ExecStart = /path/to/frps -c /path/to/frps.toml
      #更改为
      ExecStart = /path/to/frps -c-dir /path/to/frpc
      #此处路径需要指向文件夹
      ```

    - #### 使用 systemd 命令管理 frps 服务

      ```toml
      # 启动frp
      sudo systemctl start frps
      # 停止frp
      sudo systemctl stop frps
      # 重启frp
      sudo systemctl restart frps
      # 查看frp状态
      sudo systemctl status frps
      ```

    - **设置 frps 开机自启动**

      ```toml
      sudo systemctl enable frps
      ```

  - ### FRPS

    - #### frps的启动命令

      ```toml
      ./frps -c ./frps.toml
      ```

    - #### frps.toml配置文件

      ```toml
      [common]
      # frps监听的端口，默认是7000，可以改成其他的
      bind_port = 7000
      # 授权码，请改成更复杂的 # 这个token之后在客户端会用到
      token = 12345678
      
      # frp管理后台端口，请按自己需求更改
      dashboard_port = 7500
      # frp管理后台用户名和密码，请改成自己的
      dashboard_user = test
      dashboard_pwd = 123456
      enable_prometheus = true
      
      # frp日志配置
      log_file = /var/log/frps.log
      log_level = info
      log_max_days = 3
      ```

  - ### Windows环境

    - #### frpc和frps与linux相同只是启动不需要打./
