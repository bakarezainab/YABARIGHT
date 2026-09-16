import Link from 'next/link';
import { sampleProducts } from '@/lib/mockProducts';

const categoryPills = ['Thrift', 'New', 'Deals', 'Declutter', 'TradeOff'];

// Categories with Nigerian-relevant imagery
const quickCategories = [
	{
		title: 'Shoes',
		subtitle: 'Sneakers • Sandals • Boots',
		image: '/male-shoes-collection.jpg',
		count: '2,340+ items',
	},
	{
		title: 'Bags',
		subtitle: 'Totes • Crossbody • Statement',
		image: '/WhatsApp Image 2026-09-16 at 9.18.54 AM.jpeg',
		count: '1,850+ items',
	},
	{
		title: 'Clothes',
		subtitle: 'Streetwear • Everyday Fits',
		image: '/jeans-folded.jpg',
		count: '4,200+ items',
	},
	{
		title: 'Shirts',
		subtitle: 'Folded Stacks • Premium Picks',
		image: '/casual-shirts-colorful.jpg',
		count: '1,560+ items',
	},
	{
		title: 'Suits',
		subtitle: 'Smart Looks for Work & Events',
		image: '/suit-blue-1.jpg',
		count: '890+ items',
	},
	{
		title: 'Accessories',
		subtitle: 'Watches • Belts • Jewelry',
		image: '/heels-black-pair.jpg',
		count: '3,100+ items',
	},
];

// Style collections
const styleCollections = [
	{
		title: 'Folded Shirts',
		caption: '5 in a roll • Ready to wear',
		image: '/folded-shirts-blue.jpg',
		accent: 'from-[#f5d76f] to-[#f4c542]',
		link: '/products?category=shirts',
	},
	{
		title: 'Female Style',
		caption: 'Shoes, bags & everyday edits',
		image: '/heels-black-single.jpg',
		accent: 'from-[#f4d8c6] to-[#d7a58c]',
		link: '/products?category=female',
	},
	{
		title: 'Trainers & Suits',
		caption: 'Fresh street and smart office pairs',
		image: '/suit-grey-1.jpg',
		accent: 'from-[#a7d5d9] to-[#54c1c5]',
		link: '/products?category=male',
	},
];

// Gender collections
const genderCollections = [
	{
		label: 'Male Collection',
		description: 'Sharp suits, casual shirts, and everyday essentials',
		image: '/suit-blue-1.jpg',
		link: '/products?gender=male',
	},
	{
		label: 'Female Collection',
		description: 'Trendy dresses, bags, shoes and statement pieces',
		image: '/female-shoe-flat.jpg',
		link: '/products?gender=female',
	},
];

const featuredProducts = sampleProducts.slice(0, 8);

export default function Home() {
	return (
		<main className="min-h-screen bg-[#f5f0e8] text-[#121212]">
			{/* Header - Fixed with clear logo visibility */}
			<header className="sticky top-0 z-50 border-b border-[#FFD700]/30 bg-[#0b0b0b] shadow-lg">
				<div className="container-custom flex items-center justify-between py-4">
					<Link href="/" className="flex items-center gap-3">
						<img 
							src="/logo.png" 
							alt="YabaRight Logo" 
							className="h-16 w-auto sm:h-20"
						/>
					</Link>

					<nav className="hidden items-center gap-6 text-sm font-bold text-white/80 md:flex">
						{categoryPills.map((item) => (
							<Link key={item} href="/products" className="transition hover:text-[#FFD700]">
								{item}
							</Link>
						))}
					</nav>

					<div className="flex items-center gap-3">
						<Link
							href="/login"
							className="hidden text-sm font-semibold text-white/80 transition hover:text-[#FFD700] sm:inline-flex"
						>
							Login
						</Link>
						<Link
							href="/products"
							className="inline-flex rounded-full bg-[#FFD700] px-6 py-2.5 text-sm font-black text-[#131313] transition hover:-translate-y-0.5 hover:bg-[#ffcc00]"
						>
							Shop now
						</Link>
					</div>
				</div>
			</header>

			{/* Hero Banner Carousel - Multiple Product Banners */}
			<section className="relative overflow-hidden bg-[#000000]">
				<div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
					{/* Banner 1 - Casual Wears */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="/polo-shirts.jpg"
								alt="Casual Wears - Polo Shirts"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-6">
									<h2 className="text-5xl font-black text-white lg:text-6xl leading-tight">
										YOUR STYLE, YOUR PRICE.
									</h2>
									<p className="text-4xl font-black text-[#FFD700] lg:text-5xl">
										CASUAL WEARS
									</p>
									<p className="text-3xl font-black text-[#FFD700]">
										SHOP BELOW ₦10K
									</p>
									<div className="flex gap-4">
										<Link
											href="/products?category=casual&condition=pre-owned"
											className="inline-block rounded-full bg-white px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-gray-200"
										>
											Pre-owned
										</Link>
										<Link
											href="/products?category=casual&condition=new"
											className="inline-block rounded-full bg-[#FFD700] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#FFC700]"
										>
											New
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Banner 2 - Office Shirts */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="/casual-shirts-stack.jpg"
								alt="Office Shirts"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-6">
									<h2 className="text-5xl font-black text-white lg:text-6xl leading-tight">
										DESIGNER LOOKS. EVERYDAY PRICES.
									</h2>
									<p className="text-4xl font-black text-[#FFD700] lg:text-5xl">
										OFFICE SHIRTS
									</p>
									<p className="text-3xl font-black text-[#FFD700]">
										SHOP BELOW ₦10K
									</p>
									<div className="flex gap-4">
										<Link
											href="/products?category=shirts&condition=pre-owned"
											className="inline-block rounded-full bg-white px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-gray-200"
										>
											Pre-owned
										</Link>
										<Link
											href="/products?category=shirts&condition=new"
											className="inline-block rounded-full bg-[#FFD700] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#FFC700]"
										>
											New
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Banner 3 - Female Shoes */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="/female-shoe-flat.jpg"
								alt="Female Shoes"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-6">
									<h2 className="text-5xl font-black text-white lg:text-6xl leading-tight">
										WEAR THE LOOK. OWN THE CONFIDENCE.
									</h2>
									<p className="text-4xl font-black text-[#FFD700] lg:text-5xl">
										FEMALE SHOES
									</p>
									<p className="text-3xl font-black text-[#FFD700]">
										₦9,999
									</p>
									<div className="flex gap-4">
										<Link
											href="/products?category=shoes&condition=pre-owned"
											className="inline-block rounded-full bg-white px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-gray-200"
										>
											Pre-owned
										</Link>
										<Link
											href="/products?category=shoes&condition=new"
											className="inline-block rounded-full bg-[#FFD700] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#FFC700]"
										>
											New
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Banner 4 - Bags */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="/WhatsApp Image 2026-09-16 at 9.18.54 AM.jpeg"
								alt="Bags Collection"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-6">
									<h2 className="text-5xl font-black text-white lg:text-6xl leading-tight">
										LOOK GOOD. PAY LESS.
									</h2>
									<p className="text-4xl font-black text-[#FFD700] lg:text-5xl">
										DESIGNER BAGS
									</p>
									<p className="text-3xl font-black text-[#FFD700]">
										SHOP BELOW ₦15K
									</p>
									<div className="flex gap-4">
										<Link
											href="/products?category=bags&condition=pre-owned"
											className="inline-block rounded-full bg-white px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-gray-200"
										>
											Pre-owned
										</Link>
										<Link
											href="/products?category=bags&condition=new"
											className="inline-block rounded-full bg-[#FFD700] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#FFC700]"
										>
											New
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Banner 5 - Suits & Blazers */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="/suit-grey-1.jpg"
								alt="Suits and Blazers"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-6">
									<h2 className="text-5xl font-black text-white lg:text-6xl leading-tight">
										ELEVATE YOUR LOOK. NOT YOUR BUDGET.
									</h2>
									<p className="text-4xl font-black text-[#FFD700] lg:text-5xl">
										SUITS & BLAZERS
									</p>
									<p className="text-3xl font-black text-[#FFD700]">
										SHOP BELOW ₦20K
									</p>
									<div className="flex gap-4">
										<Link
											href="/products?category=suits&condition=pre-owned"
											className="inline-block rounded-full bg-white px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-gray-200"
										>
											Pre-owned
										</Link>
										<Link
											href="/products?category=suits&condition=new"
											className="inline-block rounded-full bg-[#FFD700] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#FFC700]"
										>
											New
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Banner 6 - Jeans */}
					<div className="min-w-full snap-center">
						<div className="relative h-[500px]">
							<img
								src="/jeans-stack.jpg"
								alt="Jeans Collection"
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
							<div className="absolute inset-0 container-custom flex items-center">
								<div className="max-w-xl space-y-6">
									<h2 className="text-5xl font-black text-white lg:text-6xl leading-tight">
										YOUR NEXT FIT IS HERE.
									</h2>
									<p className="text-4xl font-black text-[#FFD700] lg:text-5xl">
										JEANS
									</p>
									<p className="text-3xl font-black text-[#FFD700]">
										₦9,999
									</p>
									<div className="flex gap-4">
										<Link
											href="/products?category=jeans&condition=pre-owned"
											className="inline-block rounded-full bg-white px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-gray-200"
										>
											Pre-owned
										</Link>
										<Link
											href="/products?category=jeans&condition=new"
											className="inline-block rounded-full bg-[#FFD700] px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#FFC700]"
										>
											New
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
					{[1, 2, 3, 4, 5, 6].map((_, index) => (
						<div
							key={index}
							className={`h-2 rounded-full transition-all ${
								index === 0 ? 'w-8 bg-[#FFD700]' : 'w-2 bg-white/40'
							}`}
						/>
					))}
				</div>

				{/* Scroll Down Arrow */}
				<a
					href="#special-offers"
					className="absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition hover:bg-[#FFD700] group"
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
								className="rounded-full border border-[#FFD700]/40 bg-[#FFD700]/10 px-5 py-2 text-xs font-black uppercase tracking-wider text-[#FFD700] transition hover:bg-[#FFD700] hover:text-black"
							>
								{item}
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Special Offers - BELOW ₦9K Section */}
			<section id="special-offers" className="bg-gradient-to-br from-red-50 to-orange-50 py-12">
				<div className="container-custom">
					<div className="mb-8 text-center">
						<span className="inline-block rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase tracking-wider text-white animate-pulse">
							🔥 Hot Deals
						</span>
						<h2 className="mt-4 text-4xl font-black text-[#111111] sm:text-5xl">
							SPECIAL OFFERS BELOW ₦9K
						</h2>
						<p className="mt-3 text-lg text-gray-700">
							Quality pre owned at unbeatable prices. Grab them before they're gone!
						</p>
					</div>

					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{/* Product 1 */}
						<Link
							href="/products/prod-4"
							className="group overflow-hidden rounded-2xl border-2 border-red-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
						>
							<div className="relative h-64 overflow-hidden">
								<img
									src="/polo-shirts.jpg"
									alt="Office Shirts Bundle"
									className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
									Bundle Deal
								</span>
								<div className="absolute right-3 top-3 rounded-full bg-[#FFD700] px-3 py-1.5 text-sm font-black text-black">
									₦5,000
								</div>
							</div>
							<div className="p-4">
								<h3 className="text-lg font-black text-[#111111]">Office Shirts Bundle</h3>
								<p className="mt-1 text-sm text-[#5b5b5b]">3 Premium office shirts, neatly folded</p>
								<div className="mt-3 flex items-center justify-between">
									<div>
										<p className="text-xs text-gray-500 line-through">₦20,000</p>
										<p className="text-2xl font-black text-red-600">₦5,000</p>
									</div>
									<span className="rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase text-white">
										Save 75%
									</span>
								</div>
							</div>
						</Link>

						{/* Product 2 */}
						<Link
							href="/products/prod-6"
							className="group overflow-hidden rounded-2xl border-2 border-red-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
						>
							<div className="relative h-64 overflow-hidden">
								<img
									src="/polo-shirts.jpg"
									alt="Casual Polo Shirts"
									className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
									Best Seller
								</span>
								<div className="absolute right-3 top-3 rounded-full bg-[#FFD700] px-3 py-1.5 text-sm font-black text-black">
									₦4,500
								</div>
							</div>
							<div className="p-4">
								<h3 className="text-lg font-black text-[#111111]">Casual Polo Shirts</h3>
								<p className="mt-1 text-sm text-[#5b5b5b]">Quality polo shirts for everyday wear</p>
								<div className="mt-3 flex items-center justify-between">
									<div>
										<p className="text-xs text-gray-500 line-through">₦18,000</p>
										<p className="text-2xl font-black text-red-600">₦4,500</p>
									</div>
									<span className="rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase text-white">
										Save 75%
									</span>
								</div>
							</div>
						</Link>

						{/* Product 3 */}
						<Link
							href="/products/prod-7"
							className="group overflow-hidden rounded-2xl border-2 border-red-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
						>
							<div className="relative h-64 overflow-hidden">
								<img
									src="/WhatsApp Image 2026-09-16 at 9.18.54 AM.jpeg"
									alt="Designer Handbag"
									className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
									Limited Stock
								</span>
								<div className="absolute right-3 top-3 rounded-full bg-[#FFD700] px-3 py-1.5 text-sm font-black text-black">
									₦6,000
								</div>
							</div>
							<div className="p-4">
								<h3 className="text-lg font-black text-[#111111]">Designer Handbag</h3>
								<p className="mt-1 text-sm text-[#5b5b5b]">Quality designer handbag</p>
								<div className="mt-3 flex items-center justify-between">
									<div>
										<p className="text-xs text-gray-500 line-through">₦24,000</p>
										<p className="text-2xl font-black text-red-600">₦6,000</p>
									</div>
									<span className="rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase text-white">
										Save 75%
									</span>
								</div>
							</div>
						</Link>

						{/* Product 4 */}
						<Link
							href="/products/prod-1"
							className="group overflow-hidden rounded-2xl border-2 border-red-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
						>
							<div className="relative h-64 overflow-hidden">
								<img
									src="/jeans-stack.jpg"
									alt="Premium Jeans"
									className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
									New Arrival
								</span>
								<div className="absolute right-3 top-3 rounded-full bg-[#FFD700] px-3 py-1.5 text-sm font-black text-black">
									₦7,000
								</div>
							</div>
							<div className="p-4">
								<h3 className="text-lg font-black text-[#111111]">Premium Jeans</h3>
								<p className="mt-1 text-sm text-[#5b5b5b]">Quality denim jeans, various sizes</p>
								<div className="mt-3 flex items-center justify-between">
									<div>
										<p className="text-xs text-gray-500 line-through">₦28,000</p>
										<p className="text-2xl font-black text-red-600">₦7,000</p>
									</div>
									<span className="rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase text-white">
										Save 75%
									</span>
								</div>
							</div>
						</Link>
					</div>

					<div className="mt-8 text-center">
						<Link
							href="/products?max_price=9000"
							className="inline-block rounded-full bg-red-500 px-8 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-600"
						>
							View All Special Offers
						</Link>
					</div>
				</div>
			</section>

			{/* Categories Grid */}
			<section id="categories" className="container-custom py-12">
				<div className="mb-8 flex items-end justify-between gap-4">
					<div>
						<p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFD700]">
							Browse by Category
						</p>
						<h2 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">
							Shop by Category
						</h2>
					</div>
					<Link
						href="/products"
						className="text-sm font-black text-[#111111] hover:text-[#FFD700]"
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
								<p className="mt-1 text-xs font-bold text-[#FFD700]">{category.count}</p>
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
							<p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFD700]">
								Top Sellers
							</p>
							<h2 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">
								Products You Can Shop Now
							</h2>
						</div>
						<Link
							href="/products"
							className="rounded-full bg-[#FFD700] px-5 py-2 text-sm font-black uppercase tracking-wide text-[#111] transition hover:bg-[#ffcc00]"
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
										<span className="absolute right-3 top-3 rounded-full bg-[#FFD700] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#111111]">
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
										<span className="rounded-full bg-[#FFD700] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#111] transition group-hover:bg-[#ffcc00]">
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
						<p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFD700]">
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
						<p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFD700]">
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
									<span className="mt-4 inline-block rounded-full bg-white px-6 py-2 text-sm font-black uppercase tracking-wide text-[#111] transition group-hover:bg-[#FFD700]">
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
						<p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFD700]">
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
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]/20 text-3xl">
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
							<p className="text-4xl font-black text-[#FFD700] md:text-5xl">5,000+</p>
							<p className="mt-2 text-sm text-white/70">Active Products</p>
						</div>
						<div className="text-center">
							<p className="text-4xl font-black text-[#FFD700] md:text-5xl">2,500+</p>
							<p className="mt-2 text-sm text-white/70">Verified Sellers</p>
						</div>
						<div className="text-center">
							<p className="text-4xl font-black text-[#FFD700] md:text-5xl">10,000+</p>
							<p className="mt-2 text-sm text-white/70">Happy Customers</p>
						</div>
						<div className="text-center">
							<p className="text-4xl font-black text-[#FFD700] md:text-5xl">36</p>
							<p className="mt-2 text-sm text-white/70">States Covered</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Banner */}
			<section className="container-custom pb-12">
				<div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#FFD700] to-[#e8941f] p-8 md:p-12">
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
			<footer className="border-t border-[#FFD700]/30 bg-[#0b0b0b] py-12 text-white">
				<div className="container-custom">
					{/* Brand Message Section */}
					<div className="mb-12 rounded-3xl bg-gradient-to-br from-[#FFD700]/10 to-[#FFD700]/5 p-8 md:p-12">
						<div className="max-w-4xl">
							<img 
								src="/logo.png" 
								alt="YabaRight Logo" 
								className="mb-6 h-20 w-auto md:h-24"
							/>
							<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								<p className="text-lg font-black text-white">LOOK RICH. SPEND SMART.</p>
								<p className="text-lg font-black text-white">YOUR STYLE, YOUR PRICE.</p>
								<p className="text-lg font-black text-white">DESIGNER LOOKS. EVERYDAY PRICES.</p>
								<p className="text-lg font-black text-white">WEAR THE LOOK. OWN THE CONFIDENCE.</p>
								<p className="text-lg font-black text-white">BIG STYLE. SMALL PRICE.</p>
								<p className="text-lg font-black text-white">FASHION WITHIN REACH.</p>
								<p className="text-lg font-black text-white">LOOK GOOD. PAY LESS.</p>
								<p className="text-lg font-black text-white">YOUR NEXT FIT IS HERE.</p>
								<p className="text-lg font-black text-white">STYLE SHOULDN'T BE EXPENSIVE.</p>
								<p className="text-lg font-black text-[#FFD700]">AFFORDABLE. STYLISH. YABARIGHT.</p>
								<p className="text-lg font-black text-white">THE LOOK YOU WANT. THE PRICE YOU CAN AFFORD.</p>
								<p className="text-lg font-black text-white">ELEVATE YOUR LOOK. NOT YOUR BUDGET.</p>
							</div>
						</div>
					</div>

					{/* Footer Links */}
					<div className="grid gap-8 md:grid-cols-4">
						<div>
							<img 
								src="/logo.png" 
								alt="YabaRight Logo" 
								className="mb-4 h-12 w-auto"
							/>
							<p className="text-sm text-white/70">
								Thrift | New | Deals | Declutter | TradeOff
							</p>
							<p className="mt-2 text-sm text-white/70">
								Built for Nigeria. Styled for real life.
							</p>
						</div>
						<div>
							<h4 className="mb-4 font-bold text-[#FFD700]">Shop</h4>
							<ul className="space-y-2 text-sm text-white/70">
								<li><Link href="/products" className="hover:text-[#FFD700]">All Products</Link></li>
								<li><Link href="/products?category=thrift" className="hover:text-[#FFD700]">Thrift</Link></li>
								<li><Link href="/products?category=new" className="hover:text-[#FFD700]">New Arrivals</Link></li>
								<li><Link href="/products?category=deals" className="hover:text-[#FFD700]">Deals</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="mb-4 font-bold text-[#FFD700]">Categories</h4>
							<ul className="space-y-2 text-sm text-white/70">
								<li><Link href="/products?category=shoes" className="hover:text-[#FFD700]">Shoes</Link></li>
								<li><Link href="/products?category=bags" className="hover:text-[#FFD700]">Bags</Link></li>
								<li><Link href="/products?category=clothes" className="hover:text-[#FFD700]">Clothes</Link></li>
								<li><Link href="/products?category=shirts" className="hover:text-[#FFD700]">Shirts</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="mb-4 font-bold text-[#FFD700]">Account</h4>
							<ul className="space-y-2 text-sm text-white/70">
								<li><Link href="/login" className="hover:text-[#FFD700]">Login</Link></li>
								<li><Link href="/register" className="hover:text-[#FFD700]">Register</Link></li>
								<li><Link href="/cart" className="hover:text-[#FFD700]">Cart</Link></li>
								<li><Link href="/wishlist" className="hover:text-[#FFD700]">Wishlist</Link></li>
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
