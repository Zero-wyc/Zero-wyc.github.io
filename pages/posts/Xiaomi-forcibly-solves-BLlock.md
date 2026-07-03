---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: 小米强解BL锁，适用于澎湃2,3等高版本系统（8GEN3、8SGEN3、7+GEN3）, PAD7 ,Turbo4 Pro等
date: 2026-6-28
updated: 2026-6-28
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260628171124076.webp
tags:
  - 搞机日志
  - 经验
  - 硬件
  - Root
---

> 众所周知，小米在25年下旬彻底关闭了BL的解锁通道，导致米系手机完全无法解锁BL进行刷机吗？<!-- more -->
>
> 那当然是错的，小米关闭了Bl锁解锁通道之后，到处是泄露BL 的 Bug（🤣）
>
> 一开始是8EliteGen5的补丁漏洞（俗称38解锁节），后面更是通过深挖小米系统自带的漏洞将骁龙系的CPU几乎通通变成可以解锁BL的情况了（也归功于工程机流出）、

> 我也是本以为我的小米PAD7，这样一个冷门产品在解锁通道关闭之后应该无力回天了，但事实，很显然不是这样的，在最近的5月份，小米系的8GEN3、8SGEN3、7+GEN3的手机平板相继破解，解锁了BL
>
> 虽然我也不是很知道原理是什么（）

---

- ### 事前声明

- 该方案来自于酷安[Littlenine](https://www.coolapk.com/u/20091337)，并在此基础上分别由[Kernix](https://www.coolapk.com/u/42275862)开发的脚本和[䌷文德斯](https://www.coolapk.com/u/39609724)开发的Tsumugi的解锁小工具

- 该方案很玄学，但是百分百成功，通过不停挖系统组件漏洞的方法（大概吧）进行解锁，但是这需要时间，快的几分钟，慢的几小时也成功了

- 建议开搞之前直接恢复出厂设置，不仅因为解BL锁是要清数据的，而且因为这样可以极大提升解锁速度

- 设备在澎湃2及以上

---

- ### 准备工作：

  - 去开发者选项打开OEM引导（不会开开发者的也不用解BL了）
    - ![image-20260628164440499](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260628164556973.webp)
  - 打开USB调试并连接电脑授权
    - ![image-20260628164611186](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260628164611271.webp)

---

- ### 方法1：Tsumugi的解锁小工具

  - 该工具由[䌷文德斯](https://www.coolapk.com/u/39609724)开发，建议去酷安下载最新版（https://www.coolapk.com/u/39609724）
  - 这里放上v5.1版本的网盘：https://pan.quark.cn/s/3e3188f93949

- 打开软件，点击高版本系统（Tsumugi的解锁小工具起始也支持低版本的8E，8SGen4，自己去大佬的主页看）

  - ![image-20260628164659743](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260628164659815.webp)

- 点击1开始多轮循环解锁

  - ![1782636739296](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260628165323887.webp)

- 每一轮尝试都会重启一次，不要担心，这是正常现象，重新开机后输入密码然后会自动进行新一轮的破解尝试

- 像我这样尝试了6轮才成功

  ---

  

- ### 方法二：来自Kernix的脚本：https://github.com/Linuxoid-cn/

  - ![image-20260628165834557](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260628165834755.webp)

- 自行前往Github下载对应机型的文件

- 下载完后，解压压缩包，点击文件夹内的`to unlock.bat`文件，根据`bat`的提示进行自动化操作，原理跟方法1一样，只不过每次重启后都需要再按一次回车进行再次尝试而已（遇到说什么传输不稳定，多次切换插口和线之后还是一样的情况不用管它，多试几次，总能成功）

---



- 解锁成功后系统会报废，需要重新刷入系统，建议前往https://xiaomirom.com下载对应机型的线刷包
- 同时建议使用官方的Miflash进行刷入，下载地址：https://miuiver.com/miflash/（下载的系统需要多次解压，直到出现复杂文件夹）
- 进行如下图的操作（记住一定要全部删除），最后刷入完成可能会报错，但是不要慌，因为这是正常的，重新开机耐心等待几分钟能进系统就大功告成了
  - ![image-20260628170629965](https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260628170630414.webp)