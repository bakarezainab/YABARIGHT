import '@/styles/globals.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary">
            YABA<span className="text-primary">RIGHT</span>
          </h1>
          <p className="text-gray-600 mt-2">Look Good. Spend Smart. Shop Right.</p>
        </div>
        {children}
      </div>
    </div>
  );
}
