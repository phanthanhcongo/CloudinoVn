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
    <section className="relative bg-black pt-[137px] pb-[133px]">
      <img
        src="/images/backgrounds/GoalOptions.svg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      <div className="mx-auto max-w-[1920px] px-[285px] text-center">
        <h2 className="text-4xl font-normal text-white tracking-tighter">
          What are you looking to achieve?
        </h2>

        <div className="relative mx-auto mt-[84px] max-w-[1340px]">
          {/* Center decorative element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/images/icons/Dino.svg"
              alt=""
              className="h-[221px] w-[221px] object-contain"
            />
          </div>

          {/* Connecting lines */}
          <div className="absolute inset-0 pointer-events-none">
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

          {/* Cards grid */}
          <div className="relative grid grid-cols-2 gap-x-[740px] gap-y-[83px]">
            {goals.map((g, i) => (
              <div
                key={i}
                className="flex w-[300px] flex-col items-center justify-self-center rounded-2xl border border-accent p-4 bg-accent/40 backdrop-blur-xl backdrop-saturate-180 backdrop-brightness-105"
              >
                <img
                  src={g.icon}
                  alt=""
                  className="h-[220px] w-[220px] object-contain"
                />
                <span className="mt-0 text-base font-normal text-white">
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
