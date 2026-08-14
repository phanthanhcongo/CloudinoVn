import PurpleOrb from "./PurpleOrb";
import SectionHeader from "./SectionHeader";

const solutions = [
  {
    title: "FinOps",
    desc: "Optimize cloud spending",
    link: "/solutions/services/finops",
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
    link: "/solutions/services/security",
    angle: 0,
  },
  {
    title: "Digital Workplace",
    desc: "Empower modern collaboration",
    link: "/solutions/services/digital-workplace",
    angle: 45,
  },
  {
    title: "DevOps",
    desc: "Accelerate software delivery",
    link: "/solutions/services/devops",
    angle: 90,
  },
  {
    title: "Managed Cloud",
    desc: "24/7 monitoring & management",
    link: "/solutions/services/managed-cloud",
    angle: 135,
  },
  {
    title: "Migration & Modernization",
    desc: "Move workloads with confidence",
    link: "/solutions/services/migration-modernization",
    angle: 180,
  },
  {
    title: "Cloud Strategy",
    desc: "Planning your cloud journey",
    link: "/solutions/services/cloud-strategy",
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
        className="absolute inset-0 h-full w-full object-cover opacity-100 mix-blend-screen filter brightness-150 contrast-125 pointer-events-none"
      />

      {/* Vibrant Purple Glow Orb centered behind 3D Cubes */}
      <PurpleOrb className="top-[55%] h-[350px] sm:h-[450px] w-[350px] sm:w-[450px]" blur={120} opacity={0.6} />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-[285px]">
        <SectionHeader title="Explore Solutions" leftPercent={10} />

        {/* Content Area - Bigger Orbital Layout */}
        <div className="relative h-[600px] sm:h-[760px] lg:h-[920px] flex items-center justify-center my-4 sm:my-0">
          {/* 3D Purple Cubes Graphic - Bigger size */}
          <img
            src="/images/hero/hero-graphic.png"
            alt="3D Purple Cubes"
            className="absolute left-1/2 top-1/2 h-[220px] sm:h-[440px] lg:h-[720px] w-auto max-w-full -translate-x-1/2 -translate-y-1/2 object-contain opacity-35 lg:opacity-100 pointer-events-none transition-transform duration-500 hover:scale-105 z-10"
            style={{
              filter: "drop-shadow(0 0 35px rgba(168, 85, 247, 0.75)) drop-shadow(0 0 70px rgba(125, 81, 211, 0.5))",
            }}
          />

          {/* 360-Degree Circular Orbital Solution Nodes for All Screens */}
          <div className="absolute inset-0 z-20">
            {solutions.map((s) => {
              const rad = (s.angle * Math.PI) / 180;
              const left = 50 + 39 * Math.cos(rad);
              const top = 50 + 39 * Math.sin(rad);

              const content = (
                <>
                  <h3 className="text-sm sm:text-lg lg:text-2xl font-medium text-white leading-tight whitespace-nowrap">
                    {s.title}
                  </h3>
                  <p className="hidden sm:block mt-1 text-xs sm:text-sm lg:text-base text-white/75 whitespace-nowrap">
                    {s.desc}
                  </p>
                </>
              );

              return s.link ? (
                <a
                  href={s.link}
                  key={s.title}
                  className="absolute text-center lg:text-left transition-all duration-300 hover:scale-110 px-3 py-2 sm:p-4 lg:p-4.5 rounded-xl border border-transparent hover:border-purple-400/80 hover:bg-purple-950/70 hover:backdrop-blur-xl hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap cursor-pointer"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={s.title}
                  className="absolute text-center lg:text-left transition-all duration-300 px-3 py-2 sm:p-4 lg:p-4.5 rounded-xl border border-transparent -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-75 cursor-default"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  {content}
                </div>
              );
            })}
          </div>

          {/* Center VIEW ALL Button */}
          <a
            href="/solutions"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[42px] sm:h-[52px] lg:h-[60px] px-6 sm:px-10 items-center justify-center rounded-full border border-purple-400/50 text-xs sm:text-base lg:text-xl font-medium tracking-wider text-white backdrop-blur-xl bg-gradient-to-r from-[#312e81] via-[#5b3db5] to-[#7d51d3] hover:bg-white hover:text-[#201048] transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.75)] hover:scale-105 uppercase z-30 whitespace-nowrap"
          >
            View all →
          </a>
        </div>
      </div>
    </section>
  );
}
