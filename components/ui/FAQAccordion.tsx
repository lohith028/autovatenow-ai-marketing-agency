"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

type FAQ = { q: string; a: string };
type FAQAccordionProps = { items: FAQ[]; className?: string };

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={clsx("space-y-3", className)}>
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface-gray transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-heading font-semibold text-sm text-text-primary pr-4">{item.q}</span>
            <ChevronDown
              size={18}
              className={clsx(
                "flex-shrink-0 text-brand-blue transition-transform duration-300",
                open === i && "rotate-180"
              )}
            />
          </button>
          <div className={clsx(
            "overflow-hidden transition-all duration-300",
            open === i ? "max-h-96" : "max-h-0"
          )}>
            <div className="px-6 pb-5 text-sm text-text-secondary leading-relaxed border-t border-border pt-4">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
