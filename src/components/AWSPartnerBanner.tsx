import SectionHeader from "./SectionHeader";

export default function AWSPartnerBanner() {
  return (
    <section className="relative overflow-hidden bg-black py-12 sm:py-20 lg:pt-[78px] lg:pb-[49px]">
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-lighten pointer-events-none"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[444px] w-[300px] sm:w-[435px] rounded-full opacity-60"
        style={{
          background: "linear-gradient(90deg, #312E81 0%, #7D51D3 100%)",
          filter: "blur(200px)",
        }}
      />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-16 xl:px-[285px]">
        {/* Heading */}
        <SectionHeader title="Certification" leftPercent={0} />

        {/* Content */}
        <div className="mt-8 sm:mt-12 lg:mt-[48px] flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
          <div className="flex-1 text-center lg:text-right">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[96px] font-light leading-[1.1] lg:leading-[1] text-white tracking-tighter max-w-full lg:max-w-[870px] lg:ml-auto">
              The first AWS Well-Architected Partner
              <br className="hidden sm:inline" />
              {" "}in Vietnam
            </h2>
            <p className="mt-4 sm:mt-6 lg:ml-auto max-w-[548px] text-sm sm:text-base font-normal leading-relaxed text-white/70 mx-auto lg:mx-0">
              We support our clients in applying best practices to their
              infrastructure, based on six pillars: operational excellence,
              security, reliability, performance efficiency, cost optimization,
              and sustainability.
            </p>
            <a
              href="/about"
              className="mt-6 sm:mt-[30px] lg:ml-auto inline-flex h-[48px] sm:h-[60px] w-[160px] sm:w-[185px] items-center justify-center rounded-full border border-white/20 text-base sm:text-xl font-normal tracking-[-1px] text-white backdrop-blur-md transition-all bg-accent hover:bg-white hover:text-black hover:scale-105"
            >
              VIEW MORE →
            </a>
          </div>

          <div className="relative flex shrink-0 items-start justify-center mt-4 lg:mt-0">
            <div className="p-3 sm:p-4 bg-linear-to-r from-[#312E81] to-accent rounded-2xl">
              <img
                src="/images/aws/aws-badge.png"
                alt="AWS Badge"
                className="h-[300px] sm:h-[420px] lg:h-[512px] w-auto max-w-[200px] sm:max-w-[280px] lg:max-w-[318px] object-contain"
              />
            </div>
            <img
              src="/images/aws/aws-icon.png"
              alt=""
              className="mt-[200px] sm:mt-[280px] lg:mt-[366px] -ml-[80px] sm:-ml-[120px] lg:-ml-[150px] h-[160px] sm:h-[240px] lg:h-[317px] w-[160px] sm:w-[240px] lg:w-[317px] object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
