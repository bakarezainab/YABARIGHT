import Link from 'next/link';

const features = [
	{
		title: 'Curated thrift finds',
		description: 'Handpicked styles at prices that feel better than retail.',
	},
	{
		title: 'Easy shopping flow',
		description: 'Browse, compare, and buy from quality sellers in a few taps.',
	},
	{
		title: 'Seller-friendly',
		description: 'List pre-loved pieces and reach a ready-to-shop community.',
	},
];

const stats = [
	{ label: 'Verified sellers', value: '2k+' },
	{ label: 'Fashion drops', value: '18k+' },
	{ label: 'Happy shoppers', value: '96%' },
];

export default function Home() {
	return (
		<main className="min-h-screen bg-[#fffaf0] text-secondary">
			<nav className="sticky top-0 z-20 border-b border-black/5 bg-[#fffaf0]/90 backdrop-blur-sm">
				<div className="container-custom flex items-center justify-between py-4">
					<Link
						href="/"
						className="text-2xl font-black tracking-tight text-secondary"
					>
						YABA<span className="text-primary">RIGHT</span>
					</Link>

					<div className="flex items-center gap-3 sm:gap-4">
						<Link
							href="/login"
							className="text-sm font-medium text-secondary transition hover:text-primary sm:text-base"
						>
							Login
						</Link>
						<Link
							href="/register"
							className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black sm:px-6"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</nav>

			<div className="container-custom pb-16 pt-8 sm:pt-12 lg:pt-16">
				<section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="max-w-xl">
						<span className="inline-flex items-center rounded-full border border-primary/60 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
							Affordable luxury thrift
						</span>

						<h1 className="mt-6 text-4xl font-black leading-tight text-secondary sm:text-5xl lg:text-6xl">
							Look Good.{' '}
							<span className="text-primary">Spend Smart.</span>
							<br />
							Shop Right.
						</h1>

						<p className="mt-5 max-w-lg text-base text-gray-700 sm:text-lg">
							Discover quality thrift fashion, bags, and shoes that help you
							express your style without overspending.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link
								href="/products"
								className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3 text-base font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black"
							>
								Start Shopping
							</Link>
							<Link
								href="/register?role=seller"
								className="inline-flex items-center justify-center rounded-full border border-secondary bg-primary px-7 py-3 text-base font-semibold text-secondary transition hover:translate-y-[-1px]"
							>
								Become a Seller
							</Link>
						</div>

						<div className="mt-8 grid grid-cols-3 gap-4">
							{stats.map((stat) => (
								<div
									key={stat.label}
									className="rounded-2xl border border-black/5 bg-white p-3 shadow-sm"
								>
									<div className="text-xl font-black text-primary">
										{stat.value}
									</div>
									<div className="mt-1 text-xs text-gray-600">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="relative">
						<div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-primary/30 blur-3xl" />
						<div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

						<div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-4 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-6">
							<div className="rounded-[1.5rem] bg-gradient-to-br from-[#fff3b3] via-[#fffaf0] to-[#f4efe7] p-4">
								<div className="mb-4 flex items-center justify-between">
									<span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
										Trending now
									</span>
									<span className="rounded-full border border-primary bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
										Up to 70% off
									</span>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<div className="overflow-hidden rounded-[1.25rem] bg-white p-3 shadow-sm">
										<div className="h-52 rounded-[1rem] bg-[radial-gradient(circle_at_top,_#f6d365,_#fda085_35%,_#d3d3d3_100%)]" />
										<div className="mt-3 flex items-center justify-between">
											<div>
												<p className="font-bold text-secondary">
													Classic Bomber
												</p>
												<p className="text-sm text-gray-600">
													Leather • Size M
												</p>
											</div>
											<p className="font-black text-primary">₦8,500</p>
										</div>
									</div>

									<div className="space-y-4">
										<div className="rounded-[1.25rem] bg-white p-3 shadow-sm">
											<div className="mb-3 flex items-center justify-between">
												<span className="text-sm font-semibold text-secondary">
													Best sellers
												</span>
												<span className="text-xs text-gray-500">
													This week
												</span>
											</div>
											<div className="space-y-3">
												{['Vintage Denim', 'Minimal Tote', 'Leather Boots'].map(
													(item) => (
														<div
															key={item}
															className="flex items-center justify-between rounded-xl bg-[#fffaf0] px-3 py-2"
														>
															<span className="text-sm text-gray-700">
																{item}
															</span>
															<span className="text-xs font-semibold text-primary">
																Hot
															</span>
														</div>
													)
												)}
											</div>
										</div>

										<div className="rounded-[1.25rem] bg-secondary p-4 text-white shadow-sm">
											<p className="text-xs uppercase tracking-[0.2em] text-primary">
												Member perks
											</p>
											<p className="mt-2 text-xl font-bold">
												Free shipping on orders over ₦20k
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-20 grid gap-6 md:grid-cols-3">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
						>
							<div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-black text-secondary">
								✓
							</div>
							<h3 className="text-xl font-bold text-secondary">
								{feature.title}
							</h3>
							<p className="mt-3 text-gray-600">{feature.description}</p>
						</div>
					))}
				</section>
			</div>

			<footer className="border-t border-black/5 bg-white/60 py-8 text-center text-sm text-gray-600">
				Built by Wakocoding. Powered by technology. Inspired by Yaba. Built for
				Nigeria.
			</footer>
		</main>
	);
}
