import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { YouTubeVideoGrid } from "@/components/YouTubeVideoGrid";
import { researchAngles } from "@/lib/content";

const youtubeUploadsPlaylistId = "UU_8544wP0TvUpCB8XRsCIvw";

export default function NewsPage() {
  return (
    <>
      <section className="news-hero">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            News
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-200">
            Updates, research explainers, awareness campaigns, and foundation milestones.
          </p>
        </div>
      </section>
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
      <Section
        eyebrow="Future research awareness"
        title="New angles that build donor confidence"
        intro="Future supporters need more than inspiration. They need to understand why the work matters and how their support can move education and research forward."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchAngles.map((angle) => (
            <Card key={angle.title} icon={angle.icon} title={angle.title} text={angle.text} />
          ))}
        </div>
      </Section>
    </>
  );
}
