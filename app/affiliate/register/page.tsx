'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAffiliateStore, type Affiliate } from '@/store/affiliateStore';
import { useToastStore } from '@/store/toastStore';
import {
  Users, Copy, Check, ArrowRight, AtSign, MessageSquare,
  Gift, TrendingUp, Wallet, Share2
} from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yabaright.com';

export default function AffiliateRegisterPage() {
  const { registerAffiliate, getAffiliateByEmail } = useAffiliateStore();
  const showToast = useToastStore((s) => s.showToast);

  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', socialHandle: '',
  });
  const [affiliate, setAffiliate] = useState<Affiliate | null>(null);
  const [copied, setCopied] = useState(false);
  const [emailLogin, setEmailLogin] = useState('');
  const [loginView, setLoginView] = useState(false);

  const benefits = [
    { icon: Gift, label: '10% Commission', desc: 'Earn on every sale you refer' },
    { icon: TrendingUp, label: 'Real-time Tracking', desc: 'See your clicks and conversions' },
    { icon: Wallet, label: 'Fast Payouts', desc: 'Weekly bank transfer to your account' },
    { icon: Share2, label: 'Easy Sharing', desc: 'Your personal link for every product' },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone) return;
    const result = registerAffiliate(form);
    setAffiliate(result);
    showToast('Welcome to YABARIGHT Affiliates! 🎉', 'success');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const found = getAffiliateByEmail(emailLogin.trim().toLowerCase());
    if (found) {
      setAffiliate(found);
      showToast('Welcome back! 👋', 'success');
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

  const copyLink = () => {
    if (!affiliate) return;
    navigator.clipboard.writeText(`${SITE_URL}/products?ref=${affiliate.code}`);
    showToast('Referral link copied!', 'success');
  };

  if (affiliate) {
    return (
      <div className="container-custom py-10 sm:py-16">
        <div className="mx-auto max-w-2xl">
          {/* Success header */}
          <div className="rounded-[2.5rem] bg-[#111111] p-8 text-center text-white sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FFD700]/20">
              <Users className="h-10 w-10 text-[#FFD700]" />
            </div>
            <h1 className="mt-4 text-2xl font-black sm:text-3xl">
              You&apos;re In, {affiliate.fullName.split(' ')[0]}! 🎉
            </h1>
            <p className="mt-2 text-sm text-white/60">
              Start sharing and earn 10% on every sale you bring
            </p>

            {/* Code */}
            <div className="mt-8 rounded-2xl bg-white/10 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                Your Referral Code
              </p>
              <div className="mt-3 flex items-center justify-center gap-4">
                <span className="font-mono text-4xl font-black tracking-widest text-[#FFD700]">
                  {affiliate.code}
                </span>
                <button
                  onClick={copyCode}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Referral Link */}
            <div className="mt-4 rounded-2xl bg-white/5 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                Your Referral Link
              </p>
              <p className="mt-2 break-all font-mono text-xs text-white/70">
                {SITE_URL}/products?ref={affiliate.code}
              </p>
              <button
                onClick={copyLink}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-5 py-2 text-xs font-black uppercase tracking-wide text-black hover:bg-[#ffcc00] transition"
              >
                <Copy className="h-3.5 w-3.5" /> Copy Link
              </button>
            </div>
          </div>

          {/* Share tips */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <AtSign className="h-6 w-6 text-pink-500" />
              <p className="mt-3 text-sm font-black text-gray-900">Post on Instagram</p>
              <p className="mt-1 text-xs text-gray-500">
                Share your link in bio or stories. Caption: &ldquo;Shop affordable fashion at YABARIGHT — use code {affiliate.code} 🛍️&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <MessageSquare className="h-6 w-6 text-sky-500" />
              <p className="mt-3 text-sm font-black text-gray-900">Post on X / TikTok</p>
              <p className="mt-1 text-xs text-gray-500">
                Thread your favorite picks and drop the link. Every click that converts earns you ₦₦₦.
              </p>
            </div>
          </div>

          {/* Dashboard CTA */}
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/affiliate/dashboard"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#FFD700] py-3.5 text-xs font-black uppercase tracking-wider text-black hover:bg-[#ffcc00] transition"
            >
              View My Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-black/10 bg-white py-3.5 text-xs font-black uppercase tracking-wider text-gray-700 hover:bg-gray-50 transition"
            >
              Browse Products to Share
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-10 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Benefits */}
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c88d00]">
              Affiliate Programme
            </span>
            <h1 className="mt-2 text-3xl font-black text-gray-950 sm:text-5xl">
              Earn Money
              <br />
              <span className="text-[#c88d00]">While You Share</span>
            </h1>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Join thousands of fashion lovers earning real money by sharing
              YABARIGHT products on social media. Get your unique code, share
              product links, and earn <strong>10% commission</strong> on every
              sale — no investment required.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD700]/20">
                    <Icon className="h-4 w-4 text-[#c88d00]" />
                  </div>
                  <p className="mt-3 text-xs font-black text-gray-900">{label}</p>
                  <p className="mt-0.5 text-[11px] text-gray-500">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#111111] p-5 text-white">
              <p className="text-xs font-black uppercase tracking-wider text-[#FFD700]">
                How it works
              </p>
              {[
                '1. Register with your name, email & social handle',
                '2. Get your unique referral code instantly',
                '3. Share your link on Instagram, TikTok, X, WhatsApp',
                '4. Earn 10% whenever someone buys through your link',
              ].map((step) => (
                <p key={step} className="mt-2 text-xs text-white/70">{step}</p>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
              {/* Tab toggle */}
              <div className="mb-6 flex rounded-xl border border-gray-200 p-1">
                <button
                  onClick={() => setLoginView(false)}
                  className={`flex-1 rounded-lg py-2 text-xs font-black uppercase tracking-wide transition ${
                    !loginView ? 'bg-[#111111] text-[#FFD700]' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  New Affiliate
                </button>
                <button
                  onClick={() => setLoginView(true)}
                  className={`flex-1 rounded-lg py-2 text-xs font-black uppercase tracking-wide transition ${
                    loginView ? 'bg-[#111111] text-[#FFD700]' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Already Joined
                </button>
              </div>

              {!loginView ? (
                <form onSubmit={handleRegister} className="space-y-4">
                  <h2 className="text-base font-black text-gray-900">Create Your Affiliate Account</h2>

                  {[
                    { label: 'Full Name', key: 'fullName', type: 'text', placeholder: 'e.g. Zainab Bakare' },
                    { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '0801 234 5678' },
                    { label: 'Social Handle (Instagram / TikTok)', key: 'socialHandle', type: 'text', placeholder: '@yourhandle' },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="mb-1.5 block text-xs font-bold text-gray-700">{label}</label>
                      <input
                        type={type}
                        required={key !== 'socialHandle'}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#FFD700]"
                      />
                    </div>
                  ))}

                  <p className="text-[11px] text-gray-400">
                    By registering you agree to YABARIGHT's affiliate terms. Commissions are tracked per order and paid weekly via bank transfer.
                  </p>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFD700] py-3.5 text-xs font-black uppercase tracking-wider text-black hover:bg-[#ffcc00] transition"
                  >
                    Get My Referral Code <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                  <h2 className="text-base font-black text-gray-900">Access Your Dashboard</h2>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="The email you registered with"
                      value={emailLogin}
                      onChange={(e) => setEmailLogin(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-[#FFD700]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] py-3.5 text-xs font-black uppercase tracking-wider text-[#FFD700] hover:bg-black transition"
                  >
                    Access Dashboard <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
