import { useId, useState } from "react";

interface Target {
  name: string;
  output: string;
  requirement: string;
}

interface Group {
  id: string;
  label: string;
  caption: string;
  targets: Target[];
}

const GROUPS: Group[] = [
  {
    id: "native",
    label: "原生与固件",
    caption: "需要分析提供方，或调用方自带的二进制工具链",
    targets: [
      {
        name: "原生二进制文件",
        output: "伪代码、汇编、字符串、符号、调用和引用",
        requirement: "Hopper、Ghidra 或 IDA",
      },
      {
        name: "离线 ELF 布局",
        output: "节、段、原始符号与重定位信息，以及静态防护机制候选项",
        requirement: "Linux x64 上由调用方提供的 pwntools",
      },
      {
        name: "EVM 字节码",
        output: "分派选择器、字节偏移、推断的参数和状态可变性",
        requirement: "Linux x64 上的本地原始字节或十六进制输入载体",
      },
      {
        name: "已记录的 Linux 崩溃",
        output: "原始 note 记录、每个已记录线程的寄存器与信号，以及可选的映射候选项",
        requirement: "pwntools（Linux x64）；可选的 GDB / pwndbg",
      },
      {
        name: "固件",
        output: "区域、提取结果，以及转交原生分析的内容",
        requirement: "Linux 上的 Binwalk / Unblob",
      },
    ],
  },
  {
    id: "apps",
    label: "应用与脚本",
    caption: "静态读取提供的文件，不运行目标",
    targets: [
      {
        name: "JavaScript / Electron",
        output: "模块、导入、source map、路由、IPC 和原生扩展关系",
        requirement: "Node.js 和 npm",
      },
      {
        name: ".NET 程序集",
        output: "元数据、CIL 指令、声明的原生依赖和构建对比",
        requirement: "静态检查，无需额外引擎",
      },
      {
        name: "软件包与资源",
        output: "文件清单、摘要、plist、Apple bundle 结构和提取的资源",
        requirement: "macOS / Windows / Linux x64",
      },
      {
        name: "JEB 项目",
        output: "引擎支持的项目单元、工件摘要，以及类型与方法的伪代码",
        requirement: "由调用方启动、提供 MCP 的 JEB 客户端",
      },
    ],
  },
  {
    id: "mobile",
    label: "移动端",
    caption: "APK、设备与资源三类入口",
    targets: [
      {
        name: "Android APK",
        output: "清单声明、类、反编译的方法和引用",
        requirement: "无界面 JADX 和完整 JDK",
      },
      {
        name: "Android 设备",
        output: "设备、软件包、进程、日志、转储、屏幕截图，以及 APK 与文件传输",
        requirement: "调用方提供的 adb（模拟器或实体设备）",
      },
      {
        name: "Android 资源",
        output: "解码后的清单、字符串表、语言区域和版本信息",
        requirement: "调用方提供的 Apktool 启动器",
      },
    ],
  },
  {
    id: "runtime",
    label: "运行时与网络",
    caption: "以你的用户权限运行目标，或与之交互",
    targets: [
      {
        name: "网站",
        output: "页面结构、脚本、网络观察结果，以及按请求获取的截图",
        requirement: "Chrome 系浏览器",
      },
      {
        name: "已保存的网络捕获",
        output: "请求、响应、可访问的载荷和来源位置",
        requirement: "HAR；原生 mitmproxy 捕获需要 Linux 上的 mitmdump",
      },
      {
        name: "进程行为",
        output: "终端输出、交互、退出和文件系统观察结果，以及运行对比",
        requirement: "支持原生 PTY 的 Linux / macOS",
      },
    ],
  },
];

export default function TargetTabs() {
  const [active, setActive] = useState(GROUPS[0].id);
  const baseId = useId();
  const group = GROUPS.find((g) => g.id === active) ?? GROUPS[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16">
      {/* Tab rail */}
      <div
        role="tablist"
        aria-label="分析目标分类"
        aria-orientation="vertical"
        className="flex gap-1 overflow-x-auto border-line pb-1 lg:sticky lg:top-28 lg:self-start lg:flex-col lg:gap-0 lg:overflow-visible lg:border-r lg:pb-0 lg:pr-6"
      >
        {GROUPS.map((g, i) => {
          const selected = g.id === active;
          return (
            <button
              key={g.id}
              id={`${baseId}-tab-${g.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${g.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(g.id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
                event.preventDefault();
                const dir = event.key === "ArrowDown" ? 1 : -1;
                const next = GROUPS[(i + dir + GROUPS.length) % GROUPS.length];
                setActive(next.id);
                document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
              }}
              className={`group relative shrink-0 whitespace-nowrap border-b px-4 py-3.5 text-left transition-colors duration-300 lg:w-full lg:border-b-0 lg:border-l lg:px-5 lg:py-5 ${
                selected
                  ? "border-ink bg-paper text-ink lg:border-l-2 lg:border-l-rust"
                  : "border-line text-muted hover:text-ink lg:border-l-line"
              }`}
            >
              <span className="text-[15px] font-medium">
                {g.label}
                <span className="tnum ml-2.5 font-mono text-[11px] opacity-55">
                  {g.targets.length}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`${baseId}-panel-${group.id}`}
        aria-labelledby={`${baseId}-tab-${group.id}`}
        className="min-w-0"
      >
        <p className="caption mb-5">{group.caption}</p>

        <ul className="border-t border-line">
          {group.targets.map((t) => (
            <li key={t.name} className="row-lift group border-b border-line py-6">
              <div className="grid gap-3 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] sm:gap-8">
                <div>
                  <h3 className="text-[19px] text-ink transition-colors duration-300 group-hover:text-rust-2">
                    {t.name}
                  </h3>
                  <p className="label mt-3">要求</p>
                  <p className="mt-1.5 text-[13px] leading-[1.7] text-ink-2">{t.requirement}</p>
                </div>
                <div className="sm:border-l sm:border-line sm:pl-8">
                  <p className="label">REA 返回</p>
                  <p className="mt-1.5 text-[14.5px] leading-[1.75] text-ink-2">{t.output}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
