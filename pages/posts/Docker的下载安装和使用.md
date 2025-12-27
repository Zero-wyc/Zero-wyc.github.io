---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: Docker的下载安装和使用
date: 2025-12-27
updated: 2025-12-27
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20251227212517919.webp
tags:
  - 搞机日志
  - Linux
---

> Docker 是什么？
>
> Docker 是一个 **开源的容器化平台**，核心作用是“**把应用+运行环境一起打包成镜像**”，解决环境问题无法部署的经典难题，且容器与宿主机完全隔离，容器内的事情不会影响到主机

<!-- more -->

---

1. ### 安装Docker

   1. 由于docker官方源和镜像源链接都被墙，所以这里使用阿里源进行安装（`docker search`命令会直接查询Docker Hub，因此配置加速器之后仍然无法使用）
   2. 安装Docker社区版本

      1. > ```bash
         > #更新包管理工具
         > sudo apt-get update
         > #添加Docker软件包源
         > sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
         > sudo curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
         > sudo add-apt-repository -y "deb [arch=$(dpkg --print-architecture)] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
         > #安装Docker社区版本，容器运行时containerd.io，以及Docker构建和Compose插件
         > sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
         > ```

   3. 启动Docker并设置开机自启

      1. > ```bash
         > #启动Docker
         > sudo systemctl start docker
         > #设置Docker守护进程在系统启动时自动启动
         > sudo systemctl enable docker
         > ```

2. ### 配置镜像源

   1. 编辑Docker配置文件`/etc/docker/daemon.json`。若文件不存在，先创建。

      1. ```bash
         vim /etc/docker/daemon.json
         ```
      2. > ```json
         > {
         >     "registry-mirrors": ["<加速器地址>"]
         > }     
         > ```
      3. 这里的加速器地址推荐毫秒镜像，填入`docker.1ms.run`至加速器地址即可
      4. 重启Docker服务应用新配置

         ```bash
         sudo systemctl restart docker
         
         ```

3. ### 创建一个docker容器的命令

   1. ```bash
      docker run -d --name frps --hostname frps \
        --network bridge \                 # 如用 host 模式就换成 --network host
        --restart always \
        -p 7000:7000 -p 7500:7500 -p 80:8080 -p 443:8443 \
        -v /data/frps.toml:/etc/frp/frps.toml:ro \
        -v /data/ssl:/etc/frp/ssl \
        snowdreamtech/frps:latest
      ```

      

4. ## **Docker Compose**

   > Docker Compose是“将多个容器配置、网络、挂卷、变量、依赖”写进 **docker-compose.yml** 文件，极大增加部署效率

   1. #### 安装Docker Compose

      1. ```bash
         sudo apt-get -y install docker-compose-plugin
         ```

         

   2. #### Docker Compose的编写和修改

      1. 大部分的容器作者都会给一个基础的Docker Compose文件，那么这里面的每一行配置都是什么意思呢？这里做个大概解释，

      2. 这里以mcsmanager的前后端做个例子

         1. ```dockerfile
            services:
              web: #项目名称,一个compose内可以有多个容器
                image: githubyumao/mcsmanager-web:latest     #镜像名称:版本名称(这个一般填latest就好)
                container_name: mcsmanager-web #容器名称(可选)
                deploy: #容器配置(可选)
                  resources:
                    limits:
                      cpus: '0.50' #自定义可用的CPU核心数
                      memory: 512M #自定义可用的内存大小
                network_mode: bridge 
                #网络模式，bridge(默认的模式,桥接,独立分配IP
                #host(直接使用实体网络)
                #container(使用其他容器网络)
                #none(无网络))
                ports:                  # host模式下不需要这个以及下面的端口
                  - "23333:23333"       # 前面的是容器内端口，后面的对外端口
                restart: always 
                #no:用不自动重启(默认模式）
                #always:无论是否闪退都重启,Docker启动时也启动
                #on-failure:退出码非0才重启,可带次数如 on-failure:5 (最多重试 5 次)
                #unless-stopped:类似 always，但手动stop后不再自动重启,之后即使docker重启时也不会再启动
                volumes:
                  #容器映射的目录，如果不填写这个，在容器更新时内部数据会全部删除
                  #前面是实体机要映射的目录，后面是容器内所需映射的目录，这个容器作者一般会给，需要自定义的是前者
                  - /volume4/data/mcsmanager/web/data:/opt/mcsmanager/web/data
                  - /volume4/data/mcsmanager/web/logs:/opt/mcsmanager/web/logs
                environment: #环境变量(可选)，这边的变量需要根据项目所给的文档来个性化配置
                  - PUID=${PUID} #自定义用户ID，避免权限问题
                  - PGID=${PGID} #自定义用户组ID，避免权限问题
                  - TZ=Asia/Shanghai #时区设置，可根据需要修改
              daemon: #mcsmanager的后端，后续一样的配置项不再赘述
                image: githubyumao/mcsmanager-daemon:latest
                restart: unless-stopped
                ports:
                  - "24444:24444"
                  - "25565:25565"
                environment:
                  - MCSM_DOCKER_WORKSPACE_PATH=/volume4/data/mcsmanager/daemon/data/InstanceData
                  - TZ=Asia/Shanghai 
                volumes:
                  - /volume4/data/mcsmanager/daemon/data:/opt/mcsmanager/daemon/data
                  - /volume4/data/mcsmanager/daemon/logs:/opt/mcsmanager/daemon/logs
                  - /var/run/docker.sock:/var/run/docker.sock
            
            ```
            

      3. 这里也一并给方便一个配置docker的compose精简模板

         1. ```dockerfile
            services:
              name_of_service:  # 服务名称，自定义
                image: image:latest    
                network_mode: bridge
                #网络模式，bridge(默认的模式,桥接,独立分配IP
                #host(直接使用实体网络)
                #container(使用其他容器网络)
                #none(无网络))
                ports:                 
                  - "<container_port>:<host_port>"          # 前面的是容器内端口，后面的对外端口
                restart:unless-stopped
                #no:用不自动重启(默认模式
                #always:无论是否闪退都重启,Docker启动时也启动
                #on-failure:退出码非0才重启,可带次数如 on-failure:5 (最多重试 5 次)
                #unless-stopped:类似 always，但手动stop后不再自动重启,之后即使docker重启时也不会再启动
                volumes:
                  #前面是实体机要映射的目录，后面是容器内所需映射的目录
                  - /data/xxxx.toml:/data/xxxx.toml
            ```

   3. #### 写完docker compose之后现在启动项目

      1. 重命名文件，如果直接`docker compose up -d`的话会默认读取所在目录下的`docker-compose.yml`进行创建

      2. 检查语法（可选）

         1. ```bash
            docker compose config  #把变量全部展开后打印，有错会报错，当且仅当compose文件名字为docker-compose.yml时直接使用
            ```

            

            ```bash
            docker compose -f docker-compose.yml config          # 自定义compose名字之后，自行修改docker-compose.yml的名字
            ```

      3. 启动

         1. ```bash
            docker compose up -d           # -d = 后台运行；不加 -d 会挂在前台
            ```

            首次会自动拉镜像、建网络、起容器，终端显示：

            ```bash
            [+] Running 3/3
             ✔ Network myproj_default   Created
             ✔ Container myproj-web-1   Started
             ✔ Container myproj-redis-1 Started
            ```

         2. 若自定义过文件名则，下文需自定义文件名的便不再赘述

            1. ```bash
               docker compose -f prod.yml up -d
               ```

      4. 使用命令创建Docker（不推荐，仅部署一次的项目上使用；以frps为例）

         1. ```bash
            docker run -d --name frps --hostname frps \
              --network bridge \                 # 如用 host 模式就换成 --network host
              --restart always \
              -p 7000:7000 -p 7500:7500 -p 80:8080 -p 443:8443 \
              -v /data/frps.toml:/etc/frp/frps.toml:ro \
              -v /data/ssl:/etc/frp/ssl \
              snowdreamtech/frps:latest
            ```

         2. 说明：

            - `-p 宿主机:容器` 就是 compose 里的 `ports:`
            - `-v` 就是 `volumes:`
            - `-e` / `--env-file` 就是 `environment:` / `env_file:`
            - `--restart` 对应 `restart:`
            - `--network` 对应 `networks:`
            - `-l` 就是 `labels:`

         3. 常用后续命令

            1. ```bash
               docker logs -f frps
               docker stop frps #停止镜像
               docker rm frps #删除镜像
               docker image prune -f        # 清理无用镜像
               ```

               

5. 常用命令

   1. | 任务                  | 命令                                          |
      | --------------------- | --------------------------------------------- |
      | 看实时日志            | `docker compose logs -f`                      |
      | 停compose容器         | `docker compose stop `                        |
      | 停/删compose容器+网络 | `docker compose down`（加 `-v` 同时删具名卷） |
      | 停独立docker容器      | `docker stop xxx`                             |
      | 删独立docker容器      | `docker rm xxx`                               |
      | 重启单个服务          | `docker compose restart xxx`                  |
      | 重编镜像              | `docker compose build` 或 `up --build`        |
      | 扩容                  | `docker compose up -d --scale web=3`          |
      | 进入容器              | `docker compose exec xxx bash`                |

   2. 关于`docker compose exec xxx bash`的延伸

      1. `docker exec`：在指定容器中运行命令。
      2. `-it`：`-i` 表示交互式（保持输入流打开），`-t` 表示分配伪终端（提供终端界面）。
      3. `xxx`：容器名称（必须是正在运行的容器）。
      4. `sh`：启动 shell 程序（通常是 bash）。

---

引用链接：[安装并使用Docker和Docker Compose](https://help.aliyun.com/zh/ecs/user-guide/install-and-use-docker#8dca4cfa3dn0e)

