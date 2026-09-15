import Link from 'next/link';
import { sampleProducts } from '@/lib/mockProducts';

const categoryPills = ['Thrift', 'New', 'Deals', 'Declutter', 'TradeOff'];

const saleHighlights = [
	{
		title: 'Male essentials',
		caption: 'Suits, shirts, jackets & denim',
		image:
			'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
		accent: 'from-[#f5d76f] to-[#f4c542]',
	},
	{
		title: 'Female styles',
		caption: 'Bags, dresses, skirts & statement fits',
		image:
			'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
		accent: 'from-[#f4d8c6] to-[#d7a58c]',
	},
	{
		title: 'Sneakers & trainers',
		caption: 'Clean kicks for work, weekends & outings',
		image:
			'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
		accent: 'from-[#a7d5d9] to-[#54c1c5]',
	},
];

const bannerItems = [
	'Shoes',
	'Bags',
	'Clothes',
	'Shirts',
	'Suits',
	'Male',
	'Female',
];

const featuredProducts = sampleProducts.slice(0, 4);

export default function Home() {
	return (
		<main className="min-h-screen bg-[#0a0a0a] text-white">
			<header className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-sm">
				<div className="container-custom flex items-center justify-between py-4">
					<Link href="/" className="flex items-center gap-3">
						<div className="text-2xl font-black tracking-[-0.08em] text-white">
							<span className="text-primary">Y</span>
							<span className="text-white">ABA</span>
							<span className="text-primary">RIGHT</span>
						</div>
					</Link>

					<nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
						<Link
							href="/products"
							className="transition hover:text-primary"
						>
							Shop
						</Link>
						<Link
							href="/products"
							className="transition hover:text-primary"
						>
							New In
						</Link>
						<Link
							href="/products"
							className="transition hover:text-primary"
						>
							Deals
						</Link>
						<Link
							href="/products"
							className="transition hover:text-primary"
						>
							Declutter
						</Link>
						<Link
							href="/products"
							className="transition hover:text-primary"
						>
							TradeOff
						</Link>
					</nav>

					<div className="flex items-center gap-3">
						<Link
							href="/login"
							className="hidden text-sm font-semibold text-white/80 transition hover:text-primary sm:inline-flex"
						>
							Login
						</Link>
						<Link
							href="/products"
							className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-bold text-secondary transition hover:translate-y-[-1px]"
						>
							Shop now
						</Link>
					</div>
				</div>
			</header>

			<section className="container-custom pt-8 pb-6 sm:pt-10 lg:pt-12">
				<div className="rounded-[2rem] border border-white/10 bg-[#101010] px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
					<div className="mb-5 flex flex-wrap gap-2">
						{categoryPills.map((item) => (
							<span
								key={item}
								className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
							>
								{item}
							</span>
						))}
					</div>

					<div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
						<div className="space-y-6">
							<div className="overflow-hidden">
								<div className="text-[3.2rem] font-black leading-[0.8] tracking-[-0.12em] sm:text-[5rem] lg:text-[7.5rem]">
									<span className="inline-block -rotate-6 transform text-white">
										Y
									</span>
									<span className="inline-block text-[#f5d76f]">A</span>
									<span className="inline-block -rotate-3 transform text-white">
										B
									</span>
									<span className="inline-block text-[#f5d76f]">A</span>
									<span className="inline-block rotate-1 transform text-white">
										R
									</span>
									<span className="inline-block text-[#f5d76f]">I</span>
									<span className="inline-block -rotate-2 transform text-white">
										G
									</span>
									<span className="inline-block text-[#f5d76f]">H</span>
									<span className="inline-block text-white">T</span>
								</div>
							</div>

							<p className="max-w-xl text-base text-white/70 sm:text-lg">
								Thrifted style, fresh finds, and local deals for real people. Buy
								clean clothes, trainers, bags, suits and accessories without
								breaking the bank.
							</p>

							<div className="flex flex-col gap-3 sm:flex-row">
								<Link
									href="/products"
									className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-secondary transition hover:translate-y-[-1px]"
								>
									Shop the latest drops
								</Link>
								<a
									href="#discover"
									className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:border-primary hover:text-primary"
								>
									Explore more
								</a>
							</div>

							<div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
								<span>Fast delivery</span>
								<span>•</span>
								<span>Trusted sellers</span>
								<span>•</span>
								<span>Nigeria ready</span>
							</div>
						</div>

						<div className="relative">
							<div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-primary/25 blur-3xl" />
							<div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-[#6fe7d7]/20 blur-3xl" />

							<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
								<div className="grid gap-3 sm:grid-cols-2">
									<div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
										<img
											src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
											alt="Folded thrift shirts"
											className="h-52 w-full object-cover"
										/>
										<div className="bg-[#0e0e0e] p-3">
											<p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
												Folded shirts
											</p>
											<p className="mt-1 text-sm text-white/80">
												Stacked styles & color picks
											</p>
										</div>
									</div>

									<div className="space-y-3">
										<div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
											<img
												src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80"
												alt="Female shoes and bags"
												className="h-28 w-full object-cover"
											/>
											<div className="bg-[#111111] p-3">
												<p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
													Ladies edit
												</p>
											</div>
										</div>

										<div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
											<img
												src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80"
												alt="Bags and accessories"
												className="h-28 w-full object-cover"
											/>
											<div className="bg-[#111111] p-3">
												<p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
													Bags & accessories
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="container-custom py-6">
				<div className="flex flex-wrap gap-3">
					{bannerItems.map((item) => (
						<span
							key={item}
							className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75"
						>
							{item}
						</span>
					))}
				</div>
			</section>

			<section id="discover" className="container-custom py-10">
				<div className="mb-6 flex items-end justify-between gap-4">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
							Popular picks
						</p>
						<h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
							Shop by style
						</h2>
					</div>
					<Link
						href="/products"
						className="text-sm font-semibold text-primary transition hover:text-white"
					>
						See all products →
					</Link>
				</div>

				<div className="grid gap-5 md:grid-cols-3">
					{saleHighlights.map((item) => (
						<Link
							key={item.title}
							href="/products"
							className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111] shadow-[0_20px_45px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
						>
							<div
								className={`h-72 bg-gradient-to-br ${item.accent}`}
							>
								<img
									src={item.image}
									alt={item.title}
									className="h-full w-full object-cover mix-blend-multiply opacity-90"
								/>
							</div>
							<div className="p-5">
								<p className="text-2xl font-black text-white">
									{item.title}
								</p>
								<p className="mt-2 text-sm text-white/70">
									{item.caption}
								</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className="container-custom py-8">
				<div className="mb-6 flex items-end justify-between gap-4">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
							Fresh finds
						</p>
						<h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
							Trending now
						</h2>
					</div>
					<Link
						href="/products"
						className="text-sm font-semibold text-primary transition hover:text-white"
					>
						Shop all →
					</Link>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
					{featuredProducts.map((product) => (
						<Link
							key={product.id}
							href={`/products/${product.id}`}
							className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#111111] shadow-[0_20px_45px_rgba(0,0,0,0.2)] transition hover:-translate-y-1"
						>
							<div className="relative overflow-hidden">
								<img
									src={product.images[0]}
									alt={product.name}
									className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
								/>
								{product.trending && (
									<span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-secondary">
										Trending
									</span>
								)}
							</div>
							<div className="p-4">
								<div className="flex items-center justify-between gap-3">
									<span className="rounded-full bg-[#fff7d6] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary">
										{product.condition}
									</span>
									<span className="text-xs text-white/55">
										{product.brand || 'Verified'}
									</span>
								</div>
								<h3 className="mt-3 text-lg font-black text-white">
									{product.name}
								</h3>
								<p className="mt-2 text-sm text-white/60">
									{product.description}
								</p>
								<div className="mt-4 flex items-center justify-between">
									<div>
										<p className="text-xl font-black text-primary">
											₦{product.price.toLocaleString()}
										</p>
										{product.originalPrice && (
											<p className="text-xs text-white/40 line-through">
												₦{product.originalPrice.toLocaleString()}
											</p>
										)}
									</div>
									<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80">
										View
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>

			<section className="container-custom py-10">
				<div className="grid gap-5 rounded-[2rem] border border-white/10 bg-[#111111] p-5 md:grid-cols-3 md:p-8">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
							Why locals shop here
						</p>
						<h3 className="mt-3 text-3xl font-black text-white">
							Styled for everyday life
						</h3>
					</div>
					<div className="rounded-[1.5rem] bg-white/5 p-5">
						<p className="text-2xl font-black text-primary">5000+</p>
						<p className="mt-2 text-sm text-white/70">
							Verified thrift finds added weekly
						</p>
					</div>
					<div className="rounded-[1.5rem] bg-white/5 p-5">
						<p className="text-2xl font-black text-primary">3x</p>
						<p className="mt-2 text-sm text-white/70">
							Better value than retail on same looks
						</p>
					</div>
				</div>
			</section>

			<footer className="border-t border-white/10 bg-[#0a0a0a] py-8">
				<div className="container-custom flex flex-col gap-3 text-center text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
					<div className="font-black tracking-[-0.06em] text-white">
						YABA<span className="text-primary">RIGHT</span>
					</div>
					<p>Built for Nigeria. Styled for real life.</p>
				</div>
			</footer>
		</main>
	);
}
