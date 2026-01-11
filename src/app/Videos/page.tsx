import Link from "next/link";

type Video = {
  title: string;
  url: string;
};

const videos: Video[] = [
  { title: "Deambulando", url: "https://www.youtube.com/watch?v=_Lr1Vwnv5fM" },
  { title: "Creo mundo con mis versos", url: "https://www.youtube.com/watch?v=DK9j0gRpSoY" },
  { title: "No hay Ayer ni manana", url: "https://www.youtube.com/watch?v=nTWWyZJZgZY" },
  { title: "Al verla a Ella", url: "https://www.youtube.com/watch?v=w7w1iQghmCo" },
  { title: "Pensando en ti", url: "https://www.youtube.com/watch?v=oe3FcO90Siw" },
  { title: "Sobrenatural", url: "https://www.youtube.com/watch?v=BYOLv1vQP0c" },
  { title: "No Me Digas que me quieres", url: "https://www.youtube.com/watch?v=MatMK_l2lVw" },
  { title: "Quiere ir de fiesta", url: "https://www.youtube.com/watch?v=2watUetASk4" },
  { title: "Alquimista", url: "https://www.youtube.com/watch?v=6TYVRVhOexk" },
];

function getYoutubeId(url: string) {
  // Funciona para: youtube.com/watch?v=..., youtu.be/..., y algunos extras
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "");
    if (u.searchParams.get("v")) return u.searchParams.get("v")!;
    return "";
  } catch {
    return "";
  }
}

export const metadata = {
  title: "Videos | Mr Brey",
  description: "Videos oficiales de Mr Brey en YouTube.",
};

export default function VideosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Videos</h1>
        <p className="mt-2 text-sm text-neutral-400">
          Selección de videos oficiales en YouTube.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => {
          const id = getYoutubeId(v.url);
          const thumb = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";

          return (
            <article
              key={v.url}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <a
                href={v.url}
                target="_blank"
                rel="noreferrer"
                className="block"
                aria-label={`Abrir en YouTube: ${v.title}`}
              >
                <div className="aspect-video w-full bg-black/40">
                  {thumb ? (
                    // Usamos <img> para evitar configurar remotePatterns en next/image
                    <img
                      src={thumb}
                      alt={`Miniatura: ${v.title}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                </div>

                <div className="p-4">
                  <h2 className="text-base font-medium leading-snug">{v.title}</h2>
                  <p className="mt-2 text-xs text-neutral-400">Ver en YouTube →</p>
                </div>
              </a>
            </article>
          );
        })}
      </section>

      <div className="mt-10 text-sm text-neutral-400">
        <Link href="/" className="hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
