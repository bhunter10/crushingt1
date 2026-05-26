import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-9 max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {intro ? <p className="mt-4 text-lg leading-8 text-slate-700">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
