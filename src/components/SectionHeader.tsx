interface SectionHeaderProps {
  title: string;
  leftPercent?: number;
  partnerLogo?: string;
  partnerLogoAlt?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  leftPercent = 10,
  partnerLogo,
  partnerLogoAlt = "Partner Badge",
  className = "",
}: SectionHeaderProps) {
  const rightPercent = 100 - leftPercent;

  return (
    <div className={`relative mb-8 sm:mb-12 -mx-4 sm:-mx-8 md:-mx-[285px] flex flex-col sm:flex-row items-center w-auto ${className}`}>
      {/* Column 1: Empty left offset percentage */}
      {leftPercent > 0 && (
        <div
          className="hidden sm:block shrink-0"
          style={{ width: `${leftPercent}%` }}
        />
      )}

      {/* Column 2: Remaining width containing header badge, purple dashed line & optional logo */}
      <div
        className="relative flex-1 w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        style={{ width: `${rightPercent}%` }}
      >
        {/* Dashed Purple Line starting from Column 2 extending to 100% right screen edge */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none z-0">
          <div className="w-full border-t border-dashed border-purple-500/70" />
          {/* Extended Long Bright Light Flare on the right edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[3px] w-64 sm:w-96 lg:w-[600px] bg-gradient-to-r from-purple-500/0 via-white to-transparent blur-[1px] shadow-[0_0_20px_rgba(255,255,255,1)] opacity-95" />
        </div>

        {/* Title Pill Badge */}
        <div
          className="relative z-10 flex items-center overflow-hidden rounded-full border border-purple-500/40 px-5 py-2.5 sm:px-6 sm:py-3 shrink-0 shadow-[0_0_25px_rgba(168,85,247,0.35),_inset_0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 ml-4 sm:ml-8 md:ml-0"
          style={{
            background: "rgba(49,46,129,0.35)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-5 w-5 rounded-full bg-purple-400 opacity-90 blur-[3px] shadow-[0_0_12px_#a855f7]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
            </div>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-light text-white tracking-wide">
            {title}
          </h2>
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
            <div className="h-5 w-5 rounded-full bg-purple-400 opacity-90 blur-[3px] shadow-[0_0_12px_#a855f7]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
            </div>
          </div>
        </div>

        {/* Optional Partner Logo on the right */}
        {partnerLogo && (
          <img
            src={partnerLogo}
            alt={partnerLogoAlt}
            className="relative z-10 h-[36px] sm:h-[48px] lg:h-[50px] w-auto max-w-[240px] sm:max-w-[296px] object-contain shrink-0"
          />
        )}
      </div>
    </div>
  );
}
