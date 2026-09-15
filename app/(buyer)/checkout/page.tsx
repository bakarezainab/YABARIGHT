'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const [submitted, setSubmitted] = useState(false);

  const subtotal = total;
  const shipping = items.length > 0 ? 2500 : 0;
  const tax = total * 0.05;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#fffaf0] px-4 py-12 text-secondary">
        <div className="container-custom max-w-xl rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Order placed</p>
          <h1 className="mt-4 text-3xl font-black text-secondary">Thank you for shopping</h1>
          <p className="mt-3 text-gray-600">Your order has been confirmed and a confirmation message will be sent shortly.</p>
          <Link
            href="/products"
            className="mt-6 inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Continue shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf0] text-secondary">
      <div className="container-custom py-8 sm:py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Checkout</p>
          <h1 className="mt-2 text-3xl font-black text-secondary">Complete your order</h1>
        </div>

        {items.length === 0 ? (
          <div className="rounded-[2rem] border border-black/5 bg-white p-10 text-center shadow-sm">
            <p className="text-2xl font-black text-secondary">Your cart is empty</p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Full name</label>
                  <input required className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Email address</label>
                  <input type="email" required className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Shipping address</label>
                  <textarea required rows={4} className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">City</label>
                  <input required className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">State</label>
                  <input required className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-secondary px-6 py-3 text-base font-semibold text-white transition hover:bg-black"
              >
                Place order
              </button>
            </form>

            <aside className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-secondary">Order summary</h2>

              <div className="mt-5 space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-3 rounded-[1.25rem] bg-[#fffaf0] p-3">
                    <div>
                      <p className="font-semibold text-secondary">{item.product?.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-primary">₦{((item.product?.price || 0) * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center justify-between"><span>Subtotal</span><span>₦{subtotal.toLocaleString()}</span></div>
                <div className="flex items-center justify-between"><span>Shipping</span><span>₦{shipping.toLocaleString()}</span></div>
                <div className="flex items-center justify-between"><span>Tax</span><span>₦{tax.toLocaleString()}</span></div>
              </div>

              <div className="mt-6 border-t border-black/5 pt-4">
                <div className="flex items-center justify-between text-lg font-black text-secondary">
                  <span>Total</span>
                  <span>₦{(subtotal + shipping + tax).toLocaleString()}</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
