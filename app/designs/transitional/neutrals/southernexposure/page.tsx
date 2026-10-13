import Image from "next/image";
import Link from "next/link";
import SelectionEntry from "@/components/SelectionEntry";   

export default function FinishDetailsKitchenPage() {
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
      <section className="px-8 pb-10 pt-12 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
          Transitional / Neutrals / Southern Exposure
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          FINISH DETAILS - KITCHEN
        </h1>
      </section>

      {/* DETAILS LAYOUT */}
      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative aspect-square overflow-hidden bg-stone-200">
            <Image
              src="/images/southernexposure_kitchen.png"
              alt="Kitchen finish detail"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* RIGHT DETAILS BOX */}
          <div className="min-h-full bg-white p-2 md:p-4">

            {/* CUSTOM LISTS GO HERE */}
<div className="space-y-6">
<div className="bg-stone-200 p-2 md:p-4">

  <h3 className="text-lg font-bold text-stone-900">
    Countertops
  </h3>

  <p className="mt-2 text-sm font-light text-stone-600">
    Countertop brands, descriptions, weights.
  </p>

  <div className="mt-5">
    <SelectionEntry />
  </div>

</div>
<div className="bg-stone-200 p-2 md:p-4">

  <h3 className="text-lg font-bold text-stone-900">
    Flooring
  </h3>

  <p className="mt-2 text-sm font-light text-stone-600">
    Floor branding, materials, weights.
  </p>

  <div className="mt-5">
    <SelectionEntry />
  </div>

</div>
<div className="bg-stone-200 p-2 md:p-4">

  <h3 className="text-lg font-bold text-stone-900">
    Appliances
  </h3>

  <p className="mt-2 text-sm font-light text-stone-600">
    Appliance line and details.
  </p>

  <div className="mt-5">
  </div>

</div>
</div>
          </div>

        </div>
      </section>

     {/* ACTION BUTTONS */}
<section className="mx-auto max-w-7xl px-8 pb-24">
  <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">

    <Link
      href="/designs/transitional/neutrals/southernexposure/bathroom"
      className="min-w-72 bg-black px-12 py-6 text-center text-lg font-medium text-white transition hover:bg-stone-700"
    >
      Skip Kitchen
    </Link>

    <Link
      href="/designs/transitional/neutrals/southernexposure/bathroom"
      className="min-w-72 bg-black px-12 py-6 text-center text-lg font-medium text-white transition hover:bg-stone-700"
    >
      Submit Selection
    </Link>

  </div>
</section>

      {/* BACK LINK */}
      <div className="pb-16 text-center">
        <Link
          href="/designs/transitional/neutrals/southernexposure"
          className="text-sm text-stone-500 hover:text-stone-900"
        >
          ← Back to Southern Exposure
        </Link>
      </div>

    </main>
  );
}