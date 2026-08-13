export default function SuccessStoriesCardGrids() {
  return (
    <>
      {/* Cards grid */}
      <div className="relative mt-6 sm:mt-12 w-full overflow-x-auto scrollbar-none">
        <div className="flex flex-nowrap px-4 sm:px-8 md:px-16 xl:px-[285px] gap-2 sm:gap-4 lg:gap-0 min-w-max">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="group relative block h-[480px] sm:h-[600px] lg:h-[720px] w-[180px] sm:w-[220px] lg:w-[265px] shrink-0 transition-all duration-300 rotate-y-30 hover:rotate-y-0"
            >
              <div
                className="absolute bottom-0 left-0 right-0 flex items-end justify-center h-[420px] sm:h-[530px] lg:h-[640px]"
              >
                <img
                  src={`/images/backgrounds/deco-${i + 1}.png`}
                  alt=""
                  className="h-full w-[160px] sm:w-[190px] lg:w-[220px] rounded object-cover"
                />
              </div>
              <div className="absolute right-0 top-0 h-full w-[60px] sm:w-[91px] border-l border-white/[0.04]" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
