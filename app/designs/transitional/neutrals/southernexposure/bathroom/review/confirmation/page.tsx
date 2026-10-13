import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-8 text-stone-900">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
          Selection Submitted
        </p>

        <h1 className="text-4xl font-semibold md:text-6xl">
          Thank You
        </h1>

        <p className="mt-6 text-lg text-stone-600">
          Your Southern Exposure finish selections have been submitted and an itemized receipt has been sent to your email. 
          Expect to hear from vendors soon. For a streamlined experience, we recommend creating an account with <i><b>AF</b></i>.
        </p>

       <div className="mt-8 flex justify-center gap-4">

  <Link
    href="/"
    className="inline-block bg-black px-8 py-4 text-white transition hover:bg-stone-700"
  >
    Return Home
  </Link>

  <Link
    href="/create-account"
    className="inline-block bg-black px-8 py-4 text-white transition hover:bg-stone-700"
  >
    Create Account
  </Link>

</div>
      </div>
      
    </main>
  );
}