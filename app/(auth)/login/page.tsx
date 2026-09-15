'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, clearError } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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

    try {
      await login(formData.email, formData.password);
      router.push('/products');
    } catch (err) {
      // Error is handled by the store
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Welcome back</p>
        <h2 className="mt-2 text-3xl font-black text-secondary">Login to your account</h2>
      </div>

      {error && (
        <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-5">
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
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <button type="button" className="text-xs font-semibold text-secondary hover:text-primary">
              Forgot password?
            </button>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-7 w-full rounded-2xl bg-secondary px-4 py-3 text-base font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          Create one
        </Link>
      </p>
    </form>
  );
}
