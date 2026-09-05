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
> 无需 Root，只需配置一次，即可通过定时任务每日自动运行，解放双手。

---

## ✨ 特性

- ✅ 支持抖音、快手双平台
- ✅ 支持多用户批量续火花（英文逗号分隔）
- ✅ 自动解锁屏幕（数字密码）
- ✅ 运行完成后自动清理后台并锁屏
- ✅ 可配合定时任务，完全自动化

---

## 🛠 准备工作

| 项目 | 要求 |
|------|------|
| 手机系统 | Android 7.0 及以上 |
| 已安装应用 | 抖音 / 快手（已登录） |
| 辅助工具 | AutoJS6 + Shizuku（免 Root） |

---

## 📥 步骤一：安装必要工具

### 1. 下载 AutoJS6

- [GitHub 官方 Releases](https://github.com/SuperMonster003/AutoJs6/releases)
- 镜像加速（v6.7.0）：[点击下载](https://ghproxy.net/https://github.com/SuperMonster003/AutoJs6/releases/download/v6.7.0/autojs6-v6.7.0-arm64-v8a-62db1ff8.apk)

### 2. 下载 Shizuku

- [GitHub 官方 Releases](https://github.com/RikkaApps/Shizuku/releases)
- 镜像加速（v13.6.0）：[点击下载](https://ghproxy.net/https://github.com/RikkaApps/Shizuku/releases/download/v13.6.0/shizuku-v13.6.0.r1086.2650830c-release.apk)

> 💡 **提示**：Shizuku 激活教程可参考 [B站视频](https://www.bilibili.com/video/BV1Ac1dYSELU)。

---

## ⚙️ 步骤二：配置 AutoJS6 权限

请前往手机 **设置** → **应用管理** → **AutoJS6**，开启以下权限：

| 权限 | 说明 |
|------|------|
| ✅ 无障碍服务 | 模拟点击必需 |
| ✅ 自启动 | 确保定时任务可唤醒 |
| ✅ 后台无限制 | 防止被系统杀死 |
| ✅ 获取应用列表 | 检测目标 App |
| ✅ 媒体音量控制 | 静音运行 |
| ✅ 后台弹出界面 | 允许自动跳转 |
| ✅ 显示悬浮窗 | 调试辅助 |
| ✅ 允许通知 | 查看运行状态 |
| ✅ 修改系统设置 | 自动锁屏等 |

---

## 📝 步骤三：导入并配置脚本

1. 打开 AutoJS6，点击左上角菜单 → **新建** → 粘贴脚本代码（`快手.js` 或抖音脚本）。
2. **设置续火花对象**  
   找到脚本中的 `var names = ["张三", "李四"];`，将引号内的名字改为你要续火花的好友昵称（**英文逗号分隔**）。
3. **设置锁屏密码**  
   找到 `var password = "123456";`，改为你的数字锁屏密码。  
   > 若无需密码解锁，可删除相关代码段。

---

## ▶️ 步骤四：运行脚本

- 点击脚本旁的 **▶️ 运行** 按钮，首次运行请确保手机处于桌面状态。
- 推荐使用 AutoJS6 的 **定时任务** 功能，设置每天固定时间自动运行。
- ⚠️ **运行期间请勿操作手机**，脚本会自动完成所有步骤。
- 运行完成后，脚本会自动关闭后台并锁屏。

---

## 📊 运行状态说明

| 状态 | 表现 |
|------|------|
| 🔄 运行中 | 请勿触碰屏幕 |
| ✅ 运行成功 | 自动返回桌面，关闭后台 |
| 🔒 运行结束 | 手机自动锁屏 |

---

## ⚠️ 重要提示

> **在使用本脚本前，请仔细阅读并同意以下条款：**
>
> 1. 本脚本仅供**个人学习与交流**使用，严禁用于商业用途。
> 2. 使用本脚本所产生的一切后果（包括但不限于账号封禁、数据丢失等）由使用者自行承担。
> 3. 若不同意以上条款，请立即停止使用并删除本脚本。

---

## 🔗 相关链接

- 📺 视频教程：[B站演示](https://www.bilibili.com/video/BV11beMzNEgS)
- 📚 参考文档：[automatic-spark-renewal](https://gitee.com/coldestbow30654/automatic-spark-renewal/tree/main)
- 🛠 脚本文件：`快手.js`（存放于本仓库根目录）

---

## ☕ 支持作者

如果这个项目对你有帮助，欢迎请我喝杯咖啡～  
你的支持是我持续更新的动力 ❤️

<div align="center">
  <img src="赞赏码.jpg" width="200" alt="赞赏码" />
</div>

---

## 📬 联系方式

- QQ：**703828612**（添加请备注“自动续火花”）

---

> **最后更新**：2026 年 9 月 5 日  
> **项目状态**：✅ 维护中