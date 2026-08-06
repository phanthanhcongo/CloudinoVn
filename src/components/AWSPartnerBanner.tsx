export default function AWSPartnerBanner() {
  return (
    <section className="relative overflow-hidden bg-black pt-[78px] pb-[49px]">
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-lighten"
      />
      <div
        className="absolute left-[738px] top-[248px] h-[444px] w-[435px] rounded-full"
        style={{
          background: "linear-gradient(90deg, #312E81 0%, #7D51D3 100%)",
          filter: "blur(284px)",
        }}
      />

      <div className="relative mx-auto max-w-[1920px] px-[285px]">
        {/* Heading */}
        <div className="mb-[25px] flex items-center">
          <div
            className="relative flex items-center overflow-hidden rounded-full border border-white/10 px-6 py-3"
            style={{
              background: "rgba(49,46,129,0.25)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white opacity-40" />
              </div>
            </div>
            <h2 className="text-5xl font-light text-white">Certification</h2>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <div className="h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white opacity-40" />
              </div>
            </div>
          </div>
          <div className="ml-0 flex-1 border-t border-white/20" />
          <img
            src="/images/partners/logo-1.png"
            alt=""
            className="ml-0 h-[50px] w-[296px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="mt-[48px] flex gap-16">
          <div className="flex-1">
            <h2 className="text-[96px] font-light leading-[1] text-white max-w-[870px] text-right tracking-tighter">
              The first AWS Well-Architected Partner
              <br />
              in Vietnam
            </h2>
            <p className="ml-[322px] mt-0 max-w-[548px] text-base font-normal leading-relaxed text-white/70">
              We support our clients in applying best practices to their
              infrastructure, based on six pillars: operational excellence,
              security, reliability, performance efficiency, cost optimization,
              and sustainability.
            </p>
            <a
              href="/about"
              className="ml-[685px] mt-[30px] inline-flex h-[60px] w-[185px] items-center justify-center rounded-full border border-white/20 text-xl font-normal tracking-[-1px] text-white backdrop-blur-md transition-all bg-accent hover:bg-white hover:text-black"
            >
              VIEW MORE →
            </a>
          </div>

          <div className="relative flex shrink-0 items-start">
            <div className="p-4 bg-linear-to-r from-[#312E81] to-accent rounded-2xl">
              <img
                src="/images/aws/aws-badge.png"
                alt="AWS Badge"
                className="h-[512px] w-[318px] object-contain"
              />
            </div>
            <img
              src="/images/aws/aws-icon.png"
              alt=""
              className="mt-[366px] -ml-[150px] h-[317px] w-[317px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
