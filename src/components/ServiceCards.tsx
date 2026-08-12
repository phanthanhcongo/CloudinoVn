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
    <section className="relative z-10 bg-transparent w-full">
      <div className="mx-auto max-w-[1920px] px-auto">
        <div className="flex gap-[105px] justify-center">
          {services.map(s => (
            <div
              key={s.title}
              className={`relative flex w-[350px] flex-col items-center gap-[10px] overflow-hidden rounded-[25px] p-[30px] px-6 text-center justify-between border ${s.color} ${s.border}`}
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
                <h3 className="text-4xl font-normal leading-tight text-white">
                  {s.title}
                </h3>
                <p className="text-base font-normal leading-relaxed text-white/70">
                  {s.desc}
                </p>
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <div className="flex h-[76px] w-[76px] items-center justify-center">
                  <img
                    src={s.icon}
                    alt=""
                    className="h-full w-full object-contain rounded-full"
                  />
                </div>
                <a
                  href={s.link}
                  className="flex h-[50px] w-[194px] items-center justify-center rounded-full text-xl font-normal tracking-[-1px] text-white backdrop-blur-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(49,46,129,0.75) 0%, rgba(125,81,211,0.75) 100%)",
                  }}
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
