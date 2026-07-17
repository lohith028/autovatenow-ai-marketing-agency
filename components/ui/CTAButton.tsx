import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "blue" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  id?: string;
  className?: string;
  external?: boolean;
};

export default function CTAButton({
  href,
  children,
  variant = "gold",
  size = "md",
  id,
  className,
  external,
}: CTAButtonProps) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5";
  const variants = {
    gold: "bg-brand-gold hover:bg-brand-gold-dark text-white shadow-cta hover:shadow-lg",
    blue: "bg-brand-blue hover:bg-brand-blue-dark text-white shadow-card hover:shadow-card-hover",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    ghost: "text-brand-blue hover:text-brand-blue-dark hover:bg-brand-blue-light",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const props = {
    id,
    className: clsx(base, variants[variant], sizes[size], className),
    ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };

  return (
    <Link href={href} {...props}>
      {children}
      <ArrowRight size={size === "lg" ? 18 : 14} />
    </Link>
  );
}
