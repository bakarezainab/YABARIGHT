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
    <div className="min-h-screen bg-[#fffaf0] text-secondary">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#fffaf0]/90 backdrop-blur-sm">
        <div className="container-custom flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-black tracking-tight text-secondary">
            YABA<span className="text-primary">RIGHT</span>
          </Link>

          <nav className="flex items-center gap-3 sm:gap-5">
            <Link href="/products" className="text-sm font-semibold text-secondary transition hover:text-primary">
              Products
            </Link>
            <Link href="/wishlist" className="relative inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-2 text-sm font-semibold text-secondary transition hover:border-primary">
              Wishlist
              {wishlistCount > 0 && (
                <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-black text-secondary">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-2 text-sm font-semibold text-secondary transition hover:border-primary">
              Cart
              {itemCount > 0 && (
                <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-black text-secondary">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      {children}
    </div>
  );
}
