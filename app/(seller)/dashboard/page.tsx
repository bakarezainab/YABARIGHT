'use client';

import Link from 'next/link';
import { Product, Order, OrderStatus, ProductCondition } from '@/types';

// Mock Data for demonstration
const mockSellerName = 'Fashion House';

const stats = [
	{ 
		label: 'Total Products', 
		value: '24', 
		change: '+3 this month',
		icon: '📦',
		color: 'bg-blue-50',
		textColor: 'text-blue-600'
	},
	{ 
		label: 'Total Sales', 
		value: '₦847,500', 
		change: '+18.4%',
		icon: '💰',
		color: 'bg-green-50',
		textColor: 'text-green-600'
	},
	{ 
		label: 'Revenue', 
		value: '₦2.4M', 
		change: '+24.1%',
		icon: '📈',
		color: 'bg-purple-50',
		textColor: 'text-purple-600'
	},
	{ 
		label: 'Orders', 
		value: '156', 
		change: '+12 today',
		icon: '🛍️',
		color: 'bg-orange-50',
		textColor: 'text-orange-600'
	},
];

const recentProducts: Partial<Product>[] = [
	{
		id: '1',
		name: 'Classic Polo Shirt - Navy',
		price: 15500,
		quantity: 45,
		sold: 28,
		condition: ProductCondition.NEW,
		published: true,
		images: ['/polo-shirts.jpg'],
		category: 'Men\'s Fashion',
		rating: 4.5
	},
	{
		id: '2',
		name: 'Vintage Denim Jacket',
		price: 32000,
		quantity: 8,
		sold: 12,
		condition: ProductCondition.LIKE_NEW,
		published: true,
		images: [],
		category: 'Outerwear',
		rating: 4.8
	},
	{
		id: '3',
		name: 'Leather Oxford Shoes',
		price: 45000,
		quantity: 15,
		sold: 5,
		condition: ProductCondition.NEW,
		published: true,
		images: [],
		category: 'Footwear',
		rating: 4.7
	},
	{
		id: '4',
		name: 'Designer Sunglasses',
		price: 18000,
		quantity: 0,
		sold: 20,
		condition: ProductCondition.NEW,
		published: false,
		images: [],
		category: 'Accessories',
		rating: 4.3
	},
	{
		id: '5',
		name: 'Cotton T-Shirt Bundle',
		price: 12000,
		quantity: 60,
		sold: 45,
		condition: ProductCondition.NEW,
		published: true,
		images: [],
		category: 'Men\'s Fashion',
		rating: 4.6
	}
];

const recentOrders: Partial<Order>[] = [
	{
		id: 'ORD-001',
		status: OrderStatus.PENDING,
		total: 47500,
		shippingCity: 'Lagos',
		createdAt: new Date('2024-01-15'),
	},
	{
		id: 'ORD-002',
		status: OrderStatus.CONFIRMED,
		total: 32000,
		shippingCity: 'Abuja',
		createdAt: new Date('2024-01-15'),
	},
	{
		id: 'ORD-003',
		status: OrderStatus.SHIPPED,
		total: 15500,
		shippingCity: 'Port Harcourt',
		createdAt: new Date('2024-01-14'),
	},
	{
		id: 'ORD-004',
		status: OrderStatus.DELIVERED,
		total: 89000,
		shippingCity: 'Ibadan',
		createdAt: new Date('2024-01-13'),
	},
	{
		id: 'ORD-005',
		status: OrderStatus.PENDING,
		total: 24000,
		shippingCity: 'Kano',
		createdAt: new Date('2024-01-13'),
	},
];

// Helper function to format currency
const formatCurrency = (amount: number) => {
	return `₦${amount.toLocaleString()}`;
};

// Helper function to get status badge color
const getStatusColor = (status: OrderStatus) => {
	switch (status) {
		case OrderStatus.PENDING:
			return 'bg-yellow-100 text-yellow-800';
		case OrderStatus.CONFIRMED:
			return 'bg-blue-100 text-blue-800';
		case OrderStatus.SHIPPED:
			return 'bg-purple-100 text-purple-800';
		case OrderStatus.DELIVERED:
			return 'bg-green-100 text-green-800';
		case OrderStatus.CANCELLED:
			return 'bg-red-100 text-red-800';
		case OrderStatus.RETURNED:
			return 'bg-gray-100 text-gray-800';
		default:
			return 'bg-gray-100 text-gray-800';
	}
};

// Helper function to format date
const formatDate = (date: Date) => {
	return new Date(date).toLocaleDateString('en-US', { 
		month: 'short', 
		day: 'numeric',
		year: 'numeric'
	});
};

export default function SellerDashboardPage() {
	return (
		<main className="min-h-screen bg-[#f5f0e8] text-secondary">
			<div className="container-custom py-6 sm:py-10">
				{/* Welcome Section */}
				<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD700]">
							Seller Dashboard
						</p>
						<h1 className="mt-2 text-3xl font-black text-secondary sm:text-4xl">
							Welcome back, {mockSellerName}! 👋
						</h1>
						<p className="mt-2 text-gray-600">
							Here's what's happening with your store today.
						</p>
					</div>
					<Link
						href="/products/new"
						className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD700] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#ffcc00] hover:shadow-lg hover:translate-y-[-2px]"
					>
						<span className="text-lg">+</span>
						Add New Product
					</Link>
				</div>

				{/* Quick Stats Cards */}
				<section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat) => (
						<div 
							key={stat.label} 
							className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-[#FFD700]/30"
						>
							<div className="flex items-start justify-between">
								<div className="flex-1">
									<p className="text-sm font-semibold text-gray-600">{stat.label}</p>
									<p className="mt-3 text-3xl font-black text-secondary">{stat.value}</p>
									<p className="mt-2 text-xs font-semibold text-gray-500">
										{stat.change}
									</p>
								</div>
								<div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color} text-2xl`}>
									{stat.icon}
								</div>
							</div>
						</div>
					))}
				</section>

				{/* Main Content Grid */}
				<div className="grid gap-6 lg:grid-cols-3">
					{/* Recent Products - Takes 2 columns */}
					<section className="lg:col-span-2">
						<div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
							<div className="mb-6 flex items-center justify-between">
								<h2 className="text-2xl font-black text-secondary">Recent Products</h2>
								<Link 
									href="/products/new" 
									className="text-sm font-bold text-[#FFD700] transition hover:text-[#a06f00]"
								>
									View All →
								</Link>
							</div>

							<div className="space-y-3">
								{recentProducts.map((product) => (
									<div
										key={product.id}
										className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-[#f5f0e8] p-4 transition hover:border-[#FFD700]/30 hover:shadow-md"
									>
										{/* Product Image */}
										<div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
											{product.images && product.images.length > 0 ? (
												<img 
													src={product.images[0]} 
													alt={product.name}
													className="h-full w-full object-cover"
												/>
											) : (
												<span className="text-2xl">📦</span>
											)}
										</div>

										{/* Product Info */}
										<div className="flex-1 min-w-0">
											<h3 className="font-bold text-secondary truncate">{product.name}</h3>
											<div className="mt-1 flex items-center gap-3 text-xs text-gray-600">
												<span>{product.category}</span>
												<span>•</span>
												<span className={`font-semibold ${product.quantity === 0 ? 'text-red-600' : product.quantity! < 10 ? 'text-orange-600' : 'text-green-600'}`}>
													{product.quantity === 0 ? 'Out of Stock' : `${product.quantity} in stock`}
												</span>
												<span>•</span>
												<span>{product.sold} sold</span>
											</div>
										</div>

										{/* Price and Actions */}
										<div className="flex flex-col items-end gap-2">
											<p className="text-lg font-black text-[#FFD700]">
												{formatCurrency(product.price!)}
											</p>
											<div className="flex gap-2">
												<button 
													className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 transition hover:bg-gray-200"
													title="Edit product"
												>
													✏️ Edit
												</button>
												<button 
													className="rounded-lg bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 transition hover:bg-red-100"
													title="Delete product"
												>
													🗑️ Delete
												</button>
											</div>
										</div>

										{/* Status Badge */}
										{!product.published && (
											<span className="absolute top-2 right-2 rounded-full bg-gray-100 px-2 py-1 text-xs font-bold text-gray-600">
												Draft
											</span>
										)}
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Sales Chart Placeholder */}
					<section className="lg:col-span-1">
						<div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
							<h2 className="mb-6 text-xl font-black text-secondary">Sales Overview</h2>
							
							{/* Chart Placeholder */}
							<div className="mb-6 flex h-48 items-end justify-around gap-2 rounded-xl bg-[#f5f0e8] p-4">
								{[65, 45, 80, 55, 70, 90, 75].map((height, index) => (
									<div key={index} className="flex flex-1 flex-col items-center gap-2">
										<div 
											className="w-full rounded-t-lg bg-gradient-to-t from-[#FFD700] to-[#ffcc00] transition hover:opacity-80"
											style={{ height: `${height}%` }}
										/>
										<span className="text-xs font-semibold text-gray-500">
											{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
										</span>
									</div>
								))}
							</div>

							{/* Quick Metrics */}
							<div className="space-y-3">
								<div className="flex items-center justify-between rounded-lg bg-[#f5f0e8] p-3">
									<span className="text-sm font-semibold text-gray-600">This Week</span>
									<span className="text-lg font-black text-secondary">₦124,500</span>
								</div>
								<div className="flex items-center justify-between rounded-lg bg-[#f5f0e8] p-3">
									<span className="text-sm font-semibold text-gray-600">This Month</span>
									<span className="text-lg font-black text-secondary">₦847,500</span>
								</div>
								<div className="flex items-center justify-between rounded-lg bg-[#f5f0e8] p-3">
									<span className="text-sm font-semibold text-gray-600">Avg. Order</span>
									<span className="text-lg font-black text-secondary">₦5,433</span>
								</div>
							</div>
						</div>
					</section>
				</div>

				{/* Recent Orders Table */}
				<section className="mt-6">
					<div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
						<div className="mb-6 flex items-center justify-between">
							<h2 className="text-2xl font-black text-secondary">Recent Orders</h2>
							<button className="text-sm font-bold text-[#FFD700] transition hover:text-[#a06f00]">
								View All Orders →
							</button>
						</div>

						{/* Desktop Table View */}
						<div className="hidden overflow-x-auto md:block">
							<table className="w-full">
								<thead>
									<tr className="border-b border-gray-200 text-left text-sm font-bold uppercase tracking-wide text-gray-600">
										<th className="pb-3">Order ID</th>
										<th className="pb-3">Date</th>
										<th className="pb-3">Location</th>
										<th className="pb-3">Total</th>
										<th className="pb-3">Status</th>
										<th className="pb-3 text-right">Actions</th>
									</tr>
								</thead>
								<tbody>
									{recentOrders.map((order) => (
										<tr 
											key={order.id} 
											className="border-b border-gray-100 transition hover:bg-[#f5f0e8]"
										>
											<td className="py-4">
												<span className="font-bold text-secondary">{order.id}</span>
											</td>
											<td className="py-4 text-gray-600">
												{formatDate(order.createdAt!)}
											</td>
											<td className="py-4 text-gray-600">{order.shippingCity}</td>
											<td className="py-4">
												<span className="font-black text-[#FFD700]">
													{formatCurrency(order.total!)}
												</span>
											</td>
											<td className="py-4">
												<span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${getStatusColor(order.status!)}`}>
													{order.status}
												</span>
											</td>
											<td className="py-4 text-right">
												<button className="text-sm font-semibold text-[#FFD700] transition hover:text-[#a06f00]">
													View Details →
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						{/* Mobile Card View */}
						<div className="space-y-3 md:hidden">
							{recentOrders.map((order) => (
								<div 
									key={order.id}
									className="rounded-xl border border-gray-100 bg-[#f5f0e8] p-4"
								>
									<div className="mb-3 flex items-start justify-between">
										<div>
											<p className="font-bold text-secondary">{order.id}</p>
											<p className="mt-1 text-xs text-gray-600">
												{formatDate(order.createdAt!)}
											</p>
										</div>
										<span className={`inline-block rounded-full px-2 py-1 text-xs font-bold ${getStatusColor(order.status!)}`}>
											{order.status}
										</span>
									</div>
									<div className="flex items-center justify-between">
										<div>
											<p className="text-xs text-gray-600">{order.shippingCity}</p>
											<p className="mt-1 text-lg font-black text-[#FFD700]">
												{formatCurrency(order.total!)}
											</p>
										</div>
										<button className="text-xs font-semibold text-[#FFD700] transition hover:text-[#a06f00]">
											View →
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Quick Actions Footer */}
				<section className="mt-6 grid gap-4 sm:grid-cols-3">
					<Link 
						href="/products/new"
						className="group flex items-center gap-4 rounded-2xl border border-[#FFD700]/30 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-[#FFD700]"
					>
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]/10 text-3xl">
							➕
						</div>
						<div>
							<h3 className="font-black text-secondary">Add Product</h3>
							<p className="text-sm text-gray-600">List a new item</p>
						</div>
					</Link>

					<button 
						className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-[#FFD700]/30"
					>
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl">
							📊
						</div>
						<div className="text-left">
							<h3 className="font-black text-secondary">Analytics</h3>
							<p className="text-sm text-gray-600">View insights</p>
						</div>
					</button>

					<button 
						className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-[#FFD700]/30"
					>
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-3xl">
							⚙️
						</div>
						<div className="text-left">
							<h3 className="font-black text-secondary">Settings</h3>
							<p className="text-sm text-gray-600">Manage store</p>
						</div>
					</button>
				</section>
			</div>
		</main>
	);
}
