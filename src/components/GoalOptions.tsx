import PurpleOrb from "./PurpleOrb";

export default function GoalOptions() {
  const goals = [
    {
      icon: "/images/services/icon-2.png",
      text: "Modernize my digital workplace",
    },
    {
      icon: "/images/services/icon-3.png",
      text: "Reduce cloud infrastructure costs",
    },
    {
      icon: "/images/services/icon-1.png",
      text: "Build enterprise cloud infrastructure",
    },
    {
      icon: "/images/services/icon-4.png",
      text: "Migrate existing systems to the cloud",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-12 sm:py-20 lg:pt-[137px] lg:pb-[133px]">
      <img
        src="/images/backgrounds/GoalOptions.svg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30 pointer-events-none"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      {/* Top-Left Corner 1/4 Glowing Purple Orb */}
      <PurpleOrb
        size={500}
        blur={140}
        opacity={0.5}
        className="!top-0 !left-0 !bottom-auto -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-20 mx-auto max-w-[1920px] px-3 sm:px-8 md:px-16 xl:px-[285px] text-center">
        <h2 className="relative z-30 text-xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tighter">
          What are you looking to achieve?
        </h2>

        <div className="relative mx-auto mt-10 sm:mt-16 lg:mt-[84px] max-w-[1340px]">
          {/* Center decorative element (Dino in the middle across all screens) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <img
              src="/images/icons/Dino.svg"
              alt=""
              className="h-10 w-10 min-[400px]:h-14 min-[400px]:w-14 sm:h-24 sm:w-24 md:h-36 md:w-36 lg:h-[221px] lg:w-[221px] object-contain drop-shadow-[0_0_15px_rgba(125,81,211,0.6)]"
            />
          </div>

          {/* Connecting lines SVG for tablet and desktop */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block">
            <svg viewBox="0 0 1340 663" className="h-full w-full">
              {/* Dino top edge → Top-left card */}
              <line
                x1="610"
                y1="240"
                x2="530"
                y2="150"
                stroke="rgba(125,81,211,0.8)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              <line
                x1="530"
                y1="150"
                x2="300"
                y2="150"
                stroke="rgba(125,81,211,0.8)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              {/* Dino right edge → Top-right card */}
              <line
                x1="730"
                y1="240"
                x2="810"
                y2="150"
                stroke="rgba(125,81,211,0.8)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              <line
                x1="810"
                y1="150"
                x2="1040"
                y2="150"
                stroke="rgba(125,81,211,0.8)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              {/* Dino left edge → Bottom-left card */}
              <line
                x1="610"
                y1="425"
                x2="530"
                y2="515"
                stroke="rgba(125,81,211,0.8)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              <line
                x1="530"
                y1="515"
                x2="300"
                y2="515"
                stroke="rgba(125,81,211,0.8)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              {/* Dino bottom edge → Bottom-right card */}
              <line
                x1="730"
                y1="420"
                x2="810"
                y2="510"
                stroke="rgba(125,81,211,0.8)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              <line
                x1="810"
                y1="510"
                x2="1040"
                y2="510"
                stroke="rgba(125,81,211,0.8)"
                strokeWidth="2"
                strokeDasharray="8 4"
              />
            </svg>
          </div>

          {/* Cards grid: 4 cards at 4 corners around Dino in center */}
          <div className="relative z-10 grid grid-cols-2 gap-x-2 gap-y-4 min-[400px]:gap-x-4 min-[400px]:gap-y-6 sm:gap-x-12 sm:gap-y-12 md:gap-x-24 lg:gap-x-[740px] lg:gap-y-[83px] justify-items-center">
            {goals.map((g, i) => (
              <div
                key={i}
                className="flex w-full max-w-[135px] min-[400px]:max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] flex-col items-center rounded-xl sm:rounded-2xl border border-accent p-2 min-[400px]:p-2.5 sm:p-3.5 bg-accent/40 backdrop-blur-xl backdrop-saturate-180 backdrop-brightness-105 transition-transform duration-300 hover:scale-[1.03]"
              >
                <img
                  src={g.icon}
                  alt=""
                  className="h-16 w-16 min-[400px]:h-20 min-[400px]:w-20 sm:h-28 sm:w-28 lg:h-[150px] lg:w-[150px] object-contain"
                />
                <span className="mt-1 sm:mt-1.5 text-[11px] min-[400px]:text-xs sm:text-sm font-normal text-white text-center leading-tight">
                  {g.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


