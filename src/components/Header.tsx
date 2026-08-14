import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="relative border-b border-white/5 backdrop-blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(49, 46, 129, 0.25) 0%, rgba(125, 81, 211, 0.25) 100%)",
          backdropFilter: "blur(24px) saturate(180%) brightness(1.05)",
          WebkitBackdropFilter: "blur(24px) saturate(180%) brightness(1.05)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        <div className="relative mx-auto flex h-[56px] md:h-[70px] max-w-[1922px] items-center justify-between px-4 sm:px-6 md:justify-center md:px-8">
          {/* Mobile Logo - Centered */}
          <a
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center transition-opacity hover:opacity-80 md:hidden"
          >
            <img
              src="/images/logos-cleaned/CloudinoLogoFinal.png"
              alt="Cloudino Logo"
              className="h-6 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center md:flex">
            <a
              href="/solutions"
              className="rounded-full px-3 py-1 text-sm md:text-base font-normal text-white transition-all hover:bg-[#7D51D3]/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
            >
              Solutions
            </a>
            <div className="mx-3 h-4 w-px bg-white/40" />
            <a
              href="/success-stories"
              className="rounded-full px-3 py-1 text-sm md:text-base font-normal text-white transition-all hover:bg-[#7D51D3]/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
            >
              Success stories
            </a>
            <div className="mx-3 h-4 w-px bg-white/40" />

            <a
              href="/"
              className="mx-4 flex items-center transition-opacity hover:opacity-80"
            >
              <img
                src="/images/logos-cleaned/CloudinoLogoFinal.png"
                alt="Cloudino Logo"
                className="h-7 md:h-9 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
              />
            </a>

            <div className="mx-3 h-4 w-px bg-white/40" />
            <a
              href="/resources"
              className="rounded-full px-3 py-1 text-sm md:text-base font-normal text-white transition-all hover:bg-[#7D51D3]/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
            >
              Resources
            </a>
            <div className="mx-3 h-4 w-px bg-white/40" />
            <a
              href="/about"
              className="rounded-full px-3 py-1 text-sm md:text-base font-normal text-white transition-all hover:bg-[#7D51D3]/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
            >
              About us
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none md:hidden ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Top Shimmer Line */}
      <div className="relative h-[2px] overflow-hidden bg-white/5">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-[#7D51D3]/80 to-transparent shadow-[0_0_10px_#7D51D3]" />
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="border-b border-white/10 bg-black/95 backdrop-blur-2xl md:hidden shadow-2xl animate-fadeIn">
          <nav className="flex flex-col px-6 py-6 space-y-2">
            <a
              href="/solutions"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-[#7D51D3]/30 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <span>Solutions</span>
              <span className="text-white/40">→</span>
            </a>
            <a
              href="/success-stories"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-[#7D51D3]/30 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <span>Success stories</span>
              <span className="text-white/40">→</span>
            </a>
            <a
              href="/resources"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-[#7D51D3]/30 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <span>Resources</span>
              <span className="text-white/40">→</span>
            </a>
            <a
              href="/about"
              className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-[#7D51D3]/30 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <span>About us</span>
              <span className="text-white/40">→</span>
            </a>

            <div className="pt-4 mt-2 border-t border-white/10">
              <a
                href="/about"
                className="flex items-center justify-center h-12 w-full rounded-full bg-gradient-to-r from-[#312E81] to-[#7D51D3] text-base font-semibold text-white shadow-lg transition-transform active:scale-95"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
