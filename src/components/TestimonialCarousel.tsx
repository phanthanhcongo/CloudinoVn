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
    <section className="relative overflow-hidden bg-black pt-12 sm:pt-20 lg:pt-[100px] pb-12 sm:pb-[49px]">
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
        <div className="relative mt-8 sm:mt-[36px] flex flex-col lg:flex-row gap-8 lg:gap-8 items-center lg:items-start justify-center lg:justify-between">
          {/* Curved line through the dots (desktop only) */}
          <svg
            viewBox="0 0 1520 300"
            className="absolute left-0 top-0 h-full w-full opacity-20 pointer-events-none z-0 hidden lg:block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 90 Q380 75 760 96 q280 0 420 -60 q100 -40 350 -10"
              stroke="#7D51D3"
              strokeWidth="1"
              fill="none"
              strokeDasharray="8 4"
            />
          </svg>

          {testimonials.map((t, i) => (
            <div
              className={`flex flex-col items-center w-full max-w-[430px] ${i === 0 ? "lg:mt-[114px]" : "lg:mt-[22px]"}`}
              key={i}
            >
              <div
                className={`flex items-center gap-4 ${i % 2 === 1 ? "flex-col justify-center" : ""}`}
              >
                {/* Dots here */}
                <div className="relative -ml-4 flex items-center hidden sm:flex">
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-accent">
                    <div className="h-[13px] w-[13px] rounded-full bg-white" />
                  </div>
                </div>
                <div className="relative mb-4 sm:mb-6 rounded-full border-4 sm:border-[8px] border-white p-1 sm:p-1.5 shadow-lg z-10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-[100px] w-[100px] sm:h-[139px] sm:w-[139px] rounded-full object-cover"
                  />
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
    </section>
  );
}
