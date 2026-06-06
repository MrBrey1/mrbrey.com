import Image from "next/image";
import Link from "next/link";

const spotifyPlaylist =
  "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3MhZgk?utm_source=generator";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/mr-brey-banner.png"
          alt="Mr Brey"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

        <div className="relative z-10 flex min-h-screen items-center px-6 md:px-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-lime-400">
              Trap · Afrobeat · Caribeño · R&B Latino
            </p>

            <h1 className="text-6xl font-black tracking-tight md:text-8xl">
              Mr Brey
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl">
              Música urbana, cinematográfica y honesta. Canciones para sanar,
              levantarse, amar, recordar y no bajar de nivel.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#musica"
                className="rounded-xl bg-lime-400 px-6 py-3 font-bold text-black hover:bg-lime-300"
              >
                Escuchar Música
              </a>

              <Link
                href="/videos"
                className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white hover:border-lime-400"
              >
                Ver Videos
              </Link>

              <a
                href="mailto:press@mrbrey.com"
                className="rounded-xl border border-white/20 px-6 py-3 font-bold text-white hover:border-white"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Image
              src="/images/mr-brey-portrait.png"
              alt="Retrato de Mr Brey"
              width={800}
              height={1000}
              className="rounded-3xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-lime-400">
              Biografía
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Emoción real convertida en música.
            </h2>

            <p className="mt-6 text-neutral-300 leading-relaxed">
              Mr Brey es un artista que transforma emociones reales en música
              profunda, cinematográfica y honesta. Su estilo único mezcla lo
              urbano romántico con reflexiones intensas, espiritualidad moderna
              y un toque poético que conecta con quienes han amado, sufrido y
              renacido.
            </p>

            <p className="mt-4 text-neutral-300 leading-relaxed">
              En sus canciones conviven la vulnerabilidad, la fuerza interna, el
              desahogo y la superación emocional, siempre con melodías
              envolventes y letras que tocan el alma. Su sonido fusiona
              influencias del R&B latino, pop emocional, rap consciente y vibras
              espirituales.
            </p>

            <p className="mt-4 text-neutral-300 leading-relaxed">
              Mr Brey no solo canta: acompaña, motiva y eleva.
            </p>
          </div>
        </div>
      </section>

      <section id="musica" className="bg-neutral-950 px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-lime-400">
            Música
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Playlist oficial
          </h2>

          <p className="mt-4 max-w-2xl text-neutral-400">
            Una selección preparada por Spotify con lanzamientos y canciones de
            Mr Brey.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <iframe
              src={spotifyPlaylist}
              width="100%"
              height="420"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-lime-400">
            Visuales
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Videos oficiales
          </h2>

          <p className="mt-4 max-w-2xl text-neutral-400">
            Explora el universo audiovisual de Mr Brey: música, narrativa y
            emoción en formato cinematográfico.
          </p>

          <Link
            href="/videos"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-bold text-black hover:bg-neutral-200"
          >
            Entrar a la galería →
          </Link>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 text-center">
        <h2 className="text-3xl font-black">Booking / Press / Colaboraciones</h2>
        <a
          href="mailto:press@mrbrey.com"
          className="mt-4 inline-block text-lime-400 hover:text-lime-300"
        >
          press@mrbrey.com
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Mr Brey. Música, arte y conciencia.
      </footer>
    </main>
  );
}