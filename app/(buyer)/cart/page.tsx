'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const { items, total, itemCount, removeItem, updateQuantity, clearCart } = useCartStore();

  return (
    <main className="min-h-screen bg-[#fffaf0] text-secondary">
      <div className="container-custom py-8 sm:py-10">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Your cart</p>
            <h1 className="mt-2 text-3xl font-black text-secondary">Shopping bag</h1>
          </div>
          <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-sm font-semibold text-secondary">
            {itemCount} item{itemCount === 1 ? '' : 's'}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="rounded-[2rem] border border-black/5 bg-white p-10 text-center shadow-sm">
            <p className="text-2xl font-black text-secondary">Your cart is empty</p>
            <p className="mt-3 text-gray-600">Browse our latest thrift finds and add a few favorites.</p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-[1.75rem] border border-black/5 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                  <img
                    src={item.product?.images?.[0] || 'https://via.placeholder.com/300x300'}
                    alt={item.product?.name || 'Cart item'}
                    className="h-28 w-full rounded-[1.25rem] object-cover sm:w-28"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-black text-secondary">{item.product?.name}</h2>
                        <p className="text-sm text-gray-600">{item.product?.brand || 'Verified seller'}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        className="text-sm font-semibold text-red-600 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-700">Qty</span>
                        <div className="flex items-center overflow-hidden rounded-full border border-gray-200 bg-[#fffdf9]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="h-9 w-9 text-lg font-semibold text-secondary"
                          >
                            −
                          </button>
                          <span className="min-w-[2.25rem] text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="h-9 w-9 text-lg font-semibold text-secondary"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-lg font-black text-primary">
                        ₦{((item.product?.price || 0) * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-secondary">Order summary</h2>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center justify-between">
                  <span>Items</span>
                  <span>{itemCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>₦{itemCount > 0 ? 2500 : 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tax</span>
                  <span>₦{(total * 0.05).toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 border-t border-black/5 pt-4">
                <div className="flex items-center justify-between text-lg font-black text-secondary">
                  <span>Total</span>
                  <span>₦{(total + 2500 + total * 0.05).toLocaleString()}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Proceed to checkout
              </Link>

              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full rounded-full border border-secondary/10 bg-[#fff7d6] px-6 py-3 text-sm font-semibold text-secondary transition hover:border-primary"
              >
                Clear cart
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
