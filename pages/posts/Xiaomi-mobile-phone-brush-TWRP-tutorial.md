---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: 小米手机刷TWRP教程
date: 2026-8-28
updated: 2026-8-28
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260828003956499.webp
tags:
  - 搞机日志
  - 经验
  - Root
---

# 小米手机刷TWRP教程（高通骁龙处理器专用）

> ⚠️ **重要警告**
> 
> 如果你是**天玑处理器**，那不用浪费时间了。不用往下看，关闭这个帖子。
> 
> **天玑1100 / 天玑1200 / 天玑8100 / 天玑8200 / 天玑9000** 不要刷，这会损坏手机。

---

## 刷TWRP指令分类

> ✅ **刷TWRP仅限高通骁龙处理器**
> 
> ❌ **绝对不要给联发科天玑刷TWRP，可能会导致手机损坏。**

### 第一类：骁龙865 或更低的老古董手机

**3条命令**

```bash
fastboot flash misc misc.bin
fastboot flash recovery twrp.img
fastboot reboot recovery
```

### 第二类：骁龙870 / 888 / 888Plus
**临时启动，仅1条命令**

```bash
fastboot boot twrp.img
```

> 💡 是一行代码，是临时启动的，是一次性的TWRP，重启就没了。你想固化，要点击「刷入当前TWRP」。

### 第三类：骁龙8E5 / 8E /8 Gen1 / 8G2 / 8G3 / 8+G1 / 8PlusG1 / 7+G2 等（最新2年内的手机基本都是这个）

**3条命令**

```bash
fastboot flash recovery_a twrp.img
fastboot flash recovery_b twrp.img
fastboot reboot recovery
```

> 💡 rec分区有A和B，都是三行代码

---

## 机型对照表

| 代号 | 手机型号 | 分区 | CPU | 出厂 | 刷TWRP的指令 |
|------|---------|------|-----|------|-------------|
| **比小米10更古老的手机，都照这里一样。** | | | | | `fastboot flash misc misc.bin`<br/>`fastboot flash recovery twrp.img`<br/>`fastboot reboot recovery` |
| |  | | | | |
| umi | 小米10 | only A | 骁龙865 | Android 10 | `fastboot flash misc misc.bin`<br>`fastboot flash recovery twrp.img`<br>`fastboot reboot recovery`<br/>例如：小米9 / 小米8 / 小米6 / K20Pro 等老古董都一样 |
| cmi | 小米10 Pro | only A | 骁龙865 | Android 10 | 同上 |
| cas | 小米10 Ultra | only A | 骁龙865 | Android 10 | 同上 |
| lmi | K30 Pro / 变焦 | only A | 骁龙865 | Android 10 | 同上 |
| apollo | K30S Ultra | only A | 骁龙865 | Android 10 | 同上 |
|  |  |  |  |  |  |
| thyme | 小米10S | V AB | 骁龙870 | Android 11 | `fastboot boot twrp.img` |
| psyche | 小米12x | V AB | 骁龙870 | Android 11 | 同上 |
| alioth | K40 | V AB | 骁龙870 | Android 11 | 同上 |
| munch | K40S | V AB | 骁龙870 | Android 12 | 同上 |
| venus | 小米11 | V AB | 骁龙888 | Android 11 | 同上 |
| star | 小米11 Pro / Ultra | V AB | 骁龙888 | Android 11 | 同上 |
| vili | 小米11T Pro | V AB | 骁龙888 | Android 11 | 同上 |
| haydn | K40 Pro + | V AB | 骁龙888 | Android 11 | 同上 |
| odin | 小米MIX 4 | V AB | 骁龙888 Plus | Android 11 | 同上 |
|  |  |  |  |  |  |
| cupid | 小米12 | V AB | 骁龙8 Gen1 | Android 12 | `fastboot flash recovery_a twrp.img`<br>`fastboot flash recovery_b twrp.img`<br>`fastboot reboot recovery` |
| zeus | 小米12 Pro | V AB | 骁龙8 Gen1 | Android 12 | 同上 |
| ingres | K50G 电竞版 | V AB | 骁龙8 Gen1 | Android 12 | 同上 |
| mayfly | 小米12S | V AB | 骁龙8+ Gen1 | Android 12 | 同上 |
| unicorn | 小米12S Pro | V AB | 骁龙8+ Gen1 | Android 12 | 同上 |
| thor | 小米12S Ultra | V AB | 骁龙8+ Gen1 | Android 12 | 同上 |
| mondrian | K60 | V AB | 骁龙8+ Gen1 | Android 13 | 同上 |
| diting | K50 Ultra | V AB | 骁龙8Plus Gen1 | Android 12 | 同上 |
| socrates | K60 Pro / 冠军 | V AB | 骁龙8 Gen2 | Android 13 | 同上 |
| fuxi | 小米13 | V AB | 骁龙8 Gen2 | Android 13 | 同上 |
| nuwa | 小米13 Pro | V AB | 骁龙8 Gen2 | Android 13 | 同上 |
| ishtar | 小米13 Ultra | V AB | 骁龙8 Gen2 | Android 13 | 同上 |
| marble | Note12 Turbo | V AB | 骁龙7+ Gen2 | Android 13 | 同上 |
| houji | 小米14 | V AB | 骁龙8 Gen3 | Android 14 | 同上 |
| shennong | 小米14 Pro | V AB | 骁龙8 Gen3 | Android 14 | 同上 |
| aurora | 小米14 Ultra | V AB | 骁龙8 Gen3 | Android 14 | 同上 |

> 💡 **只有一个rec分区** 的机型使用第一类命令
> 
> 💡 **Rec并入boot分区** 的机型（骁龙870/888系列）使用第二类命令，临时启动
> 
> 💡 **rec分区有A和B** 的机型使用第三类命令

---

> ⚠️ **再次提醒**
> 
> 天玑1100 / 天玑1200 / 天玑8100 / 天玑8200 / 天玑9000 ...... 不要刷，这会损坏手机。

---

参考：[叶子Jinn](https://www.yuque.com/yezijinn/hrdmtm/mnps7dph2sc24e6u?singleDoc#)

