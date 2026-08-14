export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-8 pb-4 sm:pt-12 sm:pb-8 md:pt-16 md:pb-10" style={{ background: "radial-gradient(ellipse at 50% 40%, #432188 0%, #201048 55%, #0F0728 100%)" }}>
      {/* Top accent divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />

      {/* Decorative 3D Fluid Graphics (Right & Left) */}
      <img
        src="/images/aws/aws-bg.png"
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden h-[80%] w-auto max-w-[450px] object-contain opacity-70 mix-blend-screen pointer-events-none md:block"
      />
      <img
        src="/images/hero/hero-icon-5.png"
        alt=""
        className="absolute bottom-0 left-0 hidden h-auto w-[240px] object-contain opacity-80 mix-blend-screen pointer-events-none md:block"
      />

      {/* Concentric Decorative Rings, Orbs & Dots Container (Half Circle Arching Up from Bottom) */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 scale-[0.3] sm:scale-[0.55] md:scale-[0.8] origin-bottom transition-transform pointer-events-none">
        {/* Glowing gradient center orb at bottom */}
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, #4C1D95 60%, transparent 100%)",
            filter: "blur(180px)",
          }}
        />

        {/* Concentric dashed circles (Top half arches upward from footer bottom) */}
        <div className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/30" />
        <div className="absolute left-1/2 top-1/2 hidden h-[1240px] w-[1240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20 md:block" />

        {/* White Glowing Dots on Top Arch */}
        <div className="absolute left-1/2 top-1/2 h-[24px] w-[24px] -translate-x-[320px] -translate-y-[260px] rounded-full bg-white shadow-[0_0_20px_#fff]" />
        <div className="absolute left-1/2 top-1/2 h-[18px] w-[18px] translate-x-[360px] -translate-y-[220px] rounded-full border-2 border-white bg-white/40" />
      </div>

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-[285px]">
        {/* CLOUDINO Brand Header */}
        <div className="mb-4 sm:mb-6 flex justify-center md:mb-8">
          <a href="/" className="transition-opacity hover:opacity-90">
            <img
              src="/images/logos-cleaned/CloudinoLogoFinal.png"
              alt="Cloudino Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain brightness-0 invert drop-shadow-[0_0_12px_rgba(168,85,247,0.45)] transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.7)]"
            />
          </a>
        </div>

        {/* Main Title & Subtitle with Figma Color Gradients */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[72px] font-bold leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-[#FFE580] via-[#FF8A65] to-[#F48FB1] bg-clip-text text-transparent drop-shadow-sm">
              Let&apos;s Connect &
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-[#E1BEE7] to-[#CE93D8] bg-clip-text text-transparent opacity-95">
              Transform Together.
            </span>
          </h2>

          {/* <p className="mt-2 sm:mt-4 text-xs sm:text-base md:text-2xl font-normal text-white/90 max-w-[700px] mx-auto">
            Connect with us and create change together.
          </p> */}

          {/* Pill CTA Button */}
          {/* <div className="mt-5 sm:mt-8 flex justify-center">
            <a
              href="/contact"
              className="inline-flex h-[42px] sm:h-[54px] md:h-[60px] px-6 sm:px-10 items-center justify-center rounded-full border border-white/30 text-xs sm:text-base md:text-lg font-medium text-white backdrop-blur-xl bg-white/10 hover:bg-white hover:text-[#201048] transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-105"
            >
              CONTACT →
            </a>
          </div> */}

          {/* Address Info */}
          <address className="mt-4 sm:mt-6 md:mt-10 block text-xs sm:text-sm md:text-base font-normal not-italic text-white/80 mx-auto text-center leading-relaxed max-w-[600px]">
            <p className="text-white/90">Tòa nhà Cloudino, 4/3 Phố Nghĩa Đô, Phường Nghĩa Đô, Hà Nội</p>
            <p className="mt-1">(+84) 024 22165050</p>
            <p className="mt-1 font-medium text-purple-200">hello@cloudino.vn</p>
            <p className="mt-1 text-white/60">8:30AM - 6:00PM</p>
          </address>
        </div>

        {/* Copyright Line */}
        <div className="mt-4 sm:mt-6 md:mt-8 text-center pt-3 sm:pt-4 md:pt-5 border-t border-white/10">
          <p className="text-[11px] sm:text-xs font-normal text-white/50">
            Copyright 2026 Cloudino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
