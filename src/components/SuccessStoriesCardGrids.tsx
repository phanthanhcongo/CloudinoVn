import { useEffect, useRef, useState } from "react";

export default function SuccessStoriesCardGrids() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const baseCards = Array.from({ length: 8 }, (_, i) => i);
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

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`relative mt-2 sm:mt-8 w-full overflow-x-auto scrollbar-none select-none py-8 sm:py-12 ${isMouseDown ? "cursor-grabbing" : "cursor-grab"
        }`}
    >
      <div className="flex flex-nowrap px-4 sm:px-8 md:px-16 xl:px-[285px] gap-3 sm:gap-4 lg:gap-0 min-w-max items-end min-h-[420px] min-[400px]:min-h-[460px] sm:min-h-[600px] lg:min-h-[760px]">
        {items.map((i, index) => (
          <div
            key={index}
            className="group relative block h-[420px] min-[400px]:h-[480px] sm:h-[600px] lg:h-[720px] w-[155px] min-[400px]:w-[176px] sm:w-[220px] lg:w-[265px] shrink-0 transition-all duration-300 rotate-y-30 hover:rotate-y-0"
          >
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center h-[88.888%]">
              <img
                src={`/images/backgrounds/deco-${i + 1}.png`}
                alt=""
                className="h-full w-[83.018%] rounded object-cover pointer-events-none"
              />
            </div>
            <div className="absolute right-0 top-0 h-full w-[34.339%] border-l border-white/[0.04] pointer-events-none" />
            <div className="absolute right-[12%] top-1/2 -translate-y-1/2 h-1/6 sm:h-1/4 w-[2px] pointer-events-none transition-all duration-300 group-hover:scale-y-[1.6]">
              <div className="h-full w-full bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_#ffffff] group-hover:shadow-[0_0_35px_#ffffff,_0_0_50px_#ffffff] transition-all duration-300 opacity-100" />
              <div className="absolute -inset-x-[1px] inset-y-0 bg-gradient-to-b from-transparent via-purple-300 via-white to-transparent blur-[2px] group-hover:blur-[3px] opacity-80 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
