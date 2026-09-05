<!-- markdownlint-disable MD033 -->

<p align="center">
  <h1 align="center">🔥 AutoJS6 自动续火花</h1>
  <p align="center">抖音 · 快手 每日自动续火花脚本</p>
  <p align="center">
    <img src="https://img.shields.io/badge/platform-Android-brightgreen" alt="Platform" />
    <img src="https://img.shields.io/badge/AutoJS6-v6.7.0-blue" alt="AutoJS6" />
    <img src="https://img.shields.io/badge/license-GPL--3.0-orange" alt="License" />
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen" alt="PRs Welcome" />
  </p>
</p>

---

## 📖 项目简介

> 基于 AutoJS6 开发的 Android 自动化脚本，帮你**每天自动续火花**，支持 **抖音** 和 **快手** 两大平台。
>
> 无需 Root 权限，只需配置一次，即可通过定时任务每日自动运行，彻底解放双手。再也不用担心忘记续火花而断掉连续天数了！

---

## ✨ 特性

- ✅ 支持抖音、快手双平台
- ✅ 支持多用户批量续火花（英文逗号分隔）
- ✅ 自动解锁屏幕（支持数字密码）
- ✅ 运行完成后自动清理后台并锁屏
- ✅ 可配合定时任务，完全自动化
- ✅ 轻量级，资源占用低
- ✅ 开源免费，持续维护

---

## 🛠 准备工作

在开始之前，请确保满足以下条件：

| 项目 | 要求 | 说明 |
|------|------|------|
| 手机系统 | Android 7.0 及以上 | 过低版本可能无法运行 AutoJS6 |
| 已安装应用 | 抖音 / 快手（已登录账号） | 确保账号处于登录状态 |
| 辅助工具 | AutoJS6 + Shizuku | 免 Root 运行自动化脚本 |
| 存储空间 | 至少 100MB 可用空间 | 用于安装工具和脚本 |
| 锁屏密码 | 数字密码（可选） | 如无需解锁可跳过 |

> 💡 **提示**：如果你的手机已经 Root，可以不使用 Shizuku，直接给 AutoJS6 授予 Root 权限即可。

---

## 📥 步骤一：安装必要工具

### 1. 下载并安装 AutoJS6

AutoJS6 是运行脚本的核心引擎，负责执行自动化操作。

- [GitHub 官方 Releases](https://github.com/SuperMonster003/AutoJs6/releases)
- 镜像加速（v6.7.0）：[点击下载](https://ghproxy.net/https://github.com/SuperMonster003/AutoJs6/releases/download/v6.7.0/autojs6-v6.7.0-arm64-v8a-62db1ff8.apk)

> ⚠️ **注意**：请根据手机 CPU 架构选择对应版本。绝大多数现代 Android 手机使用 `arm64-v8a` 版本。如果不确定，可以下载 `universal` 通用版。

### 2. 下载并安装 Shizuku

Shizuku 是一个帮助普通应用获取更高系统权限的工具，让 AutoJS6 能够执行更多自动化操作。

- [GitHub 官方 Releases](https://github.com/RikkaApps/Shizuku/releases)
- 镜像加速（v13.6.0）：[点击下载](https://ghproxy.net/https://github.com/RikkaApps/Shizuku/releases/download/v13.6.0/shizuku-v13.6.0.r1086.2650830c-release.apk)

> 💡 **Shizuku 激活教程**：可以参考这位大佬的视频 —— [安卓免root神器，Shizuku全机型激活教程！](https://www.bilibili.com/video/BV1Ac1dYSELU)

---

## ⚙️ 步骤二：配置 AutoJS6 权限

安装完成后，需要为 AutoJS6 授予一系列系统权限，否则脚本无法正常工作。

### 2.1 开启 Shizuku

1. 打开 Shizuku 应用
2. 根据应用内的指引完成激活（通常需要通过 ADB 或无线调试方式）
3. 激活成功后，Shizuku 状态会显示“正在运行”

### 2.2 授予 AutoJS6 权限

请前往手机 **设置** → **应用管理** → **AutoJS6**（或直接在设置中搜索“AutoJS6”），开启以下权限：

| 权限 | 说明 | 是否必需 |
|------|------|----------|
| ✅ 无障碍服务 | 模拟点击和滑动操作 | ⭐ 必需 |
| ✅ 自启动 | 确保定时任务可唤醒脚本 | ⭐ 必需 |
| ✅ 后台无限制 | 防止被系统杀死进程 | ⭐ 必需 |
| ✅ 获取应用列表 | 检测抖音/快手是否已安装 | 推荐 |
| ✅ 媒体音量控制 | 静音运行，避免打扰 | 推荐 |
| ✅ 后台弹出界面 | 允许自动跳转到目标应用 | ⭐ 必需 |
| ✅ 显示悬浮窗 | 调试和状态查看 | 可选 |
| ✅ 允许通知 | 查看脚本运行状态 | 推荐 |
| ✅ 修改系统设置 | 实现自动锁屏等功能 | 推荐 |

> ⚠️ **特别提醒**：不同品牌的手机（小米、华为、OPPO、vivo 等）权限管理界面可能略有不同，请在设置中仔细查找。如果找不到某个权限，可以尝试在设置中搜索关键词。

### 2.3 在 AutoJS6 中启用 Shizuku

1. 打开 AutoJS6 应用
2. 点击左上角菜单按钮（三道横线）
3. 选择“设置” → “Shizuku”
4. 确保 Shizuku 开关处于开启状态

---

## 📝 步骤三：导入并配置脚本

### 3.1 导入脚本文件

1. 打开 AutoJS6，点击左上角菜单按钮
2. 选择 **“新建”**，会创建一个新的脚本编辑页面
3. 将本仓库中的脚本代码（`快手.js` 或抖音脚本）**完整复制**并粘贴到编辑器中
4. 点击右上角的保存按钮，为脚本命名（如“自动续火花”）

### 3.2 配置续火花对象

找到脚本中的以下代码段：

```javascript
// 要续火花的好友昵称，多个用英文逗号隔开
var names = ["张三", "李四"];