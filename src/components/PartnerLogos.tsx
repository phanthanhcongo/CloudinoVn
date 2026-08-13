export default function PartnerLogos() {
  return (
    <section className="relative overflow-hidden bg-black pt-14 pb-14 md:pt-[140px] md:pb-[100px]">
      {/* Top & Bottom divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[150px]"
        style={{
          background: "radial-gradient(circle, #7D51D3 0%, #312E81 70%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header Title & Subtitle */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white tracking-tight">
            Trusted by Global Partners
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] text-xs sm:text-sm md:text-base font-normal text-white/70 leading-relaxed">
            Experience the best synergy that has led to the success of over 8,000 customers with the world&apos;s best technology partners.
          </p>
        </div>

        {/* Outer Glass Panel for Direct Logo Display */}
        <div
          className="mt-8 sm:mt-12 rounded-[28px] border border-white/10 p-5 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Logo Grid: 3 cols on mobile, 4 on tablet, 8 evenly spaced on desktop */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {[0, 1].map((row) => (
              <div key={row} className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-6 lg:gap-8 items-center justify-between w-full">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="flex h-[38px] sm:h-[48px] lg:h-[54px] w-full items-center justify-center">
                    <img
                      src={`/images/logos-cleaned/${row * 8 + i + 1}.png`}
                      alt={`Partner ${row * 8 + i + 1}`}
                      className="h-full w-auto max-w-full object-contain filter brightness-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-115 hover:brightness-125 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
