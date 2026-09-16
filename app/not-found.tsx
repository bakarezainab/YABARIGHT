import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f0e8]">
      {/* Header - Matching Homepage Style */}
      <header className="border-b border-[#FFD700]/30 bg-[#0b0b0b] shadow-lg">
        <div className="container-custom flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="YabaRight Logo" 
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <nav className="flex items-center gap-4">
            <Link href="/products" className="text-sm font-bold text-white/80 transition hover:text-[#FFD700]">
              Browse Products
            </Link>
            <Link
              href="/"
              className="rounded-full bg-[#FFD700] px-5 py-2 text-sm font-black text-black transition hover:bg-[#ffcc00]"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-lg rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-10">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#FFD700]/10">
            <p className="text-5xl font-black text-[#FFD700]">404</p>
          </div>
          <h1 className="text-4xl font-black text-secondary">Page not found</h1>
          <p className="mt-3 text-gray-600">
            The page you are looking for may have moved or no longer exists.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-[#0b0b0b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Back home
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-[#0b0b0b] bg-[#FFD700] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffcc00]"
            >
              Browse products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
