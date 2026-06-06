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
  title: "Videos Oficiales | Mr Brey",
  description:
    "Galería oficial de videos musicales de Mr Brey. Música urbana, cinematográfica y emocional.",
};

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-lime-400 hover:text-lime-300">
          ← Volver al inicio
        </Link>

        <h1 className="mt-8 text-4xl font-black md:text-6xl">
          Videos Oficiales
        </h1>

        <p className="mt-4 max-w-2xl text-neutral-400">
          Una colección visual de canciones, historias y emociones de Mr Brey.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.youtubeId}
              className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950"
            >
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />

              <div className="p-5">
                <h2 className="text-lg font-bold">{video.title}</h2>

                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-neutral-400 hover:text-lime-400"
                >
                  Ver en YouTube →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}