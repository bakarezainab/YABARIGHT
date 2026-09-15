import Link from 'next/link';

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fffaf0] text-secondary">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#fffaf0]/90 backdrop-blur-sm">
        <div className="container-custom flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-black tracking-tight text-secondary">
            YABA<span className="text-primary">RIGHT</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-semibold text-secondary transition hover:text-primary">
              Dashboard
            </Link>
            <Link href="/products" className="text-sm font-semibold text-secondary transition hover:text-primary">
              Storefront
            </Link>
          </nav>
        </div>
      </header>

      {children}
    </div>
  );
}
