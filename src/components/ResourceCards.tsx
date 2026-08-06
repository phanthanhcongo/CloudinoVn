const cards = [
  { image: null, textColor: "text-white" },
  { image: "/images/backgrounds/deco-1.png", textColor: "text-black" },
  { image: "/images/backgrounds/deco-2.png", textColor: "text-white" },
  { image: null, textColor: "text-black", white: true },
];

export default function ResourceCards() {
  return (
    <section className="relative bg-black pt-[80px] pb-[49px]">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      <div className="mx-auto max-w-[1920px] px-[285px]">
        <div className="mb-[25px] flex items-center">
          <div className="flex items-center gap-3">
            <div className="relative flex h-4 w-4 items-center justify-center">
              <div className="absolute h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
              <div className="absolute h-2 w-2 rounded-full bg-white opacity-40" />
            </div>
            <h2 className="text-5xl font-light text-white">Resources</h2>
            <div className="relative flex h-4 w-4 items-center justify-center">
              <div className="absolute h-4 w-4 rounded-full bg-white opacity-30 blur-[2px]" />
              <div className="absolute h-2 w-2 rounded-full bg-white opacity-40" />
            </div>
          </div>
          <div className="ml-0 flex-1 border-t border-white/20" />
          <img
            src="/images/partners/logo-4.png"
            alt=""
            className="ml-0 h-[50px] w-[296px] object-contain opacity-50"
          />
        </div>

        <div className="mt-[100px] flex gap-[41px] overflow-x-auto -mr-120">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative h-[503px] w-[478px] shrink-0"
            >
              <div
                className={`h-[478px] w-full overflow-hidden rounded ${i % 2 === 0 ? "bg-white" : "bg-white/5"} rounded-4xl`}
              ></div>
              <h3
                className={`absolute left-[79px] top-[84px] max-w-[320px] text-[40px] font-normal leading-tight ${i % 2 === 0 ? "text-black" : "text-white"} group-hover:text-primary`}
              >
                Lorem ipsum dolor sit amet
              </h3>
              <a
                className="absolute bottom-0 left-[134px] flex h-[50px] w-[211px] items-center justify-center rounded-full border border-white/20 text-xl font-normal tracking-[-1px] text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                href="/resources"
              >
                Press Release →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
