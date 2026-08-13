import SuccessStoriesCardGrids from "./SuccessStoriesCardGrids";

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-black pt-12 sm:pt-20 lg:pt-[100px] pb-12 sm:pb-[55px]">
      <img
        src="/images/backgrounds/bg-section-6.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-16 xl:px-[285px]">
        <div className="mb-6 sm:mb-[25px] flex items-center gap-4">
          <div
            className="relative flex items-center overflow-hidden rounded-full border border-accent px-4 py-2 sm:px-6 sm:py-3 shrink-0"
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
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-light text-white whitespace-nowrap">
              Success stories
            </h2>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <div className="h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white opacity-40" />
              </div>
            </div>
          </div>
          <div className="hidden sm:block flex-1 border-dashed border border-white/20" />
          <img
            src="/images/partners/logo-1.png"
            alt=""
            className="hidden sm:block h-[35px] sm:h-[50px] w-auto object-contain shrink-0"
          />
        </div>
      </div>

      <SuccessStoriesCardGrids />

      <div className="relative mx-auto mt-8 sm:mt-12 flex justify-center max-w-[1920px] px-4 sm:px-8 md:px-16 xl:px-[285px]">
        <a
          href="/success-stories"
          className="inline-flex h-[45px] sm:h-[50px] w-[160px] sm:w-[194px] items-center justify-center rounded-full border border-purple-400/50 text-base sm:text-xl font-medium tracking-[-0.5px] text-white backdrop-blur-xl bg-gradient-to-r from-[#312e81] via-[#5b3db5] to-[#7d51d3] hover:bg-white hover:text-[#201048] shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.75)] hover:scale-105 transition-all duration-300"
        >
          LEARN MORE →
        </a>
      </div>
    </section>
  );
}
