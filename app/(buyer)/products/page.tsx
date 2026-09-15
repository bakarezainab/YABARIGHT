'use client';

import { useEffect, useState } from 'react';
import { useProductStore } from '@/store/productStore';
import { PRODUCT_CATEGORIES } from '@/lib/constants';

export default function ProductsPage() {
  const {
    filteredProducts,
    filters,
    setFilters,
    isLoading,
    error,
  } = useProductStore();
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    // Fetch products from API
    // This is a placeholder - implement actual API call
    const mockProducts = [
      {
        id: '1',
        name: 'Vintage Leather Jacket',
        description: 'Classic leather jacket in great condition',
        category: 'Clothing',
        price: 8500,
        originalPrice: 15000,
        images: ['https://via.placeholder.com/300x300'],
        size: 'M',
        condition: 'GOOD',
        material: 'Leather',
        color: 'Black',
        brand: 'Zara',
        quantity: 5,
        sold: 12,
        rating: 4.5,
        trending: true,
        published: true,
        sellerId: 'seller1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more mock products as needed
    ];

    // Uncomment when API is ready:
    // useProductStore.setState({ products: mockProducts });
  }, []);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setFilters({ sort: value as any });
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-secondary">
      <header className="border-b border-black/5 bg-white/80 backdrop-blur-sm">
        <div className="container-custom py-6 sm:py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Marketplace
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Shop YABA<span className="text-primary">RIGHT</span> Fashion
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Trending', 'New Arrivals', 'Under ₦10k', 'Best Deals'].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-black/5 bg-[#fff7d6] px-3 py-1.5 text-xs font-semibold text-secondary"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="container-custom py-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[290px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-4 lg:self-start">
            <div className="rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-black text-secondary">Filters</h2>
                <button
                  type="button"
                  onClick={() => setFilters({ search: '', category: '', maxPrice: 100000, sort: 'newest' })}
                  className="text-xs font-semibold text-secondary hover:text-primary"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Search
                  </label>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={filters.search}
                    onChange={(e) => setFilters({ search: e.target.value })}
                    className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ category: e.target.value })}
                    className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">All categories</option>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Price range
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ maxPrice: Number(e.target.value) })}
                    className="w-full accent-primary"
                  />
                  <div className="mt-2 text-sm font-medium text-gray-600">
                    Up to ₦{filters.maxPrice.toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Sort by
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="w-full rounded-2xl border border-gray-200 bg-[#fffdf9] px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="trending">Trending</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            {error && (
              <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {isLoading ? (
              <div className="rounded-[1.75rem] border border-black/5 bg-white p-8 text-center text-gray-600 shadow-sm">
                Loading products...
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <article key={product.id} className="overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative overflow-hidden bg-[#f5f5f5]">
                      <img
                        src={product.images[0] || 'https://via.placeholder.com/300x300'}
                        alt={product.name}
                        className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                      />
                      {product.trending && (
                        <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-secondary">
                          Trending
                        </span>
                      )}
                    </div>

                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="rounded-full bg-[#fff7d6] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary">
                          {product.condition}
                        </span>
                        <span className="text-xs text-gray-500">{product.brand || 'Verified'}</span>
                      </div>

                      <h3 className="text-lg font-black text-secondary">{product.name}</h3>
                      <p className="mt-2 text-sm text-gray-600">{product.description}</p>

                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <p className="text-xl font-black text-primary">₦{product.price.toLocaleString()}</p>
                          {product.originalPrice && (
                            <p className="text-xs text-gray-500 line-through">
                              ₦{product.originalPrice.toLocaleString()}
                            </p>
                          )}
                        </div>
                        <button className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white transition hover:bg-black">
                          View
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-black/5 bg-white p-10 text-center shadow-sm">
                <p className="text-lg font-semibold text-secondary">No products found</p>
                <p className="mt-2 text-gray-600">Try a different search or clear the filters.</p>
                <button
                  onClick={() => setFilters({ search: '', category: '', maxPrice: 100000 })}
                  className="mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition hover:translate-y-[-1px]"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
