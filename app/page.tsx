import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary to-white">
      {/* Header */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold text-secondary">
          YABA<span className="text-primary">RIGHT</span>
        </div>
        <div className="space-x-4">
          <Link href="/login" className="text-secondary hover:text-primary">
            Login
          </Link>
          <Link
            href="/register"
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-opacity-90"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold text-secondary mb-4">
          Look Good. Spend Smart. Shop Right.
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          YABARIGHT is the digital home of affordable fashion. Buy and sell quality thrift
          clothes, bags, and shoes online.
        </p>

        <div className="space-x-4">
          <Link
            href="/products"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 font-semibold"
          >
            Start Shopping
          </Link>
          <Link
            href="/register?role=seller"
            className="inline-block bg-primary text-secondary px-8 py-3 rounded-lg hover:bg-opacity-90 font-semibold"
          >
            Become a Seller
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-secondary mb-2">
            Premium Fashion
          </h3>
          <p className="text-gray-600">
            Quality thrift clothes at prices you can afford
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-secondary mb-2">
            Convenient Access
          </h3>
          <p className="text-gray-600">
            Browse and shop from anywhere, anytime
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-secondary mb-2">
            Trusted Sellers
          </h3>
          <p className="text-gray-600">
            Every shop verified for your peace of mind
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-600 pb-8">
        <p>Built by Wakocoding. Powered by Technology. Inspired by Yaba. Built for Nigeria.</p>
      </footer>
    </main>
  );
}
