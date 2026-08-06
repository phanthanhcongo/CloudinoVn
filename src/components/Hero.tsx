export default function Hero() {
  return (
    <section className="relative flex h-[1150px] overflow-visible bg-black">
      {/* Solid black base - Rectangle 969 */}
      <div className="absolute inset-0 bg-black" />

      {/* Background image 119 - 20% opacity, LIGHTEN blend */}
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-lighten"
      />

      {/* Glowing gradient orb - Ellipse 15, 284px blur */}
      <div
        className="absolute left-[738px] top-[248px] h-[444px] w-[435px] rounded-full"
        style={{
          background: "linear-gradient(90deg, #312E81 0%, #7D51D3 100%)",
          filter: "blur(284px)",
        }}
      />

      {/* Large dashed circles - Ellipse 13 x2, 35% opacity */}
      <div className="absolute left-[513px] top-[17px] h-[895px] w-[895px] rounded-full border border-dashed border-white/35" />
      <div className="absolute left-[274px] top-[-222px] h-[1373px] w-[1373px] rounded-full border border-dashed border-white/35" />

      {/* Dashed ring - Ellipse 14 */}
      <div className="absolute left-[383px] top-[-112px] h-[1153px] w-[1137px] rounded-full border border-dashed border-white" />

      {/* Decorative dots - Group 1410118119 */}
      <div className="absolute left-[559px] top-[18px] h-[30px] w-[31px] rounded-full bg-white" />
      <div className="absolute left-[734px] top-[986px] h-[30px] w-[31px] rounded-full border border-white" />
      <div className="absolute left-[1498px] top-[496px] h-[38px] w-[38px] rounded-full border border-white" />
      <div className="absolute left-[1505px] top-[503px] h-[25px] w-[25px] rounded-full bg-white" />

      {/* Gradient orbs at edges */}
      <div
        className="absolute left-[-249px] top-[2553px] h-[474px] w-[474px] rounded-full opacity-50"
        style={{
          background: "linear-gradient(90deg, #312E81 0%, #7D51D3 100%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute left-[1683px] top-[930px] h-[474px] w-[474px] rounded-full opacity-50"
        style={{
          background: "linear-gradient(90deg, #312E81 0%, #7D51D3 100%)",
          filter: "blur(100px)",
        }}
      />

      {/* Top-left decorative image 129 */}
      <img
        src="/images/hero/hero-icon-4.png"
        alt=""
        className="absolute left-0 top-0 h-auto w-[341px] object-contain"
      />

      {/* Cube image - LIGHTEN blend */}
      <img
        src="/images/hero/hero-icon-6.png"
        alt=""
        className="absolute left-[645px] top-[149px] h-auto w-[631px] object-contain mix-blend-lighten max-lg:hidden"
      />

      {/* Bottom wave vectors */}
      <div className="absolute bottom-0 left-0 right-0 h-[269px] overflow-hidden">
        <svg
          viewBox="0 0 1920 269"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M2066 676 L2066 861 L285 861 L285 686 L393 862 L408 720 L555 720 L721 676 L878 676 L935 661 L1001 720 L1148 720 L1347 684 L1532 720 L1618 720 L1759 722 L1967 688 L2066 676Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Text content */}
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-[285px] pt-[260px] text-center">
        <p className="text-xl font-normal leading-[30px] tracking-[-1px] text-white">
          Empowering Your Digital Future
        </p>
        <h1 className="mt-0 flex justify-center">
          <svg
            viewBox="0 0 930 288"
            className="h-auto w-full max-w-[930px]"
            role="img"
            aria-label="Powering Business Beyond the Cloud"
          >
            <defs>
              <linearGradient id="heroGradient" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#5B6FF5" />
                <stop offset="52.6%" stopColor="#D4CB7B" />
                <stop offset="100%" stopColor="#DA3FF0" />
              </linearGradient>
              <filter id="heroGlow">
                <feDropShadow
                  dx="5"
                  dy="5"
                  stdDeviation="5"
                  floodColor="white"
                  floodOpacity="0.3"
                />
              </filter>
            </defs>
            <text
              x="465"
              y="120"
              textAnchor="middle"
              fontFamily="Poppins, sans-serif"
              fontWeight="700"
              fontSize="96"
              letterSpacing="-4.8"
              fill="url(#heroGradient)"
              filter="url(#heroGlow)"
            >
              <tspan x="465" dy="0">
                POWERING BUSINESS
              </tspan>
              <tspan x="465" dy="144">
                BEYOND THE CLOUD
              </tspan>
            </text>
          </svg>
        </h1>
      </div>
    </section>
  );
}
