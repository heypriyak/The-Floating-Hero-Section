import { type LucideIcon } from "lucide-react";

type FloatingCardTone = "blue" | "orange" | "dark" | "teal" | "white";

const toneStyles: Record<FloatingCardTone, string> = {
  blue: "bg-blue-600 text-white shadow-blue-600/20 dark:bg-blue-500",
  orange: "bg-orange-400 text-zinc-900 shadow-orange-500/25 dark:bg-orange-300",
  dark: "bg-zinc-900 text-white shadow-zinc-900/20 dark:bg-zinc-800",
  teal: "bg-teal-500 text-white shadow-teal-500/20 dark:bg-teal-400 dark:text-zinc-900",
  white:
    "bg-white text-zinc-900 shadow-zinc-900/10 ring-1 ring-zinc-900/10 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-white/10",
};

type BaseProps = {
  tone?: FloatingCardTone;
  rotation?: number;
  className?: string;
};

type DefaultCardProps = BaseProps & {
  variant?: "default";
  icon: LucideIcon;
  label: string;
};

type PortalCardProps = BaseProps & {
  variant: "portal";
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export type FloatingCardProps = DefaultCardProps | PortalCardProps;

export function FloatingCard(props: FloatingCardProps) {
  const tone = props.tone ?? "white";
  const rotation = props.rotation ?? 0;

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`cursor-pointer rounded-2xl px-5 py-3 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105 ${toneStyles[tone]} ${props.className ?? ""}`}
    >
      {props.variant === "portal" ? (
        <div className="min-w-52">
          <p className="text-lg font-semibold leading-tight">{props.title}</p>
          <p className="mt-1 text-sm opacity-80">{props.subtitle}</p>
          {props.children}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <props.icon className="h-5 w-5" />
          <span className="text-sm font-semibold tracking-tight">{props.label}</span>
        </div>
      )}
    </div>
  );
}
