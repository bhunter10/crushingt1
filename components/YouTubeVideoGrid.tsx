"use client";

import { Play } from "lucide-react";
import Image from "next/image";
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
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
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
      <div className="youtube-video-grid">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="youtube-video-skeleton" />
        ))}
      </div>
    );
  }

  if (hasError || videos.length === 0) {
    return (
      <article className="youtube-video-card youtube-video-card-featured">
        <iframe
          className="youtube-video-frame"
          src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1&playsinline=1&showinfo=0`}
          title="CrushingT1 YouTube videos"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className="youtube-video-copy">
          <h3>CrushingT1 YouTube playlist</h3>
          <p>
            Use the playlist controls in the embedded player to browse the latest videos.
          </p>
        </div>
      </article>
    );
  }

  return (
    <div className="youtube-video-grid">
      {videos.map((video) => (
        <article key={video.id} className="youtube-video-card">
          {activeVideoId === video.id ? (
            <iframe
              className="youtube-video-frame"
              src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              className="youtube-video-poster"
              type="button"
              onClick={() => setActiveVideoId(video.id)}
              aria-label={`Play ${video.title}`}
            >
              <Image
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt=""
                width={480}
                height={360}
              />
              <span className="youtube-video-play" aria-hidden="true">
                <Play className="youtube-video-play-icon" />
              </span>
            </button>
          )}
          <div className="youtube-video-copy">
            <h3>{video.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
