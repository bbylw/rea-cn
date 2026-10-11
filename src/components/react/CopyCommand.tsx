import { useCallback, useEffect, useRef, useState } from "react";

type Status = "idle" | "copied" | "failed";

interface Props {
  command: string;
  size?: "md" | "lg";
}

export default function CopyCommand({ command, size = "md" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = useCallback(async () => {
    if (timer.current) clearTimeout(timer.current);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        const el = document.createElement("textarea");
        el.value = command;
        el.setAttribute("readonly", "");
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(el);
        if (!ok) throw new Error("copy rejected");
      }
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    timer.current = setTimeout(() => setStatus("idle"), 2200);
  }, [command]);

  // The dark well only ever sits on the dark chapter, so it carries its own
  // text tokens rather than the light-surface ones.
  const label = status === "copied" ? "已复制" : status === "failed" ? "复制失败" : "复制";

  return (
    <div className="flex items-stretch border border-panel-line-2 bg-panel">
      <code
        className={`flex min-w-0 flex-1 items-center overflow-x-auto whitespace-nowrap px-4 font-mono tracking-[0.01em] ${
          size === "lg" ? "py-4 text-[14px]" : "py-3.5 text-[13px]"
        } text-panel-text`}
      >
        <span className="mr-2.5 select-none text-rust-3" aria-hidden="true">
          $
        </span>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className={`shrink-0 border-l border-panel-line-2 bg-panel px-4 font-mono text-[11.5px] tracking-[0.1em] transition-colors duration-300 focus-visible:outline-offset-[-3px] ${
          status === "idle"
            ? "text-panel-mute hover:bg-panel-3 hover:text-panel-text"
            : status === "copied"
              ? "text-signal hover:bg-panel-3"
              : "text-rust-3 hover:bg-panel-3"
        }`}
      >
        {label}
      </button>
    </div>
  );
}
