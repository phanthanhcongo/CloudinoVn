export default function Hero() {
  return (
    <section className="relative flex min-h-[500px] h-[550px] overflow-hidden bg-black sm:h-[700px] md:h-[1150px]">
      {/* Solid black base - Rectangle 969 */}
      <div className="absolute inset-0 bg-black" />

      {/* Background image 119 - 20% opacity, LIGHTEN blend */}
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-lighten"
      />

      {/* Concentric Decorative Rings, Orbs & Dots Container - Centered on Row 1 with Responsive Scaling */}
      <div className="absolute left-1/2 top-[240px] sm:top-[300px] md:top-[400px] -translate-x-1/2 -translate-y-1/2 scale-[0.45] sm:scale-[0.7] md:scale-100 origin-center transition-transform pointer-events-none">
        {/* Glowing gradient orb - Ellipse 15 */}
        <div
          className="absolute left-1/2 top-1/2 h-[444px] w-[435px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "linear-gradient(90deg, #312E81 0%, #7D51D3 100%)",
            filter: "blur(284px)",
          }}
        />

        {/* Concentric dashed circles */}
        <div className="absolute left-1/2 top-1/2 h-[895px] w-[895px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/35" />
        <div className="absolute left-1/2 top-1/2 hidden h-[1373px] w-[1373px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/35 md:block" />
        <div className="absolute left-1/2 top-1/2 h-[1153px] w-[1137px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white" />

        {/* Decorative dots on rings */}
        <div className="absolute left-1/2 top-1/2 h-[30px] w-[31px] -translate-x-[401px] -translate-y-[447px] rounded-full bg-white" />
        <div className="absolute left-1/2 top-1/2 h-[30px] w-[31px] -translate-x-[226px] translate-y-[447px] rounded-full border border-white" />
        <div className="absolute left-1/2 top-1/2 h-[38px] w-[38px] translate-x-[538px] translate-y-[96px] rounded-full border border-white" />
        <div className="absolute left-1/2 top-1/2 h-[25px] w-[25px] translate-x-[545px] translate-y-[103px] rounded-full bg-white" />
      </div>

      {/* Top-left decorative image 129 (Scaled for Mobile) */}
      <img
        src="/images/hero/hero-icon-4.png"
        alt=""
        className="absolute left-0 top-0 h-auto w-[140px] sm:w-[220px] md:w-[341px] object-contain opacity-70 sm:opacity-100"
      />

      {/* Cube image - LIGHTEN blend (Centered in Row 1 over Title text) */}
      <img
        src="/images/backgrounds/Data&AI.gif"
        alt=""
        className="absolute left-1/2 top-[240px] sm:top-[300px] md:top-[400px] -translate-x-1/2 -translate-y-1/2 h-auto w-[75vw] sm:w-[55vw] md:w-[35vw] max-w-[631px] object-contain mix-blend-lighten pointer-events-none opacity-80 sm:opacity-100"
      />

      {/* Bottom wave vectors (Scaled Height for Mobile) */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] sm:h-[180px] md:h-[269px] overflow-hidden">
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
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4 pt-[75px] text-center sm:px-8 sm:pt-[140px] md:px-[285px] md:pt-[260px]">
        <p className="text-sm font-normal leading-[24px] tracking-[-0.5px] text-white sm:text-base sm:leading-[30px] md:text-xl">
          Empowering Your Digital Future
        </p>
        <h1 className="mt-2 sm:mt-4 flex justify-center">
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
