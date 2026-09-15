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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold text-secondary">
            Shop YABA<span className="text-primary">RIGHT</span> Fashion
          </h1>
          <p className="text-gray-600 mt-2">
            Discover premium quality thrift fashion at affordable prices
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h2 className="text-lg font-bold mb-4 text-secondary">Filters</h2>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ search: e.target.value })
                  }
                  className="input-field"
                />
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) =>
                    setFilters({ category: e.target.value })
                  }
                  className="input-field"
                >
                  <option value="">All Categories</option>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Price Range
                </label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters({ maxPrice: Number(e.target.value) })
                  }
                  className="w-full"
                />
                <div className="text-sm text-gray-600 mt-2">
                  Up to ₦{filters.maxPrice.toLocaleString()}
                </div>
              </div>

              {/* Sort */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="input-field"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="trending">Trending</option>
                </select>
              </div>

              <button
                onClick={() => setFilters({ sort: 'newest' })}
                className="w-full btn-secondary text-sm"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading products...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="cards-grid">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="card hover:shadow-xl transition-shadow">
                    <div className="relative overflow-hidden bg-gray-200 h-64">
                      <img
                        src={product.images[0] || 'https://via.placeholder.com/300x300'}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                      {product.trending && (
                        <div className="absolute top-2 right-2 badge-primary">
                          Trending
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-secondary truncate">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {product.condition}
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-lg font-bold text-primary">
                            ₦{product.price.toLocaleString()}
                          </p>
                          {product.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">
                              ₦{product.originalPrice.toLocaleString()}
                            </p>
                          )}
                        </div>
                        <button className="btn-secondary text-sm px-3 py-1">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No products found</p>
                <button
                  onClick={() => setFilters({ search: '', category: '' })}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
