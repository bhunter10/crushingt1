import type { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  text: string;
  meta?: string;
  icon?: LucideIcon;
};

export function Card({ title, text, meta, icon: Icon }: CardProps) {
  return (
    <article className="card">
      <div className="flex items-start gap-4">
        {Icon ? (
          <div className="icon-badge" aria-hidden="true">
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
        <div>
          {meta ? <p className="text-sm font-semibold uppercase tracking-wide text-coral">{meta}</p> : null}
          <h3 className="mt-1 text-xl font-bold text-ink">{title}</h3>
          <p className="mt-3 leading-7 text-slate-700">{text}</p>
        </div>
      </div>
    </article>
  );
}
