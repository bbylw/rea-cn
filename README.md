<div align="center">

[English](https://github.com/morluto/rea/blob/main/README.md) · **简体中文** · [繁體中文](https://github.com/morluto/rea/blob/main/README_zh-TW.md) · [日本語](https://github.com/morluto/rea/blob/main/README_ja.md) · [한국어](https://github.com/morluto/rea/blob/main/README_ko.md) · [Türkçe](https://github.com/morluto/rea/blob/main/README_tr.md) · [Русский](https://github.com/morluto/rea/blob/main/README_ru.md) · [Tiếng Việt](https://github.com/morluto/rea/blob/main/README_vi.md) · [ไทย](https://github.com/morluto/rea/blob/main/README_th.md) · [Deutsch](https://github.com/morluto/rea/blob/main/README_de.md) · [Español](https://github.com/morluto/rea/blob/main/README_es.md) · [Français](https://github.com/morluto/rea/blob/main/README_fr.md) · [Українська](https://github.com/morluto/rea/blob/main/README_uk.md) · [Polski](https://github.com/morluto/rea/blob/main/README_pl.md) · [Português (Brasil)](https://github.com/morluto/rea/blob/main/README_pt-BR.md) · [العربية](https://github.com/morluto/rea/blob/main/README_ar.md) · [فارسی](https://github.com/morluto/rea/blob/main/README_fa.md) · [Bahasa Indonesia](https://github.com/morluto/rea/blob/main/README_id.md) · [Italiano](https://github.com/morluto/rea/blob/main/README_it.md)

# REA：逆向一切

### 通过一个 MCP 服务，逆向分析二进制文件、应用程序和运行时行为。

**看到喜欢的功能，弄清它的工作原理，深入到二进制层面。**

[![npm version](https://img.shields.io/npm/v/rea-agents?style=flat-square&color=cb3837)](https://www.npmjs.com/package/rea-agents)
[![CI](https://img.shields.io/github/actions/workflow/status/morluto/rea/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/morluto/rea/actions/workflows/ci.yml)
[![MCP tool catalog](https://img.shields.io/badge/MCP-tool_catalog-5c4ee5?style=flat-square)](https://github.com/morluto/rea/blob/main/docs/mcp-contracts.md#generated-catalog)
[![Node.js requirements](https://img.shields.io/badge/Node.js-requirements-339933?style=flat-square&logo=nodedotjs&logoColor=white)](#current-status)
[![skills.sh](https://skills.sh/b/morluto/rea?style=flat-square)](https://skills.sh/morluto/rea/reverse-engineer-anything)
[![MIT license](https://img.shields.io/badge/license-MIT-f4c430?style=flat-square)](https://github.com/morluto/rea/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1556595354999332884?logo=discord&logoColor=white&label=Discord&color=5865F2)](https://discord.gg/GkcryMnJDM)

<a href="https://trendshift.io/repositories/82054?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-82054" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/82054" alt="morluto%2Frea | Trendshift" width="250" height="55"/></a>

**[网站](https://rea.tools/) · [指南](https://rea.tools/guides/) · [案例](https://rea.tools/showcase/)**

[快速开始](#快速开始) · [REA 的工作原理](#rea-的工作原理) · [可以分析什么](#可以分析什么) · [案例](#案例) · [常见问题](#常见问题) · [文档](#文档)

<code>npx rea-agents setup</code>

<br />

<img src="https://raw.githubusercontent.com/morluto/rea/main/docs/assets/rea-hopper-analysis.png" alt="REA 在 Hopper 中启动分析桥，检查原生二进制文件" width="1200" />

<br /><br />

<table aria-label="REA 社区">
<tr>
<td align="center" width="360">
  <a href="https://discord.gg/GkcryMnJDM">
    <img src="https://raw.githubusercontent.com/morluto/rea/main/docs/assets/discord.svg" height="42" alt="Discord" /><br />
    <strong>加入逆向工程社区</strong>
  </a><br />
  <sub>Discord · 问答 · 成果分享</sub>
</td>
</tr>
</table>

<br />

</div>

---

在应用中看到一个想加入自己产品的功能？让智能体用 REA 调查它。即使没有源代码，智能体也可以检查应用、解释功能的工作方式、展示证据，并为你的项目实现类似功能。

REA 将智能体连接到分析工具，用于检查原生二进制文件、JavaScript 和 Electron 应用、.NET 程序集以及网站。你也可以在终端中使用同样的工具。分析在本机运行，结果包含支撑各项结论的证据和相关限制。

设置流程会向智能体注册 REA，并安装匹配的工作流指引。原生分析可以使用已有的 Hopper 或 Ghidra；设置流程也可以在你批准后安装 Hopper。静态 JavaScript 分析不需要这两个引擎。

> **[访问 REA 网站](https://rea.tools/)**，查看设置说明、图解指南和真实案例。

## 快速开始

### 设置智能体

安装 Node.js 和 npm 后，运行：

```bash
npx rea-agents setup
```

选择智能体，检查计划中的变更并批准。设置流程会添加 REA 的 MCP 服务和匹配的工作流指引，并备份已有配置。完成后重启智能体。

设置流程支持 Claude Code、Codex、Cursor、Gemini CLI、Grok Build 和[其他智能体](https://github.com/morluto/rea/blob/main/docs/installation.md#supported-agents)。提供方配置和手动注册 MCP 的方法见[安装与设置](https://github.com/morluto/rea/blob/main/docs/installation.md)。

### 询问智能体

```text
弄清 Notes 应用的搜索功能如何工作，展示证据，并为我的项目实现类似功能。
```

把 Notes 替换为目标应用，并描述你想了解的功能。

### 使用终端

检查已解包的 JavaScript/Electron 应用目录或 ASAR 文件：

```bash
npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json
```

结果包含模块、导入、Electron 边界及相关证据。将路径替换为你的目标路径，例如 Windows 上的 `"D:/apps/example"`。

如果需要经常使用，可以安装 `rea` 命令：

```bash
npm install --global rea-agents
rea --help
```

原生分析需要先配置分析提供方。原生命令、提供方选择、快照和脚本用法见 [CLI 与 Evidence 指南](https://github.com/morluto/rea/blob/main/docs/cli.md)。

### 更新 REA

REA 更新较快，新版本经常包含错误修复。请保持安装的版本为最新。

通过 npm 安装的 CLI 使用：

```bash
rea update
```

要更新智能体注册和 skill，请运行更新命令输出的设置命令。

如果使用 `npx`，通过以下命令更新智能体设置：

```bash
npx rea-agents@latest setup
```

检查设置变更并重启智能体。单次 CLI 操作可使用 `npx rea-agents@latest`，后接所需命令。

## REA 的工作原理

智能体通过 MCP 调用 REA，检查目标并追踪相关代码。REA 返回发现及对应证据。智能体据此提出后续问题、解释行为，或编写并测试实现。CLI 命令使用同样的工作流。

![REA 调查流程：智能体询问本地目标的行为，REA 使用分析工具检查和追踪目标，智能体再利用返回的代码、引用和未知项进行解释、实现与测试。](https://raw.githubusercontent.com/morluto/rea/main/website/public/assets/figures/rea-investigation-flow.svg)

[打开完整尺寸的图示](https://raw.githubusercontent.com/morluto/rea/main/website/public/assets/figures/rea-investigation-flow.svg)。

<a id="current-status"></a>

## 可以分析什么

REA 需要 Node.js 22.x（>=22.19）、24.x（>=24.11）或 26+，以及 npm。额外工具和主机支持取决于分析目标：

| 目标                  | REA 返回的内容                                                | 要求与指南                                                                                                             |
| --------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 原生二进制文件        | 伪代码、汇编、字符串、符号、调用和引用                        | Hopper、Ghidra 或 IDA；[原生分析](https://rea.tools/guides/native/)                                                    |
| 离线 ELF 布局         | 节、段、原始符号/重定位信息及静态防护机制候选项               | Linux x64 上由调用方提供的 pwntools；[二进制诊断](https://github.com/morluto/rea/blob/main/docs/binary-diagnostics.md)                                          |
| EVM 字节码            | 分派选择器、字节偏移、推断的参数和状态可变性                  | Linux x64 上的本地原始字节/十六进制输入载体；[离线 EVM 指南](https://github.com/morluto/rea/blob/main/docs/evm-bytecode.md)                                     |
| 已记录的 Linux 崩溃   | 原始 note 记录、每个已记录线程的寄存器/信号及可选的映射候选项 | Linux x64 上由调用方提供的 pwntools；可选的 GDB/pwndbg；[已记录崩溃](https://github.com/morluto/rea/blob/main/docs/recorded-crashes.md)                         |
| JavaScript / Electron | 模块、导入、source map、路由、IPC 和原生扩展关系              | Node.js 和 npm；[应用分析](https://rea.tools/guides/javascript/)                                                       |
| 网站                  | 页面结构、脚本、网络观察结果和按请求获取的截图                | Chrome 系浏览器；[浏览器分析](https://rea.tools/guides/browser/)                                                       |
| 已保存的网络捕获      | 请求、响应、可访问的载荷和来源位置                            | HAR；原生 mitmproxy 捕获需要 Linux 上的 mitmdump；[捕获指南](https://github.com/morluto/rea/blob/main/docs/web-network-captures.md)                             |
| .NET 程序集           | 元数据、CIL 指令、声明的原生依赖和构建对比                    | 静态检查；[托管代码指南](https://github.com/morluto/rea/blob/main/docs/managed-code-analysis.md)                                                                |
| Android APK           | 清单声明、类、反编译的方法和引用                              | Linux/macOS/Windows x64 上的无界面 JADX 和完整 JDK；[Android 指南](https://github.com/morluto/rea/blob/main/docs/android-analysis.md)                           |
| Android 设备          | 设备、软件包、进程、日志、转储、屏幕截图以及 APK/文件传输     | 调用方提供的 adb（模拟器或实体设备）；[ADB 指南](https://github.com/morluto/rea/blob/main/docs/adb-device-analysis.md)                                          |
| JEB 项目              | 引擎支持的项目单元、工件摘要和类型/方法的伪代码               | 由调用方启动、提供 MCP 的 JEB 客户端，通过 REA_JEB_MCP_URL 选择；[JEB 指南](https://github.com/morluto/rea/blob/main/docs/jeb-analysis.md)                      |
| Android 资源          | 解码后的清单、字符串表、语言区域和版本信息                    | 调用方提供的 Apktool 启动器；[资源指南](https://github.com/morluto/rea/blob/main/docs/apktool-resource-analysis.md)                                             |
| 固件                  | 区域、提取结果和转交原生分析的内容                            | Linux 上的 Binwalk / Unblob；[固件指南](https://github.com/morluto/rea/blob/main/docs/firmware-analysis.md)                                                     |
| 软件包与资源          | 文件清单、摘要、plist、Apple bundle 结构和提取的资源          | [制品与 JavaScript 指南](https://github.com/morluto/rea/blob/main/docs/javascript-artifact-reconstruction.md)、[Apple 应用](https://github.com/morluto/rea/blob/main/docs/apple-application-analysis.md) |
| 进程行为              | 终端输出、交互、退出和文件系统观察结果，以及运行对比          | 支持原生 PTY 的 Linux/macOS；[进程捕获](https://github.com/morluto/rea/blob/main/docs/process-capture.md)                                                       |

静态 JavaScript 和 .NET 检查读取提供的文件，不运行应用。运行时捕获会以你的用户权限运行目标或与之交互；各运行时指南说明了具体影响。

<a id="choosing-a-deep-analysis-provider"></a>

不同提供方支持的原生格式和主机系统有所不同。请参阅 [Hopper 与 Ghidra 设置](https://github.com/morluto/rea/blob/main/docs/installation.md#hopper)、[IDA 指南](https://github.com/morluto/rea/blob/main/docs/ida-provider.md)和[实验性 Windows Ghidra 支持](https://github.com/morluto/rea/blob/main/docs/windows-ghidra-p0.md)。Ghidra 也支持 [16 位 DOS 分析](https://github.com/morluto/rea/blob/main/docs/ghidra-dos.md)。提供方选择见 [CLI 指南](https://github.com/morluto/rea/blob/main/docs/cli.md#choose-a-provider)。对于最新 npm 版本发布后新增的功能，请查看[发布可用性](https://github.com/morluto/rea/blob/main/docs/installation.md#released-package-and-main)。

## 案例

[![DX-Ball 声音平移、Notion 剪贴板桥接与 TH04 弹幕环案例的插图](https://raw.githubusercontent.com/morluto/rea/main/docs/assets/rea-showcases.png)](https://rea.tools/showcase/)

### DX-Ball：重建声像计算

沿声音调用追踪到根据位置计算声像的辅助函数，检查指令，将不完整的伪代码转为 C。重建结果通过了 3,205 个原始 x86 测试用例，并复现了编译后函数的全部 63 个字节。

[阅读案例](https://rea.tools/showcase/dx-ball/) ·
[重建项目仓库](https://github.com/N0zoM1z0/dx-ball)

### Notion：追踪 Electron 剪贴板桥

找到渲染进程的剪贴板 API，沿 preload 和 IPC 追踪到主进程，并检查富格式剪贴板数据。

[阅读案例](https://rea.tools/showcase/notion/)

### TH04：恢复 DOS 环形子弹的计算

检查原始 PC-98 游戏的 16 位指令，恢复固定角度和瞄准角度的计算，并将重建的 C++ 与当年的编译器输出进行对比。

[阅读案例](https://rea.tools/showcase/th04/) ·
[重建项目仓库](https://github.com/N0zoM1z0/th04)

如果你用 REA 分析了有趣的目标，我们很想了解。欢迎通过 [issue](https://github.com/morluto/rea/issues) 或 [pull request](https://github.com/morluto/rea/pulls) 分享案例，说明目标、你的问题、REA 如何提供帮助，以及你的发现。

## 常见问题

<details>
<summary><strong>哪些智能体可以使用 REA？</strong></summary>

任何支持本地 MCP 服务的智能体都可以使用。设置流程会配置[受支持的智能体](https://github.com/morluto/rea/blob/main/docs/installation.md#supported-agents)；其他客户端可通过[手动注册 MCP](https://github.com/morluto/rea/blob/main/docs/installation.md#mcp-registry) 使用。

</details>

<details>
<summary><strong>需要 Hopper、Ghidra 或 IDA 吗？</strong></summary>

深入的原生分析需要其中一个引擎。静态 JavaScript 和 .NET 检查不需要原生分析引擎。设置流程可以在你批准后安装 Hopper；Ghidra 和 IDA 则使用已有安装。见[提供方设置](https://github.com/morluto/rea/blob/main/docs/installation.md#hopper)。

</details>

<details>
<summary><strong>需要先启动 Hopper 吗？</strong></summary>

REA 会在操作需要时启动 Hopper。在 macOS 上，首次运行时可能会出现对话框，让你选择演示模式或激活许可证。见 [Hopper 启动与故障排查](https://github.com/morluto/rea/blob/main/docs/installation.md#launcher-paths-and-troubleshooting)。

</details>

<details>
<summary><strong>从 skills.sh 安装 skill 有什么作用？</strong></summary>

skill 为智能体提供调查指引。使用 `npx rea-agents setup` 注册 REA 的 MCP 服务并安装匹配的指引，然后重启智能体。见[仅安装 skill](https://github.com/morluto/rea/blob/main/docs/installation.md#skill-only-installation)。

</details>

<details>
<summary><strong>REA 返回什么代码？</strong></summary>

原生分析返回伪代码和汇编。JavaScript/Electron 分析恢复模块及其关系。智能体利用这些发现编写并测试实现；[案例](#案例)提供了完整示例。

</details>

<details>
<summary><strong>REA 会上传我的应用吗？</strong></summary>

REA 在本机分析目标。智能体会接收工具结果，其模型提供商有自己的数据政策。

</details>

<details>
<summary><strong>遇到错误时该怎么办？</strong></summary>

先更新；最近的版本可能已经修复了问题。

通过 npm 安装的 CLI 使用：

```bash
rea update
```

通过 `npx` 设置智能体时使用：

```bash
npx rea-agents@latest setup
```

如果正在使用智能体，请完成[设置更新](#更新-rea)并重启智能体。重试同一任务。如果问题仍然存在，请[提交 issue](https://github.com/morluto/rea/issues)，附上 REA 版本、目标类型、复现步骤和错误输出。

</details>

## 文档

可以先阅读网站上的[实操指南](https://rea.tools/guides/)。具体选项、前提条件和结果契约见：

- [安装与设置](https://github.com/morluto/rea/blob/main/docs/installation.md)：智能体注册、提供方配置、更新和卸载。
- [就绪检查与故障排查](https://github.com/morluto/rea/blob/main/docs/installation.md#check-readiness-for-your-task)：诊断特定智能体或分析引擎。
- [CLI 与 Evidence](https://github.com/morluto/rea/blob/main/docs/cli.md)：命令、提供方选择、快照、导入/导出和退出状态。
- [MCP 契约](https://github.com/morluto/rea/blob/main/docs/mcp-contracts.md)和[智能体提示词](https://github.com/morluto/rea/blob/main/docs/mcp-prompts.md)：工具结果、会话和引导式调查。
- [工具目录](https://github.com/morluto/rea/blob/main/docs/mcp-contracts.md#generated-catalog)：构建时生成的工具、提供方和 CLI 命令清单。
- [路线图](https://github.com/morluto/rea/blob/main/docs/roadmap.md)：计划中的工作和能力跟踪。

请按照 [SECURITY.md](https://github.com/morluto/rea/blob/main/SECURITY.md) 报告漏洞。

## Star 历史

🎉 **GitHub Star 达到 50,000 个，感谢大家！**

感谢每一位使用 REA、报告错误、提出功能需求、测试构建和贡献修复的朋友。

<a href="https://www.star-history.com/?repos=morluto%2Frea&amp;type=date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=morluto/rea&amp;type=date&amp;theme=dark&amp;legend=top-left" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=morluto/rea&amp;type=date" />
    <img alt="REA 的 GitHub Star 历史" src="https://api.star-history.com/chart?repos=morluto/rea&amp;type=date" />
  </picture>
</a>

## 免责声明

REA 为合法的逆向工程研究、分析和重建提供工具。你有责任取得所需授权并遵守适用法律。项目不支持非法或未经授权的使用。

## 参与贡献

欢迎帮助改进 REA！你可以[提交 issue](https://github.com/morluto/rea/issues) 报告错误或建议功能，也可以[提交 pull request](https://github.com/morluto/rea/pulls) 改进代码或文档。

开发设置和检查见 [CONTRIBUTING.md](https://github.com/morluto/rea/blob/main/CONTRIBUTING.md)，验证流程见[测试指南](https://github.com/morluto/rea/blob/main/docs/testing.md)，项目结构见[架构图](https://github.com/morluto/rea/blob/main/docs/architecture.mermaid)。

## 许可证

[MIT](https://github.com/morluto/rea/blob/main/LICENSE)
