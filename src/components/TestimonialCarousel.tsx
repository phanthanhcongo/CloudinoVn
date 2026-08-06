const testimonials = [
  {
    avatar: "/images/testimonials/Mr. Khanh Cao.jpg",
    quote:
      "Với sự hợp tác chiến lược cùng Cloudino – AWS Advanced Consulting Partner chúng tôi đã triển khai thành công được ứng dụng tự động hóa quy trình phiên âm và tóm tắt cuộc họp đa ngôn ngữ có độ chính xác cao nhờ công nghệ Generative AI từ AWS. Doanh nghiệp đã tối ưu hoá được năng suất công việc và nâng cao chất lượng ra quyết định.",
    name: "Mr. Khanh Cao",
    role: "Founder & CEO at ViMeeting+",
    mt: "128px",
  },
  // {
  //   avatar: "/images/testimonials/avatar-2.png",
  //   quote:
  //     "Giải pháp Chatbot của AIGENX không chỉ giúp tăng cường trải nghiệm khách hàng mà còn tối ưu hóa hiệu suất vận hành và bảo mật, đáp ứng nhu cầu phát triển nhanh chóng của thị trường. Với sự hỗ trợ từ đội ngũ nhiều kinh nghiệm của Cloudino, đến thời điểm hiện tại, dự án Start-up AIGENX của MaxcomGroup đã phục vụ khoảng 1.400 khách hàng, trong đó 90% là doanh nghiệp vừa và nhỏ cùng các hộ kinh doanh cá thể, và 10% là khách hàng cá nhân – điều này thể hiện sự linh hoạt và khả năng đáp ứng đa dạng nhu cầu thị trường.",
  //   name: "Mr.Khang Nguyễn",
  //   role: "Đại diện AIGENX",
  //   mt: "226px",
  // },
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
    <section className="relative overflow-hidden bg-black pt-[100px] pb-[49px]">
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
            <h2 className="text-5xl font-light text-white">
              What clients say about us
            </h2>
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

        {/* Cards */}
        <div
          className="relative mt-[36px] flex justify-between"
          style={{ minHeight: "600px" }}
        >
          {/* Curved line through the dots */}
          <svg
            viewBox="0 0 1520 300"
            className="absolute left-0 top-0 h-full w-full opacity-20 pointer-events-none z-0"
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
              className="flex flex-col items-center"
              style={{ marginTop: t.mt }}
            >
              <div
                className={`flex items-center gap-4 ${i % 2 === 1 ? "flex-col justify-center" : ""}`}
              >
                {/* Dots here */}
                <div className="relative -ml-4 flex items-center">
                  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-accent">
                    <div className="h-[13px] w-[13px] rounded-full bg-white" />
                  </div>
                </div>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="mb-6 h-[139px] w-[139px] rounded-full object-cover z-10"
                />
              </div>
              <div
                key={t.name}
                className="w-[430px] rounded-2xl border border-white/10 p-10 backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <p className="text-base font-normal leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="text-4xl font-normal text-white">{t.name}</p>
                  <p className="mt-1 text-[15px] font-normal text-white/50">
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
