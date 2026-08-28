import Link from "next/link";
import {
  enBusquedaMediaReleaseUrl,
  focusSingle,
  musicTalkersFeatureUrl,
  pressEmail,
  radioEpkUrl,
  socialLinks,
  spotifyArtistUrl,
} from "@/data/media";

export const metadata = {
  title: "Press & EPK",
  description:
    "Press kit oficial de Mr Brey: biografía, Se Me Pega, EPK de radio, cobertura de prensa, enlaces oficiales y contacto profesional.",
  alternates: {
    canonical: "/press",
  },
};

const professionalFacts = [
  ["Artista", "Mr Brey"],
  ["Base", "New Jersey, USA"],
  ["Single foco", focusSingle.title],
  ["Duración", focusSingle.duration],
  ["Versión", "Clean / Non-Explicit"],
  ["ISRC", focusSingle.isrc],
] as const;

const registrations = [
  ["PRO", "BMI"],
  ["Digital performance", "SoundExchange"],
  ["Publishing administration", "TuneCore Publishing"],
  ["Neighboring / performance rights", "SoundTrust"],
] as const;

export default function PressPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="glass sticky top-0 z-50 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            MR BREY<span className="text-lime-400">.</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/videos"
              className="hidden text-sm font-bold text-neutral-400 hover:text-white sm:inline"
            >
              Videos
            </Link>
            <a
              href={`mailto:${pressEmail}`}
              className="rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-black hover:bg-lime-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </header>

      <section className="px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-lime-400">
            Press / Media / Radio
          </p>
          <h1 className="mt-5 max-w-5xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Official Press Kit
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Mr Brey is an independent Latin urban artist based in New Jersey,
            developing a modern sound built around melody, atmosphere,
            Caribbean rhythm and contemporary urban production.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={radioEpkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 font-black text-black hover:-translate-y-0.5 hover:bg-lime-400"
            >
              Abrir Radio EPK
            </a>
            <a
              href={focusSingle.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-bold hover:border-lime-400 hover:text-lime-400"
            >
              Escuchar Se Me Pega
            </a>
            <a
              href={`mailto:${pressEmail}?subject=Mr%20Brey%20-%20Press%20%2F%20Radio%20Inquiry`}
              className="rounded-full border border-white/20 px-6 py-3 font-bold hover:border-white/50"
            >
              {pressEmail}
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
              Focus single
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              Se Me Pega
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-300">
              A sensual, immersive Latin urban record blending trap and
              reggaeton foundations with Afro-Caribbean energy. The track is
              clean, radio-ready and built around an immediate hook, deep
              low-end and a dark late-night atmosphere.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {professionalFacts.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-600">
                    {label}
                  </p>
                  <p className="mt-2 font-bold text-neutral-100">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-lime-400/5">
            <iframe
              src={focusSingle.spotifyEmbed}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Se Me Pega de Mr Brey en Spotify"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-neutral-950 p-7 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-400">
                Momentum
              </p>
              <h2 className="mt-4 text-2xl font-black">Radio & DJ activity</h2>
              <p className="mt-4 leading-relaxed text-neutral-400">
                The “Se Me Pega” campaign has generated documented radio and DJ
                activity across multiple markets, alongside organic short-form
                content activity. The record has also been delivered to radio
                programmers through Play MPE.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-neutral-950 p-7 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-400">
                Press coverage
              </p>
              <h2 className="mt-4 text-2xl font-black">MusicTalkers</h2>
              <p className="mt-4 leading-relaxed text-neutral-400">
                “Mr Brey Ignites Momentum With ‘Se Me Pega,’ A Seductive Fusion
                of Afro-Reggaeton, Latin Trap & Urban Pop.” Published May 27,
                2026.
              </p>
              <a
                href={musicTalkersFeatureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-bold text-lime-400 hover:text-lime-300"
              >
                Leer cobertura →
              </a>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-neutral-950 p-7 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-400">
                Media materials
              </p>
              <h2 className="mt-4 text-2xl font-black">Professional assets</h2>
              <div className="mt-5 space-y-3">
                <a
                  href={radioEpkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 px-4 py-3 font-bold hover:border-lime-400 hover:text-lime-400"
                >
                  Se Me Pega · Radio EPK →
                </a>
                <a
                  href={enBusquedaMediaReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 px-4 py-3 font-bold hover:border-lime-400 hover:text-lime-400"
                >
                  En Búsqueda · Media Release →
                </a>
                <a
                  href={`mailto:${pressEmail}?subject=Mr%20Brey%20-%20Request%20for%20Radio%20Assets`}
                  className="block rounded-xl border border-white/10 px-4 py-3 font-bold hover:border-lime-400 hover:text-lime-400"
                >
                  Solicitar audio / assets →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
              Industry registration
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Rights & administration</h2>
            <div className="mt-7 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/40 px-5">
              {registrations.map(([label, value]) => (
                <div key={label} className="flex items-start justify-between gap-5 py-4">
                  <span className="text-sm text-neutral-500">{label}</span>
                  <span className="text-right font-bold">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
              Official channels
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Listen & follow</h2>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-black/40 p-5 font-black hover:-translate-y-0.5 hover:border-lime-400 hover:text-lime-400"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
            <a
              href={spotifyArtistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-bold text-neutral-500 hover:text-lime-400"
            >
              Spotify artist profile →
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            Airplay · Interviews · Programming
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight md:text-6xl">
            For press, radio, bookings and collaborations.
          </h2>
          <a
            href={`mailto:${pressEmail}`}
            className="mt-8 inline-block rounded-full bg-lime-400 px-7 py-3.5 font-black text-black hover:-translate-y-0.5 hover:bg-lime-300"
          >
            {pressEmail}
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-neutral-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Mr Brey.</p>
          <Link href="/" className="font-bold hover:text-lime-400">
            Volver a mrbrey.com →
          </Link>
        </div>
      </footer>
    </main>
  );
}
