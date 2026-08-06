export default function SuccessStoriesCardGrids() {
  return (
    <>
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
    </>
  );
}
