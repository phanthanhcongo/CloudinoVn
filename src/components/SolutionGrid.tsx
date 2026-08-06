const solutions = [
  { title: "FinOps", desc: "Optimize cloud spending", x: 550, y: 110 },
  {
    title: "Cloud Strategy",
    desc: "Planning your cloud journey",
    x: 280,
    y: 220,
  },
  { title: "AI & Data", desc: "Unlock business intelligence", x: 980, y: 125 },
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
    <section className="relative overflow-hidden bg-black pt-[90px] pb-[49px]">
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-lighten"
      />
      <div
        className="absolute left-[738px] top-[248px] h-[444px] w-[435px] rounded-full"
        style={{
          background: "linear-gradient(90deg, #312E81 0%, #7D51D3 100%)",
          filter: "blur(284px)",
        }}
      />

      <div className="relative mx-auto max-w-[1920px] px-[285px]">
        {/* Heading */}
        <div className="mb-[25px] flex items-center">
          <div
            className="relative flex items-center overflow-hidden rounded-full border border-white/10 px-6 py-3"
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
            <h2 className="text-5xl font-light text-white">
              Explore Solutions
            </h2>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <div className="h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white opacity-40" />
              </div>
            </div>
          </div>
          <div className="ml-0 flex-1 border-t border-white/20" />
          <img
            src="/images/partners/logo-1.png"
            alt=""
            className="ml-0 h-[50px] w-[296px] object-contain"
          />
        </div>

        {/* Content area */}
        <div className="relative h-[760px]">
          <img
            src="/images/hero/hero-graphic.png"
            alt=""
            className="absolute left-1/2 top-0 h-[760px] w-[776px] -translate-x-1/2 object-contain"
          />

          {solutions.map(s => {
            return (
              <div
                key={s.title}
                className="absolute text-left}"
                style={{ left: `${s.x}px`, top: `${s.y}px` }}
              >
                <h3 className="text-2xl font-normal text-white">{s.title}</h3>
                <p className="mt-0 text-base font-normal text-white/60">
                  {s.desc}
                </p>
              </div>
            );
          })}

          <a
            href="/solutions"
            className="absolute left-1/2 top-1/2 flex h-[49px] w-[161px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-xl font-normal tracking-[-1px] text-white backdrop-blur-md transition-all bg-white/5 hover:bg-white hover:text-accent uppercase"
          >
            View all →
          </a>
        </div>
      </div>
    </section>
  );
}
