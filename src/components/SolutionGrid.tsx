import PurpleOrb from "./PurpleOrb";
import SectionHeader from "./SectionHeader";

const solutions = [
  {
    title: "FinOps",
    desc: "Optimize cloud spending",
    angle: -90,
  },
  {
    title: "AI & Data",
    desc: "Unlock business intelligence",
    link: "/solutions/services/ai-data",
    angle: -45,
  },
  {
    title: "Security",
    desc: "Protect your cloud environment",
    angle: 0,
  },
  {
    title: "Digital Workplace",
    desc: "Empower modern collaboration",
    angle: 45,
  },
  {
    title: "DevOps",
    desc: "Accelerate software delivery",
    angle: 90,
  },
  {
    title: "Managed Cloud",
    desc: "24/7 monitoring & management",
    angle: 135,
  },
  {
    title: "Migration & Modernization",
    desc: "Move workloads with confidence",
    angle: 180,
  },
  {
    title: "Cloud Strategy",
    desc: "Planning your cloud journey",
    angle: 225,
  },
];

export default function SolutionGrid() {
  const radiusX = 42; // % horizontal radius
  const radiusY = 38; // % vertical radius

  return (
    <section className="relative overflow-hidden bg-black pt-16 pb-12 sm:pt-24 sm:pb-16">
      {/* Background Graphic */}
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-lighten pointer-events-none"
      />

      {/* Vibrant Purple Glow Orb centered behind 3D Cubes */}
      <PurpleOrb className="top-[55%] h-[300px] sm:h-[380px] w-[300px] sm:w-[380px]" blur={130} opacity={0.2} />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-[285px]">
        <SectionHeader title="Explore Solutions" leftPercent={10} />

        {/* Content Area - Orbital Layout on Mobile & Desktop */}
        <div className="relative h-[520px] sm:h-[640px] lg:h-[780px] flex items-center justify-center my-4 sm:my-0">


          {/* 3D Purple Cubes Graphic */}
          <img
            src="/images/hero/hero-graphic.png"
            alt="3D Purple Cubes"
            className="absolute left-1/2 top-1/2 h-[180px] sm:h-[360px] lg:h-[620px] w-auto max-w-full -translate-x-1/2 -translate-y-1/2 object-contain opacity-35 lg:opacity-100 pointer-events-none transition-transform duration-500 hover:scale-105 z-10"
            style={{
              filter: "drop-shadow(0 0 35px rgba(168, 85, 247, 0.75)) drop-shadow(0 0 70px rgba(125, 81, 211, 0.5))",
            }}
          />

          {/* 360-Degree Circular Orbital Solution Nodes for All Screens */}
          <div className="absolute inset-0 z-20">
            {solutions.map((s) => {
              const rad = (s.angle * Math.PI) / 180;
              const left = 50 + 38 * Math.cos(rad);
              const top = 50 + 38 * Math.sin(rad);

              return (
                <a
                  href={s.link ? s.link : "/solutions"}
                  key={s.title}
                  className="absolute text-center lg:text-left transition-all duration-300 hover:scale-110 px-2.5 py-1.5 sm:p-3.5 lg:p-4 rounded-xl backdrop-blur-xl bg-purple-950/60 lg:bg-purple-950/40 border border-purple-500/40 hover:border-purple-400/80 hover:bg-purple-900/70 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] -translate-x-1/2 -translate-y-1/2 max-w-[110px] sm:max-w-[180px] lg:min-w-[200px]"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <h3 className="text-xs sm:text-base lg:text-lg font-medium text-white leading-tight">
                    {s.title}
                  </h3>
                  <p className="hidden sm:block mt-0.5 text-[10px] sm:text-xs text-white/70">
                    {s.desc}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Center VIEW ALL Button */}
          <a
            href="/solutions"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[38px] sm:h-[48px] lg:h-[54px] px-4 sm:px-8 items-center justify-center rounded-full border border-purple-400/50 text-xs sm:text-base lg:text-lg font-medium tracking-wider text-white backdrop-blur-xl bg-gradient-to-r from-[#312e81] via-[#5b3db5] to-[#7d51d3] hover:bg-white hover:text-[#201048] transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.75)] hover:scale-105 uppercase z-30 whitespace-nowrap"
          >
            View all →
          </a>
        </div>
      </div>
    </section>
  );
}
