export default function StatsGrid() {
  return (
    <section className="relative overflow-hidden bg-black pt-[100px] pb-[49px]">
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-lighten"
      />
      <div
        className="absolute left-[738px] top-[248px] h-[444px] w-[435px] rounded-full bg-linear-to-r from-[#312E81] to-accent"
        style={{
          filter: "blur(284px)",
        }}
      />

      <div className="relative mx-auto max-w-[1920px] px-[285px]">
        {/* Heading: "Who we are" */}
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
            <h2 className="text-5xl font-light text-white">Who we are</h2>
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

        {/* Content: image with text on top */}
        <div
          className="relative flex justify-center"
          style={{ minHeight: "480px" }}
        >
          <img
            src="/images/hero/hero-icon-3.png"
            alt=""
            className="h-[480px] w-[480px] object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-end tracking-tighter">
            <div className="flex flex-col gap-4 items-end">
              <h3 className="text-[96px] font-light leading-none text-white">
                We are engineers
              </h3>
              <div className="mt-0 max-w-120 text-base font-normal leading-relaxed text-white">
                <p className="mb-4">
                  We – Cloudinoers – are solutions architects who have been
                  constantly seeking and conquering cloud computing technology
                  challenges since 2010.
                </p>
                <p>
                  Cloudino is operated by a team of globally certified experts
                  by Amazon Web Services, ensuring the delivery of the best
                  cloud computing solutions for our clients.
                </p>
              </div>
              <a
                href="/about"
                className="ml-[675px] mt-[30px] flex h-[50px] w-[194px] items-center justify-center rounded-full text-xl font-normal bg-accent tracking-tight text-white hover:text-accent hover:bg-white"
              >
                LEARN MORE →
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-[120px] grid grid-cols-4 gap-10">
          {[
            { value: "1000+", label: "Khách hàng doanh nghiệp" },
            { value: "200K+", label: "Tài khoản đã đăng ký" },
            { value: "1M$+", label: "Tín dụng hỗ trợ doanh nghiệp hàng năm" },
            { value: "900+", label: "Dự án" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <span className="text-[96px] font-light leading-none text-accent">
                {s.value}
              </span>
              <p className="mt-3 text-2xl font-normal text-white">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
