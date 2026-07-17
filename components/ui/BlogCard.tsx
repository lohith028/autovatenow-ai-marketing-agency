import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import clsx from "clsx";

type BlogCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  className?: string;
};

export default function BlogCard({ title, excerpt, slug, category, date, readTime, image, className }: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    SEO: "bg-blue-50 text-brand-blue",
    Ads: "bg-orange-50 text-orange-600",
    Branding: "bg-purple-50 text-purple-600",
    "Web Design": "bg-teal-50 text-teal-600",
    Automation: "bg-green-50 text-green-600",
    "Case Studies": "bg-brand-gold-light text-brand-gold-dark",
  };
  return (
    <Link
      href={`/blog/${slug}`}
      className={clsx(
        "group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <div className="aspect-video bg-brand-blue-light flex items-center justify-center relative overflow-hidden">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        ) : (
          <div className="text-center p-6">
            <div className={clsx(
              "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3",
              categoryColors[category] || "bg-brand-blue-light text-brand-blue"
            )}>
              {category}
            </div>
            <div className="text-brand-blue/30 text-4xl font-heading font-bold">
              {title.charAt(0)}
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <span className={clsx(
          "inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3",
          categoryColors[category] || "bg-brand-blue-light text-brand-blue"
        )}>
          {category}
        </span>
        <h3 className="font-heading font-bold text-base text-text-primary group-hover:text-brand-blue transition-colors leading-snug mb-2">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {readTime}</span>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-brand-blue group-hover:gap-2 transition-all">
            Read <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}
