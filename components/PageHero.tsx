type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-black leading-tight text-ink sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">{intro}</p>
      </div>
    </section>
  );
}
