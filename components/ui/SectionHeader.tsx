import clsx from "clsx";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light,
  className,
}: SectionHeaderProps) {
  return (
    <div className={clsx(
      "max-w-2xl mb-12",
      align === "center" && "mx-auto text-center",
      className
    )}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-6 h-px bg-brand-gold" />
          <span className={clsx(
            "text-xs font-semibold uppercase tracking-widest",
            light ? "text-brand-gold" : "text-brand-blue"
          )}>
            {eyebrow}
          </span>
          <div className="w-6 h-px bg-brand-gold" />
        </div>
      )}
      <h2 className={clsx(
        "font-heading font-bold leading-tight",
        title.length > 40 ? "text-3xl md:text-4xl" : "text-3xl md:text-4xl",
        light ? "text-white" : "text-text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          "mt-4 text-base leading-relaxed",
          light ? "text-blue-200" : "text-text-secondary"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
