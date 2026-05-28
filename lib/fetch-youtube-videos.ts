const uploadsPlaylistId = "UU_8544wP0TvUpCB8XRsCIvw";
const channelId = "UC_8544wP0TvUpCB8XRsCIvw";

const feedUrls = [
  `https://www.youtube.com/feeds/videos.xml?playlist_id=${uploadsPlaylistId}`,
  `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
];

const fetchHeaders = {
  "User-Agent":
    "Mozilla/5.0 (compatible; CrushingT1/1.0; +https://crushingt1.com) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/xml,text/xml,application/json,*/*"
};

export type YouTubeVideo = {
  id: string;
  title: string;
  href: string;
  published: string;
};

function readTag(entry: string, tag: string) {
  const match = entry.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));

  return match?.[1]?.replace(/<!\[CDATA\[|\]\]>/g, "").trim() ?? "";
}

function parseRssVideos(xml: string): YouTubeVideo[] {
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

async function fetchRssVideos(): Promise<YouTubeVideo[]> {
  for (const feedUrl of feedUrls) {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const response = await fetch(feedUrl, {
        headers: fetchHeaders,
        next: { revalidate: 60 * 60 }
      });

      if (response.ok) {
        const videos = parseRssVideos(await response.text());

        if (videos.length > 0) {
          return videos;
        }

        break;
      }

      if (response.status !== 404 && response.status !== 503) {
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)));
    }
  }

  return [];
}

function parseInnertubeVideos(payload: unknown): YouTubeVideo[] {
  const videos: YouTubeVideo[] = [];

  function walk(node: unknown, depth = 0) {
    if (!node || typeof node !== "object" || depth > 40) {
      return;
    }

    const lockup = (node as { lockupViewModel?: Record<string, unknown> }).lockupViewModel;

    if (lockup) {
      const id =
        (typeof lockup.contentId === "string" && lockup.contentId) ||
        (
          lockup.onTap as
            | { innertubeCommand?: { watchEndpoint?: { videoId?: string } } }
            | undefined
        )?.innertubeCommand?.watchEndpoint?.videoId;

      const metadata = lockup.metadata as
        | { lockupMetadataViewModel?: { title?: { content?: string; simpleText?: string } } }
        | undefined;
      const title =
        metadata?.lockupMetadataViewModel?.title?.content ||
        metadata?.lockupMetadataViewModel?.title?.simpleText ||
        (lockup.title as { content?: string } | undefined)?.content;

      if (id && title) {
        videos.push({
          id,
          title,
          href: `https://www.youtube.com/watch?v=${id}`,
          published: ""
        });
      }
    }

    if (Array.isArray(node)) {
      node.forEach((item) => walk(item, depth + 1));
      return;
    }

    Object.values(node).forEach((item) => walk(item, depth + 1));
  }

  walk(payload);

  return [...new Map(videos.map((video) => [video.id, video])).values()].slice(0, 12);
}

async function fetchInnertubeVideos(): Promise<YouTubeVideo[]> {
  const response = await fetch("https://www.youtube.com/youtubei/v1/browse?prettyPrint=false", {
    method: "POST",
    headers: {
      ...fetchHeaders,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      context: {
        client: {
          clientName: "WEB",
          clientVersion: "2.20240101.00.00",
          hl: "en",
          gl: "US"
        }
      },
      browseId: channelId,
      params: "EgZ2aWRlb3PyBgQKAjoA"
    }),
    next: { revalidate: 60 * 60 }
  });

  if (!response.ok) {
    return [];
  }

  return parseInnertubeVideos(await response.json());
}

export async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
  const rssVideos = await fetchRssVideos();

  if (rssVideos.length > 0) {
    return rssVideos;
  }

  return fetchInnertubeVideos();
}
