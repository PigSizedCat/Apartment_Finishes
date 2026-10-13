import Link from "next/link";

const inventoryItems = [
  { item: "Kitchen Cabinet Finish", selection: "Natural Oak", qty: 1 },
  { item: "Kitchen Countertop", selection: "Warm Quartz", qty: 1 },
  { item: "Kitchen Hardware", selection: "Matte Black", qty: 1 },
  { item: "Bathroom Vanity", selection: "White Oak", qty: 1 },
  { item: "Bathroom Tile", selection: "Soft Beige", qty: 2 },
  { item: "Flooring", selection: "Natural Oak Plank", qty: 1 },
];

export default function ReceiptPage() {
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
          Finish Selection Summary
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          SOUTHERN EXPOSURE
        </h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT: INVENTORY RECEIPT */}
          <div className="border border-stone-300 bg-stone-100 p-8 md:p-10">

            <div className="mb-8 flex items-end justify-between border-b border-stone-300 pb-5">
              <div>
                <p className="text-sm uppercase tracking-widest text-stone-500">
                  Inventory Receipt
                </p>

                <h2 className="mt-2 text-3xl font-semibold">
                  Southern Exposure
                </h2>
              </div>

              <span className="text-sm text-stone-500">
                Finish Package
              </span>
            </div>

            {/* COLUMN HEADERS */}
            <div className="grid grid-cols-[2fr_2fr_60px] border-b border-stone-300 pb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              <span>Item</span>
              <span>Selection</span>
              <span className="text-right">Qty</span>
            </div>

            {/* ITEMS */}
            <div>
              {inventoryItems.map((entry, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr_2fr_60px] border-b border-stone-300 py-5 text-sm"
                >
                  <span className="font-medium">
                    {entry.item}
                  </span>

                  <span className="text-stone-600">
                    {entry.selection}
                  </span>

                  <span className="text-right">
                    {entry.qty}
                  </span>
                </div>
              ))}
            </div>

            {/* RECEIPT FOOTER */}
            <div className="mt-8 border-t border-stone-400 pt-5">
              <div className="flex justify-between">
                <span className="font-semibold">
                  Total Selections
                </span>

                <span className="font-semibold">
                  {inventoryItems.length}
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: EMAIL + ACTIONS */}
          <div className="flex flex-col justify-start">

            <div className="bg-stone-200 p-8 md:p-10">

              <h2 className="text-2xl font-semibold">
                Send Your Selection
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-stone-600">
                Enter an email address to receive a copy of the
                Southern Exposure Finish Package and contact vendors <b> free of charge</b>.
              </p>

              {/* EMAIL INPUT */}
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full border border-stone-400 bg-white px-4 py-4 text-base outline-none transition focus:border-black"
                />
              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">

              <button
                type="button"
                className="bg-black px-6 py-5 text-base font-medium text-white transition hover:bg-stone-700"
              >
                Edit
              </button>

              <button
                type="button"
                className="bg-black px-6 py-5 text-base font-medium text-white transition hover:bg-stone-700"
              >
                Download PDF
              </button>

              <Link
  href="/designs/transitional/neutrals/southernexposure/bathroom/review/confirmation/"
  className="bg-black px-6 py-5 text-center text-base font-medium text-white transition hover:bg-stone-700"
>
  Submit
</Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}