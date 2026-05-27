import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { YouTubeVideoGrid } from "@/components/YouTubeVideoGrid";
import { socialLinks } from "@/lib/content";

const youtubeUploadsPlaylistId = "UU_8544wP0TvUpCB8XRsCIvw";

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="Social-first education people can share quickly."
        intro="Watch the newest CrushingT1 YouTube uploads, then follow the social channels for more education and campaign clips."
      />
      <Section
        eyebrow="YouTube"
        title="Latest videos from CrushingT1"
        intro="The newest uploads appear here automatically from the CrushingT1 YouTube channel."
      >
        <YouTubeVideoGrid playlistId={youtubeUploadsPlaylistId} />
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="btn btn-secondary"
            href={`https://www.youtube.com/playlist?list=${youtubeUploadsPlaylistId}`}
            target="_blank"
            rel="noreferrer"
          >
            Open full playlist
            <ExternalLink aria-hidden="true" />
          </a>
          <a className="btn btn-primary" href="https://www.youtube.com/@CrushingT1" target="_blank" rel="noreferrer">
            Visit YouTube
            <ExternalLink aria-hidden="true" />
          </a>
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
