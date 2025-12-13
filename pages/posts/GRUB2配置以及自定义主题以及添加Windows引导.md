---
hide: false
title: GRUB2配置以及自定义主题以及添加Windows引导 - 甘城なつき主题
date: 2025-8-4
updated: 2025-8-19
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804190850199.png
tags:
  - 搞机日志
  - Linux
  - 美化
  - 甘城なつき/Nachoneko 
---

> 建议配合视频一起食用：[简单易懂』主板BIOS开机动画图片更改，自定义你想要的角色LP吧！](https://www.bilibili.com/video/BV1xZtJzpEoq)
>
> 首先我们要拥有一个Linux系统，我这里以Ubuntu24.04 GUI版本为例，其他发行版同理<!-- more -->

> ### 安装GRUB Custommizer

1. #### 更新系统

   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. #### 添加软件源（Ubuntu 和 Linux Mint）并更新软件包列表

   ```bash
   sudo add-apt-repository ppa:danielrichter2007/grub-customizer
   ```

   ```bash
   sudo apt update
   ```

3. #### 安装 Grub Customizer

   ```bash
   sudo apt install grub-customizer -y
   ```
   

> ### GRUB2添加自定义主题

1. #### 下载GRUB主题

   - 建议前往 [GRUB Themes - Gnome-look.org](https://www.gnome-look.org/browse/cat/109/order/latest/)查找和下载主题并解压

2. #### 将主题复制到 /boot/grub/themes/ 目录下如果不存在就创建一个

3. #### 编辑位于/etc/default/grub 文件

4. #### 找到 GRUB_THEME 行将注释"#"号删除如果没有这一行就添加如下文字

   ```bash
   GRUB_THEME=/boot/grub/themes/your-theme/theme.txt
   #your-theme更改为主题文件夹名字
   GRUB_GFXMODE=1280x800
   #更改GRUB_GFXMODE更改为屏幕分辨率
   ```

5. #### 应用更改到 GRUB ，使用命令

   ```bash
   sudo update-grub
   ```

6. 重启即可查看主题是否生效

> ###  GRUB如何编辑引导顺序

1. #### 打开GRUB Custommizer

   ![image-20250804154309150](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804154309238.png)

> ### GRUB 如何添加Windows引导

1. #### 先确认EFI所在分区

   1. #### 方法一使用Ventoy查看（关于Ventoy如何安装和使用…又在挖坑了www）

      1. 进入Ventoy界面后按F2

         ![image-20250804154707063](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804154707140.png)

      2. 查找`EFI`分区，一般300MB且进入的目录里面EFI目录的就是``HD2，msdos1`实际则为`（HD2，GPT1）`（`msdos`这个文字不用管都是GPT，除非你现在还在用`MBR`格式的硬盘）

         ![image-20250804154740543](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804154740628.png)

   2. #### 使用`GRUB`查看

      1. 在GRUB引导下按ESC进入类命令行界面

         ![image-20250804155447723](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804155447801.png)

      2. 输入ls来确认EFI分区

   3. #### 使用`Diskgenius`

      1. 比如我这里ESP（即EFI）分区位于HD1的第一个分区也就是（`HD1,GPT1`）

         ![image-20250804155600494](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804155600566.png)

2. 确认硬盘UUID值

   1. #### 打开终端输入

      ```bash
      os-probe
      ```

   2. 记住返回的win系统启动文件地址 如`/dev/nvme0n1p1/EFI/Microsoft/Boot/bootmgfw.efi` 

   3. 运行命令,将会硬盘分区信息，记住有EFI标记分区的位置，如`/dev/nvme0n1p1`

      ```bash
      sudo fdisk -l
      ```

   4. #### 运行命令，记下返回的UUID值，如`44DF-51D1`
   
      ```bash
      sudo blkid /dev/nvme0n1p1
      #/dev/nvme0n1p1即为上文EFI分区的位置
      ```
   
      - #### 方法1，使用GRUB Custommizer
   
        1. 在列表配置页面添加引导项，自行定义名称，类型选择其他
   
        2. 在Boot Sequence中输入
   
           ```bash
             set root='(hd2,gpt1)'
             chainloader /EFI/Microsoft/Boot/bootmgfw.efi
             #这里的(hd2,gpt1)即为上文确认的EFI分区位置
           ```
   
           
   
           ![image-20250804165827834](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804165835035.png)
   
        3. 点击确定并保存重启查看是否有这个Windows引导条目
   
      - #### 方法2，手动添加
   
        1. 进入`/etc/grub.d/`目录，编辑`40.custom`,写入以下内容
   
           ```bash
           menuentry "Windows 11" {
             set root='(hd2,gpt1)'
             chainloader /EFI/Microsoft/Boot/bootmgfw.efi
             boot
           }
           ```
   
        2. 应用更改，然后重启查看是否生效
   
           ```bash
           sudo update-grub
           ```

> ### 如何在GRUB引导下，仍使用HackBGRT进行自定义Windows启动画面

- #### 方法一：使用GRUB Custommizer

  - 在在Boot Sequence中输入

    ```bash
      set root='(hd2,gpt1)'
      chainloader /EFI/HackBGRT/loader.eft
      #这里的(hd2,gpt1)即为上文确认的EFI分区位置
    ```

    

  - ![image-20250804171239575](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804171239724.png)

  - 确定并保存以应用更改

- #### 方法2：改文件

  - 同样的编辑`40.custom`,写入以下内容

    ```bash
    menuentry "Windows 11" {
      set root='(hd2,gpt1)'
      chainloader /EFI/HackBGRT/loader.eft
      boot
    }
    ```

    - 应用更改，然后重启查看是否生效

      ```bash
      sudo update-grub
      ```

      

> ### GRUB Custommizer和`/etc/default/grub`配置文件的等待时间无效的解决办法

- 我们在GRUB Custommizer和`/etc/default/grub`配置文件的时间配置如果无效，如下图所示，更改之后仍然是30s的等待时间的话，可按照如下解决
- ![image-20250804171859178](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804171859303.png)
- ![image-20250804171931601](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804171931682.png)

1. #### 打开`/etc/default/grub`文件

2. #### 添加如下参数

   ```cfg
   GRUB_RECORDFAIL_TIMEOUT = "**"
   #此处的**为自己想要的时间
   ```

   ![image-20250804172342063](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804172342140.png)

3. #### 应用更改，然后重启查看是否生效

   ```bash
   sudo update-grub
   ```

> ### 附上我自己做的甘城GRUB主题（不慎完善，请见勿谅）
>
> [主题链接](https://pan.quark.cn/s/102e7bbf4a94)

![background](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804172733930.png)

