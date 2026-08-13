const solutions = [
  { title: "FinOps", desc: "Optimize cloud spending", x: 550, y: 110 },
  {
    title: "Cloud Strategy",
    desc: "Planning your cloud journey",
    x: 280,
    y: 220,
  },
  {
    title: "AI & Data",
    desc: "Unlock business intelligence",
    link: "/solutions/services/ai-data",
    x: 980,
    y: 125,
  },
  {
    title: "Security",
    desc: "Protect your cloud environment",
    x: 980,
    y: 275,
  },
  {
    title: "Digital Workplace",
    desc: "Empower modern collaboration",
    x: 980,
    y: 500,
  },
  { title: "DevOps", desc: "Accelerate software delivery", x: 700, y: 600 },
  {
    title: "Migration & Modernization",
    desc: "Move workloads with confidence",
    x: 100,
    y: 400,
  },
  {
    title: "Managed Cloud",
    desc: "24/7 monitoring & management",
    x: 250,
    y: 700,
  },
];

export default function SolutionGrid() {
  return (
    <section className="relative overflow-hidden bg-black pt-16 pb-12 sm:pt-24 sm:pb-16">
      {/* Background Graphic */}
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-lighten pointer-events-none"
      />

      {/* Vibrant Purple Glow Orb centered behind 3D Cubes */}
      <div
        className="pointer-events-none absolute left-1/2 top-[55%] h-[300px] sm:h-[380px] w-[300px] sm:w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          background: "linear-gradient(90deg, #312E81 0%, #7D51D3 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-[285px]">
        {/* Heading: "Explore Solutions" Badge & Partner Logo */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div
            className="relative flex items-center overflow-hidden rounded-full border border-white/10 px-5 py-2.5 sm:px-6 sm:py-3 shrink-0"
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
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-light text-white">
              Explore Solutions
            </h2>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <div className="h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white opacity-40" />
              </div>
            </div>
          </div>

          <div className="hidden sm:block flex-1 border-t border-white/20" />

          <img
            src="/images/partners/logo-1.png"
            alt="AWS Partner Badge"
            className="h-[36px] sm:h-[48px] lg:h-[50px] w-auto max-w-[240px] sm:max-w-[296px] object-contain"
          />
        </div>

        {/* Content area: 3D Cubes with Neon Purple Drop Shadow Glow */}
        <div className="relative h-[600px] sm:h-[700px] lg:h-[760px]">
          <img
            src="/images/hero/hero-graphic.png"
            alt="3D Purple Cubes"
            className="absolute left-1/2 top-0 h-[500px] sm:h-[650px] lg:h-[760px] w-auto max-w-full -translate-x-1/2 object-contain transition-transform duration-500 hover:scale-105"
            style={{
              filter: "drop-shadow(0 0 35px rgba(168, 85, 247, 0.75)) drop-shadow(0 0 70px rgba(125, 81, 211, 0.5))",
            }}
          />

          {/* Desktop Solution Nodes */}
          <div className="hidden lg:block">
            {solutions.map((s) => (
              <a
                href={s.link ? s.link : "/solutions"}
                key={s.title}
                className="absolute text-left transition-all duration-300 hover:scale-105 p-3 rounded-xl backdrop-blur-md bg-white/[0.03] border border-white/10 hover:border-purple-400/50 hover:bg-purple-900/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                style={{ left: `${s.x}px`, top: `${s.y}px` }}
              >
                <h3 className="text-xl font-medium text-white">{s.title}</h3>
                <p className="mt-0.5 text-xs text-white/70">
                  {s.desc}
                </p>
              </a>
            ))}
          </div>

          {/* Mobile Solution Nodes Grid */}
          <div className="grid grid-cols-2 gap-3 lg:hidden relative z-10 pt-4">
            {solutions.map((s) => (
              <a
                href={s.link ? s.link : "/solutions"}
                key={s.title}
                className="p-3 rounded-xl backdrop-blur-md bg-black/60 border border-white/10 hover:border-purple-400/50"
              >
                <h3 className="text-sm font-medium text-white">{s.title}</h3>
                <p className="text-[11px] text-white/60 line-clamp-1">{s.desc}</p>
              </a>
            ))}
          </div>

          {/* Center VIEW ALL Button */}
          <a
            href="/solutions"
            className="absolute left-1/2 top-1/2 flex h-[48px] sm:h-[54px] px-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-base sm:text-lg font-medium tracking-wider text-white backdrop-blur-xl bg-purple-950/60 hover:bg-white hover:text-[#201048] transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 uppercase z-20"
          >
            View all →
          </a>
        </div>
      </div>
    </section>
  );
}
