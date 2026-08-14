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
    <section className="relative bg-black pt-12 sm:pt-20 lg:pt-[100px] pb-12 sm:pb-[55px]">
      <img
        src="/images/backgrounds/bg-section-6.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-16 xl:px-[285px]">
        <SectionHeader title={title} leftPercent={leftPercent} />
      </div>

      <SuccessStoriesCardGrids />

      {showLearnMore && (
        <div className="relative mx-auto mt-8 sm:mt-12 flex justify-center max-w-[1920px] px-4 sm:px-8 md:px-16 xl:px-[285px]">
          <a
            href={learnMoreUrl}
            className="inline-flex h-[45px] sm:h-[50px] w-[160px] sm:w-[194px] items-center justify-center rounded-full border border-purple-400/50 text-base sm:text-xl font-medium tracking-[-0.5px] text-white backdrop-blur-xl bg-gradient-to-r from-[#312e81] via-[#5b3db5] to-[#7d51d3] hover:bg-white hover:text-[#201048] shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.75)] hover:scale-105 transition-all duration-300"
          >
            {learnMoreText}
          </a>
        </div>
      )}
    </section>
  );
}
