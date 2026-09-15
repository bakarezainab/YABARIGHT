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
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-secondary">Create Account</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block font-semibold mb-2">Account Type</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="buyer"
              checked={role === 'buyer'}
              onChange={(e) => setRole(e.target.value as 'buyer' | 'seller')}
              className="mr-2"
            />
            <span>Buyer</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="seller"
              checked={role === 'seller'}
              onChange={(e) => setRole(e.target.value as 'buyer' | 'seller')}
              className="mr-2"
            />
            <span>Seller</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
      </div>

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

      <div className="mb-4">
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

      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block font-semibold mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
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
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>

      <p className="text-center mt-4 text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-primary font-semibold hover:underline">
          Login here
        </Link>
      </p>
    </form>
  );
}
