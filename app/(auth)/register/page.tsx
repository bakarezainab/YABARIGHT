'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useToastStore } from '@/store/toastStore';
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, ShoppingBag, Store } from 'lucide-react';

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, isLoading, error, clearError } = useAuthStore();
  const showToast = useToastStore((state) => state.showToast);

  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    const roleParam = searchParams.get('role') as 'buyer' | 'seller' | null;
    if (roleParam) {
      setRole(roleParam);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValidationError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (formData.password !== formData.confirmPassword) {
      setValidationError('Passwords do not match');
      return;
    }

    try {
      await register(formData.name, formData.email, formData.password);
      showToast('Account created successfully! Welcome to YabaRight.', 'success');
      router.push(role === 'seller' ? '/dashboard' : '/products');
    } catch (err) {
      // Error is handled by the store
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c88d00]">
          Get Started
        </span>
        <h2 className="mt-1 text-2xl sm:text-3xl font-black text-gray-950">
          Create Your Account
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Buy thrift fashion at unbeatable prices or start selling your own closet.
        </p>
      </div>

      {(error || validationError) && (
        <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-700">
          {error || validationError}
        </div>
      )}

      {/* Account Type Selector */}
      <div className="mb-5">
        <label className="mb-2 block text-xs font-bold text-gray-700">
          I want to:
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole('buyer')}
            className={`flex items-center justify-center gap-2 rounded-2xl border py-3 text-xs font-black uppercase tracking-wider transition ${
              role === 'buyer'
                ? 'border-[#111111] bg-[#111111] text-[#FFD700] shadow-sm'
                : 'border-gray-200 bg-[#fbf8f2] text-gray-700 hover:border-gray-300'
            }`}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Shop Thrift</span>
          </button>

          <button
            type="button"
            onClick={() => setRole('seller')}
            className={`flex items-center justify-center gap-2 rounded-2xl border py-3 text-xs font-black uppercase tracking-wider transition ${
              role === 'seller'
                ? 'border-[#111111] bg-[#111111] text-[#FFD700] shadow-sm'
                : 'border-gray-200 bg-[#fbf8f2] text-gray-700 hover:border-gray-300'
            }`}
          >
            <Store className="h-4 w-4" />
            <span>Sell Fits</span>
          </button>
        </div>
      </div>

      <div className="space-y-4 text-xs">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-bold text-gray-700">
            Full Name or Brand Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g. Zainab Bakare"
              className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-3 pl-10 text-xs text-gray-900 outline-none transition focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
            />
            <User className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block font-bold text-gray-700">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-3 pl-10 text-xs text-gray-900 outline-none transition focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
            />
            <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block font-bold text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create strong password"
              className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-3 pl-10 pr-10 text-xs text-gray-900 outline-none transition focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
            />
            <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="mb-1.5 block font-bold text-gray-700">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Repeat your password"
              className="w-full rounded-xl border border-gray-200 bg-[#fbf8f2] px-4 py-3 pl-10 text-xs text-gray-900 outline-none transition focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20"
            />
            <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] py-3.5 text-xs font-black uppercase tracking-wider text-[#FFD700] transition hover:bg-black hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 shadow-md"
      >
        <span>{isLoading ? 'Creating Account...' : 'Create My Account'}</span>
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-6 text-center text-xs text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-[#c88d00] hover:underline">
          Login here
        </Link>
      </p>
    </form>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="rounded-[2rem] bg-white p-8 text-center text-xs font-bold text-gray-500">
        Loading signup form...
      </div>
    }>
      <RegisterForm />
    </Suspense>
  );
}
