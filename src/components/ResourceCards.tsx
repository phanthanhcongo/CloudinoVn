import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import { insights } from "../data/insights";

const bgVariants = [
  "bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#8b5cf6]",
  "bg-gradient-to-br from-[#1d1442] via-[#2a1f5c] to-[#4c1d95]",
  "bg-gradient-to-br from-[#064e3b] via-[#0f172a] via-[#1e1b4b] to-[#4c1d95]",
  "bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#6d28d9]",
];

const baseCards = insights.map((item, index) => ({
  title: item.title,
  slug: item.slug,
  image: item.image,
  bg: bgVariants[index % bgVariants.length],
  textColor: "text-white",
}));

export default function ResourceCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate base cards 3 times to create a seamless infinite loop
  const items = [...baseCards, ...baseCards, ...baseCards];

  // Set initial scroll position to middle set on mount
  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      containerRef.current.scrollLeft = scrollWidth / 3;
    }
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth } = containerRef.current;
    const singleSetWidth = scrollWidth / 3;

    // Reset position seamlessly when reaching bounds
    if (scrollLeft >= singleSetWidth * 2) {
      containerRef.current.scrollLeft = scrollLeft - singleSetWidth;
    } else if (scrollLeft <= 20) {
      containerRef.current.scrollLeft = scrollLeft + singleSetWidth;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -519, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 519, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-black py-12 sm:py-20 xl:pt-[80px] xl:pb-[49px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      {/* Main Container increased width (1680px) */}
      <div className="relative mx-auto max-w-full xl:max-w-[1680px] px-4 sm:px-8 xl:px-0">
        {/* Header */}
        <SectionHeader title="Resources" leftPercent={0} />

        {/* Navigation Guidance & Controls Bar */}
        <div className="flex items-center justify-between mt-6 sm:mt-8 mb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white/70 uppercase tracking-wider bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="animate-pulse text-purple-400">●</span> Drag or use arrows to navigate
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
              aria-label="Previous Card"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
              aria-label="Next Card"
            >
              →
            </button>
          </div>
        </div>

        {/* Cards Row with Infinite Drag Loop */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`relative w-full overflow-x-auto scrollbar-none select-none py-4 ${
            isMouseDown ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <div className="flex flex-nowrap gap-4 sm:gap-8 xl:gap-[41px] min-w-max pb-6">
            {items.map((card, i) => (
              <div
                key={i}
                className="group relative h-[360px] sm:h-[440px] xl:h-[503px] w-[280px] sm:w-[380px] xl:w-[478px] shrink-0"
              >
                <div
                  className={`relative h-[330px] sm:h-[410px] xl:h-[478px] w-full overflow-hidden rounded-2xl sm:rounded-3xl xl:rounded-4xl ${card.bg} shadow-lg`}
                >
                  {card.image && (
                    <img
                      src={card.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover pointer-events-none opacity-80"
                    />
                  )}
                  <h3
                    className={`absolute top-8 sm:top-12 xl:top-[84px] left-6 sm:left-10 xl:left-[79px] max-w-[240px] sm:max-w-[300px] xl:max-w-[320px] text-xl sm:text-3xl xl:text-[40px] font-normal leading-[1.15] tracking-tight ${card.textColor} transition-all duration-300 group-hover:opacity-90 z-10`}
                  >
                    {card.title}
                  </h3>
                </div>
                <a
                  className="absolute -bottom-2 sm:bottom-0 left-1/2 -translate-x-1/2 flex h-[42px] sm:h-[48px] xl:h-[52px] px-6 sm:px-8 items-center justify-center rounded-full border border-purple-400/40 text-xs sm:text-sm xl:text-base font-medium tracking-wider text-white backdrop-blur-xl bg-gradient-to-r from-[#312e81]/90 via-[#5b3db5]/90 to-[#7d51d3]/90 hover:bg-white hover:text-[#201048] transition-all duration-300 shadow-[0_0_20px_rgba(125,81,211,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-105 uppercase whitespace-nowrap z-20"
                  href={`/resources/${card.slug}`}
                >
                  XEM CHI TIẾT →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
