import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ToastContainer } from '@/components/Toast';

export default function AffiliateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] bg-[#fbf8f2]">{children}</main>
      <Footer />
      <ToastContainer />
    </>
  );
}
