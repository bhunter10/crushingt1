import { fetchYouTubeVideos } from "@/lib/fetch-youtube-videos";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const videos = await fetchYouTubeVideos();

    if (videos.length === 0) {
      return NextResponse.json({ videos: [] }, { status: 404 });
    }

    return NextResponse.json({ videos });
  } catch {
    return NextResponse.json({ videos: [] }, { status: 502 });
  }
}
