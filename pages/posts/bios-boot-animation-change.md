---
hide: false
title: 主板BIOS开机动画更改 - 技嘉为例 - 甘城なつき主题
date: 2025-8-4
updated: 2025-8-5
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804130456586.gif
tags:
  - 搞机日志
  - 美化
  - 甘城なつき/Nachoneko
  - Windows美化
  - 硬件
---

> 这次BIOS开机动画以及GRUB2和Windows启动动画自定义联动是我很久以前就想做的，但一直卡在BIOS上，
>
> ~~在手过4.5张主板且是碧海蓝天的原版BIOS之后也是过上好日子了~~<!-- more -->
>
> 一般的主板用里面的changelogo更改就可以了，但是我这个技嘉B550M有点不同，ChangeLogo只能识别第一张LOGO图片，但是主板调用的是第二个LOGO，导致我第一次更改LOGO并刷入许多次，仍不行的时候几尽发狂

> ### 演示

![](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804130456586.gif)

> #### BIOS GRUB HackBGRT 三联动版

![PixPin_2025-08-04_13-17-08](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804131738610.gif)

> ### BIOS 开机动画更改教程

工具链接：[通用主板BIOS开机logo修改工具](https://pan.quark.cn/s/2d2b9b996a08)（网盘链接里附带我编辑的Nachoneko Bios启动画面~~）

> #### 通用主板教程

1. 打开Change Logo 软件
2. 选择加载BIOS(Load Image 按钮)
3. 弹出的文件选择框中文件类型选择全部(ALL Files)(因为现在的主板BIOS的扩展名都很奇怪)
4. 打开镜像

![image-20250804133202104](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804133202216.png)

5. 选择第一个LOGO，并点击Save Logo选择一个位置保存原版Bios开机动画

![PixPin_2025-08-04_13-35-06](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804133642566.png)

6. 查看原主板Bios的扩展名和分辨率（替换的图片要求扩展名，大小，分辨率尽可能一致，不然会导致不开机丢图片的情况发生）

   - 关于如何处理图片看最底下

7. 点击Browse选择要替换的图片，点Replace Logo 替换Logo，点 Save Image As保存修改后的Bios

   ![image-20250804135527533](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804135527591.png)

8. 将处理好的Bios，烤录至==FAT32格式==的U盘中，开机按Delete键进入Bios校验无误后刷入

   ![PixPin_2025-08-04_14-00-06](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804140121835.gif)

9. 开机即可看到图标啦~~

> #### 上面的方法无效 / 像我一样的技嘉主板

1. 打开文件夹中的 UEFITool_CN_x64

   - PS不要用Github上面的最新版本，最新版本不知道为什么搜索不到Logo

2. 将需改Bios拖入

   1. Ctrl + F 打开查找
   2. 选择GUID
   3. 输入`7BB28B99-61BB-11D5-9A5D-0090273FC14D`
   4. 选择查找范围为对象

   ![](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804140846305.png)

3. 能看到我这里出现了6个结果但实际上只有俩个是图片

   1. 将每个结果都点过去

   2. 找到搜索结果是可以展开的，比如这样

      ![image-20250804141333312](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804141333389.png)

   3. 展开结果，找到标记为RAW区段的文件（我这里6个选项中有2个是RAW图片）
      	![PixPin_2025-08-04_14-11-39](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804141208765.gif)
   
   4. 选择提取主体查看是否为主板Bios
   
      ![image-20250804141646370](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804141646454.png)
   
   5. 确认是Bios Logo后，选择替换主体，选择要替换的图片，建议将所有是原主板Bios的Logo都替换确保替换成功
   
      ![image-20250804141739418](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804141739504.png)
   
   6. 保存Bios文件
   
      ![image-20250804141947258](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804141947333.png)
   
   7. 将处理好的Bios，烤录至FAT32格式的U盘中，开机按Delete键进入Bios校验无误后刷入
   
      ![PixPin_2025-08-04_14-00-06](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804142023809.gif)

> #### 关于如何处理图片

- 比如说我这里就做到了原Bios图片和更换图片的大小和分辨率一致
- 那么是如何做到的呢？
  - 选择并编辑好图片确保分辨率一致
  - 将编辑好的图片用windows自带的画图打开
  - 另存为与主板Bios提取出的扩展名一致的格式，我这里是BMP
    - 如果是BMP的话需要选择24位位图
    - 如果是raw格式图片如果转换不了可以用JPG格式直接改扩展名也可以用
  - 也可使用文件夹内的JPEG Imager图片压缩软件进行处理（但是不建议，因为这个软件处理过后的图片有内存泄漏的风险，导致Bios不认图片，开机无图片）

![image-20250804134956033](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804134956099.png)

![image-20250804135040628](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804135040719.png)

  

![image-20250804135104040](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804135104111.png)

> Nachoneko ~~

![未标题-1](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804142732461.jpg)

![主图281](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804142902489.jpg)

![主图288](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804142909440.jpg)
