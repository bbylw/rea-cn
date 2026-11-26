<div align="center">

[English](https://github.com/morluto/rea/blob/main/README.md) · **简体中文** · [繁體中文](https://github.com/morluto/rea/blob/main/docs/readme/README_zh-TW.md) · [日本語](https://github.com/morluto/rea/blob/main/docs/readme/README_ja.md) · [한국어](https://github.com/morluto/rea/blob/main/docs/readme/README_ko.md) · [Türkçe](https://github.com/morluto/rea/blob/main/docs/readme/README_tr.md) · [Русский](https://github.com/morluto/rea/blob/main/docs/readme/README_ru.md) · [Tiếng Việt](https://github.com/morluto/rea/blob/main/docs/readme/README_vi.md) · [ไทย](https://github.com/morluto/rea/blob/main/docs/readme/README_th.md) · [Deutsch](https://github.com/morluto/rea/blob/main/docs/readme/README_de.md) · [Español](https://github.com/morluto/rea/blob/main/docs/readme/README_es.md) · [Français](https://github.com/morluto/rea/blob/main/docs/readme/README_fr.md) · [Українська](https://github.com/morluto/rea/blob/main/docs/readme/README_uk.md) · [Polski](https://github.com/morluto/rea/blob/main/docs/readme/README_pl.md) · [Português (Brasil)](https://github.com/morluto/rea/blob/main/docs/readme/README_pt-BR.md) · [العربية](https://github.com/morluto/rea/blob/main/docs/readme/README_ar.md) · [فارسی](https://github.com/morluto/rea/blob/main/docs/readme/README_fa.md) · [Bahasa Indonesia](https://github.com/morluto/rea/blob/main/docs/readme/README_id.md) · [Italiano](https://github.com/morluto/rea/blob/main/docs/readme/README_it.md)
· [Ελληνικά](https://github.com/morluto/rea/blob/main/docs/readme/README_el.md) · [മലയാളം](https://github.com/morluto/rea/blob/main/docs/readme/README_ml.md) · [Roman Urdu](https://github.com/morluto/rea/blob/main/docs/readme/README_ur-Latn.md) · [Română](https://github.com/morluto/rea/blob/main/docs/readme/README_ro.md) · [Български](https://github.com/morluto/rea/blob/main/docs/readme/README_bg.md)

# REA：逆向一切

### 通过一个 MCP 服务，逆向分析二进制文件、应用程序和运行时行为。

**看到喜欢的功能，弄清它的工作原理，深入到二进制层面。**

[![GitHub stars](https://img.shields.io/github/stars/morluto/rea?style=flat-square&logo=github)](https://github.com/morluto/rea/stargazers)
[![Monthly npm downloads](https://img.shields.io/npm/dm/rea-agents?style=flat-square&label=npm%20downloads)](https://www.npmjs.com/package/rea-agents)
[![MIT license](https://img.shields.io/badge/license-MIT-f4c430?style=flat-square)](https://raw.githubusercontent.com/morluto/rea/main/LICENSE)
[![Join the REA Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/GkcryMnJDM)
[![Follow REA on X](https://img.shields.io/badge/X-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/reatools)
[![Supported platforms: macOS, Windows, and Linux](https://img.shields.io/badge/macOS%20%7C%20Windows%20%7C%20Linux-4493F8?style=flat-square)](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md)
[![skills.sh](https://skills.sh/b/morluto/rea?style=flat-square)](https://skills.sh/morluto/rea/reverse-engineer-anything)

**[网站](https://rea.tools/zh-CN/) · [指南](https://rea.tools/zh-CN/guides/) · [案例](https://rea.tools/zh-CN/showcase/)**

<a href="https://discord.com/invite/GkcryMnJDM"><img alt="加入 REA 的 Discord 社区" src="https://img.shields.io/badge/Join%20us%20on%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" height="40"></a>

[快速开始](#快速开始) · [案例](#案例) · [REA 的工作原理](#rea-的工作原理) · [可以分析什么](#可以分析什么) · [构建 RL 环境](#build-rl-environments) · [常见问题](#常见问题) · [文档](#文档)

<code>npx rea-agents setup</code>

</div>

> [!IMPORTANT]
> REA 官方来源： [morluto/rea](https://github.com/morluto/rea), [rea.tools](https://rea.tools/), [rea-agents](https://www.npmjs.com/package/rea-agents) (npm).
> 请通过这些官方来源提供的安装和发布链接获取 REA。相似的仓库名称或复制的 README 不能证明下载内容来自官方。

<div align="center">

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

设置流程会向智能体注册 REA，并安装匹配的工作流指引。原生分析可以使用已有的 Hopper、Ghidra、IDA 或 Kuna；设置流程也可以在你批准后安装 Hopper。静态 JavaScript 分析不需要原生分析引擎。

## 快速开始

**[快速开始 · rea.tools](https://rea.tools/zh-CN/get-started/)**

### 设置智能体 (MCP)

安装 [Node.js 和 npm](https://github.com/morluto/rea/blob/main/docs/reference/supported-targets.md) 后，在目标项目之外的可信目录中运行以下命令。

```bash
npx rea-agents setup
```

选择智能体，检查计划中的变更并批准。设置流程会添加 REA 的 MCP 服务和匹配的工作流指引，并备份已有配置。完成后重启智能体。

[安装与设置](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md)

询问智能体：

```text
弄清 Notes 应用的搜索功能如何工作，展示证据，并为我的项目实现类似功能。
```

把 Notes 替换为目标应用，并描述你想了解的功能。

### 使用终端 (CLI)

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

原生分析需要先配置分析提供方。原生命令、提供方选择、快照和脚本用法见 [CLI 与 Evidence 指南](https://github.com/morluto/rea/blob/main/docs/getting-started/cli.md)。

[Linux 系统要求](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md#linux-owned-process-prerequisite)

### 更新 REA

通过 `npm install --global` 或 `bun add --global` 安装的 CLI 使用：

```bash
rea update
```

如果使用 `npx`，通过以下命令更新智能体设置：

```bash
npx rea-agents@latest setup
```

[更新与卸载](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md#diagnose-update-and-remove)

## 案例

<a href="https://rea.tools/zh-CN/showcase/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/morluto/rea/main/docs/assets/rea-showcases-dark.svg" />
    <img alt="DX-Ball 声音平移、Notion 剪贴板桥接与 TH04 弹幕环案例的插图" src="https://raw.githubusercontent.com/morluto/rea/main/docs/assets/rea-showcases.svg" />
  </picture>
</a>

<table>
<tbody>
<tr><td>
<h3>DX-Ball：重建声像计算</h3>
<p>沿声音调用追踪到根据位置计算声像的辅助函数，检查指令，将不完整的伪代码转为 C。重建结果通过了 3,205 个原始 x86 测试用例，并复现了编译后函数的全部 63 个字节。</p>
<p><a href="https://rea.tools/zh-CN/showcase/dx-ball/">阅读案例</a> ·
<a href="https://github.com/N0zoM1z0/dx-ball">重建项目仓库</a></p>
</td></tr>
<tr><td>
<h3>Notion：追踪 Electron 剪贴板桥</h3>
<p>找到渲染进程的剪贴板 API，沿 preload 和 IPC 追踪到主进程，并检查富格式剪贴板数据。</p>
<p><a href="https://rea.tools/zh-CN/showcase/notion/">阅读案例</a></p>
</td></tr>
<tr><td>
<h3>TH04：恢复 DOS 环形子弹的计算</h3>
<p>检查原始 PC-98 游戏的 16 位指令，恢复固定角度和瞄准角度的计算，并将重建的 C++ 与当年的编译器输出进行对比。</p>
<p><a href="https://rea.tools/zh-CN/showcase/th04/">阅读案例</a> ·
<a href="https://github.com/N0zoM1z0/th04">重建项目仓库</a></p>
</td></tr>
</tbody>
</table>

如果你用 REA 分析了有趣的目标，我们很想了解。欢迎通过 [issue](https://github.com/morluto/rea/issues) 或 [pull request](https://github.com/morluto/rea/pulls) 分享案例，说明目标、你的问题、REA 如何提供帮助，以及你的发现。

## REA 的工作原理

智能体通过 MCP 调用 REA，检查目标并追踪相关代码。REA 返回发现及对应证据。智能体据此提出后续问题、解释行为，或编写并测试实现。CLI 命令使用同样的工作流。

![REA 调查流程：智能体询问本地目标的行为，REA 使用分析工具检查和追踪目标，智能体再利用返回的代码、引用和未知项进行解释、实现与测试。](https://raw.githubusercontent.com/morluto/rea/main/website/public/assets/figures/rea-investigation-flow.svg)

[打开完整尺寸的图示](https://raw.githubusercontent.com/morluto/rea/main/website/public/assets/figures/rea-investigation-flow.svg)。

<a id="current-status"></a>

## 可以分析什么

原生二进制文件 · JavaScript / Electron · 网站 · .NET 程序集 · Android APK · 固件 · 进程行为

[支持的格式与运行要求](https://github.com/morluto/rea/blob/main/docs/reference/supported-targets.md)

<a id="choosing-a-deep-analysis-provider"></a>

[选择分析引擎](https://github.com/morluto/rea/blob/main/docs/reference/supported-targets.md#choosing-a-deep-analysis-provider)

<a id="build-rl-environments"></a>

## 构建 RL 环境

基于录制的网页会话或 Linux 桌面应用构建本地环境，让智能体练习任务并检查结果。

[构建 RL 环境](https://rea.tools/guides/rl-environments/)

## 常见问题

<details>
<summary><strong>哪些智能体可以使用 REA？</strong></summary>

任何支持本地 MCP 服务的智能体都可以使用。设置流程会配置[受支持的智能体](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md#supported-agents)；其他客户端可通过[手动注册 MCP](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md#mcp-registry) 使用。

</details>

<details>
<summary><strong>需要 Hopper、Ghidra、IDA 或 Kuna 吗？</strong></summary>

深入的原生分析需要其中一个引擎。静态 JavaScript 和 .NET 检查不需要原生分析引擎。设置流程可以在你批准后安装 Hopper；Ghidra、IDA 和 Kuna 则使用已有安装。见[提供方设置](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md#hopper)。

</details>

<details>
<summary><strong>需要先启动 Hopper 吗？</strong></summary>

REA 会在操作需要时启动 Hopper。在 macOS 上，首次运行时可能会出现对话框，让你选择演示模式或激活许可证。见 [Hopper 启动与故障排查](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md#launcher-paths-and-troubleshooting)。

</details>

<details>
<summary><strong>从 skills.sh 安装 skill 有什么作用？</strong></summary>

skill 为智能体提供调查指引。使用 `npx rea-agents setup` 注册 REA 的 MCP 服务并安装匹配的指引，然后重启智能体。见[仅安装 skill](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md#skill-only-installation)。

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

可以先阅读网站上的[实操指南](https://rea.tools/zh-CN/guides/)。具体选项、前提条件和结果契约见：

- [安装与设置](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md)：智能体注册、提供方配置、更新和卸载。
- [就绪检查与故障排查](https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md#check-readiness-for-your-task)：诊断特定智能体或分析引擎。
- [CLI 与 Evidence](https://github.com/morluto/rea/blob/main/docs/getting-started/cli.md)：命令、提供方选择、快照、导入/导出和退出状态。
- [MCP 契约](https://github.com/morluto/rea/blob/main/docs/reference/mcp-contracts.md)和[智能体提示词](https://github.com/morluto/rea/blob/main/docs/getting-started/mcp-prompts.md)：工具结果、会话和引导式调查。
- [工具目录](https://github.com/morluto/rea/blob/main/docs/reference/mcp-contracts.md#generated-catalog)：构建时生成的工具、提供方和 CLI 命令清单。

请按照 [SECURITY.md](https://github.com/morluto/rea/blob/main/SECURITY.md) 报告漏洞。

## 社区与支持

- **Discord** — 欢迎提问、分享你的研究，加入由五万多名逆向工程爱好者和开发者组成的社区！ [![Discord](https://img.shields.io/badge/Join%20Discord-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/GkcryMnJDM)
- **Twitter / X** — 关注 [@reatools](https://x.com/reatools) 获取更新与公告。
- **反馈与建议** — 想要新功能或支持某种文件格式？欢迎在 [GitHub](https://github.com/morluto/rea/issues) 或 [Discord](https://discord.gg/GkcryMnJDM) 告诉我们。

## Star 历史

🎉 **GitHub Star 达到 400,000 个，感谢大家！**

感谢每一位使用 REA、报告错误、提出功能需求、测试构建和贡献修复的朋友。

<a href="https://rea.tools/zh-CN/contributors/">
  <img src="https://raw.githubusercontent.com/morluto/rea/main/website/public/contributors/avatars.png" alt="REA 贡献者" />
</a>

<a href="https://www.star-history.com/?repos=morluto%2Frea&amp;type=date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=morluto/rea&amp;type=date&amp;theme=dark&amp;legend=top-left" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=morluto/rea&amp;type=date" />
    <img alt="REA 的 GitHub Star 历史" src="https://api.star-history.com/chart?repos=morluto/rea&amp;type=date" />
  </picture>
</a>

## 参与贡献

欢迎帮助改进 REA！你可以[提交 issue](https://github.com/morluto/rea/issues) 报告错误或建议功能，也可以[提交 pull request](https://github.com/morluto/rea/pulls) 改进代码或文档。

开发设置和检查见 [CONTRIBUTING.md](https://github.com/morluto/rea/blob/main/CONTRIBUTING.md)，验证流程见[测试指南](https://github.com/morluto/rea/blob/main/docs/development/testing.md)。

## 免责声明

负责任使用的相关指引请见 [DISCLAIMER.md](https://github.com/morluto/rea/blob/main/DISCLAIMER.md)。

REA 用于合法的研究、教育、互操作性、软件保存，以及分析你拥有或获准检查的软件。

本项目对非法或未经授权使用的立场涵盖所有 REA 版本、分发渠道和运行平台；
每份副本仍适用其随附的许可。

## 许可证

[MIT](https://raw.githubusercontent.com/morluto/rea/main/LICENSE)

REA 自行编写的代码采用 MIT 许可；第三方内容保留各自的许可和著作权声明。
依赖清单、许可原文及外部工具条款见[第三方声明](https://github.com/morluto/rea/blob/main/THIRD_PARTY_NOTICES.md)。

**用户须自行合法取得商用工具及所需使用权**，包括 IDA Pro / Hex-Rays 反编译器、
Hopper 和 JEB，并遵守各自许可。REA 不提供工具许可、密钥或激活权利；试用版和
演示版也须遵守厂商对用户、功能、自动化及输出分享的限制。不得使用破解副本、
窃取或违规共用密钥，也不得绕过许可限制。本指引不变更 MIT 或第三方许可。
