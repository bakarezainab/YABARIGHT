import '@/styles/globals.css';
import Link from 'next/link';

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-secondary">
      {/* Header - Matching Homepage Style */}
      <header className="sticky top-0 z-50 border-b border-[#FFD700]/30 bg-[#0b0b0b] shadow-lg">
        <div className="container-custom flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="YabaRight Logo" 
              className="h-16 w-auto sm:h-20"
            />
          </Link>

          <nav className="flex items-center gap-6 text-sm font-bold text-white/80">
            <Link href="/dashboard" className="transition hover:text-[#FFD700]">
              Dashboard
            </Link>
            <Link href="/products/new" className="transition hover:text-[#FFD700]">
              Add Product
            </Link>
            <Link href="/products" className="transition hover:text-[#FFD700]">
              Storefront
            </Link>
          </nav>

          <Link
            href="/dashboard"
            className="rounded-full bg-[#FFD700] px-5 py-2 text-sm font-black text-black transition hover:bg-[#ffcc00]"
          >
            My Store
          </Link>
        </div>
      </header>

      {children}
    </div>
  );
}
