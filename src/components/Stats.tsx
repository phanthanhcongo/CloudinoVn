interface StatProps {
  stats: { value: string; label: string }[];
}

export default function SectionHeading({ stats }: StatProps) {
  return (
    <div className="flex justify-center gap-12">
      {stats.map(s => (
        <div key={s.label} className="text-center">
          <span className="text-[96px] font-light leading-none text-accent">
            {s.value}
          </span>
          <p className="mt-3 text-2xl font-normal text-white">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
