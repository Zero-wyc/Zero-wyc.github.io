---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: 将 WSL2 默认登录账号设置为 Root
date: 2026-8-2
updated: 2026-8-2
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260803231001249.webp
tags:
  - 搞机日志
  - 经验
  - Linux
---

# 将 WSL2 默认登录账号设置为 Root 教程

## 适用环境

- 操作系统：Windows 10/11
- 已安装 WSL2 及至少一个 Linux 发行版（如 Ubuntu）

---

## 第一步：查看已安装的 WSL 发行版

打开 **PowerShell**，输入以下命令：

```powershell
wsl -l -v
```

输出示例：

```text
  NAME              STATE           VERSION
* Ubuntu-24.04      Running         2
```

> 带有 `*` 号的表示当前默认发行版。记住这个名称，后续命令中会用到。

---

## 第二步：查看当前 WSL 配置文件

WSL 的配置文件位于 Linux 内部的 `/etc/wsl.conf`。查看当前内容：

```powershell
wsl -d Ubuntu-24.04 -- cat /etc/wsl.conf
```

> 如果文件不存在或为空，说明还没有进行过自定义配置，这是正常的。
>
> 如果已有内容，例如：
> ```ini
> [boot]
> systemd=true
> ```
> 则需要在后面 **追加** 配置，不要覆盖原有内容。

---

## 第三步：修改配置文件，设置默认用户为 root

### 方法 A：直接写入（推荐）

以 root 身份写入 `/etc/wsl.conf`：

```powershell
wsl -d Ubuntu-24.04 --user root -- bash -c 'cat > /etc/wsl.conf << "EOF"
[boot]
systemd=true

[user]
default=root
EOF'
```

> **注意**：如果你原有的 `/etc/wsl.conf` 中还有其他配置段（如 `[network]`、`[interop]` 等），请将它们一并写入，不要遗漏。也可以用方法 B 手动编辑。

### 方法 B：手动编辑

进入 WSL 后用编辑器修改：

```powershell
# 以 root 身份进入 WSL
wsl -d Ubuntu-24.04 --user root
```

```bash
# 在 WSL 内部执行
nano /etc/wsl.conf
```

在文件中添加（或修改）以下内容：

```ini
[user]
default=root
```

保存退出（nano 中按 `Ctrl+O` 保存，`Ctrl+X` 退出）。

### 配置文件说明

`/etc/wsl.conf` 的关键配置段：

| 配置段        | 作用                        |
| ------------- | -------------------------- |
| `[boot]`      | 启动相关设置（如 systemd） |
| `[user]`      | **默认登录用户**            |
| `[network]`   | 网络相关设置                |
| `[interop]`   | Windows/Linux 互操作设置    |

> `[user]` 段的 `default` 值就是要设置的默认登录用户名，改为 `root` 即可。

---

## 第四步：重启 WSL 使配置生效

修改配置文件后，必须 **终止并重新启动** WSL 才能生效：

```powershell
wsl --terminate Ubuntu-24.04
```

等待几秒后重新启动：

```powershell
wsl -d Ubuntu-24.04
```

---

## 第五步：验证是否生效

进入 WSL 后执行：

```bash
whoami
```

如果输出为 `root`，则说明设置成功 ✅

```bash
root
```

---

## 如何改回普通用户

如果以后想恢复为普通用户登录，只需将 `/etc/wsl.conf` 中的 `default` 值改回你的用户名即可：

```ini
[user]
default=你的用户名
```

例如：

```ini
[user]
default=wyc
```

然后同样执行 `wsl --terminate Ubuntu-24.04` 重启生效。

---

## ⚠️ 注意事项

1. **安全风险**：以 root 作为默认用户，所有操作都拥有最高权限，误操作可能直接损坏系统。日常使用请谨慎。
2. **不要覆盖已有配置**：修改 `/etc/wsl.conf` 时，在原有内容基础上追加，不要丢失其他配置段。
3. **配置文件位置**：`/etc/wsl.conf` 位于 Linux 文件系统内部，不是 Windows 的 `.wslconfig`（后者位于 Windows 用户目录，用于全局 WSL2 设置）。
4. **每次修改都要重启**：`/etc/wsl.conf` 的变更不会自动生效，必须执行 `wsl --terminate` 后重新进入。

---

## 快速一键脚本

如果你想一步到位，复制以下命令到 PowerShell 执行（将 `Ubuntu-24.04` 替换为你的发行版名称）：

```powershell
# 1. 写入配置
wsl -d Ubuntu-24.04 --user root -- bash -c 'cat > /etc/wsl.conf << "EOF"
[boot]
systemd=true

[user]
default=root
EOF'

# 2. 重启 WSL
wsl --terminate Ubuntu-24.04

# 3. 验证
wsl -d Ubuntu-24.04 -- whoami
```

---

> WRITE WRITE BY GLM5.2 经过自己测试
