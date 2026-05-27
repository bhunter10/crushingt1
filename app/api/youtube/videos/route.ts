import { NextResponse } from "next/server";

const uploadsPlaylistId = "UU_8544wP0TvUpCB8XRsCIvw";
const channelId = "UC_8544wP0TvUpCB8XRsCIvw";
const feedUrls = [
  `https://www.youtube.com/feeds/videos.xml?playlist_id=${uploadsPlaylistId}`,
  `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
];

type YouTubeVideo = {
  id: string;
  title: string;
  href: string;
  published: string;
};

function readTag(entry: string, tag: string) {
  const match = entry.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));

  return match?.[1]?.replace(/<!\[CDATA\[|\]\]>/g, "").trim() ?? "";
}

function parseVideos(xml: string): YouTubeVideo[] {
  return Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g))
    .map((match) => {
      const entry = match[1];
      const id = readTag(entry, "yt:videoId");

      return {
        id,
        title: readTag(entry, "title"),
        href: `https://www.youtube.com/watch?v=${id}`,
        published: readTag(entry, "published")
      };
    })
    .filter((video) => video.id && video.title)
    .slice(0, 12);
}

export async function GET() {
  try {
    for (const feedUrl of feedUrls) {
      const response = await fetch(feedUrl, {
        next: { revalidate: 60 * 60 }
      });

      if (!response.ok) {
        continue;
      }

      const xml = await response.text();
      const videos = parseVideos(xml);

      if (videos.length > 0) {
        return NextResponse.json({ videos });
      }
    }

    return NextResponse.json({ videos: [] }, { status: 404 });
  } catch {
    return NextResponse.json({ videos: [] }, { status: 502 });
  }
}
