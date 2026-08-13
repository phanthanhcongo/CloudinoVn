import Stats from "./Stats";

const stats = [
  { value: "1000+", label: "Khách hàng doanh nghiệp" },
  { value: "200K+", label: "Tài khoản đã đăng ký" },
  { value: "1M$+", label: "Tín dụng hỗ trợ doanh nghiệp hàng năm" },
  { value: "900+", label: "Dự án" },
];

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

      <div className="relative mx-auto max-w-[1920px] px-4 md:px-[285px]">
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
                  Chúng tôi – những Cloudinoer – là đội ngũ kiến ​​trúc sư giải
                  pháp luôn không ngừng tìm kiếm và chinh phục các thách thức về
                  công nghệ điện toán đám mây kể từ năm 2010.
                </p>
                <p>
                  Cloudino được vận hành bởi đội ngũ chuyên gia sở hữu chứng chỉ
                  quốc tế từ Amazon Web Services, cam kết mang đến những giải
                  pháp điện toán đám mây tối ưu nhất cho khách hàng.
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
        <div>
          <Stats stats={stats} />
        </div>
      </div>
    </section>
  );
}
