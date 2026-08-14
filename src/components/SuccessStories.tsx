import SuccessStoriesCardGrids from "./SuccessStoriesCardGrids";
import SectionHeader from "./SectionHeader";

export interface SuccessStoriesProps {
  title?: string;
  showLearnMore?: boolean;
  learnMoreUrl?: string;
  learnMoreText?: string;
  leftPercent?: number;
}

export default function SuccessStories({
  title = "Success stories",
  showLearnMore = true,
  learnMoreUrl = "/success-stories",
  learnMoreText = "LEARN MORE →",
  leftPercent = 0,
}: SuccessStoriesProps) {
  return (
    <section className="relative bg-black pt-8 sm:pt-14 lg:pt-16 pb-8 sm:pb-10">
      <img
        src="/images/backgrounds/bg-section-6.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-[285px]">
        <SectionHeader title={title} leftPercent={leftPercent} />
      </div>

      <SuccessStoriesCardGrids />

      {showLearnMore && (
        <div className="relative mx-auto mt-6 sm:mt-8 flex justify-center max-w-[1920px] px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-[285px]">
          <a
            href={learnMoreUrl}
            className="inline-flex h-[36px] sm:h-[42px] w-[130px] sm:w-[160px] items-center justify-center rounded-full border border-purple-400/50 text-xs sm:text-sm font-medium tracking-[-0.5px] text-white backdrop-blur-xl bg-gradient-to-r from-[#312e81] via-[#5b3db5] to-[#7d51d3] hover:bg-white hover:text-[#201048] shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300"
          >
            {learnMoreText}
          </a>
        </div>
      )}
    </section>
  );
}
