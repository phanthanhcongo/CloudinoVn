export default function PartnerLogos() {
  return (
    <section className="relative pt-[309px] pb-[121px] bg-transparent">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      <div className="mx-auto max-w-[1920px] px-[285px]">
        <div className="text-center">
          <h2 className="whitespace-nowrap text-[96px] font-light leading-[1] text-white mb-6">
            Trusted by Global Partners
          </h2>
          <p className="mx-auto mt-0 max-w-[720px] text-base font-normal text-white">
            Experience the best synergy that has led to the success of over
            8,000 customers with the world&apos;s best technology partners.
          </p>
        </div>

        <div
          className="mt-25 flex flex-col overflow-visible"
          style={{
            marginLeft: "-60px",
            marginRight: "-60px",
            width: "calc(100% + 120px)",
          }}
        >
          {[0, 1].map(row => (
            <div key={row} className="flex justify-between">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="flex h-36 w-110 items-center justify-center"
                >
                  <img
                    src={`/images/logos-cleaned/${row * 8 + i + 1}.png`}
                    alt={`Partner ${row * 8 + i + 1}`}
                    className="max-h-full max-w-full object-fit"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
