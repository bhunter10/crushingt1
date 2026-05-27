"use client";

import { useEffect, useState } from "react";

type YouTubeVideo = {
  id: string;
  title: string;
  href: string;
  published: string;
};

type YouTubeVideoGridProps = {
  playlistId: string;
};

export function YouTubeVideoGrid({ playlistId }: YouTubeVideoGridProps) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadVideos() {
      try {
        const response = await fetch("/api/youtube/videos");

        if (!response.ok) {
          throw new Error("Unable to load YouTube videos.");
        }

        const data = (await response.json()) as { videos?: YouTubeVideo[] };

        if (isMounted) {
          setVideos(data.videos ?? []);
          setHasError(false);
        }
      } catch {
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadVideos();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="aspect-video animate-pulse rounded-lg bg-slate-200" />
        ))}
      </div>
    );
  }

  if (hasError || videos.length === 0) {
    return (
      <article className="card overflow-hidden p-0">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&rel=0`}
          title="CrushingT1 YouTube playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className="p-5">
          <h3 className="text-lg font-black leading-snug text-ink">CrushingT1 YouTube playlist</h3>
          <p className="mt-2 leading-7 text-slate-700">
            Use the playlist controls in the embedded player to browse the latest videos.
          </p>
        </div>
      </article>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {videos.map((video) => (
        <article key={video.id} className="card overflow-hidden p-0">
          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="p-5">
            <h3 className="text-lg font-black leading-snug text-ink">{video.title}</h3>
            <a className="mt-3 inline-flex font-bold text-ocean hover:text-coral" href={video.href} target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
