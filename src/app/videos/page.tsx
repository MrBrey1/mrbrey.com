import Link from "next/link";

const campaignVideos = [
  { youtubeId: "qOKoaWX6ArU" },
  { youtubeId: "n7glKI_Di2E" },
  { youtubeId: "rIXRTSDiWkg" },
];

const archiveVideos = [
  { title: "Deambulando", youtubeId: "_Lr1Vwnv5fM" },
  { title: "Creo mundo con mis versos", youtubeId: "DK9j0gRpSoY" },
  { title: "No hay Ayer ni mañana", youtubeId: "nTWWyZJZgZY" },
  { title: "Al verla a Ella", youtubeId: "w7w1iQghmCo" },
  { title: "Pensando en ti", youtubeId: "oe3FcO90Siw" },
  { title: "Sobrenatural", youtubeId: "BYOLv1vQP0c" },
  { title: "No Me Digas que me quieres", youtubeId: "MatMK_l2lVw" },
  { title: "Quiere ir de fiesta", youtubeId: "2watUetASk4" },
  { title: "Alquimista", youtubeId: "6TYVRVhOexk" },
];

export const metadata = {
  title: "Videos Oficiales",
  description:
    "Videos musicales oficiales de Mr Brey: música urbana, narrativa visual y emoción cinematográfica.",
  alternates: {
    canonical: "/videos",
  },
};

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-28 text-white md:px-8 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-bold text-lime-400 hover:text-lime-300">
          ← Volver al inicio
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime-400">Archivo visual</p>
          <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">Videos oficiales de Mr Brey</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Música, historias y emoción en una colección audiovisual que acompaña la evolución artística de Mr Brey.
          </p>
        </div>

        <section className="mt-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-lime-400">Campaña actual</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Videos en promoción</h2>
            </div>
            <p className="max-w-xl text-neutral-500">Los visuales que estamos destacando actualmente en prensa, radio, redes y promoción digital.</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {campaignVideos.map((video, index) => (
              <article key={video.youtubeId} className="overflow-hidden rounded-3xl border border-lime-400/20 bg-neutral-950 shadow-2xl shadow-lime-400/5">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={`Video en promoción ${index + 1} de Mr Brey`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="flex items-center justify-between gap-4 p-5">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-lime-400">Destacado</span>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-400 hover:text-white"
                  >
                    Abrir en YouTube →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-14">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-neutral-500">Más visuales</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Archivo oficial</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {archiveVideos.map((video) => (
              <article key={video.youtubeId} className="group overflow-hidden rounded-3xl border border-white/10 bg-neutral-950">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-lg font-black group-hover:text-lime-400">{video.title}</h3>
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
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
