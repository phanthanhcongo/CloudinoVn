export default function PartnerLogos() {
  return (
    <section className="relative bg-[#111] pt-[100px] pb-[60px] md:pt-[309px] md:pb-[121px]">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      <div className="mx-auto max-w-[1920px] px-4 md:px-[285px]">
        <div className="text-center">
          <h2 className="text-5xl font-light leading-[1] text-white md:whitespace-nowrap md:text-[96px]">
            Trusted by Global Partners
          </h2>
          <p className="mx-auto mt-0 max-w-[720px] text-sm font-normal text-white md:text-base">
            Experience the best synergy that has led to the success of over 8,000 customers with the world&apos;s best technology partners.
          </p>
        </div>

        <div className="mt-[60px] flex flex-col gap-[60px] md:mt-[100px] md:gap-[100px]">
          {[0, 1].map((row) => (
            <div key={row} className="grid grid-cols-4 gap-4 md:flex md:justify-between" style={{ marginLeft: "-60px", marginRight: "-60px", width: "calc(100% + 120px)" }}>
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="flex h-[40px] items-center justify-center md:h-[108px] md:w-[440px]">
                  <img src={`/images/logos-cleaned/${row * 8 + i + 1}.png`} alt={`Partner ${row * 8 + i + 1}`} className="max-h-full max-w-[80px] object-contain md:max-w-full drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
