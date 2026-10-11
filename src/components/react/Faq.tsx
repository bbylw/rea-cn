import { useId, useState } from "react";

interface Item {
  q: string;
  a: string;
  code?: string;
}

const ITEMS: Item[] = [
  {
    q: "哪些智能体可以使用 REA？",
    a: "任何支持本地 MCP 服务的智能体都可以使用。设置流程会自动配置受支持的智能体（Claude Code、Codex、Cursor、Gemini CLI、Grok Build 等）；其他客户端可以通过手动注册 MCP 接入。",
  },
  {
    q: "需要 Hopper、Ghidra 或 IDA 吗？",
    a: "深入的原生分析需要其中一个引擎。静态 JavaScript 和 .NET 检查不需要原生分析引擎。设置流程可以在你批准后安装 Hopper；Ghidra 和 IDA 使用你已有的安装。不同提供方支持的原生格式和主机系统有所不同。",
  },
  {
    q: "需要先启动 Hopper 吗？",
    a: "不需要。REA 会在操作需要时启动 Hopper。在 macOS 上，首次运行时可能会出现对话框，让你选择演示模式或激活许可证。",
  },
  {
    q: "从 skills.sh 安装 skill 有什么作用？",
    a: "skill 为智能体提供调查指引。使用 npx rea-agents setup 注册 REA 的 MCP 服务并安装匹配的指引，然后重启智能体即可。也可以只安装 skill。",
  },
  {
    q: "REA 返回什么代码？",
    a: "原生分析返回伪代码和汇编；JavaScript / Electron 分析恢复模块及其关系；.NET 分析返回元数据与 CIL 指令。智能体利用这些发现编写并测试实现，案例中提供了可复现的完整示例。",
  },
  {
    q: "REA 会上传我的应用吗？",
    a: "不会。REA 在本机分析目标。智能体会接收工具结果，而它背后的模型提供商有自己的数据政策，这一点取决于你选择的智能体。",
  },
  {
    q: "遇到错误时该怎么办？",
    a: "先更新，最近的版本很可能已修复了问题。通过 npm 安装的 CLI 运行 rea update；用 npx 设置智能体则重新执行 npx rea-agents@latest setup。完成设置更新后重启智能体，再重试同一任务。若问题依旧，请提交 issue 并附上 REA 版本、目标类型、复现步骤和错误输出。",
    code: "npx rea-agents@latest setup",
  },
];

const ROW = "grid gap-x-10 sm:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul>
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-line">
            <div className={ROW}>
              <h3>
                <button
                  type="button"
                  id={`${baseId}-trigger-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`${baseId}-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300"
                >
                  <span
                    className={`font-display text-[18px] transition-colors duration-300 sm:text-[20px] ${
                      isOpen ? "text-ink" : "text-ink-2 group-hover:text-ink"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center border transition-colors duration-300 ${
                      isOpen ? "rotate-45 border-rust bg-rust text-white" : "border-line-2 text-muted"
                    }`}
                    aria-hidden="true"
                  >
                    <span className="text-[15px] leading-none">+</span>
                  </span>
                </button>
              </h3>

              <div
                id={`${baseId}-panel-${i}`}
                role="region"
                aria-labelledby={`${baseId}-trigger-${i}`}
                className="acc-panel min-w-0"
                data-open={isOpen}
              >
                <div>
                  <div className="max-w-[64ch] pb-8">
                    <p className="text-[15px] leading-[1.85] text-muted">{item.a}</p>
                    {item.code && (
                      <code className="mt-4 inline-block border border-line-2 bg-paper px-3.5 py-2 font-mono text-[12.5px] text-ink">
                        {item.code}
                      </code>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
