interface StatProps {
  stats: { value: string; label: string }[];
}

export default function SectionHeading({ stats }: StatProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-12 mt-12 sm:mt-20">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center">
          <span className="text-4xl sm:text-6xl lg:text-7xl font-light leading-none text-accent">
            {s.value}
          </span>
          <p className="mt-3 text-xs sm:text-sm lg:text-base font-normal text-white/80 leading-snug max-w-[220px]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
