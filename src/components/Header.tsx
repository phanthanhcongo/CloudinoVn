import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative border-b border-white/5 backdrop-blur-3xl" style={{ background: "linear-gradient(90deg, rgba(49, 46, 129, 0.15) 0%, rgba(125, 81, 211, 0.15) 100%)", backdropFilter: "blur(24px) saturate(180%) brightness(1.05)" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
        <div className="relative mx-auto flex h-[101px] max-w-[1922px] items-center justify-center px-4">
          <nav className="hidden items-center md:flex">
            <a
              href="/solutions"
              className="rounded-full px-2 py-1 text-base font-normal text-white transition-colors hover:bg-[#7D51D3]/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
            >
              Solutions
            </a>
            <div className="mx-3 h-5 w-px bg-white/60" />
            <a
              href="/success-stories"
              className="rounded-full px-2 py-1 text-base font-normal text-white transition-colors hover:bg-[#7D51D3]/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
            >
              Success stories
            </a>
            <div className="mx-3 h-5 w-px bg-white/60" />

            <a
              href="/"
              className="mx-3 text-2xl font-bold tracking-wider text-white hover:text-[#7D51D3] transition-colors"
            >
              CLOUDINO
            </a>

            <div className="mx-3 h-5 w-px bg-white/60" />
            <a
              href="/resources"
              className="rounded-full px-2 py-1 text-base font-normal text-white transition-colors hover:bg-[#7D51D3]/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
            >
              Resources
            </a>
            <div className="mx-3 h-5 w-px bg-white/60" />
            <a
              href="/about"
              className="rounded-full px-2 py-1 text-base font-normal text-white transition-colors hover:bg-[#7D51D3]/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
            >
              About us
            </a>
          </nav>

          <button
            className="hidden max-md:block absolute right-4 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className="relative h-[2px] overflow-hidden bg-white/5">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-[#7D51D3]/80 to-transparent shadow-[0_0_10px_#7D51D3]" />
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-md hidden max-md:block">
          <nav className="flex flex-col px-6 py-4">
            <a
              href="/solutions"
              className="py-3 text-base text-white"
              onClick={() => setMobileOpen(false)}
            >
              Solutions
            </a>
            <a
              href="/success-stories"
              className="py-3 text-base text-white"
              onClick={() => setMobileOpen(false)}
            >
              Success stories
            </a>
            <a
              href="/resources"
              className="py-3 text-base text-white"
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </a>
            <a
              href="/about"
              className="py-3 text-base text-white"
              onClick={() => setMobileOpen(false)}
            >
              About us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
