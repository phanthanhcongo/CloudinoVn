import Stats from "./Stats";
import PurpleOrb from "./PurpleOrb";

const stats = [
  { value: "1000+", label: "Khách hàng doanh nghiệp" },
  { value: "200K+", label: "Tài khoản đã đăng ký" },
  { value: "1M$+", label: "Tín dụng hỗ trợ doanh nghiệp hàng năm" },
  { value: "900+", label: "Dự án" },
];

export default function StatsGrid() {
  return (
    <section className="relative overflow-hidden bg-black pt-16 pb-12 sm:pt-24 sm:pb-16">
      {/* Background graphic */}
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-lighten pointer-events-none"
      />

      {/* Ambient background glowing orb */}
      <PurpleOrb size={450} blur={180} opacity={0.3} />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-[285px]">
        {/* Heading: "Who we are" Badge & Partner Logo */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div
            className="relative flex items-center overflow-hidden rounded-full border border-white/10 px-5 py-2.5 sm:px-6 sm:py-3 shrink-0"
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
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-light text-white">Who we are</h2>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <div className="h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white opacity-40" />
              </div>
            </div>
          </div>

          <div className="hidden sm:block flex-1 border-t border-white/20" />

          <img
            src="/images/partners/logo-1.png"
            alt="AWS Partner Badge"
            className="h-[36px] sm:h-[48px] lg:h-[50px] w-auto max-w-[240px] sm:max-w-[296px] object-contain"
          />
        </div>

        {/* Content Section: 3D Graphic + Text */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* 3D Sphere Graphic with Purple Glow */}
          <div className="relative flex-1 flex justify-center items-center">
            {/* Reusable PurpleOrb component */}
            <PurpleOrb className="h-[260px] sm:h-[340px] w-[260px] sm:w-[340px]" blur={110} />
            <img
              src="/images/hero/hero-icon-3.png"
              alt="3D Graphic"
              className="relative z-10 h-[240px] sm:h-[360px] lg:h-[480px] w-auto object-contain transition-transform duration-500 hover:scale-105"
              style={{
                filter: "drop-shadow(0 0 25px rgba(125, 81, 211, 0.6))",
              }}
            />
          </div>

          {/* Text & Action */}
          <div className="flex-1 flex flex-col gap-4 text-center lg:text-right items-center lg:items-end">
            <h3 className="text-3xl sm:text-5xl lg:text-[80px] font-light leading-tight text-white tracking-tight">
              We are engineers
            </h3>
            <div className="max-w-xl text-sm sm:text-base font-normal leading-relaxed text-white/80">
              <p className="mb-3">
                Chúng tôi – những Cloudinoer – là đội ngũ kiến trúc sư giải pháp luôn không ngừng tìm kiếm và chinh phục các thách thức về công nghệ điện toán đám mây kể từ năm 2010.
              </p>
              <p>
                Cloudino được vận hành bởi đội ngũ chuyên gia sở hữu chứng chỉ quốc tế từ Amazon Web Services, cam kết mang đến những giải pháp điện toán đám mây tối ưu nhất cho khách hàng.
              </p>
            </div>
            <a
              href="/about"
              className="mt-4 sm:mt-6 inline-flex h-[46px] sm:h-[52px] px-8 items-center justify-center rounded-full text-base sm:text-lg font-normal bg-accent tracking-tight text-white transition-all duration-300 hover:text-accent hover:bg-white hover:scale-105 shadow-lg"
            >
              LEARN MORE →
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div>
          <Stats stats={stats} />
        </div>
      </div>
    </section>
  );
}
