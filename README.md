<!-- markdownlint-disable MD033 -->

<p align="center">
  <h1 align="center">🔥 AutoJS6 自动续火花</h1>
  <p align="center">快手 每日自动续火花脚本</p >
  <p align="center">
    <!-- 基础徽章 -->
    < img src="https://img.shields.io/badge/platform-Android-brightgreen" alt="Platform" />
    < img src="https://img.shields.io/badge/AutoJS6-v6.7.0-blue" alt="AutoJS6" />
    < img src="https://img.shields.io/badge/license-GPL--3.0-orange" alt="License" />
    < img src="https://img.shields.io/badge/PRs-welcome-brightgreen" alt="PRs Welcome" />
    <!-- GitHub 统计徽章 -->
    < img src="https://img.shields.io/github/stars/xiao572/auto-renewChat-spark?style=flat-square&logo=github" alt="Stars" />
    < img src="https://img.shields.io/github/forks/xiao572/auto-renewChat-spark?style=flat-square&logo=github" alt="Forks" />
    < img src="https://img.shields.io/github/issues/xiao572/auto-renewChat-spark?style=flat-square&logo=github" alt="Issues" />
    < img src="https://img.shields.io/github/repo-size/xiao572/auto-renewChat-spark?style=flat-square" alt="Repo Size" />
    < img src="https://img.shields.io/github/last-commit/xiao572/auto-renewChat-spark?style=flat-square" alt="Last Commit" />
  </p >
</p >

---

## 📖 项目简介

> 基于 AutoJS6 开发的 Android 自动化脚本，帮你**每天自动续火花**，支持 **快手** 平台。
>
> 无需 Root 权限，只需配置一次，即可通过定时任务每日自动运行，彻底解放双手。再也不用担心忘记续火花而断掉连续天数了！

---

## ✨ 特性

- ✅ 支持快手平台
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
| 已安装应用 | 快手（已登录账号） | 确保账号处于登录状态 |
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
| ✅ 获取应用列表 | 检测快手是否已安装 | 推荐 |
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
3. 将本仓库中的脚本代码（`快手.js`）**完整复制**并粘贴到编辑器中
4. 点击右上角的保存按钮，为脚本命名（如“自动续火花”）

### 3.2 配置续火花对象

找到脚本中的以下代码段：

```javascript
// 要续火花的好友昵称，多个用英文逗号隔开
var names = ["张三", "李四"];
将 ["张三", "李四"] 改为你要续火花的好友昵称。例如：

javascript
var names = ["小可爱", "最好的朋友", "老铁666"];
⚠️ 注意：

名字必须和快手 App 中显示的名称完全一致（包括特殊符号和表情）

多个名字之间用英文逗号分隔

每个名字都必须用英文引号包裹

3.3 配置锁屏密码（可选）
如果你的手机设置了锁屏密码，需要让脚本能够自动解锁。

找到脚本中的以下代码段：

javascript
// 锁屏密码（仅支持数字密码）
var password = "123456";
将 "123456" 改为你的实际锁屏密码。例如：

javascript
var password = "888888";
💡 如果不需要密码解锁：可以直接删除或注释掉相关代码段。

▶️ 步骤四：运行脚本
4.1 首次手动运行
确保手机处于桌面状态（不要停留在快手界面）

在 AutoJS6 中找到你保存的脚本

点击脚本旁的 ▶️ 运行 按钮

脚本会自动打开快手 App 并执行续火花操作

等待脚本运行完成

⚠️ 运行期间请勿操作手机！脚本会自动模拟点击和滑动，任何手动操作都可能导致脚本执行出错。

4.2 设置定时任务（推荐）
为了实现完全自动化，建议设置定时任务每天自动运行：

在 AutoJS6 中找到你的脚本

长按脚本名称，选择 “定时任务”

设置每天的执行时间（建议设置在凌晨或清晨，此时手机通常处于闲置状态）

保存定时任务

💡 建议时间：每天 6:00 - 8:00 之间，此时大多数人还未起床，手机处于空闲状态。

4.3 运行完成后的状态
脚本会自动关闭快手后台

手机将自动锁屏

整个过程无需任何手动干预

📊 运行状态说明
状态	表现	处理方式
🔄 运行中	屏幕自动操作中	请勿触碰屏幕
✅ 运行成功	自动返回桌面，关闭后台	无需操作
🔒 运行结束	手机自动锁屏	无需操作
❌ 运行失败	脚本停止，可能弹出错误提示	查看下方“常见问题”
❓ 常见问题与排查
Q1：脚本运行时找不到好友怎么办？
A：请检查以下几点：

确认好友昵称与快手 App 中显示的名称完全一致（包括空格、特殊符号）

确认好友确实在最近聊天列表中（快手需要先有过私信互动）

尝试将名字改为好友的备注名（如果有设置）

Q2：无障碍服务被系统自动关闭怎么办？
A：部分手机系统（尤其是小米、华为）会定期回收无障碍服务权限。解决方法：

在手机设置中，将 AutoJS6 的无障碍服务开关重新打开

将 AutoJS6 加入系统的省电策略白名单

开启 AutoJS6 的自启动权限

Q3：脚本无法自动解锁屏幕？
A：

确认你的锁屏密码是数字密码（目前不支持图案或混合密码）

确认密码填写正确

如果手机有“锁屏杂志”或“锁屏画报”功能，建议关闭

Q4：定时任务没有按时执行？
A：

确认 AutoJS6 的自启动权限已开启

确认 AutoJS6 在后台没有被系统杀死（加入省电白名单）

确认定时任务的时间设置正确（注意是 24 小时制）

Q5：运行时报错“无法找到目标应用”？
A：

确认快手已安装

确认快手的包名是否正确（不同版本可能不同）

尝试重新安装目标 App

🔧 进阶配置（可选）
调整脚本运行速度
如果觉得脚本运行太快或太慢，可以调整脚本中的延迟参数：

javascript
// 每次操作之间的延迟（毫秒）
var delay = 1000; // 默认 1 秒
添加更多平台支持
本脚本目前只支持快手，如果你需要扩展其他平台，可以参考脚本中的注释进行二次开发。

⚠️ 重要提示
在下载、安装或使用本脚本之前，请您务必仔细阅读并充分理解用户使用协议的所有条款。您的下载、安装或使用行为即被视为您已完全阅读、理解并同意接受本协议的全部条款约束。如果您不同意本协议的任何内容，请立即停止使用并删除本脚本。

脚本仅供个人学习交流使用，请勿用于商业用途，否则后果自负。如您因使用脚本造成任何损失（包括但不限于账号封禁、数据丢失等），本人概不负责。

🔗 相关链接
📺 视频教程：B站演示

📚 参考文档：automatic-spark-renewal

🛠 脚本文件：快手.js（存放于本仓库根目录）

💬 问题反馈：GitHub Issues

☕ 支持作者
如果这个项目对你有帮助，欢迎请我喝杯咖啡～
你的支持是我持续更新的动力 ❤️

<div align="center"> < img src="赞赏码.jpg" width="200" alt="赞赏码" /> <p><strong>微信/支付宝 扫码赞赏</strong></p > </div>
📬 联系方式
QQ：703828612（添加请备注“自动续火花”）

如有问题或建议，欢迎通过 QQ 与我联系。

📝 更新日志
日期	版本	更新内容
2026-09-05	v1.0	初始版本发布，支持快手
最后更新：2026 年 9 月 5 日
项目状态：✅ 维护中
