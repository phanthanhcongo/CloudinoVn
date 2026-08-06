export default function ServiceCards() {
  const services = [
    {
      title: "AWS Enterprise Cloud",
      desc: "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut",
      icon: "/images/services/icon-1.png",
    },
    {
      title: "DigitalOcean Cloud Server",
      desc: "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut",
      icon: "/images/services/icon-2.png",
    },
    {
      title: "Lark Digital Workplace",
      desc: "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut",
      icon: "/images/services/icon-3.png",
    },
  ];

  return (
    <section className="relative z-10 -mt-[429px] bg-transparent">
      <div className="mx-auto max-w-[1920px] px-[330px]">
        <div className="flex gap-[105px]">
          {services.map(s => (
            <div
              key={s.title}
              className="relative flex w-[350px] flex-col items-center gap-[10px] overflow-hidden rounded-[25px] p-[30px] px-6 text-center"
              style={{
                background: "rgba(49,46,129,0.08)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(125,81,211,0.15)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Glass highlight reflection */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[25px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(125,81,211,0.08) 0%, transparent 50%, transparent 100%)",
                }}
              />
              <h3 className="text-4xl font-normal leading-tight text-white">
                {s.title}
              </h3>
              <p className="text-base font-normal leading-relaxed text-white/70">
                {s.desc}
              </p>
              <div className="flex h-[76px] w-[76px] items-center justify-center">
                <img
                  src="/images/icons/service-card.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <a
                href="#"
                className="flex h-[50px] w-[194px] items-center justify-center rounded-full text-xl font-normal tracking-[-1px] text-white backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(49,46,129,0.75) 0%, rgba(125,81,211,0.75) 100%)",
                }}
              >
                LEARN MORE →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
