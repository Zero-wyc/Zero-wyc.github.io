---
hide: false
title: Hack BGRT 更改Windows开机动画 - 甘城なつき主题
date: 2025-8-4
updated: 2025-8-4
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804190038965.gif
tags:
  - 搞机日志
  - 美化
  - 甘城なつき/Nachoneko
---

> Hack BGRT 在2.0版本之后支持了安全启动（secure boot），而近期战地2042乃至将发售的战地6都必须强制开起安全启动来反外挂~~明面上~~，解决了开启了安全启动无法使用Hack BGRT的问题，

<!-- more -->

#### 软件链接：[Github HackBGRT](https://github.com/Metabolix/HackBGRT/releases)

> ### 确认是否开启安全启动

1. 打开系统配置
   - ![image-20250804143627940](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804143628061.png)
2. 查看是否开启
   - ![image-20250804143716216](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804143716290.png)

> ### 通用教程,即不开启安全启动的情况下

1. 下载软件并解压
2. 寻找自己想要的开机画面
3. 使用“照片”打开要替换的开机画面，另存为BMP格式
   - ![image-20250804144537832](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804144537912.png)
4. 将变为BMP的文件重命名为splash.bmp
5. 拖入解压后的HackBGRT文件夹替换其中的splash.bmp
6. 双击HackBGRT文件夹内的setup.exe
7. 阅读cmd窗口中每个选项的意思，建议使用第一个即可，选此选项会创建一个HackBGRT引导
   - ![image-20250804145041775](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804145041918.png)
8. 按下 I 键，会弹出画图，此为确认图片程序，关掉即可
9. 接下来弹出cmd窗口，等待加载完成，弹出Press any key to quit.即可按下任意键退出
10. 重启查看是否生效

> ### 开启安全启动Secure Boot的情况下

前面所有步骤一致，区别只是在重启后的操作

==记住HackBGRT软件的文件夹路径和所在的磁盘名字==

1. 前面的操作完成重启后不出意外会弹出这个窗口

   - ![image-20250804145609213](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804145609297.png)

2. 选Ok并按下任意键进入这个界面

   - ![](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804145645571.png)

3. 选择Enroll Key from disk弹出如下界面

   - ![image-20250804145801494](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804145801572.png)

4. 现在会出现电脑上所有的分区，进入分区，找到HackBGRT文件夹所在分区和目录

5. 选择certificate.ccr并导入秘钥

   - ![](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804150017796.png)

     

6. 选择continue

   - ![image-20250804150207896](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804150207964.png)

7. 选择Yes

   - ![image-20250804150233482](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804150233550.png)

8. 选择reboot重启

   - ![image-20250804150255455](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804150255525.png)

9. 重启后应该就能看到生效啦

> ### PS:关于不生效和如何去掉Windows开机时的加载小圈圈

- #### 不生效：

  - 开机按Delete进入Bios界面
  - 前往引导（Boot）选项
  - 查看是否带有HackBGRT的引导为第一选项
  - ![image-20250804150713540](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804150713680.png)
  - 若还不生效或没有这个选项，前往系统打开HackBGRT将这俩个选项都尝试下
    - ![image-20250804150842930](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804150843075.png)

- #### 关于如何关闭Windows开机加载时的小圆圈

  - ![image-20250804150950206](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804150950323.png)
  - 前往系统配置
    - ![](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804151035484.png)
  - 在引导选项卡下，选中无GUI引导并引用
    - ![image-20250804151114642](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804151114709.png)
    - 这样在开机的时候就不会有加载圆圈啦