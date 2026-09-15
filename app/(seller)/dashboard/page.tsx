'use client';

import Link from 'next/link';

const stats = [
	{ label: 'Total sales', value: '₦420,000', change: '+18.4%' },
	{ label: 'Orders', value: '184', change: '+12.2%' },
	{ label: 'Followers', value: '3.2k', change: '+7.8%' },
	{ label: 'Conversion', value: '8.7%', change: '+2.1%' },
];

const listings = [
	{ name: 'Vintage Denim Jacket', price: '₦12,500', status: 'Published', stock: '4 left' },
	{ name: 'Woven Leather Tote', price: '₦18,000', status: 'Published', stock: '3 left' },
	{ name: 'Minimal White Sneakers', price: '₦16,800', status: 'Draft', stock: '7 left' },
];

export default function SellerDashboardPage() {
	return (
		<main className="min-h-screen bg-[#fffaf0] text-secondary">
			<div className="container-custom py-8 sm:py-10">
				<div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Seller dashboard</p>
						<h1 className="mt-2 text-3xl font-black text-secondary">Welcome back, seller</h1>
					</div>
					<div className="flex gap-3">
						<Link
							href="/products/new"
							className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition hover:translate-y-[-1px]"
						>
							+ New listing
						</Link>
						<Link
							href="/products"
							className="inline-flex rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
						>
							View storefront
						</Link>
					</div>
				</div>

				<section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{stats.map((item) => (
						<div key={item.label} className="rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
							<p className="text-sm text-gray-600">{item.label}</p>
							<div className="mt-3 flex items-end justify-between gap-2">
								<p className="text-2xl font-black text-secondary">{item.value}</p>
								<span className="rounded-full bg-[#fff7d6] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-secondary">
									{item.change}
								</span>
							</div>
						</div>
					))}
				</section>

				<section className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
						<div className="mb-5 flex items-center justify-between">
							<h2 className="text-xl font-black text-secondary">Recent listings</h2>
							<Link href="/products/new" className="text-sm font-semibold text-primary hover:text-secondary">
								+ Add new item
							</Link>
						</div>

						<div className="space-y-4">
							{listings.map((listing) => (
								<div
									key={listing.name}
									className="flex items-center justify-between gap-4 rounded-[1.25rem] bg-[#fffaf0] p-4"
								>
									<div>
										<p className="font-bold text-secondary">{listing.name}</p>
										<p className="mt-1 text-sm text-gray-600">{listing.stock}</p>
									</div>
									<div className="text-right">
										<p className="font-black text-primary">{listing.price}</p>
										<p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
											{listing.status}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
						<h2 className="text-xl font-black text-secondary">Performance</h2>
						<div className="mt-6 space-y-4">
							{[
								{ label: 'Views', value: '1,420' },
								{ label: 'Favorites', value: '210' },
								{ label: 'Cart adds', value: '89' },
							].map((item) => (
								<div key={item.label} className="rounded-[1.25rem] bg-[#fffaf0] p-4">
									<div className="flex items-center justify-between gap-3">
										<span className="text-sm text-gray-600">{item.label}</span>
										<span className="text-lg font-black text-secondary">{item.value}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
