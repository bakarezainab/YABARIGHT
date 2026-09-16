'use client';

import '@/styles/globals.css';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const itemCount = useCartStore((state) => state.itemCount);
  const wishlistCount = useWishlistStore((state) => state.itemCount);

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-secondary">
      {/* Header - Matching Homepage Style */}
      <header className="sticky top-0 z-50 border-b border-[#c88d00]/30 bg-[#0b0b0b] shadow-lg">
        <div className="container-custom flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="YabaRight Logo" 
              className="h-8 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-bold text-white/80 md:flex">
            <Link href="/products" className="transition hover:text-[#c88d00]">
              Products
            </Link>
            <Link href="/products?category=thrift" className="transition hover:text-[#c88d00]">
              Thrift
            </Link>
            <Link href="/products?category=new" className="transition hover:text-[#c88d00]">
              New
            </Link>
            <Link href="/products?category=deals" className="transition hover:text-[#c88d00]">
              Deals
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/wishlist"
              className="relative inline-flex items-center gap-2 rounded-full border border-[#c88d00]/40 bg-[#c88d00]/10 px-4 py-2 text-sm font-semibold text-[#c88d00] transition hover:bg-[#c88d00] hover:text-black"
            >
              <span className="hidden sm:inline">Wishlist</span>
              <span className="sm:hidden">♥</span>
              {wishlistCount > 0 && (
                <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-black text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="relative inline-flex items-center gap-2 rounded-full bg-[#c88d00] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#ffcc00]"
            >
              <span className="hidden sm:inline">Cart</span>
              <span className="sm:hidden">🛒</span>
              {itemCount > 0 && (
                <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-black px-1 text-[10px] font-black text-white">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
