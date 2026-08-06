export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-r from-[#312E81] to-accent pt-[79px] pb-[24px]">
      <img
        src="/images/aws/aws-bg.png"
        alt=""
        className="absolute right-0 top-0 h-full w-[494px] object-cover"
      />
      <img
        src="/images/hero/hero-icon-5.png"
        alt=""
        className="absolute bottom-0 left-0 h-auto w-[290px] object-contain"
      />

      {/* Decorative circles */}
      <div className="absolute left-1/2 top-1/2 h-[895px] w-[895px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.02]" />
      <div className="absolute left-[272px] top-[190px] h-[1373px] w-[1373px] rounded-full border border-white/[0.02]" />

      <div className="relative mx-auto max-w-[1920px] px-[285px]">
        {/* CLOUDINO Logo */}
        <div className="mb-[87px] flex justify-center">
          <span className="text-[33px] font-bold text-white">CLOUDINO</span>
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="w-[1000px] h-[288px] font-bold text-8xl leading-36 text-center tracking-tighter bg-linear-[45deg] from-[#5B6FF5] via-[#D5CC7B] via-[52.6%] to-[#DA3FF0] bg-clip-text text-transparent">
            Let&apos;s Connect &amp;
            <br /> Transform Together.
          </h2>
          <p className="mt-0 text-4xl font-normal text-white">
            Connect with us and create change together.
          </p>

          <a
            href="/contact"
            className="mt-[44px] inline-flex h-[60px] w-[174px] items-center justify-center rounded-full border border-white/20 text-xl font-normal tracking-[-1px] text-white backdrop-blur-md transition-all bg-accent hover:bg-white hover:text-accent"
          >
            contact →
          </a>

          <address className="mt-[50px] block text-base font-normal not-italic text-white/80 mx-auto text-center tracking-tighter">
            <p>Tòa nhà Cloudino, 4/3 Phố Nghĩa Đô, Phường Nghĩa Đô, Hà Nội</p>
            <p>(+84) 024 22165050</p>
            <p>hello@18.140.63.179</p>
            <p>8:30AM - 6:00PM</p>
          </address>
        </div>

        {/* Copyright */}
        <div className="mt-[48px] text-center">
          <p className="text-[10px] font-normal text-white/40">
            Copyright 2026 Cloudino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
