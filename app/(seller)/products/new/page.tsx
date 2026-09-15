'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProductStore } from '@/store/productStore';
import { ProductCondition, type Product } from '@/types';

const initialState = {
  name: '',
  category: 'Clothing',
  price: '12000',
  description: '',
  condition: ProductCondition.GOOD,
  size: 'M',
  brand: '',
  image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
};

export default function NewProductPage() {
  const router = useRouter();
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  const [form, setForm] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      sellerId: 'seller-current',
      name: form.name,
      description: form.description,
      category: form.category,
      price: Number(form.price),
      originalPrice: Number(form.price) + 6000,
      images: [form.image],
      size: form.size,
      condition: form.condition,
      material: 'Premium fabric',
      color: 'Neutral',
      brand: form.brand || 'YABARIGHT Seller',
      quantity: 5,
      sold: 0,
      rating: 4.6,
      trending: false,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setProducts([...products, newProduct]);
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-[#fffaf0] text-secondary">
      <div className="container-custom py-8 sm:py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Seller tools</p>
          <h1 className="mt-2 text-3xl font-black text-secondary">List a new product</h1>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Product name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                <option>Clothing</option>
                <option>Bags</option>
                <option>Shoes</option>
                <option>Accessories</option>
                <option>Designer Items</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Price (₦)</label>
              <input type="number" name="price" value={form.price} onChange={handleChange} required className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Condition</label>
              <select name="condition" value={form.condition} onChange={handleChange} className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                <option value={ProductCondition.NEW}>New</option>
                <option value={ProductCondition.LIKE_NEW}>Like New</option>
                <option value={ProductCondition.GOOD}>Good</option>
                <option value={ProductCondition.FAIR}>Fair</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Size</label>
              <input name="size" value={form.size} onChange={handleChange} className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Brand</label>
              <input name="brand" value={form.brand} onChange={handleChange} className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Image URL</label>
              <input name="image" value={form.image} onChange={handleChange} className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} required rows={4} className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="flex-1 rounded-full bg-secondary px-6 py-3 text-base font-semibold text-white transition hover:bg-black">
              Publish listing
            </button>
            <button type="button" onClick={() => router.push('/dashboard')} className="flex-1 rounded-full border border-secondary bg-primary px-6 py-3 text-base font-semibold text-secondary transition hover:translate-y-[-1px]">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
