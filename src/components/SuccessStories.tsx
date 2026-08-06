export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-black pt-[100px] pb-[55px]">
      <img
        src="/images/backgrounds/bg-section-6.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="mb-[25px] flex items-center">
        <div
          className="relative flex items-center overflow-hidden rounded-full border border-accent px-6 py-3"
          style={{
            background: "rgba(49,46,129,0.25)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white opacity-40" />
            </div>
          </div>
          <h2 className="text-5xl font-light text-white">Success stories</h2>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
            <div className="h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white opacity-40" />
            </div>
          </div>
        </div>
        <div className="ml-0 flex-1 border-dashed border border-white/20" />
        <img
          src="/images/partners/logo-1.png"
          alt=""
          className="ml-0 h-[50px] w-[296px] object-contain"
        />
      </div>

      {/* Cards grid */}
      <div className="relative mt-[48px] max-w-[1920px] -mx-24">
        <div className="flex flex-nowrap">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="group relative block h-[720px] w-[265px] shrink-0 transition-all duration-300 rotate-y-30 hover:rotate-y-0"
            >
              <div
                className="absolute bottom-0 left-0 right-0 flex items-end justify-center"
                style={{ height: "640px" }}
              >
                <img
                  src={`/images/backgrounds/deco-${i + 1}.png`}
                  alt=""
                  className="h-[640px] w-[220px] rounded object-cover"
                />
              </div>
              <div className="absolute right-0 top-0 h-full w-[91px] border-l border-white/[0.04]" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex justify-center max-w-[1920px] px-[285px]">
        <a
          href="/success-stories"
          className="inline-flex h-[50px] w-[194px] items-center justify-center rounded-full border border-white/20 text-xl font-normal tracking-[-1px] text-white backdrop-blur-md transition-all hover:bg-white hover:text-accent bg-accent"
        >
          LEARN MORE →
        </a>
      </div>
    </section>
  );
}
