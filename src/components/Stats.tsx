interface StatProps {
  stats: { value: string; label: string }[];
}

export default function SectionHeading({ stats }: StatProps) {
  return (
    <div
      className="grid grid-cols-2 sm:[grid-template-columns:var(--grid-cols)] gap-3 sm:gap-6 lg:gap-8 mt-8 sm:mt-16 md:mt-20"
      style={{ "--grid-cols": `repeat(${stats.length}, minmax(0, 1fr))` } as React.CSSProperties}
    >
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center px-1">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.45)] whitespace-nowrap">
            {s.value}
          </span>
          <p className="mt-2 sm:mt-4 text-[11px] sm:text-sm lg:text-base font-medium text-white/90 leading-tight sm:leading-snug max-w-[260px]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
