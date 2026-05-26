import { ExternalLink, PlayCircle } from "lucide-react";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { socialLinks, videos } from "@/lib/content";

export default function VideosPage() {
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
