---
hide: false
title: 如何让想要的软件在开机的时候自动启动 - Start Up
date: 2025-7-14
updated: 2025-8-4
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804193720965.png
tags:
  - 搞机日志
  - Windows
---

Win键＋r

输入：

```toml
shell:startup
```

<!-- more -->

#### 或

```toml
%programdata%\Microsoft\Windows\Start Menu\Programs\Startup
```

#### 再将自启软件的快捷方式放入里面即可

---

#### 如果想要查看是否生效，前往任务管理器的启动应用页面查看是否有你想要的软件