import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 text-center text-white">
      <div className="max-w-2xl">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-lime-400">404</p>
        <h1 className="mt-5 text-balance text-5xl font-black tracking-tight md:text-7xl">
          Esta página no está en el tracklist.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-400">
          El enlace cambió o ya no existe. Regresa al sitio oficial de Mr Brey y continúa explorando la música.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-lime-400 px-6 py-3 font-black text-black hover:bg-lime-300"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
