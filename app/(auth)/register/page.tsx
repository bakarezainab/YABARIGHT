'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, isLoading, error, clearError } = useAuthStore();
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    try {
      await register(formData.name, formData.email, formData.password);
      router.push(role === 'seller' ? '/dashboard' : '/products');
    } catch (err) {
      // Error is handled by the store
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Create account</p>
        <h2 className="mt-2 text-3xl font-black text-secondary">Join YABARIGHT</h2>
      </div>

      {error && (
        <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-gray-700">Account type</label>
        <div className="grid grid-cols-2 gap-3">
          {(['buyer', 'seller'] as const).map((accountType) => (
            <button
              key={accountType}
              type="button"
              onClick={() => setRole(accountType)}
              className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                role === accountType
                  ? 'border-primary bg-primary text-secondary'
                  : 'border-gray-200 bg-[#fffdf9] text-gray-700 hover:border-primary/60'
              }`}
            >
              {accountType === 'buyer' ? 'Buyer' : 'Seller'}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Create a password"
            className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-gray-700">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
            className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-7 w-full rounded-2xl bg-secondary px-4 py-3 text-base font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? 'Creating account...' : 'Create account'}
      </button>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Login here
        </Link>
      </p>
    </form>
  );
}
