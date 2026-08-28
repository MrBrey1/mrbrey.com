import Link from "next/link";

const videos = [
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

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
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
                <h2 className="text-lg font-black group-hover:text-lime-400">{video.title}</h2>
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
      </div>
    </main>
  );
}
