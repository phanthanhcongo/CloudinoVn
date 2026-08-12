const industries = [
  { name: "Healthcare", x: 107, y: 0 },
  { name: "Finance", x: 498, y: 0 },
  { name: "Public Sector", x: 627, y: 169 },
  { name: "Gaming", x: -23, y: 169 },
  { name: "Telco & Media", x: 107, y: 606 },
  { name: "Software", x: 498, y: 606 },
  { name: "Retail", x: 627, y: 418 },
  { name: "Manufacturing", x: -23, y: 418 },
];

export default function IndustryGrid() {
  return (
    <section className="relative overflow-visible bg-black py-[130px]">
      <img
        src="/images/backgrounds/image119.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-lighten"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
      <svg
        width="175"
        height="523"
        viewBox="0 0 175 523"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <path
          d="M-0.420776 0C-0.685059 0.00026242 -0.932281 0.132694 -1.07898 0.352539L-174.869 261.037C-174.874 261.045 -174.878 261.054 -174.883 261.062C-174.893 261.079 -174.902 261.096 -174.911 261.113C-174.919 261.129 -174.927 261.146 -174.934 261.162C-174.942 261.18 -174.949 261.198 -174.956 261.217C-174.963 261.236 -174.968 261.255 -174.974 261.274C-174.978 261.293 -174.983 261.311 -174.986 261.329C-174.99 261.348 -174.992 261.367 -174.994 261.387C-174.996 261.405 -174.998 261.423 -174.999 261.441C-175 261.462 -175 261.483 -174.999 261.504C-174.999 261.513 -175.001 261.523 -175 261.532C-174.999 261.543 -174.996 261.553 -174.995 261.563C-174.993 261.582 -174.99 261.601 -174.986 261.62C-174.983 261.637 -174.98 261.653 -174.975 261.67C-174.969 261.694 -174.962 261.718 -174.953 261.742C-174.949 261.754 -174.944 261.766 -174.939 261.778C-174.93 261.8 -174.92 261.821 -174.909 261.842C-174.902 261.855 -174.895 261.869 -174.888 261.882C-174.881 261.893 -174.876 261.905 -174.869 261.916L-1.07898 522.601C-0.932281 522.82 -0.685059 522.953 -0.420776 522.953C-0.156219 522.953 0.0915527 522.821 0.238403 522.601L174.028 261.916C174.036 261.905 174.042 261.892 174.049 261.881C174.055 261.87 174.062 261.859 174.068 261.848C174.08 261.824 174.092 261.801 174.102 261.776C174.106 261.765 174.11 261.754 174.114 261.742C174.123 261.718 174.131 261.694 174.137 261.67C174.141 261.654 174.144 261.639 174.147 261.623C174.151 261.6 174.154 261.576 174.156 261.553C174.157 261.546 174.159 261.539 174.159 261.532C174.16 261.526 174.159 261.52 174.159 261.515C174.161 261.489 174.161 261.464 174.159 261.438C174.158 261.421 174.157 261.404 174.155 261.387C174.153 261.367 174.15 261.348 174.147 261.329C174.143 261.311 174.14 261.292 174.135 261.274C174.13 261.255 174.124 261.236 174.117 261.217C174.111 261.198 174.104 261.18 174.096 261.162C174.089 261.147 174.082 261.131 174.074 261.116C174.064 261.095 174.052 261.075 174.039 261.055C174.036 261.049 174.032 261.043 174.028 261.037L0.238403 0.352539L0.178833 0.274414C0.029541 0.101656 -0.18924 0 -0.420776 0ZM-0.4198 520.733L-172.27 262.956L-0.670776 320.157C-0.508438 320.211 -0.332153 320.211 -0.1698 320.157L171.433 262.955L-0.4198 520.733ZM171.307 261.329L-0.4198 318.571L-172.146 261.328L-0.4198 175.466L171.307 261.329ZM171.057 259.434L-0.0662842 173.873C-0.289047 173.762 -0.551559 173.762 -0.774292 173.873L-171.895 259.433L-0.4198 2.21875L171.057 259.434Z"
          fill="url(#paint0_linear_37513_345)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_37513_345"
            x1="174.16"
            y1="261.477"
            x2="-175"
            y2="261.477"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#312E81" />
            <stop offset="1" stop-color="#7D51D3" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="336"
        height="487"
        viewBox="0 0 336 487"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0"
      >
        <path
          d="M292.74 119.807C373.482 94.1947 451.423 86.3544 512.155 94.363C572.931 102.378 616.282 126.227 628.201 163.801C640.119 201.375 618.443 245.852 573.399 287.433C528.387 328.984 460.178 367.504 379.436 393.116C298.694 418.728 220.752 426.569 160.02 418.56C99.2443 410.546 55.8945 386.695 43.9758 349.122C32.0571 311.548 53.7331 267.071 98.7766 225.49C143.788 183.939 211.998 145.419 292.74 119.807Z"
          stroke="url(#paint0_linear_37513_342)"
        />
        <path
          d="M300.955 53.8339C347.351 39.1168 392.127 34.6156 427.005 39.2149C461.926 43.8199 486.732 57.5118 493.544 78.9878C500.357 100.464 487.979 125.952 462.097 149.844C436.248 173.706 397.063 195.837 350.668 210.554C304.272 225.271 259.495 229.774 224.617 225.175C189.696 220.569 164.89 206.876 158.078 185.4C151.266 163.924 163.643 138.438 189.525 114.545C215.374 90.683 254.559 68.5511 300.955 53.8339Z"
          stroke="url(#paint1_linear_37513_342)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_37513_342"
            x1="86.9983"
            y1="486.404"
            x2="155.122"
            y2="-30.1928"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5472F6" />
            <stop offset="1" stop-color="#DD3EF0" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_37513_342"
            x1="182.609"
            y1="264.389"
            x2="221.773"
            y2="-32.6034"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5472F6" />
            <stop offset="1" stop-color="#DD3EF0" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto max-w-[1920px] px-[285px]">
        <div className="relative mx-auto h-[724px] w-[724px]">
          {/* Outer ring - Animation-circle Ellipse 14, offset (-103, -103) from center */}
          <div className="absolute -left-[103px] -top-[103px] h-[930px] w-[930px] rounded-full border border-dashed border-white/40" />

          {/* Central circle */}
          <div
            className="absolute inset-0 rounded-full border-white/40 border-dotted border-2"
            style={{ background: "rgba(255,255,255,0.02)" }}
          />

          {/* Decorative dots from Animation-circle */}
          <div className="absolute left-[18px] top-[27px] h-[23px] w-[23px] rounded-full bg-white/60" />
          <div className="absolute left-[192px] top-[786px] h-[23px] w-[23px] rounded-full bg-white/5 border border-white/60" />
          <div className="absolute left-[810px] top-[386px] h-[28px] w-[29px] rounded-full bg-white/5 border border-white/60" />
          <div className="absolute left-[815px] top-[391px] h-[19px] w-[19px] rounded-full bg-white/60" />

          {/* Industry tags */}
          {industries.map(ind => (
            <a
              href={`/solutions/industries/${ind.name.toLowerCase()}`}
              key={ind.name}
              className="absolute flex h-[120px] w-[120px] z-10 items-center justify-center rounded-full border border-white/10 text-center text-base font-normal text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white bg-linear-to-r from-[#312E81] to-accent opacity-75"
              style={{ left: `${ind.x}px`, top: `${ind.y}px` }}
            >
              {ind.name}
            </a>
          ))}

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-[455px]">
              <h2 className="text-5xl font-light text-white">
                Industries We Serve
              </h2>
              <p className="mx-auto mt-0 max-w-[384px] text-base font-normal text-white/70">
                Check out specialized models designed based on a deep
                understanding of industry-specific characteristics.
              </p>
              <a
                href="/solutions/industries"
                className="mt-[30px] inline-flex h-[60px] w-[194px] items-center justify-center rounded-full text-xl font-normal tracking-[-1px] text-white backdrop-blur-md transition-all bg-accent hover:bg-white hover:text-accent"
              >
                LEARN MORE →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
