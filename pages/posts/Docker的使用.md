---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: Docker的下载安装和使用
date: 2025-12-27
updated: 2025-12-27
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804193109903.jpg
tags:
  - 搞机日志
  - Linux
---

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
         > 
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

3. ## **Docker Compose**

   > Docker Compose是“将多个容器配置、网络、挂卷、变量、依赖”写进 **docker-compose.yml** 文件，极大增加部署效率

   1. 安装Docker Compose

      1. ```bash
         sudo apt-get -y install docker-compose-plugin
         ```

         

   2. Docker Compose的编写和修改

      1. 大部分的容器作者都会给一个基础的Docker Compose文件，那么这里面的每一行配置都是什么意思呢？这里做个解释

      2. 这里以FRPS做个例子

         1. ```dockerfile
            services:
              frps: #项目名称,一个compose内可以有多个容器
                image: snowdreamtech/frps:${VERSION}     #镜像名称:版本名称(这个一般填latest就好)
                container_name: frps #容器名称(可选)
                deploy: #容器配置(可选)
                  resources:
                    limits:
                      cpus: ${CPUS} #自定义可用的CPU核心数
                      memory: ${MEMORY_LIMIT} #自定义可用的内存大小
                network_mode: bridge 
                #网络模式，bridge(默认的模式,桥接,独立分配IP
                #host(直接使用实体网络)
                #container(使用其他容器网络)
                #none(无网络))
                ports:                  # host模式下不需要这个以及下面的端口
                  - "443:8443"          # 前面的是容器内端口，后面的对外端口
                restart: always 
                #no:用不自动重启(默认模式
                #always:无论是否闪退都重启,Docker启动时也启动
                #on-failure:退出码非0才重启,可带次数如 on-failure:5 (最多重试 5 次)
                #unless-stopped:类似 always，但手动stop后不再自动重启,之后即使docker重启时也不会再启动
                volumes:
                  #容器映射的目录，如果不填写这个，在容器更新时内部数据会全部删除
                  #前面是实体机要映射的目录，后面是容器内所需映射的目录，这个容器作者一般会给，需要自定义的是前者
                  - ${APP_PATH}/data/frps.toml:/etc/frp/frps.toml
                  - ${APP_PATH}/data/ssl:/etc/frp/ssl
            ```

            

      3. 

         

   3. 

      

      

---

引用链接：[安装并使用Docker和Docker Compose](https://help.aliyun.com/zh/ecs/user-guide/install-and-use-docker#8dca4cfa3dn0e)

