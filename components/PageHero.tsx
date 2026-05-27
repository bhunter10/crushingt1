import type { CSSProperties } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  variant?: "default" | "news" | "shop";
  backgroundImage?: string;
};

type HeroStyle = CSSProperties & {
  "--page-hero-image"?: string;
};

export function PageHero({ eyebrow, title, intro, variant = "default", backgroundImage }: PageHeroProps) {
  const isBannerHero = variant === "news" || variant === "shop";
  const heroClassName = variant === "shop" ? "shop-hero" : variant === "news" ? "news-hero" : "bg-mist";
  const heroStyle: HeroStyle | undefined = backgroundImage
    ? { "--page-hero-image": `url("${backgroundImage}")` }
    : undefined;

  return (
    <section className={heroClassName} style={heroStyle}>
      <div className={isBannerHero ? "mx-auto flex min-h-[328px] max-w-6xl flex-col justify-center px-5 py-10 sm:px-6 sm:py-12 lg:px-8" : "mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"}>
        <p className={isBannerHero ? "text-sm font-black uppercase tracking-[0.08em] text-sky-200" : "eyebrow"}>{eyebrow}</p>
        <h1 className={isBannerHero ? "mt-4 max-w-4xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl" : "mt-2 max-w-4xl text-3xl font-black leading-tight text-ink sm:text-4xl"}>{title}</h1>
        <p className={isBannerHero ? "mt-6 max-w-2xl text-xl leading-9 text-slate-200" : "mt-3 max-w-3xl text-base leading-7 text-slate-700"}>{intro}</p>
      </div>
    </section>
  );
}
