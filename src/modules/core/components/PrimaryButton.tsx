import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "blue" | "dark" | "white";

interface PrimaryButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  children: ReactNode;
  className?: string;
  size?: "md" | "sm";
  hideArrow?: boolean;
}

const variantStyles: Record<Variant, { bg: string; text: string; iconBg: string; iconText: string; hover: string }> = {
  blue: {
    bg: "bg-[#1344fe]",
    text: "text-white",
    iconBg: "bg-[#1344fe]",
    iconText: "text-white",
    hover: "group-hover:bg-[#1b123d]",
  },
  dark: {
    bg: "bg-[#1b123d]",
    text: "text-white",
    iconBg: "bg-[#1b123d]",
    iconText: "text-white",
    hover: "group-hover:bg-[#1344fe]",
  },
  white: {
    bg: "bg-white",
    text: "text-[#1b123d]",
    iconBg: "bg-white",
    iconText: "text-[#1b123d]",
    hover: "group-hover:bg-[#1b123d] group-hover:text-white",
  },
};

const CustomArrow = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M7 17L17 7M17 7H8M17 7V16" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export function PrimaryButton({
  to,
  href,
  onClick,
  type = "button",
  variant = "blue",
  children,
  className,
  size = "md",
  hideArrow = false,
}: PrimaryButtonProps) {
  const v = variantStyles[variant];
  const h = size === "sm" ? "h-12" : "h-[60px]";
  const padX = size === "sm" ? "px-5" : "px-6";
  const iconBox = size === "sm" ? "w-12" : "w-[60px]";

  const inner = (
    <span className={cn("group inline-flex items-stretch gap-0.5", className)}>
      <span
        className={cn(
          h, padX,
          v.bg, v.text, v.hover,
          "rounded-xl md:rounded-xl flex items-center justify-center font-medium transition-all duration-300",
          { "pr-6": hideArrow }
        )}
        style={{ fontFamily: "Instrument Sans" }}
      >
        <span className={size === "sm" ? "text-[15px]" : "text-[18px]"}>{children}</span>
      </span>
      {!hideArrow && (
        <span
          className={cn(
            h, iconBox,
            v.iconBg, v.iconText, v.hover,
            "rounded-xl md:rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden"
          )}
        >
          <CustomArrow
            className="h-7 w-7 absolute transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0"
          />
          <CustomArrow
            className="h-7 w-7 absolute -translate-x-6 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
          />
        </span>
      )}
    </span>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className="inline-block">
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}
