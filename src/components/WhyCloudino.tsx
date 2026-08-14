const whyCloudinoList = [
  "Đội ngũ kỹ sư đạt chứng chỉ với chuyên môn sâu rộng về các nền tảng AWS, DigitalOcean và Lark Suite",
  "Thiết kế và tối ưu hạ tầng linh hoạt theo đúng bài toán và quy mô của từng tổ chức.",
  "Lên chiến lược phân bổ tài nguyên thông minh (Cloud Cost Optimization) giúp tiết kiệm ngân sách.",
  "Cung cấp hạ tầng đạt các tiêu chuẩn an toàn dữ liệu",
];

interface WhyCloudinoProps {
  items?: string[];
  className?: string;
}

export default function WhyCloudino({
  items = whyCloudinoList,
  className = "",
}: WhyCloudinoProps) {
  return (
    <section
      className={`relative overflow-hidden bg-white pt-20 sm:pt-32 md:pt-40 pb-12 sm:pb-16 lg:pb-24 min-h-[850px] sm:min-h-[1000px] lg:min-h-[1200px] flex flex-col justify-end ${className}`}
    >
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 top-0 left-0 object-cover mix-blend-lighten pointer-events-none"
      />
      {/* arm */}
      <img
        src="/images/backgrounds/image 143.png"
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-0 max-h-full object-contain pointer-events-none z-0"
      />
      <div className="absolute right-0 top-8 sm:top-14 hidden md:flex h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] items-center justify-center pointer-events-none z-20">
        {/* rectangle / 3D object top right */}
        <img
          src="/images/backgrounds/image 114.png"
          alt=""
          className="h-full w-full object-contain -rotate-45 origin-center"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-8 md:px-16 xl:px-[285px] w-full">
        <h2 className="text-4xl sm:text-6xl md:text-[76px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3730A3] via-[#5B55E0] to-[#6D28D9] text-center">
          Why Cloudino
        </h2>

        {/* Engineer cards */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {items.map((item, i) => (
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
    </section>
  );
}
