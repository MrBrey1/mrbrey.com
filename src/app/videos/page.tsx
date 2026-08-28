import Link from "next/link";
import {
  archiveFallbackVideos,
  campaignYoutubeIds,
  pressEmail,
  youtubeChannelUrl,
} from "@/data/media";
import {
  getLatestYouTubeVideos,
  getYouTubeVideoDetails,
} from "@/lib/youtube";

export const metadata = {
  title: "Videos Oficiales",
  description:
    "Videos musicales oficiales de Mr Brey: campaña actual, últimos lanzamientos y archivo audiovisual.",
  alternates: {
    canonical: "/videos",
  },
};

function formatDate(date?: string) {
  if (!date) return null;

  return new Intl.DateTimeFormat("es", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export default async function VideosPage() {
  const [campaignVideos, latestVideos] = await Promise.all([
    getYouTubeVideoDetails(campaignYoutubeIds),
    getLatestYouTubeVideos(15),
  ]);

  const campaignIds = new Set<string>(campaignYoutubeIds);
  const automaticVideos = latestVideos
    .filter((video) => !campaignIds.has(video.youtubeId))
    .slice(0, 12);

  const galleryVideos = automaticVideos.length
    ? automaticVideos
    : archiveFallbackVideos.filter(
        (video) => !campaignIds.has(video.youtubeId),
      );

  const isAutomatic = automaticVideos.length > 0;

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="glass sticky top-0 z-50 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            MR BREY<span className="text-lime-400">.</span>
          </Link>
          <div className="flex items-center gap-4 text-sm font-bold">
            <Link href="/press" className="hidden text-neutral-400 hover:text-lime-400 sm:inline">
              Press / EPK
            </Link>
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-lime-400 px-4 py-2 text-black hover:bg-lime-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 md:px-8 md:pt-20">
        <Link href="/" className="text-sm font-bold text-lime-400 hover:text-lime-300">
          ← Volver al inicio
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime-400">
            Archivo visual
          </p>
          <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">
            Videos oficiales de Mr Brey
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Música, historias y emoción en una colección audiovisual que acompaña la evolución artística de Mr Brey.
          </p>
        </div>

        <section className="mt-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-lime-400">
                Campaña actual
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Videos en promoción
              </h2>
            </div>
            <p className="max-w-xl text-neutral-500">
              Los visuales destacados actualmente en prensa, radio, redes y promoción digital.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {campaignVideos.map((video) => (
              <article
                key={video.youtubeId}
                className="group overflow-hidden rounded-3xl border border-lime-400/20 bg-neutral-950 shadow-2xl shadow-lime-400/5"
              >
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="p-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-lime-400">
                    Destacado
                  </span>
                  <h3 className="mt-2 line-clamp-2 text-lg font-black group-hover:text-lime-400">
                    {video.title}
                  </h3>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-neutral-400 hover:text-white"
                  >
                    Abrir en YouTube →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-14">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-neutral-500">
                Canal oficial
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                {isAutomatic ? "Últimos videos" : "Archivo oficial"}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-neutral-500">
              {isAutomatic
                ? "Esta sección se actualiza automáticamente con las publicaciones más recientes del canal oficial."
                : "Mostrando el archivo guardado mientras YouTube vuelve a estar disponible."}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryVideos.map((video) => {
              const published = "published" in video ? formatDate(video.published) : null;

              return (
                <article
                  key={video.youtubeId}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
                >
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="p-5">
                    {published ? (
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-600">
                        {published}
                      </p>
                    ) : null}
                    <h3 className="line-clamp-2 text-lg font-black group-hover:text-lime-400">
                      {video.title}
                    </h3>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-neutral-500 hover:text-lime-400"
                    >
                      Abrir en YouTube →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Mr Brey.</p>
          <div className="flex gap-5">
            <Link href="/press" className="hover:text-lime-400">Press / EPK</Link>
            <a href={`mailto:${pressEmail}`} className="hover:text-lime-400">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
