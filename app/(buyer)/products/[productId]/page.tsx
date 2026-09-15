'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { getProductById } from '@/lib/mockProducts';

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = getProductById(params.productId);
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#fffaf0] px-4 py-12 text-secondary">
        <div className="container-custom max-w-xl rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Product missing
          </p>
          <h1 className="mt-4 text-3xl font-black text-secondary">
            This item is not available
          </h1>
          <Link
            href="/products"
            className="mt-6 inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Explore products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf0] text-secondary">
      <div className="container-custom py-8 sm:py-10">
        <Link
          href="/products"
          className="inline-flex items-center rounded-full border border-secondary/10 bg-white px-4 py-2 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary"
        >
          ← Back to products
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white p-3 shadow-sm">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-[440px] w-full rounded-[1.4rem] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="overflow-hidden rounded-[1.5rem] border border-black/5 bg-white p-2 shadow-sm"
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 2}`}
                    className="h-40 w-full rounded-[1rem] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                {product.category}
              </span>
              {product.trending && (
                <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                  Trending
                </span>
              )}
            </div>

            <h1 className="mt-5 text-3xl font-black text-secondary sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-lg font-bold text-primary">
                ₦{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₦{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="mt-4 text-base text-gray-700">
              {product.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="rounded-2xl bg-[#fffaf0] p-3">
                <div className="text-xs uppercase tracking-[0.14em] text-gray-500">
                  Condition
                </div>
                <div className="mt-2 font-semibold">{product.condition}</div>
              </div>
              <div className="rounded-2xl bg-[#fffaf0] p-3">
                <div className="text-xs uppercase tracking-[0.14em] text-gray-500">
                  Size
                </div>
                <div className="mt-2 font-semibold">
                  {product.size || 'One Size'}
                </div>
              </div>
              <div className="rounded-2xl bg-[#fffaf0] p-3">
                <div className="text-xs uppercase tracking-[0.14em] text-gray-500">
                  Brand
                </div>
                <div className="mt-2 font-semibold">
                  {product.brand || 'Verified Seller'}
                </div>
              </div>
              <div className="rounded-2xl bg-[#fffaf0] p-3">
                <div className="text-xs uppercase tracking-[0.14em] text-gray-500">
                  Material
                </div>
                <div className="mt-2 font-semibold">
                  {product.material || 'Premium'}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-700">Qty</label>
              <div className="flex items-center overflow-hidden rounded-full border border-gray-200 bg-[#fffdf9]">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="h-10 w-10 text-lg font-semibold text-secondary"
                >
                  −
                </button>
                <span className="min-w-[2.5rem] text-center text-sm font-semibold">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="h-10 w-10 text-lg font-semibold text-secondary"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => addItem(product, quantity)}
                className="flex-1 rounded-full bg-secondary px-6 py-3 text-base font-semibold text-white transition hover:bg-black"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="flex-1 rounded-full border border-secondary bg-primary px-6 py-3 text-base font-semibold text-secondary transition hover:translate-y-[-1px]"
              >
                Buy now
              </button>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-[#fffaf0] p-4 text-sm text-gray-700">
              <p className="font-semibold text-secondary">Why shoppers love it</p>
              <ul className="mt-3 space-y-2">
                <li>• Verified quality and authentic thrift appeal</li>
                <li>• Fast dispatch and secure payments</li>
                <li>• Handpicked, style-ready pieces with genuine value</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
