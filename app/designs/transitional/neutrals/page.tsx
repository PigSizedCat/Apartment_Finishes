
import Image from "next/image";
import Link from "next/link";

const apartmentFinishes = [
  {
    id: 1,
    name: "Southern Exposure",
    image: "/images/southernexposure.png",
    href: "/designs/transitional/neutrals/southernexposure",
  },
  { id: 2, name: "Southern Exposure", image: "/images/southernexposure.png", href: "" },
  { id: 3, name: "Southern Exposure", image: "/images/southernexposure.png", href: "" },
  { id: 4, name: "Southern Exposure", image: "/images/southernexposure.png", href: "" },
  { id: 5, name: "Southern Exposure", image: "/images/southernexposure.png", href: "" },
  { id: 6, name: "Southern Exposure", image: "/images/southernexposure.png", href: "" },
];

export default function NeutralsPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold tracking-widest">
          APARTMENT FINISHES
        </div>

        <nav className="flex gap-8 text-sm">
          <a href="#styles">Styles</a>
          <a href="#palettes">Palettes</a>
          <a href="#vendors">Vendors</a>
          <a href="#login">Login</a>
        </nav>
      </header>

      {/* PAGE TITLE */}
      <section className="px-8 pb-12 pt-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
          Transitional / Neutrals
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          SELECT A COLLECTION
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-stone-500">
          Explore our curated apartment finish collections.
        </p>
      </section>

      {/* APARTMENT FINISH GRID */}
      <section className="mx-auto max-w-7xl px-8 pb-24">

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

          {apartmentFinishes.map((finish) => {
  const card = (
    <article className="group">
      <div className="relative aspect-[3/2] overflow-hidden bg-stone-200">
        <Image
          src={finish.image}
          alt={`Apartment finish ${finish.id}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 min-h-8">
        <h2 className="text-xl font-medium">
          {finish.name}
        </h2>
      </div>
    </article>
  );

  return finish.href ? (
    <Link key={finish.id} href={finish.href}>
      {card}
    </Link>
  ) : (
    <div key={finish.id}>
      {card}
    </div>
  );
})}

        </div>
      </section>

      {/* BACK BUTTON */}
      <div className="pb-16 text-center">
        <Link
          href="/designs/transitional"
          className="text-sm text-stone-500 hover:text-stone-900"
        >
          ← Back to Color Palettes
        </Link>
      </div>

    </main>
  );
}
