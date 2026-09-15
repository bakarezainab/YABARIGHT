import Link from 'next/link';
import { sampleProducts } from '@/lib/mockProducts';

const categoryPills = ['Thrift', 'New', 'Deals', 'Declutter', 'TradeOff'];

// Categories with Nigerian-relevant imagery
const quickCategories = [
	{
		title: 'Shoes',
		subtitle: 'Sneakers • Sandals • Boots',
		image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea463f?auto=format&fit=crop&w=900&q=80',
		count: '2,340+ items',
	},
	{
		title: 'Bags',
		subtitle: 'Totes • Crossbody • Statement',
		image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80',
		count: '1,850+ items',
	},
	{
		title: 'Clothes',
		subtitle: 'Streetwear • Everyday Fits',
		image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
		count: '4,200+ items',
	},
	{
		title: 'Shirts',
		subtitle: 'Folded Stacks • Premium Picks',
		image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
		count: '1,560+ items',
	},
	{
		title: 'Suits',
		subtitle: 'Smart Looks for Work & Events',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
		count: '890+ items',
	},
	{
		title: 'Accessories',
		subtitle: 'Watches • Belts • Jewelry',
		image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
		count: '3,100+ items',
	},
];

// Style collections
const styleCollections = [
	{
		title: 'Folded Shirts',
		caption: '5 in a roll • Ready to wear',
		image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
		accent: 'from-[#f5d76f] to-[#f4c542]',
		link: '/products?category=shirts',
	},
	{
		title: 'Female Style',
		caption: 'Shoes, bags & everyday edits',
		image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80',
		accent: 'from-[#f4d8c6] to-[#d7a58c]',
		link: '/products?category=female',
	},
	{
		title: 'Trainers & Suits',
		caption: 'Fresh street and smart office pairs',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
		accent: 'from-[#a7d5d9] to-[#54c1c5]',
		link: '/products?category=male',
	},
];

// Gender collections
const genderCollections = [
	{
		label: 'Male Collection',
		description: 'Sharp suits, casual shirts, and everyday essentials',
		image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
		link: '/products?gender=male',
	},
	{
		label: 'Female Collection',
		description: 'Trendy dresses, bags, shoes and statement pieces',
		image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80',
		link: '/products?gender=female',
	},
];

const featuredProducts = sampleProducts.slice(0, 8);

export default function Home() {
	return (
		<main className="min-h-screen bg-[#f5f0e8] text-[#121212]">
			{/* Header - Fixed with clear logo visibility */}
			<header className="sticky top-0 z-50 border-b border-[#c88d00]/30 bg-[#0b0b0b] shadow-lg">
				<div className="container-custom flex items-center justify-between py-4">
					<Link href="/" className="flex items-center gap-3">
						<div className="brand-wordmark text-3xl sm:text-4xl">
							Y<span className="text-[#c88d00]">A</span>BA<span className="text-[#c88d00]">RIGHT</span>
						</div>
					</Link>

					<nav className="hidden items-center gap-6 text-sm font-bold text-white/80 md:flex">
						{categoryPills.map((item) => (
							<Link key={item} href="/products" className="transition hover:text-[#c88d00]">
								{item}
							</Link>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<Link
							href="/login"
							className="hidden text-sm font-semibold text-white/80 transition hover:text-[#c88d00] sm:inline-flex"
						>
							Login
						</Link>
						<Link
							href="/products"
							className="inline-flex rounded-full bg-[#c88d00] px-6 py-2.5 text-sm font-black text-[#131313] transition hover:-translate-y-0.5 hover:bg-[#ffcc00]"
						>
							Shop now
						</Link>
					</div>
				</div>
			</header>

			{/* Hero Banner Carousel - Multiple Product Banners */}
			<section className="relative overflow-hidden bg-[#000000]">
				<div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
					{/* Banner 1 - Shoes & Bags */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea463f?auto=format&fit=crop&w=1600&q=80"
								alt="Shoes and Bags"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-4">
									<span className="inline-block rounded-full bg-[#c88d00] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black">
										Female Collection
									</span>
									<h2 className="text-5xl font-black text-white lg:text-6xl">
										Shoes & Bags
									</h2>
									<p className="text-lg text-white/80">
										Step out in style with trending footwear and statement bags
									</p>
									<Link
										href="/products?category=shoes"
										className="inline-block rounded-full bg-[#c88d00] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#ffcc00]"
									>
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Banner 2 - Folded Shirts */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1600&q=80"
								alt="Folded Shirts"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-4">
									<span className="inline-block rounded-full bg-[#c88d00] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black">
										Bundle Deal
									</span>
									<h2 className="text-5xl font-black text-white lg:text-6xl">
										5 Shirts in a Roll
									</h2>
									<p className="text-lg text-white/80">
										Quality thrift shirts, neatly folded and ready to wear
									</p>
									<Link
										href="/products?category=shirts"
										className="inline-block rounded-full bg-[#c88d00] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#ffcc00]"
									>
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Banner 3 - Male Suits */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80"
								alt="Suits and Corporate Wear"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-4">
									<span className="inline-block rounded-full bg-[#c88d00] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black">
										Male Collection
									</span>
									<h2 className="text-5xl font-black text-white lg:text-6xl">
										Suits & Trainers
									</h2>
									<p className="text-lg text-white/80">
										Smart office looks and street-ready trainers for every occasion
									</p>
									<Link
										href="/products?category=suits"
										className="inline-block rounded-full bg-[#c88d00] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#ffcc00]"
									>
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Banner 4 - Bags Collection */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1600&q=80"
								alt="Bags Collection"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-4">
									<span className="inline-block rounded-full bg-[#c88d00] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black">
										Trending Now
									</span>
									<h2 className="text-5xl font-black text-white lg:text-6xl">
										Designer Bags
									</h2>
									<p className="text-lg text-white/80">
										Totes, crossbody, and statement bags for every style
									</p>
									<Link
										href="/products?category=bags"
										className="inline-block rounded-full bg-[#c88d00] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#ffcc00]"
									>
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Banner 5 - Accessories */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1600&q=80"
								alt="Accessories"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-4">
									<span className="inline-block rounded-full bg-[#c88d00] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-black">
										Complete Your Look
									</span>
									<h2 className="text-5xl font-black text-white lg:text-6xl">
										Accessories
									</h2>
									<p className="text-lg text-white/80">
										Watches, belts, jewelry, and more to elevate your outfit
									</p>
									<Link
										href="/products?category=accessories"
										className="inline-block rounded-full bg-[#c88d00] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#ffcc00]"
									>
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
					{[1, 2, 3, 4, 5].map((_, index) => (
						<div
							key={index}
							className={`h-2 rounded-full transition-all ${
								index === 0 ? 'w-8 bg-[#c88d00]' : 'w-2 bg-white/40'
							}`}
						/>
					))}
				</div>

				{/* Scroll Down Arrow */}
				<a
					href="#categories"
					className="absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition hover:bg-[#c88d00] group"
				>
					<svg
						className="h-6 w-6 animate-bounce text-white group-hover:text-black"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</a>
			</section>

			{/* Category Pills */}
			<section className="bg-[#0b0b0b] py-4">
				<div className="container-custom">
					<div className="flex flex-wrap gap-2">
						{['Shoes', 'Bags', 'Clothes', 'Shirts', 'Suits', 'Male', 'Female'].map((item) => (
							<Link
								key={item}
								href={`/products?category=${item.toLowerCase()}`}
								className="rounded-full border border-[#c88d00]/40 bg-[#c88d00]/10 px-5 py-2 text-xs font-black uppercase tracking-wider text-[#c88d00] transition hover:bg-[#c88d00] hover:text-black"
							>
								{item}
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Categories Grid */}
			<section id="categories" className="container-custom py-12">
				<div className="mb-8 flex items-end justify-between gap-4">
					<div>
						<p className="text-xs font-black uppercase tracking-[0.24em] text-[#c88d00]">
							Browse by Category
						</p>
						<h2 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">
							Shop by Category
						</h2>
					</div>
					<Link
						href="/products"
						className="text-sm font-black text-[#111111] hover:text-[#c88d00]"
					>
						View All →
					</Link>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
					{quickCategories.map((category) => (
						<Link
							key={category.title}
							href={`/products?category=${category.title.toLowerCase()}`}
							className="group overflow-hidden rounded-2xl border border-[#e8dfd1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
						>
							<div className="relative h-40 overflow-hidden">
								<img
									src={category.image}
									alt={category.title}
									className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
								<div className="absolute bottom-3 left-3">
									<p className="text-lg font-black text-white">{category.title}</p>
								</div>
							</div>
							<div className="p-3">
								<p className="text-xs text-[#575757]">{category.subtitle}</p>
								<p className="mt-1 text-xs font-bold text-[#c88d00]">{category.count}</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Featured Products */}
			<section className="bg-white py-12">
				<div className="container-custom">
					<div className="mb-8 flex items-end justify-between gap-4">
						<div>
							<p className="text-xs font-black uppercase tracking-[0.24em] text-[#c88d00]">
								Top Sellers
							</p>
							<h2 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">
								Products You Can Shop Now
							</h2>
						</div>
						<Link
							href="/products"
							className="rounded-full bg-[#c88d00] px-5 py-2 text-sm font-black uppercase tracking-wide text-[#111] transition hover:bg-[#ffcc00]"
						>
							Shop All
						</Link>
					</div>

					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{featuredProducts.map((product) => (
							<Link
								key={product.id}
								href={`/products/${product.id}`}
								className="group overflow-hidden rounded-2xl border border-[#e6dcc7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
							>
								<div className="relative h-64 overflow-hidden">
									<img
										src={product.images[0]}
										alt={product.name}
										className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
									/>
									{product.trending && (
										<span className="absolute right-3 top-3 rounded-full bg-[#c88d00] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#111111]">
											Trending
										</span>
									)}
									<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
										<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#111]">
											Quick View
										</span>
									</div>
								</div>
								<div className="p-4">
									<div className="flex items-center justify-between gap-2">
										<span className="rounded-full bg-[#fff7d6] px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#111111]">
											{product.condition}
										</span>
										<span className="text-[10px] font-semibold uppercase tracking-wide text-[#676767]">
											{product.brand || 'Verified'}
										</span>
									</div>
									<h3 className="mt-3 text-lg font-black text-[#111111] line-clamp-1">{product.name}</h3>
									<p className="mt-1 text-sm text-[#5b5b5b] line-clamp-2">{product.description}</p>
									<div className="mt-4 flex items-center justify-between">
										<div>
											<p className="text-xl font-black text-[#111111]">₦{product.price.toLocaleString()}</p>
											{product.originalPrice && (
												<p className="text-xs text-[#797979] line-through">
													₦{product.originalPrice.toLocaleString()}
												</p>
											)}
										</div>
										<span className="rounded-full bg-[#c88d00] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#111] transition group-hover:bg-[#ffcc00]">
											View
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Style Edit Section */}
			<section className="container-custom py-12">
				<div className="mb-8 flex items-end justify-between gap-4">
					<div>
						<p className="text-xs font-black uppercase tracking-[0.24em] text-[#c88d00]">
							Curated for You
						</p>
						<h2 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">
							Fresh Local Finds
						</h2>
					</div>
				</div>

				<div className="grid gap-5 md:grid-cols-3">
					{styleCollections.map((item) => (
						<Link
							key={item.title}
							href={item.link}
							className="group overflow-hidden rounded-3xl border border-[#eadfcf] bg-[#f9f5f0] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
						>
							<div className={`relative h-80 bg-gradient-to-br ${item.accent}`}>
								<img
									src={item.image}
									alt={item.title}
									className="h-full w-full object-cover mix-blend-multiply opacity-90 transition duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
								<div className="absolute bottom-4 left-4 right-4">
									<p className="text-2xl font-black text-white drop-shadow-lg">{item.title}</p>
									<p className="mt-1 text-sm text-white/90">{item.caption}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Male/Female Split */}
			<section className="py-12">
				<div className="container-custom">
					<div className="mb-8 text-center">
						<p className="text-xs font-black uppercase tracking-[0.24em] text-[#c88d00]">
							Shop by Gender
						</p>
						<h2 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">
							For Him & For Her
						</h2>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						{genderCollections.map((spot) => (
							<Link
								key={spot.label}
								href={spot.link}
								className="group relative overflow-hidden rounded-3xl"
							>
								<div className="h-96">
									<img
										src={spot.image}
										alt={spot.label}
										className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
								</div>
								<div className="absolute bottom-6 left-6 right-6">
									<p className="text-3xl font-black text-white">{spot.label}</p>
									<p className="mt-2 text-sm text-white/80">{spot.description}</p>
									<span className="mt-4 inline-block rounded-full bg-white px-6 py-2 text-sm font-black uppercase tracking-wide text-[#111] transition group-hover:bg-[#c88d00]">
										Shop Now
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Why Shop With Us */}
			<section className="bg-white py-12">
				<div className="container-custom">
					<div className="mb-8 text-center">
						<p className="text-xs font-black uppercase tracking-[0.24em] text-[#c88d00]">
							Why YabaRight?
						</p>
						<h2 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">
							Built for Everyday Buyers
						</h2>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								icon: '🚚',
								title: 'Fast Delivery',
								description: 'Nationwide delivery within 2-5 business days',
							},
							{
								icon: '✅',
								title: 'Verified Sellers',
								description: 'All sellers are vetted and trusted',
							},
							{
								icon: '💰',
								title: 'Best Prices',
								description: 'Unbeatable prices on thrift & new items',
							},
							{
								icon: '🔄',
								title: 'Easy Returns',
								description: 'Hassle-free returns within 7 days',
							},
						].map((item, index) => (
							<div
								key={index}
								className="rounded-2xl border border-[#e8e0d5] bg-[#f9f5f0] p-6 text-center"
							>
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#c88d00]/20 text-3xl">
									{item.icon}
								</div>
								<h3 className="text-lg font-black text-[#111]">{item.title}</h3>
								<p className="mt-2 text-sm text-[#666]">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="container-custom py-12">
				<div className="overflow-hidden rounded-3xl bg-[#111111] p-8 text-white md:p-12">
					<div className="grid gap-8 md:grid-cols-4">
						<div className="text-center">
							<p className="text-4xl font-black text-[#c88d00] md:text-5xl">5,000+</p>
							<p className="mt-2 text-sm text-white/70">Active Products</p>
						</div>
						<div className="text-center">
							<p className="text-4xl font-black text-[#c88d00] md:text-5xl">2,500+</p>
							<p className="mt-2 text-sm text-white/70">Verified Sellers</p>
						</div>
						<div className="text-center">
							<p className="text-4xl font-black text-[#c88d00] md:text-5xl">10,000+</p>
							<p className="mt-2 text-sm text-white/70">Happy Customers</p>
						</div>
						<div className="text-center">
							<p className="text-4xl font-black text-[#c88d00] md:text-5xl">36</p>
							<p className="mt-2 text-sm text-white/70">States Covered</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Banner */}
			<section className="container-custom pb-12">
				<div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#c88d00] to-[#e8941f] p-8 md:p-12">
					<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
						<div>
							<h2 className="text-2xl font-black text-white md:text-3xl">
								Ready to Start Selling?
							</h2>
							<p className="mt-2 text-white/90">
								Join thousands of sellers making money on YabaRight
							</p>
						</div>
						<Link
							href="/register"
							className="rounded-full bg-white px-8 py-3 text-sm font-black uppercase tracking-wide text-[#111] transition hover:-translate-y-0.5 hover:shadow-lg"
						>
							Become a Seller
						</Link>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-[#c88d00]/30 bg-[#0b0b0b] py-12 text-white">
				<div className="container-custom">
					{/* Brand Message Section */}
					<div className="mb-12 rounded-3xl bg-gradient-to-br from-[#c88d00]/10 to-[#c88d00]/5 p-8 md:p-12">
						<div className="max-w-3xl">
							<div className="brand-wordmark mb-6 text-5xl tracking-[-0.15em] md:text-6xl">
								Y<span className="text-[#c88d00]">A</span>BA<span className="text-[#c88d00]">RIGHT</span>
							</div>
							<p className="text-lg leading-relaxed text-white/80 md:text-xl">
								Thrifted style, fresh finds, and local deals for real people. Buy clean clothes, 
								trainers, bags, jewelry, and accessories without breaking the bank.
							</p>
							<div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-wider text-[#c88d00]">
								<span>Fast Delivery</span>
								<span className="text-white/30">•</span>
								<span>Trusted Sellers</span>
								<span className="text-white/30">•</span>
								<span>Nigeria Ready</span>
							</div>
						</div>
					</div>

					{/* Footer Links */}
					<div className="grid gap-8 md:grid-cols-4">
						<div>
							<div className="brand-wordmark mb-4 text-2xl tracking-[-0.15em]">
								Y<span className="text-[#c88d00]">A</span>BA<span className="text-[#c88d00]">RIGHT</span>
							</div>
							<p className="text-sm text-white/70">
								Thrift | New | Deals | Declutter | TradeOff
							</p>
							<p className="mt-2 text-sm text-white/70">
								Built for Nigeria. Styled for real life.
							</p>
						</div>
						<div>
							<h4 className="mb-4 font-bold text-[#c88d00]">Shop</h4>
							<ul className="space-y-2 text-sm text-white/70">
								<li><Link href="/products" className="hover:text-[#c88d00]">All Products</Link></li>
								<li><Link href="/products?category=thrift" className="hover:text-[#c88d00]">Thrift</Link></li>
								<li><Link href="/products?category=new" className="hover:text-[#c88d00]">New Arrivals</Link></li>
								<li><Link href="/products?category=deals" className="hover:text-[#c88d00]">Deals</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="mb-4 font-bold text-[#c88d00]">Categories</h4>
							<ul className="space-y-2 text-sm text-white/70">
								<li><Link href="/products?category=shoes" className="hover:text-[#c88d00]">Shoes</Link></li>
								<li><Link href="/products?category=bags" className="hover:text-[#c88d00]">Bags</Link></li>
								<li><Link href="/products?category=clothes" className="hover:text-[#c88d00]">Clothes</Link></li>
								<li><Link href="/products?category=shirts" className="hover:text-[#c88d00]">Shirts</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="mb-4 font-bold text-[#c88d00]">Account</h4>
							<ul className="space-y-2 text-sm text-white/70">
								<li><Link href="/login" className="hover:text-[#c88d00]">Login</Link></li>
								<li><Link href="/register" className="hover:text-[#c88d00]">Register</Link></li>
								<li><Link href="/cart" className="hover:text-[#c88d00]">Cart</Link></li>
								<li><Link href="/wishlist" className="hover:text-[#c88d00]">Wishlist</Link></li>
							</ul>
						</div>
					</div>
					<div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/50">
						<p>© {new Date().getFullYear()} YabaRight. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</main>
	);
}
