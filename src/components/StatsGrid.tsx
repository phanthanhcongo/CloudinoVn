import Stats from "./Stats";
import PurpleOrb from "./PurpleOrb";
import SectionHeader from "./SectionHeader";

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

      {/* Bottom-left corner 1/4 glowing PurpleOrb */}
      <PurpleOrb
        size={550}
        blur={140}
        opacity={0.55}
        className="!left-0 !bottom-0 !top-auto -translate-x-1/2 translate-y-1/2"
      />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-[285px]">
        <SectionHeader title="Who we are" leftPercent={10} />

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
              className="mt-4 sm:mt-6 inline-flex h-[46px] sm:h-[52px] px-8 items-center justify-center rounded-full border border-purple-400/50 text-base sm:text-lg font-medium tracking-wider text-white backdrop-blur-xl bg-gradient-to-r from-[#312e81] via-[#5b3db5] to-[#7d51d3] hover:bg-white hover:text-[#201048] transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-105 uppercase"
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
