'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Tag, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: 'Look Rich. Spend Smart.',
    subtitle: 'Suit, Shirt and Tie',
    dealPrice: 'Below ₦30,000',
    categoryName: 'Suits & Blazers',
    badge: 'Executive Deal',
    image: '/banner-suit-tie.jpg',
    targetHref: '/products?category=suits&max_price=30000',
    secondaryHref: '/products?category=suits',
    highlights: [
      'Tailored Two-Piece Suits & Sharp Blazers',
      'Matching Ties & Formal Office Shirts Included',
      'Premium Look & Feel without the High Street Markup',
      'Quality Checked Thrift Grade A & Brand New'
    ],
  },
  {
    id: 2,
    title: 'Great Fashion Within Reach',
    subtitle: 'Chop Corporate Shoes',
    dealPrice: '₦22,999',
    categoryName: 'Footwear',
    badge: 'Shoe Drop',
    image: '/banner-corporate-shoes.jpg',
    targetHref: '/products?category=shoes&max_price=23000',
    secondaryHref: '/products?category=shoes',
    highlights: [
      'Classic Leather Oxfords, Loafers & Dress Shoes',
      'Available in Black, Rich Brown, and Modern Grey',
      'Cushioned Insole for All-Day Work & Commute Comfort',
      'Durable Anti-Slip Sole for Nigerian Roads'
    ],
  },
  {
    id: 3,
    title: 'Look Sharp. Chop Casuals.',
    subtitle: 'Premium Quality Casual Shirts',
    dealPrice: 'Only ₦9,999',
    categoryName: 'Casual Shirts',
    badge: 'Budget Steal',
    image: '/banner-casual-shirts.jpg',
    targetHref: '/products?category=shirts&max_price=10000',
    secondaryHref: '/products?category=shirts',
    highlights: [
      'Folded Stacks of Casual Button-Downs & Polos',
      '100% Breathable Soft Cotton for Nigerian Weather',
      'Vibrant Colors, Prints & Weekend Chill Fits',
      'Durable Double Stitching Built to Last'
    ],
  },
  {
    id: 4,
    title: 'Look Good, Pay Less',
    subtitle: 'Chop for Office Shirts',
    dealPrice: 'Only ₦9,999',
    categoryName: 'Office Shirts',
    badge: 'Workplace Edit',
    image: '/banner-office-shirts.jpg',
    targetHref: '/products?category=shirts&max_price=10000',
    secondaryHref: '/products?category=shirts',
    highlights: [
      'Clean, Classy & Comfortable Stitched Shirts',
      'Classic Stripes, Light Blues & Crisp Solids',
      'Stiff Collars Ready for Office & Corporate Wear',
      'Top Thrift Grades Handpicked for Longevity'
    ],
  },
];

export function HeroCarousel() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Auto advance timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeSlide = heroSlides[current];

  return (
    <section
      className="relative overflow-hidden bg-[#090909] py-4 sm:py-6 lg:py-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Promotional Campaign Carousel"
    >
      {/* Background Ambience Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#FFD700]/10 blur-3xl" />

      <div className="container-custom">
        {/* Carousel Container */}
        <div className="relative rounded-[2rem] border border-[#FFD700]/25 bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#121212] p-4 sm:p-6 lg:p-8 shadow-2xl">
          
          {/* Main Slide Content: Responsive Split Layout */}
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.1fr]">
            
            {/* Poster Showcase Container */}
            <div className="relative flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#000000]/60 p-2 sm:p-4 border border-white/5 shadow-inner">
              <Link
                href={activeSlide.targetHref}
                className="group relative block w-full max-w-[380px] sm:max-w-[420px] transition-transform duration-300 hover:scale-[1.01]"
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="mx-auto h-[440px] sm:h-[500px] md:h-[540px] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition duration-500 group-hover:brightness-105"
                />

                {/* Floating "Click to Shop" Badge on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-black/30 rounded-2xl backdrop-blur-[2px]">
                  <span className="flex items-center gap-2 rounded-full bg-[#FFD700] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-xl">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Shop This Deal</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Interactive Details & Controls Panel */}
            <div className="flex flex-col justify-between space-y-6 text-white p-2 sm:p-4">
              {/* Header tags */}
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/15 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#FFD700] border border-[#FFD700]/30">
                    <Sparkles className="h-3.5 w-3.5 text-[#FFD700]" />
                    {activeSlide.badge}
                  </span>

                  <span className="text-xs font-mono font-bold text-gray-400">
                    0{current + 1} / 0{heroSlides.length}
                  </span>
                </div>

                <h2 className="mt-3 text-2xl sm:text-4xl font-black tracking-tight text-white">
                  {activeSlide.title}
                </h2>
                <p className="mt-1 text-sm sm:text-base font-bold text-gray-300">
                  {activeSlide.subtitle}
                </p>

                {/* Price Callout Banner */}
                <div className="mt-4 inline-flex items-baseline gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Deal Price:</span>
                  <span className="text-2xl font-black text-[#FFD700]">
                    {activeSlide.dealPrice}
                  </span>
                </div>
              </div>

              {/* Highlights list matching the poster */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                {activeSlide.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#FFD700]/20 text-[#FFD700]">
                      <span className="text-[10px] font-black">✓</span>
                    </div>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={activeSlide.targetHref}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD700] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-[#ffcc00] hover:scale-105 shadow-xl"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Shop This Offer Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={activeSlide.secondaryHref}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-bold text-white transition hover:border-[#FFD700] hover:text-[#FFD700]"
                >
                  <span>All {activeSlide.categoryName}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Interactive Thumbnail Navigator */}
              <div className="border-t border-white/10 pt-4">
                <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-[#FFD700]">
                  Click to switch campaign
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrent(idx)}
                      className={`group relative overflow-hidden rounded-xl border-2 transition-all ${
                        current === idx
                          ? 'border-[#FFD700] ring-2 ring-[#FFD700]/40 scale-100'
                          : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-16 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition" />
                      {current === idx && (
                        <div className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-[#FFD700]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md border border-white/10 transition hover:bg-[#FFD700] hover:text-black hover:scale-105"
            aria-label="Previous campaign"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md border border-white/10 transition hover:bg-[#FFD700] hover:text-black hover:scale-105"
            aria-label="Next campaign"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
