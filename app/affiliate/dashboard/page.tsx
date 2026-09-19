'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAffiliateStore, type Affiliate } from '@/store/affiliateStore';
import { useToastStore } from '@/store/toastStore';
import {
  Wallet, TrendingUp, Users, Copy, Check, ArrowRight,
  Share2, Clock, CheckCircle2, ExternalLink
} from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yabaright.com';

export default function AffiliateDashboard() {
  const { affiliates, getCommissionsForAffiliate } = useAffiliateStore();
  const showToast = useToastStore((s) => s.showToast);

  const [emailInput, setEmailInput] = useState('');
  const [affiliate, setAffiliate] = useState<Affiliate | null>(affiliates[0] || null);
  const [copied, setCopied] = useState(false);

  const commissions = affiliate ? getCommissionsForAffiliate(affiliate.code) : [];
  const totalOrders = commissions.length;
  const totalRevenue = commissions.reduce((s, c) => s + c.orderTotal, 0);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const found = affiliates.find((a) => a.email.toLowerCase() === emailInput.toLowerCase());
    if (found) {
      setAffiliate(found);
    } else {
      showToast('No affiliate account found for that email.', 'error');
    }
  };

  const copyCode = () => {
    if (!affiliate) return;
    navigator.clipboard.writeText(affiliate.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyLink = (productId?: string) => {
    const url = productId
      ? `${SITE_URL}/products/${productId}?ref=${affiliate?.code}`
      : `${SITE_URL}/products?ref=${affiliate?.code}`;
    navigator.clipboard.writeText(url);
    showToast('Link copied to clipboard!', 'success');
  };

  if (!affiliate) {
    return (
      <div className="container-custom py-16">
        <div className="mx-auto max-w-md rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFD700]/20">
            <Users className="h-8 w-8 text-[#c88d00]" />
          </div>
          <h1 className="mt-4 text-xl font-black text-gray-900">Affiliate Dashboard</h1>
          <p className="mt-2 text-xs text-gray-500">Enter your registered email to view your dashboard.</p>
          <form onSubmit={handleLookup} className="mt-6 space-y-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#FFD700]"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFD700] py-3 text-xs font-black uppercase tracking-wide text-black hover:bg-[#ffcc00] transition"
            >
              View Dashboard <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">
            Not yet an affiliate?{' '}
            <Link href="/affiliate/register" className="font-bold text-[#c88d00] hover:underline">
              Join here
            </Link>
          </p>
        </div>
      </div>
    );
  }

  const stats = [
    { icon: Wallet, label: 'Total Earnings', value: `₦${affiliate.totalEarnings.toLocaleString()}`, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: Clock, label: 'Pending Payout', value: `₦${affiliate.pendingEarnings.toLocaleString()}`, color: 'text-amber-600', bg: 'bg-amber-50' },
    { icon: TrendingUp, label: 'Total Sales', value: totalOrders.toString(), color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Users, label: 'Revenue Generated', value: `₦${totalRevenue.toLocaleString()}`, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="container-custom py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c88d00]">Affiliate Dashboard</span>
          <h1 className="mt-1 text-2xl font-black text-gray-950 sm:text-3xl">
            Welcome back, {affiliate.fullName.split(' ')[0]}
          </h1>
        </div>
        <button
          onClick={() => setAffiliate(null)}
          className="text-xs font-bold text-gray-400 hover:text-gray-700"
        >
          Switch Account
        </button>
      </div>

      {/* Referral Code Card */}
      <div className="mb-6 rounded-[2rem] bg-[#111111] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Your Referral Code</p>
            <div className="mt-2 flex items-center gap-3">
              <span className="font-mono text-3xl font-black tracking-widest text-[#FFD700] sm:text-4xl">
                {affiliate.code}
              </span>
              <button
                onClick={copyCode}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p className="mt-1 font-mono text-xs text-white/40">
              {SITE_URL}/products?ref={affiliate.code}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <button
              onClick={() => copyLink()}
              className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-5 py-2.5 text-xs font-black uppercase tracking-wide text-black hover:bg-[#ffcc00] transition"
            >
              <Share2 className="h-3.5 w-3.5" /> Copy All-Products Link
            </button>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold text-white/70 hover:text-white hover:border-white/40 transition"
            >
              Browse Products <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="rounded-2xl border border-black/10 bg-white p-5">
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${bg}`}>
              <Icon className={`h-4 w-4 ${color}`} />
            </div>
            <p className="mt-3 text-xl font-black text-gray-950 sm:text-2xl">{value}</p>
            <p className="mt-0.5 text-[11px] text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      {/* Commission History */}
      <div className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="mb-5 text-base font-black text-gray-950">Commission History</h2>
        {commissions.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-3xl">
              🛍️
            </div>
            <p className="mt-4 text-sm font-bold text-gray-400">No commissions yet</p>
            <p className="mt-1 text-xs text-gray-400">
              Share your link and start earning. Every qualifying purchase earns you 10%.
            </p>
            <button
              onClick={() => copyLink()}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-5 py-2.5 text-xs font-black uppercase tracking-wide text-black hover:bg-[#ffcc00] transition"
            >
              <Copy className="h-3.5 w-3.5" /> Copy Your Link
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 text-left text-[11px] font-black uppercase tracking-wider text-gray-400">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Order Total</th>
                  <th className="pb-3">Commission (10%)</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {commissions.map((c) => (
                  <tr key={c.id}>
                    <td className="py-3 font-mono font-bold text-gray-700">{c.orderId}</td>
                    <td className="py-3 text-gray-600">{c.customerName}</td>
                    <td className="py-3 font-bold text-gray-900">₦{c.orderTotal.toLocaleString()}</td>
                    <td className="py-3 font-black text-emerald-600">₦{c.commissionAmount.toLocaleString()}</td>
                    <td className="py-3">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-black uppercase ${
                        c.status === 'paid'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {c.status === 'paid'
                          ? <><CheckCircle2 className="h-3 w-3" /> Paid</>
                          : <><Clock className="h-3 w-3" /> Pending</>
                        }
                      </span>
                    </td>
                    <td className="py-3 text-gray-400">
                      {new Date(c.createdAt).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Payout notice */}
      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
        <strong>Payout Policy:</strong> Commissions are processed every Friday and transferred directly to your registered bank account. Minimum payout is ₦2,000. Contact <strong>affiliates@yabaright.com</strong> to register your bank details.
      </div>
    </div>
  );
}
