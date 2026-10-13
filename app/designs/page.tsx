import Link from "next/link";
import Image from "next/image";


const finishStyles = [
  {
    name: "Traditional",
    description: "Timeless materials and traditional details.",
    image: "/images/cat_classic.png",
  },
  {
    name: "Transitional",
    description: "A balanced mix of classic and modern design.",
    image: "/images/cat_transitional.png",
  },
  {
    name: "Contemporary",
    description: "Clean lines, modern materials, and refined finishes.",
    image: "/images/cat_contemporary.png",
  },
];

export default function DesignsPage() {
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
          Apartment Finish Library
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          SELECT A FINISH STYLE
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-stone-500">
          Choose a style to explore its materials, fixtures,
          finishes, and products.
        </p>
      </section>


      {/* FINISH STYLES */}
      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">

          {finishStyles.map((style) => (
            <article
              key={style.name}
              className="group cursor-pointer"
            >

              <div className="relative aspect-square overflow-hidden bg-stone-200">
  <Image
    src={style.image}
    alt={`${style.name} apartment finish style`}
    fill
    className="object-cover"
  />
</div>

              {/* STYLE NAME */}
              <h2 className="mt-5 text-2xl font-medium">
                {style.name}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-2 max-w-sm text-sm leading-6 text-stone-500">
                {style.description}
              </p>

              {style.name === "Transitional" ? (
  <Link
    href="/designs/transitional"
    className="mt-4 inline-block text-sm font-medium hover:underline"
  >
    Explore Style →
  </Link>
) : (
  <div className="mt-4 text-sm font-medium">
    Explore Style →
  </div>
)}

            </article>
          ))}

        </div>
      </section>

    </main>
  );
}