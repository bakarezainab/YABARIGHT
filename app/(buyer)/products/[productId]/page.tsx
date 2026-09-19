'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { getProductById, sampleProducts } from '@/lib/mockProducts';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { useToastStore } from '@/store/toastStore';
import { useAffiliateStore } from '@/store/affiliateStore';
import { ProductCard } from '@/components/ProductCard';
import { 
  ArrowLeft, 
  Heart, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles,
  Share2,
  Check
} from 'lucide-react';

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const product = getProductById(params.productId);
  const addItem = useCartStore((state) => state.addItem);
  const { items: wishlistItems, toggleItem } = useWishlistStore();
  const showToast = useToastStore((state) => state.showToast);
  const { setActiveRef } = useAffiliateStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.size || 'M');
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  // Capture affiliate ref from URL and persist it
  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      setActiveRef(ref.toUpperCase());
      if (typeof window !== 'undefined') {
        localStorage.setItem('yabaright_ref', ref.toUpperCase());
      }
    }
  }, [searchParams, setActiveRef]);

  if (!product) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-3xl">
            📦
          </div>
          <h1 className="mt-4 text-2xl font-black text-gray-900">
            Item Not Found
          </h1>
          <p className="mt-2 text-xs text-gray-500">
            This item may have been purchased by another thrifter or removed by the seller.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex rounded-full bg-[#111111] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#FFD700] transition hover:bg-black"
          >
            Explore Marketplace
          </Link>
        </div>
      </main>
    );
  }

  const isSaved = wishlistItems.includes(product.id);

  const handleWishlistToggle = () => {
    toggleItem(product.id);
    if (isSaved) {
      showToast('Removed from saved items', 'info');
    } else {
      showToast('Saved to your wishlist!', 'success');
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    showToast(`Added ${quantity}x "${product.name}" to your bag!`, 'success');
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    router.push('/cart');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      showToast('Product link copied to clipboard!', 'info');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Related products from same category or others
  const relatedProducts = sampleProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.trending))
    .slice(0, 4);

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const currentImage = product.images[selectedImageIndex] || product.images[0];

  return (
    <div className="container-custom py-6 sm:py-10">
      {/* Breadcrumb & Navigation */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold text-gray-700 shadow-sm transition hover:border-[#FFD700] hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Marketplace</span>
        </Link>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-bold text-gray-700 shadow-sm transition hover:border-[#FFD700]"
          title="Share product link"
        >
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Share2 className="h-4 w-4 text-gray-600" />}
          <span className="hidden sm:inline">{copied ? 'Link Copied' : 'Share Fit'}</span>
        </button>
      </div>

      {/* Main Product Layout */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left Column: Interactive Image Gallery */}
        <div className="space-y-4">
          {/* Main Hero Image */}
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f5f0] shadow-sm">
            <img
              src={currentImage}
              alt={product.name}
              className="h-[440px] sm:h-[520px] w-full object-cover transition-all duration-300"
            />

            {/* Badges on Hero */}
            <div className="absolute left-4 top-4 flex flex-col gap-2 z-10">
              {product.trending && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#111111] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#FFD700] shadow-md">
                  <Sparkles className="h-3 w-3" />
                  Trending Fit
                </span>
              )}
              {discountPercent && (
                <span className="inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                  Save {discountPercent}%
                </span>
              )}
            </div>

            {/* Wishlist floating toggle */}
            <button
              type="button"
              onClick={handleWishlistToggle}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
              aria-label="Save to wishlist"
            >
              <Heart
                className={`h-5 w-5 transition-colors ${
                  isSaved ? 'fill-red-500 text-red-500' : 'text-gray-700'
                }`}
              />
            </button>
          </div>

          {/* Thumbnail Gallery Row */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border-2 transition-all ${
                    selectedImageIndex === idx
                      ? 'border-[#FFD700] ring-2 ring-[#FFD700]/40 scale-95'
                      : 'border-black/10 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Details & Purchase */}
        <div className="flex flex-col">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
            {/* Header info */}
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#856404]">
                {product.condition || 'Verified Thrift'}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {product.brand || product.category}
              </span>
            </div>

            <h1 className="mt-4 text-2xl sm:text-3xl font-black text-gray-950">
              {product.name}
            </h1>

            {/* Ratings & Sold */}
            <div className="mt-3 flex items-center gap-3 text-xs">
              <div className="flex items-center text-amber-500">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="ml-1 font-bold text-gray-900">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{product.sold} thrifters bought this</span>
              <span className="text-gray-300">•</span>
              <span className="font-semibold text-emerald-600">In Stock</span>
            </div>

            {/* Price section */}
            <div className="mt-5 flex items-baseline gap-3 border-y border-gray-100 py-4">
              <span className="text-3xl font-black text-gray-950">
                ₦{product.price.toLocaleString()}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm font-semibold text-gray-400 line-through">
                  ₦{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              {product.description}
            </p>

            {/* Specifications Cards */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="rounded-xl border border-black/5 bg-[#fbf8f2] p-3 text-center">
                <p className="font-bold text-gray-400 uppercase text-[10px]">Condition</p>
                <p className="mt-1 font-black text-gray-900">{product.condition}</p>
              </div>
              <div className="rounded-xl border border-black/5 bg-[#fbf8f2] p-3 text-center">
                <p className="font-bold text-gray-400 uppercase text-[10px]">Size</p>
                <p className="mt-1 font-black text-gray-900">{product.size || 'Standard'}</p>
              </div>
              <div className="rounded-xl border border-black/5 bg-[#fbf8f2] p-3 text-center">
                <p className="font-bold text-gray-400 uppercase text-[10px]">Material</p>
                <p className="mt-1 font-black text-gray-900">{product.material || 'Cotton'}</p>
              </div>
              <div className="rounded-xl border border-black/5 bg-[#fbf8f2] p-3 text-center">
                <p className="font-bold text-gray-400 uppercase text-[10px]">Brand</p>
                <p className="mt-1 font-black text-gray-900">{product.brand || 'Verified'}</p>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-gray-800">
                  Select Size
                </label>
                <span className="text-[11px] text-gray-500">True to Nigerian fit</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['S', 'M', 'L', 'XL', 'Free Size'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-xl px-4 py-2 text-xs font-black uppercase transition-all ${
                      selectedSize === size
                        ? 'bg-[#111111] text-[#FFD700] ring-2 ring-[#FFD700]'
                        : 'border border-gray-200 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Actions */}
            <div className="mt-6 flex items-center gap-4">
              <label className="text-xs font-black uppercase tracking-wider text-gray-800">
                Quantity:
              </label>
              <div className="flex items-center rounded-xl border border-gray-200 bg-[#fbf8f2] p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-gray-700 shadow-xs hover:bg-gray-100"
                >
                  −
                </button>
                <span className="w-10 text-center text-xs font-black">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-gray-700 shadow-xs hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#111111] py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-black hover:scale-[1.02] active:scale-95 shadow-md"
              >
                <ShoppingBag className="h-4 w-4 text-[#FFD700]" />
                <span>Add to Bag</span>
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="flex-1 rounded-full bg-[#FFD700] py-3.5 text-xs font-black uppercase tracking-wider text-black transition hover:bg-[#ffcc00] hover:scale-[1.02] active:scale-95 shadow-md"
              >
                Buy Now
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="mt-8 space-y-3 rounded-2xl border border-black/5 bg-[#fbf8f2] p-4 text-xs text-gray-600">
              <div className="flex items-center gap-3">
                <Truck className="h-4 w-4 text-[#c88d00] flex-shrink-0" />
                <span>Dispatched within 24 hours across Lagos, Abuja & nationwide</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-[#c88d00] flex-shrink-0" />
                <span>Quality-checked thrift grade with 100% money protection</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-4 w-4 text-[#c88d00] flex-shrink-0" />
                <span>7-Day Return & replacement guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Showcase */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 border-t border-black/5 pt-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c88d00]">
                Similar Finds
              </p>
              <h2 className="mt-1 text-2xl font-black text-[#111111]">
                You May Also Like
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-gray-700 hover:text-[#c88d00]"
            >
              See All →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
