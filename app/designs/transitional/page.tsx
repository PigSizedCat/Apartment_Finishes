
import Image from "next/image";
import Link from "next/link";

const colorOptions = [
  {
    name: "Whites",
    description: "Bright, clean finishes with soft white tones.",
    image: "/images/transitional_whites.png",
    slug: "whites",
  },
  {
    name: "Neutrals",
    description: "Warm, balanced tones with natural materials.",
    image: "/images/transitional_neutrals.png",
    slug: "neutrals",
  },
  {
    name: "Colors",
    description: "Expressive finishes with carefully selected colors.",
    image: "/images/transitional_colors.png",
    slug: "colors",
  },
];

export default function TransitionalPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6">
        <link 
        href="/"
        className="text-2xl font-bold tracking-widest">
          APARTMENT FINISHES
        </link>

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
          Transitional Collection
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          SELECT A PALETTE
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-stone-500">
          Explore our Transitional finish collections
          in three distinct color palettes.
        </p>
      </section>

      {/* COLOR OPTIONS */}
      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">

          {colorOptions.map((option) => (
            <article key={option.name} className="group">

              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden bg-stone-200">
                <Image
                  src={option.image}
                  alt={`${option.name} Transitional apartment`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* TITLE */}
              <h2 className="mt-5 text-2xl font-medium">
                {option.name}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 max-w-sm text-sm leading-6 text-stone-500">
                {option.description}
              </p>

              {/* FUTURE PALETTE PAGE */}
              {option.name === "Neutrals" ? (
  <Link
    href="/designs/transitional/neutrals"
    className="mt-4 inline-block text-sm font-medium text-stone-900 hover:underline"
  >
    Explore Palette →
  </Link>
) : (
  <div className="mt-4 text-sm font-medium text-stone-900">
    Explore Palette →
  </div>
)}

            </article>
          ))}

        </div>
      </section>

      {/* BACK BUTTON */}
      <div className="pb-16 text-center">
        <Link
          href="/designs"
          className="text-sm text-stone-500 hover:text-stone-900"
        >
          ← Back to Finish Styles
        </Link>
      </div>

    </main>
  );
}
