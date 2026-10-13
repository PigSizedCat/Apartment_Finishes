import Link from "next/link";
import Image from "next/image";
export default function Home() {
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


      {/* HERO */}
      {/* HERO */}
<section className="relative grid min-h-[70vh] grid-cols-2">

  {/* LEFT IMAGE */}
  <div className="relative min-h-[70vh]">
    <Image
      src="/images/herospread-left.jpg"
      alt="Apartment interior design concept"
      fill
      priority
      sizes="50vw"
      className="object-cover"
    />
  </div>

  {/* RIGHT IMAGE */}
  <div className="relative min-h-[70vh]">
    <Image
      src="/images/herospread-right.jpg"
      alt="Finished apartment interior"
      fill
      priority
      sizes="50vw"
      className="object-cover"
    />
  </div>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30" />

  {/* HERO TEXT */}
  <div className="absolute inset-0 flex items-end justify-center px-8 text-center text-white">
    <div className="max-w-6xl">

      <h1 className="text-6xl font-semilight tracking-tight md:text-6xl">
        6 Steps | Stylish Results | Completely <b>Free</b>
      </h1>

      <p className="mx-auto mt-2 max-w-6xl text-medium">
        Explore curated apartment designs and find the
        products and vendors behind every finish for <b>free</b>.
      </p>

      <a
        href="/designs"
        className="mt-2 mb-4 inline-block bg-black px-7 py-4 text-xl font-medium text-white transition hover:bg-stone-700"
      >
        Explore Design Options
      </a>

    </div>
  </div>

</section>

<section className="bg-white px-8 py-16">
  <div className="mx-auto max-w-6xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-5xl">
      A NEW ERA IN MULTIFAMILY DESIGN
    </h2>
  </div>
</section>

{/* FLEXIBLE CENTERED IMAGE */}
<section className="bg-white px-8 py-0">
  <div className="mx-auto flex max-w-4xl max-h-2xl justify-center">
    <Image
      src="/images/6-steps-home-2.png"
      alt="Section image"
      width={1600}
      height={900}
      className="h-auto w-full object-contain"
    />
  </div>
</section>

{/* INTRODUCTION SECTION */}
<section className="w-full bg-white px-8 py-24">

  <div className="mx-auto max-w-4xl text-center">

    <h2 className="mb-6 text-4xl font-semibold text-stone-900">
      The dividends of design at your fingertips.
    </h2>

    <p className="text-lg leading-relaxed text-stone-600">
      Apartment Finishes isn't just quick, easy, and free; it offers apartment finish solutions at <i>no extra cost</i> to developers, owners, and property management companies. 
      Through our innovative marketplace, users reap the rewards of bespoke design while avoiding the associated costs.
    </p>

  </div>

</section>

      {/* FOOTER */}
      <footer className="flex items-center justify-between bg-stone-900 px-8 py-10 text-white">

        <div className="text-xl font-bold tracking-widest">
          APARTMENT FINISH BOARDS
        </div>

        <p className="text-sm text-stone-400">
          Apartment finishes, sourced.
        </p>

      </footer>

    </main>
  );
}


function DesignCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <article>

      <div className="aspect-[4/5] bg-stone-200" />

      <h3 className="mt-4 text-xl font-medium">
        {name}
      </h3>

      <p className="mt-1 text-sm text-stone-500">
        {description}
      </p>

    </article>
  );
}


function RoomCard({
  name,
}: {
  name: string;
}) {
  return (
    <div className="flex aspect-square items-end bg-stone-200 p-5">
      <h3 className="text-xl font-medium">
        {name}
      </h3>
    </div>
  );
}