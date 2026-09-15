import '@/styles/globals.css';

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - To be implemented */}
      {children}
    </div>
  );
}
