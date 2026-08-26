---
title: 如何快速安装jdk/java与快速切换版本
date: 2026-8-27
updated: 2026-8-27
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20260827010624060.webp
tags:
  - 搞机日志
  - linux
---

> 本文介绍 Linux 环境下两种主流 JDK 版本管理工具的安装与使用方法。

---

## 一、SDKMAN!（推荐）

**SDKMAN!** 是一个跨平台的 SDK 管理工具，支持 Java、Gradle、Maven、Kotlin 等 JVM 生态工具。它能自动下载、安装、切换 JDK 版本，是最省心的方案。

### 1.1 安装

```bash
# 一键安装
curl -s "https://get.sdkman.io" | bash

# 使环境变量生效
source "$HOME/.sdkman/bin/sdkman-init.sh"

# 验证安装
sdk version
```

> 安装完成后，`sdk` 命令会自动加入你的 shell 配置（`.bashrc` / `.zshrc`），新开终端即可直接使用。

### 1.2 查看可用版本

```bash
# 列出所有可用的 Java 发行版
sdk list java
```

输出示例：

```
================================================================================
Available Java Versions for Linux 64bit
================================================================================
 Vendor        | Use | Version      | Dist    | Status     | Identifier
--------------------------------------------------------------------------------
 Temurin       |     | 21.0.5       | tem     | installed  | 21.0.5-tem
               |     | 17.0.13      | tem     |            | 17.0.13-tem
               |     | 11.0.25      | tem     |            | 11.0.25-tem
               |     | 8.0.432      | tem     |            | 8.0.432-tem
 GraalVM       |     | 21.0.2       | graalce |            | 21.0.2-graalce
 Amazon        |     | 21.0.5       | amzn    |            | 21.0.5-amzn
 Azul Zulu     |     | 21.0.5       | zulu    |            | 21.0.5-zulu
================================================================================
```

**发行版标识说明：**

| 标识 | 发行版 | 说明 |
|------|--------|------|
| `tem` | Eclipse Temurin | Adoptium 开源项目，最常用 |
| `amzn` | Amazon Corretto | AWS 维护，长期支持 |
| `graalce` / `grl` | GraalVM | Oracle 高性能 JVM，支持原生镜像 |
| `zulu` | Azul Zulu | 商业支持完善的发行版 |
| `librca` | Liberica | BellSoft 发行版 |

### 1.3 安装 JDK

```bash
# 安装 最新的JDK (Temurin)
sdk install java 
# 安装 JDK 21 (Temurin)
sdk install java 21.0.5-tem
# 安装 JDK 8 (Temurin)
sdk install java 8.0.432-tem
# 安装 GraalVM (用于 Native Image)
sdk install java 21.0.2-graalce
```

> 安装时会自动设置 `JAVA_HOME` 和 `PATH`，无需手动配置。

### 1.4 切换版本

```bash
# 查看已安装的版本
sdk list java | grep installed
# 临时切换（当前 shell 会话）
sdk use java 21.0.5-tem
# 设置全局默认版本
sdk default java 17.0.13-tem
# 验证当前版本
java -version
```

### 1.5 项目级版本锁定

类似 Node.js 的 `.nvmrc`，SDKMAN! 支持通过 `.sdkmanrc` 文件锁定项目 JDK 版本。

```bash
# 进入项目目录
cd /path/to/your-project

# 初始化项目配置文件（生成 .sdkmanrc）
sdk env init

# 编辑 .sdkmanrc，内容如下：
# java=21.0.5-tem
# maven=3.9.6
# gradle=8.5

# 根据 .sdkmanrc 切换到指定版本
sdk env

# 恢复全局默认版本
sdk env clear
```

### 1.6 常用命令速查

| 命令 | 作用 |
|------|------|
| `sdk version` | 查看 SDKMAN! 版本 |
| `sdk update` | 更新候选列表 |
| `sdk list` | 列出所有可管理的 SDK |
| `sdk list java` | 列出所有 Java 版本 |
| `sdk install java <version>` | 安装指定 JDK |
| `sdk uninstall java <version>` | 卸载指定 JDK |
| `sdk use java <version>` | 临时切换版本 |
| `sdk default java <version>` | 设置全局默认 |
| `sdk current` | 查看当前使用的所有 SDK |
| `sdk current java` | 查看当前 Java 版本 |
| `sdk env init` | 初始化项目配置 |
| `sdk env` | 按 .sdkmanrc 切换 |
| `sdk env clear` | 恢复全局默认 |
| `sdk flush archives` | 清理下载的压缩包缓存 |
| `sdk flush temp` | 清理临时文件 |

---

## 二、jEnv（轻量切换器）

**jEnv** 是一个纯版本切换工具，**不负责下载 JDK**。适合已经通过包管理器（apt/yum/dnf）安装好 JDK，只想快速切换的场景。

### 2.1 安装

```bash
# 方式一：通过 Git 克隆安装
git clone https://github.com/jenv/jenv.git ~/.jenv

# 方式二：通过包管理器安装（部分发行版支持）
# macOS: brew install jenv
# Arch: yay -S jenv

# 配置环境变量（根据你的 shell 选择）
# Bash 用户
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(jenv init -)"' >> ~/.bashrc

# Zsh 用户
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc

# 使配置生效
source ~/.bashrc  # 或 source ~/.zshrc

# 验证安装
jenv version
```

### 2.2 添加已安装的 JDK

jEnv 本身不下载 JDK，你需要先通过系统包管理器安装 JDK：

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-21-jdk openjdk-17-jdk openjdk-11-jdk

# CentOS/RHEL/Fedora
sudo dnf install java-21-openjdk-devel java-17-openjdk-devel

# Arch Linux
sudo pacman -S jdk21-openjdk jdk17-openjdk jdk11-openjdk
```

然后找到 JDK 安装路径并添加到 jEnv：

```bash
# 查找 JDK 安装路径
find /usr -name "javac" 2>/dev/null
# 或
ls /usr/lib/jvm/

# 添加 JDK 到 jEnv
jenv add /usr/lib/jvm/java-21-openjdk-amd64
jenv add /usr/lib/jvm/java-17-openjdk-amd64
jenv add /usr/lib/jvm/java-11-openjdk-amd64
jenv add /usr/lib/jvm/java-8-openjdk-amd64

# 查看已添加的版本
jenv versions
```

输出示例：

```
* system (set by /home/user/.jenv/version)
  21
  21.0
  21.0.5
  17
  17.0
  17.0.13
  11
  11.0
  11.0.25
  1.8
  1.8.0.432
  openjdk64-21.0.5
  openjdk64-17.0.13
  openjdk64-11.0.25
```

### 2.3 切换版本

```bash
# 查看所有可用版本
jenv versions

# 设置全局默认版本
jenv global 21

# 设置项目级版本（在当前目录生成 .java-version）
jenv local 17

# 设置当前 shell 会话版本
jenv shell 11

# 验证当前版本
java -version
```

### 2.4 项目级版本锁定

jEnv 通过 `.java-version` 文件实现项目级版本锁定：

```bash
# 进入项目目录
cd /path/to/your-project

# 设置项目版本（生成 .java-version 文件）
jenv local 21

# 查看 .java-version 内容
cat .java-version
# 输出: 21

# 将 .java-version 加入版本控制
git add .java-version
git commit -m "chore: lock JDK version to 21"
```

**自动切换配置：** 在 `.bashrc` / `.zshrc` 中添加：

```bash
# 进入目录时自动切换 JDK 版本
export JENV_ROOT="$HOME/.jenv"
eval "$(jenv init -)"
```

jEnv 原生支持根据 `.java-version` 自动切换，无需额外配置。

### 2.5 常用命令速查

| 命令 | 作用 |
|------|------|
| `jenv version` | 查看当前 Java 版本 |
| `jenv versions` | 列出所有已添加的 JDK |
| `jenv add <path>` | 添加 JDK 路径 |
| `jenv remove <version>` | 移除指定版本 |
| `jenv global <version>` | 设置全局默认 |
| `jenv local <version>` | 设置项目级版本（生成 .java-version） |
| `jenv shell <version>` | 设置当前 shell 会话版本 |
| `jenv which java` | 查看 java 命令的实际路径 |
| `jenv doctor` | 诊断配置问题 |
| `jenv rehash` | 刷新 shims |

---

## 三、方案对比

| 特性 | SDKMAN! | jEnv |
|------|---------|------|
| **安装 JDK** | ✅ 自动下载安装 | ❌ 需手动安装 |
| **切换版本** | ✅ 支持 | ✅ 支持 |
| **全局默认** | ✅ `sdk default` | ✅ `jenv global` |
| **项目级锁定** | ✅ `.sdkmanrc` | ✅ `.java-version` |
| **当前会话切换** | ✅ `sdk use` | ✅ `jenv shell` |
| **支持非 Java SDK** | ✅ Gradle/Maven/Kotlin 等 | ❌ 仅 Java |
| **发行版选择** | 丰富（Temurin/GraalVM/Corretto 等） | 取决于系统包管理器 |
| **离线使用** | 需先下载 | ✅ 纯本地切换 |
| **网络依赖** | 需要 | 不需要 |
| **学习成本** | 低 | 更低 |

### 选择建议

- **从零开始**：选 **SDKMAN!**，一条命令搞定安装+切换
- **已有 JDK**：选 **jEnv**，轻量无侵入
- **团队协作**：两者都支持项目级锁定，SDKMAN! 生态更全面
- **CI/CD 环境**：jEnv 更轻量，SDKMAN! 更方便管理多工具版本

---

## 四、常见问题

###  如何查看当前 JAVA_HOME？

```bash
# SDKMAN!
echo $JAVA_HOME

# jEnv
jenv javahome
# 或
jenv prefix
```

### 如何卸载某个 JDK 版本？

```bash
# SDKMAN!
sdk uninstall java 21.0.5-tem

# jEnv（只移除 jEnv 管理记录，不删除实际 JDK）
jenv remove 21
```

### :如何在 IDE 中使用指定版本？

SDKMAN! 和 jEnv 都会设置 `JAVA_HOME`，IDEA/Eclipse 通常能自动识别。如需手动指定：

```bash
# SDKMAN!
~/.sdkman/candidates/java/current

# jEnv
~/.jenv/versions/21
```

---

> WRITE BY KIMI K2.6 | 并由作者亲自实测，亲测好用👌
> - SDKMAN! 官网：https://sdkman.io/
> - jEnv GitHub：https://github.com/jenv/jenv

