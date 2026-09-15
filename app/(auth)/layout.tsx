import '@/styles/globals.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff4b8,_#fffaf0_35%,_#f6f0eb_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="hidden items-center justify-center bg-[#111111] p-8 lg:flex">
            <div className="max-w-md text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                YABARIGHT
              </p>
              <h2 className="mt-6 text-4xl font-black leading-tight">
                Shop smarter. <span className="text-primary">Style brighter.</span>
              </h2>
              <p className="mt-4 text-base text-white/70">
                Discover pre-loved pieces that look premium, feel effortless, and fit your
                budget perfectly.
              </p>

              <div className="mt-8 space-y-4">
                {['Curated thrift essentials', 'Trustworthy fashion sellers', 'Fast and easy checkout'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-black text-secondary">
                      ✓
                    </div>
                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center lg:text-left">
                <p className="text-3xl font-black tracking-tight text-secondary">
                  YABA<span className="text-primary">RIGHT</span>
                </p>
                <p className="mt-2 text-sm text-gray-600">Look Good. Spend Smart. Shop Right.</p>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
