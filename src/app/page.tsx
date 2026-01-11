import Link from "next/link";

type Video = {
  id: string;
  title: string;
  published: string;
  thumb: string;
};

async function getLatestVideos(): Promise<Video[]> {
  const channelId = "UCUOzW2EXVmtZmSycKCmBMkw";
  const rss = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  const res = await fetch(rss, { next: { revalidate: 1800 } });
  if (!res.ok) return [];
  const xml = await res.text();

  const entries = xml.split("<entry>").slice(1).slice(0, 12);

  return entries
    .map((chunk) => {
      const id = chunk.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? "";
      const title = chunk.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
      const published = chunk.match(/<published>(.*?)<\/published>/)?.[1] ?? "";
      const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
      return { id, title, published, thumb };
    })
    .filter((v) => v.id);
}

export default async function Home() {
  const videos = await getLatestVideos();
  const spotifyArtistId = "6oOAP9o5Hqmtzffr6OyQ9y";

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        <h1 className="relative z-10 text-5xl md:text-7xl font-bold tracking-tight">
          MR BREY
        </h1>
        <p className="relative z-10 mt-6 max-w-2xl text-lg text-zinc-300">
          Música urbana y cinematográfica.  
          Videos, sonido y conciencia en un mismo espacio.
        </p>

        <div className="relative z-10 mt-10 flex gap-4">
  <a
    href="#radio"
    className="rounded-xl bg-white px-6 py-3 text-black font-semibold"
  >
    Escuchar Radio
  </a>

  <a
    href="/videos"
    className="rounded-xl border border-white px-6 py-3 text-white font-semibold"
  >
    Ver Videos
  </a>
</div>


      {/* VIDEOS */}
      <section id="videos" className="px-6 py-20 md:px-16">
        <h2 className="text-3xl font-semibold mb-10">Videos Oficiales</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <img
  src={v.thumb}
  alt={v.title}
  loading="lazy"
  className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
/>

              <div className="p-4">
                <h3 className="text-sm font-semibold line-clamp-2">
                  {v.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* RADIO */}
      <section id="radio" className="px-6 py-20 md:px-16 bg-zinc-950">
        <h2 className="text-3xl font-semibold mb-6">Radio Mr Brey</h2>
        <p className="mb-10 max-w-2xl text-zinc-400">
          Un flujo continuo de música y atmósfera.
        </p>

        <iframe
          style={{ borderRadius: 16 }}
          src={`https://open.spotify.com/embed/artist/${spotifyArtistId}`}
          width="100%"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 md:px-16 text-sm text-zinc-500">
        © {new Date().getFullYear()} Mr Brey. Todos los derechos reservados.
      </footer>
    </main>
  );
}
