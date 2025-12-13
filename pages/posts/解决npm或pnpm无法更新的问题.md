---
hide: false
title: 解决pnpm或npm无法更新的问题
date: 2025-7-14
updated: 2025-8-4
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804193603686.png
tags:
  - 搞机日志
  - Linux
  - Windows
---

> #### 在我们安装node的时候，会默认安装npm和pnpm
>
> 可是它安装不是最新的，甚至是pnpm@6.x.x的版本，可是用它推荐的升级指令**<!-- more -->**
>
> ```powershell
> pnpm self-update
> ```
>
> 或
>
> ```powershell
> pnpm install -g pnpm@x.x.x
> ```
>
> 仍然无法完成更新
>
> ![PixPin_2025-07-14_21-55-34](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/web/PixPin_2025-07-14_21-55-34.png)

### 那么这个时候就要使用corepack了

> #### 1、这是个啥玩儿？
>
> - corepack是一个nodejs自带的包管理器的管理工具，主要是用来管理诸多的包管理器的。
>
> - 说到这，第一想法是不是又在，嘀咕，咋又有个轮子，让人感觉有点多余 ，上面已经先回答了，这是啥玩儿了，下面我们来说说，这到底是解决啥问题的。
>
>
> #### 2、这玩儿解决了啥问题？
>
> 主要有如下两个统一：
>
> 1. 统一维护包管理器(安装/更新)，开发者无感，不用手动维护包管理器，直接使用支持的包管理器命令即可。
> 2. 统一项目中包管理器版本，结合package.json配置，减少不必要的问题。
>
> #### 3、它均支持主流的包管理器（yarm,npm,pnpm）

- ### 安装corepack

  - ```powershell
    npm install -g corepack
    ```

-  #### 启用corepack 并管理 pnpm

  - ```powershell
    corepack enable
    corepack prepare pnpm@x.x.x --activate
    #@后面写上最新/想要的pnpm版本
    ```

- #### 验证是否成功

  - ```powershell
    pnpm -v
    ```

    ![PixPin_2025-07-14_22-02-08](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/PixPin_2025-07-14_22-02-08.png)