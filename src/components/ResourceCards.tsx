const cards = [
  { image: null, textColor: "text-white", bgClass: "" },
  { image: "/images/backgrounds/deco-1.png", textColor: "text-black", bgClass: "" },
  { image: "/images/backgrounds/deco-2.png", textColor: "text-white", bgClass: "" },
  { image: null, textColor: "text-black", bgClass: "bg-white" },
];

export default function ResourceCards() {
  return (
    <section className="relative bg-black pt-[80px] pb-[49px]">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      <div className="mx-auto max-w-[1920px] px-[285px]">
        {/* Heading */}
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
          <img src="/images/partners/logo-4.png" alt="" className="ml-0 h-[50px] w-[296px] object-contain opacity-50" />
        </div>

        {/* Cards */}
        <div className="mt-[100px] flex gap-[41px] overflow-x-auto" style={{ marginRight: "-480px" }}>
          {cards.map((card, i) => (
            <a key={i} href="/resources" className="group relative w-[478px] shrink-0">
              <div className={`h-[478px] w-full overflow-hidden rounded ${card.bgClass}`}>
                {card.image ? (
                  <img src={card.image} alt="" className="h-full w-full object-cover" />
                ) : null}
              </div>
              <h3 className={`absolute bottom-[110px] left-[79px] text-[40px] font-normal leading-tight ${card.textColor} group-hover:text-primary max-w-[320px]`}>
                Lorem ipsum dolor sit amet
              </h3>
              <div className="absolute bottom-[40px] left-[134px] flex h-[50px] w-[211px] items-center justify-center rounded-full border border-white/20 text-xl font-normal tracking-[-1px] text-white backdrop-blur-md transition-all hover:bg-white hover:text-black" style={{ background: "rgba(255,255,255,0.05)" }}>
                Press Release →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
