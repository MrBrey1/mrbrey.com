import Image from "next/image";
import Link from "next/link";

const spotifyPlaylist =
  "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3MhZgk?utm_source=generator";

const featuredVideos = [
  { youtubeId: "qOKoaWX6ArU" },
  { youtubeId: "n7glKI_Di2E" },
  { youtubeId: "rIXRTSDiWkg" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="#inicio" className="text-xl font-black tracking-tight">
            MR BREY<span className="text-lime-400">.</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-neutral-300 md:flex">
            <Link href="#musica" className="hover:text-lime-400">Música</Link>
            <Link href="#videos" className="hover:text-lime-400">Videos</Link>
            <Link href="#bio" className="hover:text-lime-400">Bio</Link>
            <Link href="#contacto" className="hover:text-lime-400">Contacto</Link>
          </nav>
          <a
            href="#musica"
            className="rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-black hover:bg-lime-300"
          >
            Escuchar
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/mr-brey-banner.png"
          alt="Mr Brey"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-20 pt-28 md:items-center md:px-8 md:pb-0">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-lime-400 md:text-sm">
              Trap · Afrobeat · Caribeño · R&B Latino
            </p>
            <h1 className="text-balance text-6xl font-black leading-[0.88] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-9xl">
              MR BREY
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Música urbana con emoción real, identidad caribeña y una visión cinematográfica.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#musica" className="rounded-full bg-lime-400 px-6 py-3 font-black text-black hover:-translate-y-0.5 hover:bg-lime-300">
                Escuchar ahora
              </a>
              <Link href="/videos" className="rounded-full border border-white/25 bg-white/5 px-6 py-3 font-bold hover:-translate-y-0.5 hover:border-lime-400">
                Ver videos
              </Link>
              <a href="mailto:press@mrbrey.com" className="rounded-full border border-white/15 px-6 py-3 font-bold text-neutral-200 hover:border-white/40">
                Booking / Press
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950/80 px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Artista independiente · USA / Caribe</p>
          <p className="text-sm text-neutral-400">Música · Visuales · Cultura · Emoción</p>
        </div>
      </section>

      <section id="musica" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime-400">Música</p>
              <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">El sonido de una historia que todavía se está escribiendo.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-neutral-400 lg:justify-self-end">
              Explora una selección oficial de canciones de Mr Brey: emoción, calle, romance y evolución en un mismo universo sonoro.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl shadow-lime-400/5">
            <iframe
              src={spotifyPlaylist}
              width="100%"
              height="420"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist oficial de Mr Brey en Spotify"
            />
          </div>
        </div>
      </section>

      <section id="videos" className="border-y border-white/10 bg-neutral-950 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime-400">En promoción</p>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">Videos destacados</h2>
              <p className="mt-4 max-w-2xl text-neutral-400">Los visuales que forman parte de la campaña actual de Mr Brey.</p>
            </div>
            <Link href="/videos" className="font-bold text-neutral-300 hover:text-lime-400">Ver galería completa →</Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredVideos.map((video, index) => (
              <article key={video.youtubeId} className="group overflow-hidden rounded-3xl border border-white/10 bg-black">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={`Video destacado ${index + 1} de Mr Brey`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="flex items-center justify-between gap-4 p-5">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-lime-400">Campaña actual</span>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-400 hover:text-white"
                  >
                    Ver en YouTube →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bio" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/mr-brey-portrait.png"
              alt="Retrato oficial de Mr Brey"
              width={900}
              height={1125}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime-400">Biografía</p>
            <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">Emoción real convertida en música.</h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-neutral-300">
              <p>Mr Brey transforma experiencias reales en canciones que mezclan vulnerabilidad, fuerza, romance y evolución personal.</p>
              <p>Su propuesta fusiona R&B latino, pop emocional, rap, trap caribeño y afrobeat con una sensibilidad cinematográfica que convierte cada tema en una experiencia.</p>
              <p className="font-bold text-white">No solo canta historias. Construye un universo alrededor de ellas.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-lime-400/20 bg-gradient-to-br from-lime-400/10 via-neutral-950 to-black p-8 md:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-lime-400">Contacto profesional</p>
          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-3xl text-balance text-4xl font-black tracking-tight md:text-6xl">Booking, prensa, radio y colaboraciones.</h2>
              <p className="mt-5 max-w-2xl text-neutral-400">Para oportunidades profesionales, entrevistas, programación musical y colaboraciones.</p>
            </div>
            <a href="mailto:press@mrbrey.com" className="shrink-0 rounded-full bg-white px-6 py-3 font-black text-black hover:-translate-y-0.5 hover:bg-lime-400">
              press@mrbrey.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Mr Brey.</p>
          <p>Música · Arte · Identidad</p>
        </div>
      </footer>
    </main>
  );
}
