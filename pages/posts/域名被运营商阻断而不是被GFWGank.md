---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: 域名被运营商阻断而不是被GFWGank了？腾讯还是很有力量的
date: 2025-11-2
updated: 2025-11-2
categories: 搞机日志
cover: https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251101235237271.webp
tags:
  - 搞机日志
  - Daily life
  - WEB
  - 经验
---

> 事情是这样的，我趁着腾讯云年终特惠购买了一台日本的服务器
>
> 刚好去年买的美国服务器也到期了
>
> 但是当我绑定上域名的时候却被阻断，IP地址却可以直接访问<!-- more -->

![image-20251101235231254](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251101235237271.webp)

> 这个被阻断的特征很显然是被GWF阻断的特征
>
> 我第一时间查询了并诊断域名状态是否正常，结果是完全正常，绑定到国内服务器就没事，工信部查询也是完全正常
>
> 最猎奇的来了
>
> 当我把网站给我朋友(电信宽带)却可以正常访问
>
> 这让我不禁起疑，于是我关掉了WIFI，开流量结果能正常访问
>
> 前往全国ping和全球ping的站点，均显示正常
>
> 起初，连ping都无法ping到
>
> 我以为是家里刚换的路由器的DNS配置有问题
>
> 所以我更换了DNS

![image-20251102005707600](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251102005707773.webp)

> 结果是ping能ping到，但是奇怪的是用域名仍然无法访问
>
> 这令我百思不得其解
>
> 遂找腾讯云客服，以为是东京机房的线路问题
>
> 也寻思可能是我将域名挂在Cloudflare做解析的原因
>
> 便将域名迁移至腾讯云DNSPOD做解析（迁移没害死我，因为腾讯云解析的TTL太长了）
>
> 但是迁移完还是没办法访问，且阻断症状完全一致
>
> 便开始怀疑是不是移动宽带的问题
>
> 我重启了光猫和路由器
>
> 甚至重置了路由器结果还是一样
>
> 我让我朋友(移动宽带)测试，也是没法访问
>
> 便确定99%是移动宽带疑似私自阻断了我这个域名的对外解析
>
> 但是我又无可奈何
>
> 因为我有没有那么大的能力能联系到有关的移动人员
>
> 在这里就不得不感谢腾讯云了
>
> 经过和客服的2周的沟通
>
> 他们真的有在干实事，虽然一开始认为问题出在我的设备
>
> 但在确认过后和运营商对接了
>
> 将我的域名从封堵列表移出了，真是帮了大忙

![PixPin_2025-11-01_23-28-45](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251102003644294.webp)

---

1. ![PixPin_2025-11-01_23-14-23](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251102003703453.webp)
2. ![PixPin_2025-11-01_23-17-47](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251102003712580.webp)

