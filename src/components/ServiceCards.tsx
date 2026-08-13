export default function ServiceCards() {
  const services = [
    {
      title: "AWS",
      desc: "Cloudino – Đội ngũ kiến trúc sư giải pháp cloud dày dạn kinh nghiệm từ 2010, được bảo chứng bởi chứng chỉ quốc tế từ Amazon Web Services (AWS). ",
      icon: "/images/services/icon-8.png",
      link: "/solutions/platforms/aws",
      color: "bg-[#FF9900]/25",
      border: "border-[#FF9900]",
    },
    {
      title: "Digital Ocean",
      desc: "Cloudino là đối tác chiến lược của DigitalOcean tại Việt Nam — giúp doanh nghiệp triển khai hạ tầng cloud nhanh hơn, với chi phí minh bạch và hỗ trợ thương mại địa phương.",
      icon: "/images/services/icon-6.png",
      link: "/solutions/platforms/digital-ocean",
      color: "bg-[#0080FF]/25",
      border: "border-[#0080FF]",
    },
    {
      title: "Lark",
      desc: "Cloudino là Đối tác chiến lược bậc Platinum của LarkSuite tại Việt Nam — đồng hành cùng doanh nghiệp kiến tạo không gian làm việc số toàn diện, triển khai nhanh chóng với chi phí minh bạch và dịch vụ hỗ trợ nội địa tận tâm.",
      icon: "/images/services/icon-7.png",
      link: "/solutions/platforms/lark",
      color: "bg-[#00D6B9]/25",
      border: "border-[#3370FF]",
    },
  ];

  return (
    <section className="relative z-10 bg-transparent w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-[105px]">
          {services.map(s => (
            <div
              key={s.title}
              className={`relative flex w-full max-w-[350px] lg:w-[350px] h-auto lg:min-h-[440px] flex-col items-center gap-6 lg:gap-4 overflow-hidden rounded-[25px] p-6 lg:p-[30px] text-center justify-between border ${s.color} ${s.border}`}
              style={{
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Glass highlight reflection */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[25px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(125,81,211,0.08) 0%, transparent 50%, transparent 100%)",
                }}
              />
              <div className="flex flex-col gap-2.5">
                <h3 className="text-3xl lg:text-4xl font-normal leading-tight text-white">
                  {s.title}
                </h3>
                <p className="text-sm lg:text-base font-normal leading-relaxed text-white/70">
                  {s.desc}
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-[60px] w-[60px] lg:h-[76px] lg:w-[76px] items-center justify-center">
                  <img
                    src={s.icon}
                    alt=""
                    className="h-full w-full object-contain rounded-full"
                  />
                </div>
                <a
                  href={s.link}
                  className="flex h-[46px] sm:h-[50px] w-[180px] sm:w-[194px] items-center justify-center rounded-full border border-purple-400/50 text-base sm:text-xl font-medium tracking-[-0.5px] text-white backdrop-blur-xl bg-gradient-to-r from-[#312e81] via-[#5b3db5] to-[#7d51d3] hover:bg-white hover:text-[#201048] shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.75)] hover:scale-105 transition-all duration-300 z-10"
                >
                  LEARN MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
