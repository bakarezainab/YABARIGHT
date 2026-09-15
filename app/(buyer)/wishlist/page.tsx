'use client';

import Link from 'next/link';
import { sampleProducts } from '@/lib/mockProducts';
import { useWishlistStore } from '@/store/wishlistStore';

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore();

  const wishlistProducts = sampleProducts.filter((product) => items.includes(product.id));

  return (
    <main className="min-h-screen bg-[#fffaf0] text-secondary">
      <div className="container-custom py-8 sm:py-10">
        <div className="mb-8 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Saved items</p>
            <h1 className="mt-2 text-3xl font-black text-secondary">Your wishlist</h1>
          </div>
          <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-semibold text-secondary">
            {wishlistProducts.length} saved
          </span>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="rounded-[2rem] border border-black/5 bg-white p-10 text-center shadow-sm">
            <p className="text-2xl font-black text-secondary">No saved items yet</p>
            <p className="mt-3 text-gray-600">Save your favorite thrift finds and come back anytime.</p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {wishlistProducts.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-sm">
                <img src={product.images[0]} alt={product.name} className="h-64 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-black text-secondary">{product.name}</h2>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="text-sm font-semibold text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-black text-primary">₦{product.price.toLocaleString()}</span>
                    <Link
                      href={`/products/${product.id}`}
                      className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
