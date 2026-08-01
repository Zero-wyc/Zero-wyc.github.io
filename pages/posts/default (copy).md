---
hide: true # true 真隐藏 index 主页隐藏 false 不隐藏
title: WSL2/Linux一些快捷命令和短教程
date: 2026-3-15
updated: 2026-3-15
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804193109903.jpg
tags:
  - 搞机日志
  - Daily life
  - WEB
  - 甘城なつき/Nachoneko
  - Valaxy
  - 软件推荐
  - 美化
  - Linux
  - 经验
  - Steam
  - Game 
  - 硬件
  - Root
---

> 

<!-- more -->

---

- ### **Ubuntu 24.04 及更新版本**更换成阿里云源

  - 查看当前源文件

  ```bash
  cat /etc/apt/sources.list.d/ubuntu.sources
  ```

  - 备份原文件

  ```bash
  sudo cp /etc/apt/sources.list.d/ubuntu.sources /etc/apt/sources.list.d/ubuntu.sources.bak
  ```

  - 替换为阿里云源

  ```bash
  sudo sed -i 's/[^/]*\.ubuntu\.com/mirrors.aliyun.com/g' /etc/apt/sources.list.d/ubuntu.sources
  ```

  - 更新缓存

  ```bash
  sudo apt update
  ```
- ### 强制结束进程

  - ```
    sudo kill -9 进程号
    例：sudo kill -9 88176
    ```

- ### **配置所有尚未配置完成的软件包**以解决包安装到一半未完成的问题

  - ```
    dpkg --configure -a
    ```

- ### ranger怎么进入选中的文件夹

  - shift+s

- ### 创建文件夹

  ```bash
  mkdir 文件夹名
  ```

  #### **常用参数：**

  | 参数 | 作用                               | 示例             |
  | :--- | :--------------------------------- | :--------------- |
  | `-p` | 递归创建（父目录不存在也一起创建） | `mkdir -p a/b/c` |
  | `-v` | 显示创建过程                       | `mkdir -v test`  |

  **示例：**

  ```bash
  mkdir myfolder              # 创建单个文件夹
  mkdir -p project/src/lib    # 递归创建多层目录
  mkdir folder1 folder2       # 同时创建多个文件夹
  ```
- ShellClash一键安装脚本

  - ```
    export url='https://testingcf.jsdelivr.net/gh/juewuy/ShellCrash@master' \
      && wget -q --no-check-certificate -O /tmp/install.sh $url/install.sh \
      && bash /tmp/install.sh \
      && . /etc/profile &> /dev/null
    ```

- ### 让wsl2使用主机网络（可在windows下代理开启Tun模式使wsl2使用代理）

  - 前往用户目录C:\Users\用户名\

  - 修改用户目录下的.wslconfig

  - ```.wslconfig
    [wsl2]
    nestedVirtualization=true
    ipv6=true
    [experimental]
    autoMemoryReclaim=gradual # gradual | dropcache | disabled
    networkingMode=mirrored
    dnsTunneling=true
    firewall=true
    autoProxy=true
    ```

- Git使用方法

  - ## 一、从远程拉取最新代码

    ### 1. `git pull`（拉取并合并）

    ```bash
    git pull origin main
    ```

    - 自动 `fetch` 远程更新 + `merge` 到当前分支
    - 如果本地有未提交的修改，可能会冲突，需先处理

    ### 2. `git fetch`（仅下载，不合并）

    ```bash
    git fetch origin
    ```

    - 安全地查看远程有什么更新，不影响当前工作
    - 之后可以手动 `git merge origin/main` 或 `git rebase origin/main`

    ------

    ## 二、将本地代码同步到远程

    ### 1. 基础推送

    ```bash
    git push origin main
    ```

    ### 2. 首次推送新分支

    ```bash
    git push -u origin feature-x
    # 之后可直接用 git push / git pull
    ```

    ------

    ## 三、日常完整同步流程

    ```bash
    # 1. 查看状态
    git status
    
    # 2. 拉取远程最新代码
    git pull origin main
    
    # 3. 编辑代码后，添加到暂存区
    git add .
    
    # 4. 提交到本地仓库
    git commit -m "描述你的修改"
    
    # 5. 推送到远程
    git push origin main
    ```

    ------

    ## 四、常用场景

    | 场景                     | 命令                                            |
    | ------------------------ | ----------------------------------------------- |
    | 克隆新仓库               | `git clone https://github.com/user/repo.git`    |
    | 查看远程地址             | `git remote -v`                                 |
    | 查看分支                 | `git branch -a`                                 |
    | 切换分支                 | `git checkout dev` 或 `git switch dev`          |
    | 强制同步远程（覆盖本地） | `git reset --hard origin/main` ⚠️ 会丢失本地修改 |

    ------

    ## 五、避免冲突的好习惯

    1. **先 pull 再 push** — 推送前先拉取合并远程最新代码
    2. **频繁提交** — 小步快跑，减少冲突概率
    3. **有冲突时** — Git 会标记冲突文件，手动解决后 `add` + `commit` 即可

- ### 安装NVM

  - [前往GITHUB](https://github.com/nvm-sh/nvm#installing-and-updating)

- ### Chmod常用命令

  - | 命令             | 说明                         |
    | ---------------- | ---------------------------- |
    | `chmod +x file`  | 给文件添加执行权限           |
    | `chmod 755 file` | 所有者读写执行，其他人读执行 |
    | `ls -l file`     | 查看文件权限                 |

  - 

  - | 命令                  | 效果                                   |
    | --------------------- | -------------------------------------- |
    | `chmod -R 755 文件夹` | 所有者读写执行，其他人读执行（最常用） |
    | `chmod -R 777 文件夹` | 所有人读写执行（**不安全，慎用**）     |
    | `chmod -R +x 文件夹`  | 仅添加执行权限，不改变读写权限         |
    | `chmod -R u+x 文件夹` | 仅给**所有者**添加执行权限             |
  
- ### 更换默认Shell（fish为例）

  - #### Linux

    #### 通用方法

    ```bash
    chsh -s $(which fish)
    ```

    输入密码后，**重新登录**生效。

    #### Ubuntu/Debian

    ```bash
    sudo usermod -s /usr/bin/fish $USER
    ```

    #### Arch Linux

    ```bash
    chsh -s /usr/bin/fish
    ```

    ------

    #### 验证是否生效

    ```bash
    echo $SHELL
    ```

    输出应包含 `fish`。

- ### 设置默认登录账户

---



引用链接：