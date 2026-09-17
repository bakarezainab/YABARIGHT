'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { useToastStore } from '@/store/toastStore';
import { 
  CheckCircle2, 
  CreditCard, 
  Building2, 
  Truck, 
  ShieldCheck, 
  ArrowLeft,
  ArrowRight,
  PackageCheck
} from 'lucide-react';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const showToast = useToastStore((state) => state.showToast);

  const [submitted, setSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank_transfer' | 'delivery'>('card');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Lagos',
    state: 'Lagos State',
    notes: '',
  });

  const shippingCost = items.length > 0 ? (total >= 35000 ? 0 : 2500) : 0;
  const tax = Math.round(total * 0.05);
  const finalTotal = total + shippingCost + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `YBR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(ref);
    setSubmitted(true);
    clearCart();
    showToast('Order confirmed successfully!', 'success');
  };

  if (submitted) {
    return (
      <div className="container-custom py-12">
        <div className="mx-auto max-w-xl rounded-[2.5rem] border border-black/10 bg-white p-8 text-center shadow-xl sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600">
            <PackageCheck className="h-10 w-10" />
          </div>
          
          <span className="mt-6 inline-block rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-emerald-800">
            Payment Confirmed
          </span>

          <h1 className="mt-3 text-3xl font-black text-gray-950">
            Thank you, {formData.fullName || 'Thrifter'}!
          </h1>
          
          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Your order has been received and is being prepared for dispatch.
          </p>

          <div className="mt-6 rounded-2xl border border-dashed border-gray-200 bg-[#fbf8f2] p-4 text-xs">
            <div className="flex justify-between text-gray-500">
              <span>Order Reference:</span>
              <span className="font-mono font-black text-gray-950">{orderRef}</span>
            </div>
            <div className="mt-2 flex justify-between text-gray-500">
              <span>Shipping to:</span>
              <span className="font-semibold text-gray-900">{formData.city}, {formData.state}</span>
            </div>
            <div className="mt-2 flex justify-between text-gray-500">
              <span>Total Paid:</span>
              <span className="font-black text-[#c88d00]">₦{finalTotal.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/products"
              className="flex-1 rounded-full bg-[#111111] py-3.5 text-xs font-black uppercase tracking-wider text-[#FFD700] hover:bg-black transition"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="flex-1 rounded-full border border-black/10 bg-gray-50 py-3.5 text-xs font-black uppercase tracking-wider text-gray-700 hover:bg-gray-100 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="mx-auto max-w-md rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-black text-gray-900">Your bag is empty</h2>
          <p className="mt-2 text-xs text-gray-500">
            Add some thrift gems to your bag before checking out.
          </p>
          <Link
            href="/products"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-2.5 text-xs font-black uppercase tracking-wider text-black hover:bg-[#ffcc00]"
          >
            <span>Browse Catalog</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-6 sm:py-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c88d00]">
            Secure Checkout
          </span>
          <h1 className="mt-1 text-2xl sm:text-4xl font-black text-gray-950">
            Complete Your Order
          </h1>
        </div>
        <Link
          href="/cart"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Edit Bag</span>
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Shipping Address */}
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4 mb-5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111111] text-[11px] font-black text-[#FFD700]">
                1
              </span>
              <h2 className="text-base font-black text-gray-950">
                Delivery Information
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zainab Bakare"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#FFD700]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#FFD700]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0801 234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#FFD700]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  required
                  placeholder="Flat number, Street name, Landmark"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#FFD700]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  City / Area
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Yaba, Ikeja, Lekki"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#FFD700]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lagos"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#FFD700]"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Payment Options */}
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4 mb-5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111111] text-[11px] font-black text-[#FFD700]">
                2
              </span>
              <h2 className="text-base font-black text-gray-950">
                Payment Method
              </h2>
            </div>

            <div className="space-y-3">
              {/* Paystack / Card */}
              <label
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition ${
                  paymentMethod === 'card'
                    ? 'border-[#c88d00] bg-amber-50/50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 text-[#c88d00]">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900">Card Payment (Paystack / Flutterwave)</p>
                    <p className="text-[11px] text-gray-500">Instant debit/credit card, Apple Pay</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="accent-[#c88d00]"
                />
              </label>

              {/* Direct Bank Transfer */}
              <label
                onClick={() => setPaymentMethod('bank_transfer')}
                className={`flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition ${
                  paymentMethod === 'bank_transfer'
                    ? 'border-[#c88d00] bg-amber-50/50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 text-[#c88d00]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900">Direct Bank Transfer</p>
                    <p className="text-[11px] text-gray-500">Pay directly into YabaRight escrow account</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'bank_transfer'}
                  onChange={() => setPaymentMethod('bank_transfer')}
                  className="accent-[#c88d00]"
                />
              </label>

              {/* Pay on Delivery */}
              <label
                onClick={() => setPaymentMethod('delivery')}
                className={`flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition ${
                  paymentMethod === 'delivery'
                    ? 'border-[#c88d00] bg-amber-50/50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 text-[#c88d00]">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900">Pay on Delivery</p>
                    <p className="text-[11px] text-gray-500">POS or Cash on delivery (Lagos only)</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'delivery'}
                  onChange={() => setPaymentMethod('delivery')}
                  className="accent-[#c88d00]"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFD700] py-4 text-xs font-black uppercase tracking-wider text-black transition hover:bg-[#ffcc00] hover:scale-[1.01] active:scale-95 shadow-lg"
          >
            <span>Confirm & Place Order (₦{finalTotal.toLocaleString()})</span>
            <CheckCircle2 className="h-4 w-4" />
          </button>
        </form>

        {/* Order Summary Sticky Card */}
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-base font-black text-gray-950 border-b border-gray-100 pb-3">
              Order Review ({items.length} items)
            </h2>

            {/* Items mini list */}
            <div className="mt-4 max-h-64 overflow-y-auto space-y-3 pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.product?.images?.[0] || '/casual-shirts-colorful.jpg'}
                    alt={item.product?.name}
                    className="h-14 w-14 rounded-xl object-cover bg-gray-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 line-clamp-1">
                      {item.product?.name}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Qty: {item.quantity} • ₦{(item.product?.price || 0).toLocaleString()} each
                    </p>
                  </div>
                  <span className="text-xs font-black text-gray-900">
                    ₦{((item.product?.price || 0) * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="mt-6 space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-bold text-gray-900">
                  {shippingCost === 0 ? 'FREE' : `₦${shippingCost.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>VAT (5%)</span>
                <span className="font-bold text-gray-900">₦{tax.toLocaleString()}</span>
              </div>
            </div>

            {/* Total */}
            <div className="mt-4 border-t border-gray-100 pt-4 flex items-baseline justify-between">
              <span className="text-sm font-bold text-gray-900">Total</span>
              <span className="text-2xl font-black text-[#c88d00]">
                ₦{finalTotal.toLocaleString()}
              </span>
            </div>

            {/* Trust highlights */}
            <div className="mt-6 rounded-xl bg-[#fbf8f2] p-3 text-[11px] text-gray-500 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>YABARIGHT Buyer Protection included</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-3.5 w-3.5 text-[#c88d00]" />
                <span>Tracked delivery via registered courier</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
