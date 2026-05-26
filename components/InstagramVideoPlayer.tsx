"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

type InstagramVideoPlayerProps = {
  title: string;
  videoUrl: string;
  poster?: string;
};

export function InstagramVideoPlayer({ title, videoUrl, poster }: InstagramVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const showPreview = Boolean(poster && !hasStarted);

  function playVideo() {
    void videoRef.current?.play();
  }

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-ink bg-cover bg-center shadow-[0_18px_45px_rgba(17,34,53,0.16)]"
      style={showPreview ? { backgroundImage: `url(${poster})` } : undefined}
    >
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        onPlay={() => {
          setHasStarted(true);
          setIsPaused(false);
        }}
        onPause={() => setIsPaused(true)}
        onEnded={() => setIsPaused(true)}
        className={`aspect-[9/16] w-full bg-ink object-cover ${showPreview ? "invisible" : "visible"}`}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {isPaused ? (
        <button
          type="button"
          onClick={playVideo}
          aria-label={`Play ${title}`}
          className="absolute left-1/2 top-1/2 z-20 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-coral shadow-[0_18px_42px_rgba(17,34,53,0.24)] transition group-hover:scale-105"
        >
          <Play className="ml-1 h-9 w-9 fill-current" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
