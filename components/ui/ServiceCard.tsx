import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export default function ServiceCard({ icon, title, description, href, featured }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1",
        featured
          ? "bg-brand-blue border-brand-blue text-white shadow-card-hover"
          : "bg-white border-border hover:border-brand-blue hover:shadow-card-hover"
      )}
    >
      <div className={clsx(
        "w-14 h-14 rounded-2xl mb-5 transition-all duration-300 relative",
        featured
          ? "bg-gradient-to-br from-brand-gold to-orange-500 shadow-lg shadow-brand-gold/30 p-[1px]"
          : "bg-gradient-to-br from-blue-400 via-brand-blue to-indigo-600 shadow-lg shadow-brand-blue/30 p-[1px]"
      )}>
        <div className="w-full h-full bg-gradient-to-br from-white/40 to-white/5 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/50 text-white shadow-[inset_0_2px_10px_rgba(255,255,255,0.7)] group-hover:from-white/50 transition-colors">
          <span className="drop-shadow-md">
            {icon}
          </span>
        </div>
      </div>
      <h3 className={clsx(
        "font-heading font-bold text-lg mb-2 transition-colors",
        featured ? "text-white" : "text-text-primary group-hover:text-brand-blue"
      )}>
        {title}
      </h3>
      <p className={clsx(
        "text-sm leading-relaxed mb-4",
        featured ? "text-blue-100" : "text-text-secondary"
      )}>
        {description}
      </p>
      <span className={clsx(
        "inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5",
        featured ? "text-brand-gold" : "text-brand-blue"
      )}>
        Learn more <ArrowRight size={14} />
      </span>
    </Link>
  );
}
