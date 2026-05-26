import { ExternalLink, Play, PlayCircle } from "lucide-react";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { instagramVideos, socialLinks, videos } from "@/lib/content";

export default function VideosPage() {
  const videoPreviews = instagramVideos.filter((video) => video.poster);

  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="Social-first education people can share quickly."
        intro="A flexible video hub for TikTok, YouTube, Instagram, Facebook, livestreams, and education clips."
      />
      <Section title="Video series">
        <div className="grid gap-5 md:grid-cols-2">
          {videos.map((video) => (
            <Card key={video.title} meta={video.type} title={video.title} text={video.text} icon={PlayCircle} />
          ))}
        </div>
        <div className="mt-12">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Instagram feed</p>
              <h3 className="mt-2 text-3xl font-black text-ink">Recent social videos</h3>
            </div>
            <a
              href="https://www.instagram.com/crushingt1/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold text-ocean"
            >
              View on Instagram <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {videoPreviews.map((video) => (
              <article key={video.href}>
                <a
                  href={video.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden rounded-xl bg-ink bg-cover bg-center p-6 text-center font-black text-white shadow-[0_18px_45px_rgba(17,34,53,0.16)]"
                  style={{ backgroundImage: `url(${video.poster})` }}
                >
                  <span className="absolute inset-0 bg-ink/18 transition group-hover:bg-ink/28" aria-hidden="true" />
                  <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white/95 text-coral shadow-[0_18px_42px_rgba(17,34,53,0.24)] transition group-hover:scale-105">
                    <Play className="ml-1 h-10 w-10 fill-current" aria-hidden="true" />
                  </span>
                </a>
                <div className="mt-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg font-black text-ink">{video.title}</h4>
                    <a href={video.href} target="_blank" rel="noreferrer" aria-label={`Open ${video.title} on Instagram`}>
                      <ExternalLink className="mt-1 h-4 w-4 text-ocean" aria-hidden="true" />
                    </a>
                  </div>
                  <p className="mt-2 leading-7 text-slate-700">{video.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Channels"
        title="Follow the awareness channels"
        intro="Each channel gives supporters a simple way to share education, family stories, and future campaign videos."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((channel) => {
            const Icon = channel.icon;

            return (
              <a key={channel.href} href={channel.href} target="_blank" rel="noreferrer" className="card group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-ocean" aria-hidden="true" />
                    <h3 className="text-xl font-black text-ink">{channel.label}</h3>
                  </div>
                  <ExternalLink className="h-5 w-5 text-ocean transition group-hover:translate-x-1" />
                </div>
                <p className="mt-3 leading-7 text-slate-700">{channel.text}</p>
              </a>
            );
          })}
        </div>
      </Section>
    </>
  );
}
