---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: 一些DockerCompose配置
date: 2025-11-29
updated: 2025-11-29
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251129232547423.webp
codeHeightLimit: 300 # 代码块限高
tags:
  - 搞机日志
  - Linux
---

1. FRPS

   1. ```bash
      services:
        frps_sSDC:
          image: snowdreamtech/frps:${VERSION}
          #    container_name: ${CONTAINER_NAME}
          deploy:
            resources:
              limits:
                cpus: ${CPUS}
                memory: ${MEMORY_LIMIT}
          network_mode: host
          restart: always
          volumes:
            - ${APP_PATH}/data/frps.toml:/etc/frp/frps.toml
            - ${APP_PATH}/data/ssl:/etc/frp/ssl
          labels:
            createdBy: "bt_apps"
      ```

2. 3X-UI<!-- more -->

   1. ```bash
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

      

3. mcsmanager(包含前后端)

   1. ```bash
      services:
        web:
          image: githubyumao/mcsmanager-web:latest
          restart: unless-stopped
          ports:
            - "23333:23333"
          volumes:
            - /etc/localtime:/etc/localtime:ro
            - /volume4/data/mcsmanager/web/data:/opt/mcsmanager/web/data
            - /volume4/data/mcsmanager/web/logs:/opt/mcsmanager/web/logs
      
        daemon:
          image: githubyumao/mcsmanager-daemon:latest
          restart: unless-stopped
          ports:
            - "24444:24444"
            - "25565:25565"
          environment:
            - MCSM_DOCKER_WORKSPACE_PATH=/volume4/data/mcsmanager/daemon/data/InstanceData
          volumes:
            - /etc/localtime:/etc/localtime:ro
            - /volume4/data/mcsmanager/daemon/data:/opt/mcsmanager/daemon/data
            - /volume4/data/mcsmanager/daemon/logs:/opt/mcsmanager/daemon/logs
            - /var/run/docker.sock:/var/run/docker.sock
      ```

      

4. Openlist

   1. ```bash
      services:
        openlist:
          image: 'openlistteam/openlist:latest'
          container_name: openlist
          volumes:
            - '/www/wwwroot/openlist:/opt/openlist/data'
            - '/:/home'
          ports:
            - '5244:5244'
          environment:
            - PUID=0
            - PGID=0
            - UMASK=022
          restart: unless-stopped
      ```

      

5. 

---

