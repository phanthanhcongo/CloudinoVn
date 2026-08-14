interface StatProps {
  stats: { value: string; label: string }[];
}

export default function SectionHeading({ stats }: StatProps) {
  return (
    <div
      className="grid gap-2 sm:gap-6 md:gap-10 lg:gap-12 mt-8 sm:mt-16 md:mt-20"
      style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
    >
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center">
          <span className="text-xl xs:text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.45)] whitespace-nowrap">
            {s.value}
          </span>
          <p className="mt-2 sm:mt-4 text-[10px] xs:text-xs sm:text-base lg:text-lg font-medium text-white/90 leading-tight sm:leading-snug max-w-[260px]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
