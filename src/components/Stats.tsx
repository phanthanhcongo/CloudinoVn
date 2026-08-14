interface StatProps {
  stats: { value: string; label: string }[];
}

export default function SectionHeading({ stats }: StatProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-12 mt-12 sm:mt-20">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center">
          <span className="text-5xl sm:text-7xl lg:text-8xl font-light leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.45)]">
            {s.value}
          </span>
          <p className="mt-4 text-sm sm:text-base lg:text-lg font-medium text-white/90 leading-snug max-w-[260px]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
