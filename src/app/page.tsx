import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative flex flex-col justify-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            MR BREY
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-400">
            Música urbana y cinematográfica. Videos, sonido y conciencia
            en un mismo espacio.
          </p>

          {/* BOTONES */}
          <div className="mt-10 flex gap-4">
            <a
              href="#radio"
              className="rounded-xl bg-white px-6 py-3 text-black font-semibold hover:bg-neutral-200 transition"
            >
              Escuchar Radio
            </a>

            <Link
              href="/videos"
              className="rounded-xl border border-neutral-600 px-6 py-3 text-white font-semibold hover:border-white transition"
            >
              Ver Videos
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN VIDEOS PREVIEW */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Videos Oficiales
          </h2>

          <p className="text-neutral-400 max-w-2xl mb-10">
            Explora el universo audiovisual de Mr Brey. Cada video es una pieza
            narrativa independiente.
          </p>

          <Link
            href="/videos"
            className="inline-block rounded-xl bg-neutral-900 px-6 py-4 text-white font-medium hover:bg-neutral-800 transition"
          >
            Ir a la galería de videos →
          </Link>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="px-6 py-10 border-t border-neutral-800 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Mr Brey · Arte, música y conciencia
      </footer>
    </main>
  );
}
