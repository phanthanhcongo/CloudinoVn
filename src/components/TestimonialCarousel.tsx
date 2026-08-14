import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    avatar: "/images/testimonials/Mr. Khanh Cao.jpg",
    quote:
      "Với sự hợp tác chiến lược cùng Cloudino – AWS Advanced Consulting Partner chúng tôi đã triển khai thành công được ứng dụng tự động hóa quy trình phiên âm và tóm tắt cuộc họp đa ngôn ngữ có độ chính xác cao nhờ công nghệ Generative AI từ AWS. Doanh nghiệp đã tối ưu hoá được năng suất công việc và nâng cao chất lượng ra quyết định.",
    name: "Mr. Khanh Cao",
    role: "Founder & CEO at ViMeeting+",
    mt: "114px",
  },
  {
    avatar: "/images/testimonials/AI GENX.jpg",
    quote:
      "Với sự hỗ trợ từ đội ngũ nhiều kinh nghiệm của Cloudino, đến thời điểm hiện tại, dự án Start-up AIGENX của MaxcomGroup đã phục vụ khoảng 1.400 khách hàng, trong đó 90% là doanh nghiệp vừa và nhỏ cùng các hộ kinh doanh cá thể, và 10% là khách hàng cá nhân – điều này thể hiện sự linh hoạt và khả năng đáp ứng đa dạng nhu cầu thị trường.",
    name: "Mr.Khang Nguyễn",
    role: "Đại diện AIGENX",
    mt: "22px",
  },
  // {
  //   avatar: "/images/testimonials/avatar-3.png",
  //   quote:
  //     "The collaboration went well beyond the creation of a great cartoon animation. It can be difficult to explain, but Sean and his team guided us to find the essence of what we offer.",
  //   name: "Geoff Lawton",
  //   role: "Founder, Permaculture Sustainable Consulting",
  //   mt: "0",
  // },
];

export default function TestimonialCarousel() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-28">
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-lighten pointer-events-none brightness-[2.2] contrast-[1.4]"
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] sm:h-[444px] sm:w-[435px] rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #312E81 0%, #7D51D3 100%)",
          filter: "blur(200px)",
        }}
      />

      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-8 md:px-16 xl:px-[285px]">
        {/* Heading */}
        <SectionHeader title="What clients say about us" leftPercent={0} />

        {/* Cards */}
        <div className="relative mt-8 sm:mt-[36px]">
          {/* Curved line through the dots (desktop) */}
          <svg
            viewBox="0 0 1000 220"
            className="absolute left-0 top-0 h-[220px] w-full opacity-40 pointer-events-none z-0 hidden lg:block"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 160 C 100 150, 170 127, 250 127 C 400 127, 600 35, 750 35 C 850 35, 930 50, 1000 60"
              stroke="#7D51D3"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="8 4"
            />
          </svg>

          {/* Vertical dashed line through the dots (mobile & tablet) */}
          <svg
            viewBox="0 0 100 1000"
            className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 opacity-40 pointer-events-none z-0 lg:hidden"
            preserveAspectRatio="none"
          >
            <path
              d="M 50 0 L 50 1000"
              stroke="#7D51D3"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
            />
          </svg>

          <div className="w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-between">
            {testimonials.map((t, i) => (
              <div
                className={`flex flex-col items-center w-full max-w-[430px] ${i === 0 ? "lg:mt-[114px]" : "lg:mt-[22px]"}`}
                key={i}
              >
                <div className="flex flex-col items-center">
                  {/* Dots here */}
                  <div className="relative mb-3 flex items-center justify-center flex z-20">
                    <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-accent">
                      <div className="h-[13px] w-[13px] rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="relative mb-4 sm:mb-6 rounded-full border-4 sm:border-[8px] border-white shadow-lg z-10">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-[100px] w-[100px] sm:h-[139px] sm:w-[139px] rounded-full object-cover"
                    />
                    {/* Pointed tail at bottom */}
                    <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] sm:border-l-[14px] border-l-transparent border-r-[10px] sm:border-r-[14px] border-r-transparent border-t-[12px] sm:border-t-[16px] border-t-white pointer-events-none" />
                  </div>
                </div>
                <div
                  key={t.name}
                  className="w-full rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <p className="text-sm sm:text-base font-normal leading-relaxed text-white/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 sm:mt-8">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white">{t.name}</p>
                    <p className="mt-1 text-xs sm:text-[15px] font-normal text-white/50">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
