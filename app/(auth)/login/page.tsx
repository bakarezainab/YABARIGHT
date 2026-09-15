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
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-secondary">Login to Your Account</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-secondary text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 disabled:opacity-50"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      <p className="text-center mt-4 text-gray-600">
        Don't have an account?{' '}
        <Link href="/register" className="text-primary font-semibold hover:underline">
          Sign up here
        </Link>
      </p>
    </form>
  );
}
