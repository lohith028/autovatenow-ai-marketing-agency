import clsx from "clsx";

type StatCardProps = {
  value: string;
  label: string;
  subtext?: string;
  variant?: "white" | "blue" | "gold";
  className?: string;
};

export default function StatCard({ value, label, subtext, variant = "white", className }: StatCardProps) {
  const variants = {
    white: "bg-white text-brand-blue border border-border shadow-float",
    blue: "bg-brand-blue text-white shadow-float",
    gold: "bg-brand-gold text-white shadow-cta",
  };
  return (
    <div className={clsx(
      "rounded-2xl px-5 py-4 min-w-[160px]",
      variants[variant],
      className
    )}>
      <div className={clsx(
        "font-heading font-800 text-2xl leading-tight",
        variant === "white" ? "text-brand-blue" : "text-white"
      )}>
        {value}
      </div>
      <div className={clsx(
        "text-xs font-semibold mt-1",
        variant === "white" ? "text-text-secondary" : "text-white/80"
      )}>
        {label}
      </div>
      {subtext && (
        <div className={clsx(
          "text-xs mt-0.5",
          variant === "white" ? "text-text-muted" : "text-white/60"
        )}>
          {subtext}
        </div>
      )}
    </div>
  );
}
