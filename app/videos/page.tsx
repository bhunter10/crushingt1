import { ExternalLink, PlayCircle } from "lucide-react";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { instagramVideos, socialLinks, videos } from "@/lib/content";

export const dynamic = "force-dynamic";

type InstagramVideo = {
  title: string;
  caption: string;
  href: string;
  videoUrl?: string;
  poster?: string;
};

type InstagramMediaNode = {
  __typename?: string;
  shortcode?: string;
  is_video?: boolean;
  product_type?: string;
  video_url?: string;
  thumbnail_tall_src?: string;
  display_url?: string;
  edge_media_to_caption?: {
    edges?: Array<{
      node?: {
        text?: string;
      };
    }>;
  };
};

function cleanInstagramCaption(caption: string | undefined) {
  return caption?.replace(/\s+/g, " ").trim() ?? "";
}

function titleFromCaption(caption: string, fallback: string) {
  const firstSentence = caption.split(/[.!?]/)[0]?.replace(/#\w+/g, "").trim();
  return firstSentence || fallback;
}

async function getInstagramVideos(): Promise<InstagramVideo[]> {
  try {
    const response = await fetch("https://i.instagram.com/api/v1/users/web_profile_info/?username=crushingt1", {
      cache: "no-store",
      headers: {
        accept: "application/json,text/plain,*/*",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        "x-ig-app-id": "936619743392459"
      }
    });

    if (!response.ok) {
      return instagramVideos;
    }

    const feed = await response.json();
    const edges = feed?.data?.user?.edge_owner_to_timeline_media?.edges;

    if (!Array.isArray(edges)) {
      return instagramVideos;
    }

    const fallbackByShortcode = new Map(
      instagramVideos.map((video) => [video.href.split("/").filter(Boolean).at(-1), video])
    );

    const feedVideos = edges
      .map((edge: { node?: InstagramMediaNode }) => edge.node)
      .filter((node: InstagramMediaNode | undefined): node is InstagramMediaNode => Boolean(node?.is_video && node.shortcode))
      .slice(0, 6)
      .map((node: InstagramMediaNode, index: number) => {
        const fallback = fallbackByShortcode.get(node.shortcode) ?? instagramVideos[index];
        const caption = cleanInstagramCaption(node.edge_media_to_caption?.edges?.[0]?.node?.text);

        return {
          title: fallback?.title ?? titleFromCaption(caption, "Instagram video"),
          caption: fallback?.caption ?? (caption || "A recent Crushing T1 video from Instagram."),
          href: `https://www.instagram.com/reel/${node.shortcode}/`,
          videoUrl: node.video_url,
          poster: node.thumbnail_tall_src ?? node.display_url
        };
      });

    return feedVideos.length > 0 ? feedVideos : instagramVideos;
  } catch {
    return instagramVideos;
  }
}

export default async function VideosPage() {
  const feedVideos = await getInstagramVideos();

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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {feedVideos.map((video) => (
              <article key={video.href} className="card overflow-hidden p-0">
                {video.videoUrl ? (
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="aspect-[9/16] w-full bg-ink object-cover"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <a
                    href={video.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex aspect-[9/16] w-full items-center justify-center bg-ink p-6 text-center font-black text-white"
                  >
                    Watch on Instagram
                  </a>
                )}
                <div className="p-5">
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
