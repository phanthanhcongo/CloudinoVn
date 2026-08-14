interface SectionHeaderProps {
  title: string;
  leftPercent?: number;
  className?: string;
}

export default function SectionHeader({
  title,
  leftPercent = 10,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`relative mb-6 sm:mb-8 flex items-center w-full ${className}`}
      style={{
        paddingLeft: leftPercent > 0 ? `${leftPercent}%` : "0px",
      }}
    >
      {/* Title Pill Badge */}
      <div className="relative z-10 flex items-center shrink-0">
        <div
          className="relative flex items-center overflow-hidden rounded-full border border-purple-500/40 px-4 py-1.5 sm:px-5 sm:py-2 shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.3),_inset_0_0_12px_rgba(168,85,247,0.15)] transition-all duration-300"
          style={{
            background: "rgba(49,46,129,0.35)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-3.5 w-3.5 rounded-full bg-purple-400 opacity-90 blur-[2px] shadow-[0_0_8px_#a855f7]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
            </div>
          </div>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-white tracking-tight whitespace-nowrap">
            {title}
          </h2>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
            <div className="h-3.5 w-3.5 rounded-full bg-purple-400 opacity-90 blur-[2px] shadow-[0_0_8px_#a855f7]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
            </div>
          </div>
        </div>
      </div>

      {/* Dashed Purple Line starting from right of title badge extending to right screen edge */}
      <div className="relative flex-1 hidden sm:block pointer-events-none z-0 -mr-4 sm:-mr-8 md:-mr-[285px]">
        <div className="w-full border-t border-dashed border-purple-500/70" />
        {/* Extended Long Bright Light Flare on the right edge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] w-48 sm:w-80 lg:w-[480px] bg-gradient-to-r from-purple-500/0 via-white to-transparent blur-[1px] shadow-[0_0_15px_rgba(255,255,255,1)] opacity-95" />
      </div>
    </div>
  );
}
