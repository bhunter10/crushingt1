import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { YouTubeVideoGrid } from "@/components/YouTubeVideoGrid";

const youtubeUploadsPlaylistId = "UU_8544wP0TvUpCB8XRsCIvw";

export default function NewsPage() {
  return (
    <>
      <PageHero
        variant="news"
        eyebrow=""
        title="News"
        intro="Updates, research explainers, awareness campaigns, and foundation milestones."
        backgroundImage="/images/news-hero-data-pulse-banner.png"
      />
      <Section
        title="Latest videos"
        intro=""
        className="bg-white"
      >
        <YouTubeVideoGrid playlistId={youtubeUploadsPlaylistId} />
        <div className="youtube-video-actions">
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
    </>
  );
}
