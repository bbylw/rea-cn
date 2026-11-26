import { useEffect, useId, useRef, useState } from "react";

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
        requirement: "Hopper、Ghidra、IDA 或 Kuna",
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
        requirement: "内置 UEFI / NVAR；Linux 上外部 Binwalk / Unblob",
      },
    ],
  },
  {
    id: "static",
    label: "二进制与静态工件",
    caption: "内置静态检查，多数目标无需额外引擎",
    targets: [
      {
        name: "Go 二进制文件",
        output: "内嵌编译器版本、模块、替换项和构建设置",
        requirement: "内置静态 ELF / PE / thin Mach-O 检查；无需安装 Go",
      },
      {
        name: "Rust 二进制文件",
        output: "内嵌的 cargo-auditable crate 名称、版本、来源与依赖边",
        requirement: "内置静态 ELF / PE / thin Mach-O / WebAssembly 模块检查",
      },
      {
        name: "Erlang BEAM",
        output: "IFF 块、原子、导出、导入、lambda 与 Code 头",
        requirement: "内置静态 BEAM 检查",
      },
      {
        name: "PE 证书",
        output: "Authenticode WIN_CERTIFICATE 条目，以及 PKCS#7 签名者 / X.509 身份字段",
        requirement: "内置静态 PE 检查",
      },
      {
        name: "PE 导入",
        output: "导入与延迟加载 DLL 名称、序号、IAT RVA 和 pefile 导入哈希",
        requirement: "内置静态 PE 检查",
      },
      {
        name: "Windows 快捷方式",
        output: "Shell Link 目标、参数、工作目录、ExtraData 与 Tracker 信息",
        requirement: "内置静态 LNK 检查",
      },
      {
        name: "ELF notes",
        output: "PT_NOTE / SHT_NOTE 所有者、类型、GNU build-id 和 ABI 标签字段",
        requirement: "内置静态 ELF 检查",
      },
      {
        name: "DWARF 编译单元",
        output: "编译单元名称、目录、生成器、语言和 dwo_name",
        requirement: "内置静态 ELF、Mach-O 与 PE 检查",
      },
      {
        name: "ELF 依赖",
        output: "DT_NEEDED、SONAME、RPATH / RUNPATH、GNU 版本和未定义导入",
        requirement: "内置静态 ELF 检查",
      },
      {
        name: "二进制加固",
        output: "ELF、PE 与 Mach-O 的 PIE、NX、RELRO、CFG 及相关头部标志",
        requirement: "内置静态头部检查",
      },
      {
        name: "Apple IPS 崩溃",
        output: ".ips 元数据、线程、映像、寄存器和崩溃分类",
        requirement: "内置静态 JSON 检查",
      },
      {
        name: "Linux 内核模块",
        output: ".modinfo 键、__versions CRC、this_module 存在性和签名尾部",
        requirement: "内置静态 ELF 检查",
      },
      {
        name: "WASM 工件",
        output: "验证、节、精确的导入 / 导出 WAT 形式及解码后的 WAT",
        requirement: "由调用方提供的 WABT 1.0.42",
      },
      {
        name: "GPU 代码对象",
        output: "CUDA / HIP / AMDGPU 目标与 ABI、内核与 AMD PAL 管线声明、保留的 PTX 文本",
        requirement: "内置静态 ELF / PE / fatbin / CUBIN / PTX 检查",
      },
      {
        name: "GPU 资源头",
        output: "DDS（含 DX10）、GLB、KTX 与 KTX2 头部字段及声明区域；不解码载荷",
        requirement: "内置静态头部解析",
      },
      {
        name: "模型文件",
        output: "GGUF / safetensors 元数据、张量声明和派生总量",
        requirement: "内置头部检查；可选完整文件哈希",
      },
      {
        name: "IL2CPP 元数据",
        output: "Unity global-metadata.dat 程序集映像、类型和方法名、索引范围",
        requirement: "内置静态解码版本 24、27、29、31 和 39；无需 Unity",
      },
      {
        name: "Godot PCK",
        output: "归档目录与提取、原始头部和目录信息、选定内容身份",
        requirement: "内置静态格式 2、3 和 4；无需 Godot",
      },
      {
        name: "tar 归档",
        output: "存储与 gzip 压缩 tar 的成员清单和提取，包括 .unitypackage",
        requirement: "内置静态 ustar、pax 和 GNU 头部检查",
      },
      {
        name: "NuGet 包",
        output: "包标识、依赖组、许可证、仓库及 ZIP 内容",
        requirement: "内置静态 .nupkg 检查",
      },
      {
        name: "PyInstaller",
        output: "CArchive 成员、Python 版本、入口脚本与提取的字节码",
        requirement: "静态检查",
      },
      {
        name: "Deno compile 二进制",
        output: "虚拟文件、入口点、录制的选项和 npm 快照长度",
        requirement: "静态检查",
      },
      {
        name: "SQLite 数据库",
        output: "表、列、索引、视图、触发器和选定普通表的行",
        requirement: "本地数据库 / WAL 快照；Node.js 24.x 或 26.x（不支持 22.x）",
      },
      {
        name: "桌面安装目录",
        output: "运行时候选、支持文件、组件标记和后续操作",
        requirement: "有界的目录与文件头检查",
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
        output: "模块、导入、source map、路由、IPC、原生扩展关系与 rea audit-release-exposure",
        requirement: "Node.js 和 npm；Linux 上需要兼容 procps 的 ps",
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
    caption: "APK、设备、资源与签名检查",
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
      {
        name: "Flutter 应用",
        output: "Dart 快照哈希、按 ABI 的库摘要及引擎构建溯源",
        requirement: "无（静态 APK 解析）",
      },
      {
        name: "APK 签名",
        output: "v1 / v2 / v3 / v3.1 签名者、证书指纹、密钥轮换和摘要自洽性",
        requirement: "内置静态检查",
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
        requirement: "HAR / Fiddler Everywhere SAZ；原生 mitmproxy 捕获需要 Linux 上的 mitmdump",
      },
      {
        name: "数据包捕获",
        output: "端点、DNS、TLS SNI、协议分布和 HTTP 请求",
        requirement: "调用方提供的 tshark 和 capinfos（Linux 需 prlimit，或 Windows）",
      },
      {
        name: "抓包文件",
        output: "指定字段、重复值、过滤条件与解码规则",
        requirement: "Linux：TShark 4.x + prlimit",
      },
      {
        name: "录制的逻辑信号",
        output: "解码注释、样本范围和诊断信息",
        requirement: "Linux：sigrok-cli 0.7.2 + prlimit",
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
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onBeforeMatch = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const panel = target.closest<HTMLElement>("[data-group-id]");
      const groupId = panel?.dataset.groupId;
      if (groupId) setActive(groupId);
    };

    root.addEventListener("beforematch", onBeforeMatch);
    return () => root.removeEventListener("beforematch", onBeforeMatch);
  }, []);

  const selectGroup = (groupId: string, focusTab = false) => {
    setActive(groupId);
    const tabEl = document.getElementById(`${baseId}-tab-${groupId}`);
    if (tabEl) {
      tabEl.scrollIntoView({ block: "nearest", inline: "nearest" });
      if (focusTab) tabEl.focus();
    }
  };

  return (
    <div ref={rootRef} className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16">
      {/* Tab rail */}
      <div
        role="tablist"
        aria-label="分析目标分类"
        className="tablist-scroll flex gap-1 overflow-x-auto border-line pb-1 lg:sticky lg:top-28 lg:self-start lg:flex-col lg:gap-0 lg:overflow-visible lg:border-r lg:pb-0 lg:pr-6"
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
              tabIndex={selected ? 0 : -1}
              onClick={() => selectGroup(g.id)}
              onKeyDown={(event) => {
                let nextIdx = -1;
                if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                  nextIdx = (i + 1) % GROUPS.length;
                } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                  nextIdx = (i - 1 + GROUPS.length) % GROUPS.length;
                } else if (event.key === "Home") {
                  nextIdx = 0;
                } else if (event.key === "End") {
                  nextIdx = GROUPS.length - 1;
                }
                if (nextIdx < 0) return;
                event.preventDefault();
                selectGroup(GROUPS[nextIdx].id, true);
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

      {/* Panels: inactive panels use hidden="until-found" so Find-in-Page reaches all 44 targets */}
      <div className="min-w-0">
        {GROUPS.map((g) => {
          const isActive = g.id === active;
          return (
            <div
              key={g.id}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${g.id}`}
              data-group-id={g.id}
              tabIndex={isActive ? 0 : undefined}
              hidden={!isActive ? ("until-found" as unknown as boolean) : undefined}
              className="focus:outline-none"
            >
              <div className="min-w-0">
                <p className="caption mb-5">{g.caption}</p>

                <ul className="border-t border-line">
                  {g.targets.map((t) => (
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
        })}
      </div>
    </div>
  );
}
