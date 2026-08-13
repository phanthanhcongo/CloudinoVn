export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-[40px] pb-[24px] md:pt-[79px]">
      <img src="/images/aws/aws-bg.png" alt="" className="absolute right-0 top-0 hidden h-full w-[494px] object-cover opacity-30 md:block" />
      <img src="/images/hero/hero-icon-5.png" alt="" className="absolute bottom-0 left-0 hidden h-auto w-[290px] object-contain opacity-40 md:block" />

      <div className="relative mx-auto max-w-[1920px] px-4 md:px-[285px]">
        <div className="mb-[40px] flex justify-center md:mb-[87px]">
          <span className="text-2xl font-bold text-white md:text-[33px]">CLOUDINO</span>
        </div>

        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="text-4xl font-bold leading-[1] text-white md:text-[96px]">
            Let&apos;s Connect &<br />Transform Together.
          </h2>
          <p className="mt-0 text-xl font-normal text-white md:text-4xl">
            Connect with us and create change together.
          </p>

          <a href="/contact" className="mt-[30px] inline-flex h-[50px] w-[150px] items-center justify-center rounded-full border border-white/20 text-lg font-normal tracking-[-1px] text-white backdrop-blur-md transition-all hover:bg-white hover:text-black md:h-[60px] md:w-[174px] md:text-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
            contact →
          </a>

          <address className="mt-[40px] block text-base font-normal not-italic text-white/80 mx-auto text-center md:mt-[50px]">
            <p>Tòa nhà Cloudino, 4/3 Phố Nghĩa Đô, Phường Nghĩa Đô, Hà Nội</p>
            <p>(+84) 024 22165050</p>
            <p>hello@18.140.63.179</p>
            <p>8:30AM - 6:00PM</p>
          </address>
        </div>

        <div className="mt-[40px] text-center md:mt-[48px]">
          <p className="text-[10px] font-normal text-white/40">
            Copyright 2026 Cloudino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
