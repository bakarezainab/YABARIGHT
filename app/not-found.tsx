import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffaf0] px-4">
      <div className="max-w-lg rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-black text-secondary">Page not found</h1>
        <p className="mt-3 text-gray-600">
          The page you are looking for may have moved or no longer exists.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Back home
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-secondary bg-primary px-6 py-3 text-sm font-semibold text-secondary transition hover:translate-y-[-1px]"
          >
            Browse products
          </Link>
        </div>
      </div>
    </main>
  );
}
