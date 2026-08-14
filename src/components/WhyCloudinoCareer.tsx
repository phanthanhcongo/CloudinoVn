const whyCloudinoList = [
  "Đội ngũ kỹ sư đạt chứng chỉ với chuyên môn sâu rộng về các nền tảng AWS, DigitalOcean và Lark Suite",
  "Thiết kế và tối ưu hạ tầng linh hoạt theo đúng bài toán và quy mô của từng tổ chức.",
  "Lên chiến lược phân bổ tài nguyên thông minh (Cloud Cost Optimization) giúp tiết kiệm ngân sách.",
  "Cung cấp hạ tầng đạt các tiêu chuẩn an toàn dữ liệu",
];

const benefitColumns = [
  {
    title: "We TRANSFORM through",
    items: [
      {
        subtitle: "Customer-First Innovation:",
        desc: "Every decision starts with customer impact",
      },
      {
        subtitle: "Continuous Asset Creation:",
        desc: "Converting insights into reusable solutions",
      },
      {
        subtitle: "Excellence in Execution:",
        desc: "Setting new standards in digital transformation",
      },
    ],
  },
  {
    title: "We shape TOMORROW by",
    items: [
      {
        subtitle: "Active Learning:",
        desc: "Turning every customer engagement into shared knowledge",
      },
      {
        subtitle: "Forward Thinking:",
        desc: "Building solutions that scale for future needs",
      },
      {
        subtitle: "Speed with Impact:",
        desc: "Delivering quick wins while building long-term value",
      },
    ],
  },
  {
    title: "We succeed TOGETHER through",
    items: [
      {
        subtitle: "Power of Three:",
        desc: "Uniting customers, partners, and our team",
      },
      {
        subtitle: "Trust & Growth:",
        desc: "Supporting each other's development",
      },
      {
        subtitle: "Global Perspective:",
        desc: "Bridging cultures and markets",
      },
    ],
  },
];

interface WhyCloudinoCareerProps {
  className?: string;
}

export default function WhyCloudinoCareer({
  className = "",
}: WhyCloudinoCareerProps) {
  return (
    <section
      className={`relative overflow-hidden bg-white pt-20 sm:pt-32 md:pt-40 pb-12 sm:pb-16 lg:pb-24 min-h-[900px] flex flex-col justify-end ${className}`}
    >
      {/* Background decoration */}
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 top-0 left-0 object-cover mix-blend-lighten pointer-events-none"
      />
      {/* Arm decoration & 3D Star embedded in the glowing orb */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 max-h-full pointer-events-none z-0">
        <style>{`
          @keyframes starFloat {
            0%, 100% {
              transform: translate(-50%, -50%) translateY(0px);
            }
            50% {
              transform: translate(-50%, -50%) translateY(-16px);
            }
          }
          .animate-star-float {
            animation: starFloat 3.2s ease-in-out infinite;
          }
        `}</style>
        <div className="relative inline-block">
          {/* 3D Star asset placed behind arm with smooth up-and-down float animation */}
          <img
            src="/images/resources/star-3d.png"
            alt=""
            className="absolute left-[49%] top-[22%] h-[32%] w-auto object-contain pointer-events-none z-0 drop-shadow-2xl animate-star-float"
          />
          {/* Arm decoration placed in front of star (z-10) */}
          <img
            src="/images/backgrounds/image 143.png"
            alt=""
            className="relative z-10 max-h-[500px] sm:max-h-[650px] md:max-h-[850px] lg:max-h-[1000px] w-auto object-contain pointer-events-none"
          />
        </div>
      </div>
      <div className="absolute right-0 top-8 sm:top-14 hidden md:flex h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] items-center justify-center pointer-events-none z-20">
        <img
          src="/images/backgrounds/image 114.png"
          alt=""
          className="h-full w-full object-contain -rotate-45 origin-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-8 md:px-16 xl:px-[285px] w-full flex-1 flex flex-col justify-between">
        {/* Row 1: Why Cloudino Section & Engineer cards */}
        <div>
          {/* Why Cloudino Section */}
          <h2 className="text-4xl sm:text-6xl md:text-[76px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3730A3] via-[#5B55E0] to-[#6D28D9] text-center">
            Why Cloudino
          </h2>

          {/* Engineer cards */}
          <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {whyCloudinoList.map((item, i) => (
              <div
                key={i}
                className="w-full max-w-[360px] min-h-[220px] sm:min-h-[260px] rounded-[24px] p-7 bg-[#E5DFFA] border border-[#BFAFF0] shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
              >
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="mb-4 text-[#5B55E0]"
                >
                  <path
                    d="M14 16C14 12.6863 16.6863 10 20 10H30C33.3137 10 36 12.6863 36 16V20M34 32C34 35.3137 31.3137 38 28 38H18C14.6863 38 12 35.3137 12 32V28"
                    stroke="#5B55E0"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="36" cy="20" r="4" fill="#5B55E0" />
                  <circle cx="12" cy="28" r="4" fill="#5B55E0" />
                  <path
                    d="M30 6L36 10L30 14"
                    stroke="#5B55E0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 42L12 38L18 34"
                    stroke="#5B55E0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-base sm:text-lg font-normal text-black leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Empty middle row occupying space */}
        <div className="flex-1 min-h-[200px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[800px] xl:min-h-[900px]" />

        {/* Row 3: Benefit Section */}
        <div>
          <h2 className="text-4xl sm:text-6xl md:text-[76px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3730A3] via-[#5B55E0] to-[#6D28D9] text-center">
            Benefit
          </h2>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
            {benefitColumns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1E1B4B] tracking-tight mb-6">
                  {col.title}
                </h3>
                <ul className="space-y-6">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#5B55E0] shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-base sm:text-lg font-semibold text-[#1E1B4B]">
                          {item.subtitle}
                        </span>
                        <span className="mt-1 text-sm sm:text-base font-normal text-slate-700 leading-relaxed">
                          {item.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
