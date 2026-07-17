import { Quote } from "lucide-react";
import clsx from "clsx";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  clinic: string;
  variant?: "light" | "dark";
  className?: string;
};

export default function TestimonialCard({
  quote,
  name,
  title,
  clinic,
  variant = "light",
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-8 border relative overflow-hidden",
        variant === "dark"
          ? "bg-brand-blue-dark border-white/10 text-white"
          : "bg-white border-border shadow-card",
        className
      )}
    >
      <Quote
        size={40}
        className={clsx(
          "absolute top-4 right-4 opacity-10",
          variant === "dark" ? "text-white" : "text-brand-blue"
        )}
      />
      <p className={clsx(
        "text-base leading-relaxed mb-6 italic",
        variant === "dark" ? "text-blue-100" : "text-text-secondary"
      )}>
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-blue-light flex items-center justify-center font-heading font-bold text-brand-blue">
          {name.charAt(0)}
        </div>
        <div>
          <div className={clsx(
            "font-heading font-semibold text-sm",
            variant === "dark" ? "text-white" : "text-text-primary"
          )}>
            {name}
          </div>
          <div className={clsx(
            "text-xs",
            variant === "dark" ? "text-blue-300" : "text-text-muted"
          )}>
            {title} — {clinic}
          </div>
        </div>
      </div>
    </div>
  );
}
