"use client";

import { useState } from "react";
import IndustryGrid from "./IndustryGrid";
import SolutionGrid from "./SolutionGrid";
import ServiceCards from "./ServiceCards";

const TABS = [
  {
    id: "services",
    label: "By Services",
    icon: "/images/icons/image 142.png",
    desc: "",
  },
  {
    id: "platforms",
    label: "By Platforms",
    icon: "/images/icons/image 143.png",
    desc: "",
  },
  {
    id: "industries",
    label: "By Industries",
    icon: "/images/icons/image 144.png",
    desc: "",
  },
] as const;

export default function SolutionsTabs() {
  const [active, setActive] = useState<"services" | "platforms" | "industries">(
    "services",
  );

  return (
    <>
      {/* Tab buttons */}
      <section className="relative z-20 bg-transparent -mt-96 py-12">
        <div className="mx-auto max-w-[1920px] px-[285px]">
          <div className="flex justify-center gap-[105px]">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex w-[480px] flex-col items-center gap-4 rounded-2xl border p-10 text-center transition-all backdrop-blur-md ${
                  active === tab.id
                    ? "border-accent bg-linear-to-r from-[#312E81] to-accent text-white"
                    : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                }`}
                style={
                  active === tab.id
                    ? {}
                    : { background: "rgba(255,255,255,0.02)" }
                }
              >
                <div>
                  <img
                    src={tab.icon}
                    alt=""
                    className="h-60 w-60 object-contain "
                  />
                </div>
                <span className="text-4xl font-normal">{tab.label}</span>
                <p className="max-w-[290px] text-base font-normal opacity-70">
                  {tab.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vector 45 arrow connector */}
      <div className="relative z-10 flex justify-center bg-transparent pb-8">
        <svg
          width="516"
          height="148"
          viewBox="0 0 516 148"
          fill="none"
          className="h-auto w-full max-w-[516px]"
        >
          <defs>
            <linearGradient id="v45Gradient" x1="0" y1="0.5" x2="1" y2="0.5">
              <stop offset="0%" stopColor="#312E81" />
              <stop offset="100%" stopColor="#7D51D3" />
            </linearGradient>
          </defs>
          <line
            x1="20"
            y1="74"
            x2="476"
            y2="74"
            stroke="url(#v45Gradient)"
            strokeWidth="3"
            strokeDasharray="5 5"
            strokeLinecap="square"
          />
          <path
            d="M476 74L460 60M476 74L460 88"
            stroke="url(#v45Gradient)"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>
        {/* Services Tab */}
        {active === "services" && <SolutionGrid />}

        {/* Platforms Tab */}
        {active === "platforms" && <ServiceCards />}

        {/* Industries Tab */}
        {active === "industries" && <IndustryGrid />}
      </div>
    </>
  );
}
