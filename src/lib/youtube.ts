import { youtubeChannelUrl } from "@/data/media";

export type YouTubeVideo = {
  youtubeId: string;
  title: string;
  published?: string;
};

const CACHE_SECONDS = 60 * 60 * 6;

function decodeXml(value: string) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

async function resolveChannelId() {
  const response = await fetch(youtubeChannelUrl, {
    headers: { "User-Agent": "Mozilla/5.0" },
    next: { revalidate: CACHE_SECONDS },
  });

  if (!response.ok) throw new Error("Unable to resolve YouTube channel");

  const html = await response.text();
  const match =
    html.match(/"channelId":"(UC[^"]+)"/) ??
    html.match(/"externalId":"(UC[^"]+)"/);

  if (!match?.[1]) throw new Error("YouTube channel ID not found");
  return match[1];
}

export async function getLatestYouTubeVideos(limit = 12): Promise<YouTubeVideo[]> {
  try {
    const channelId = await resolveChannelId();
    const response = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: CACHE_SECONDS } },
    );

    if (!response.ok) return [];

    const xml = await response.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

    return entries
      .map((entry) => {
        const block = entry[1];
        const youtubeId = block.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1];
        const title = block.match(/<title>([\s\S]*?)<\/title>/)?.[1];
        const published = block.match(/<published>(.*?)<\/published>/)?.[1];

        if (!youtubeId || !title) return null;

        return {
          youtubeId,
          title: decodeXml(title.trim()),
          published,
        };
      })
      .filter((video): video is YouTubeVideo => Boolean(video))
      .slice(0, limit);
  } catch {
    return [];
  }
}

export async function getYouTubeVideoDetails(
  youtubeIds: readonly string[],
): Promise<YouTubeVideo[]> {
  const results = await Promise.all(
    youtubeIds.map(async (youtubeId, index) => {
      try {
        const watchUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
        const response = await fetch(
          `https://www.youtube.com/oembed?url=${encodeURIComponent(watchUrl)}&format=json`,
          { next: { revalidate: CACHE_SECONDS } },
        );

        if (!response.ok) throw new Error("oEmbed unavailable");
        const data = (await response.json()) as { title?: string };

        return {
          youtubeId,
          title: data.title?.trim() || `Video destacado ${index + 1}`,
        };
      } catch {
        return { youtubeId, title: `Video destacado ${index + 1}` };
      }
    }),
  );

  return results;
}
