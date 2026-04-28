import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function BadgePill({
  children,
  variant = "light",
  className,
}: {
  children: ReactNode;
  variant?: "light" | "dark" | "outline";
  className?: string;
}) {
  const styles = {
    light: "bg-white border border-[#e7e7e7] text-[#1b123d]",
    dark: "bg-[#1344fe] border border-[#1344fe] text-white",
    outline: "bg-transparent border border-[#e7e7e7] text-white",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px]",
        styles[variant],
        className
      )}
      style={{ fontFamily: "Instrument Sans" }}
    >
      <span className="w-2 h-2 rounded-full bg-[#1344fe]" />
      {children}
    </span>
  );
}
