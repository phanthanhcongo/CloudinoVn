"use client";

import { useState, useEffect } from "react";
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

type TabId = "services" | "platforms" | "industries";

export default function SolutionsTabs() {
  const [active, setActive] = useState<TabId>("services");

  useEffect(() => {
    const updateTabFromUrl = () => {
      if (typeof window === "undefined") return;
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab") as TabId | null;
      if (tabParam && ["services", "platforms", "industries"].includes(tabParam)) {
        setActive(tabParam);
      }
    };

    updateTabFromUrl();
    window.addEventListener("popstate", updateTabFromUrl);
    return () => window.removeEventListener("popstate", updateTabFromUrl);
  }, []);

  const handleTabClick = (tabId: TabId) => {
    setActive(tabId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tabId);
      window.history.pushState({}, "", url.toString());
    }
  };

  return (
    <>
      {/* Tab buttons */}
      <section className="relative z-20 bg-transparent -mt-10 sm:-mt-24 md:-mt-36 lg:-mt-52 py-8 sm:py-12">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-[285px]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-[50px] xl:gap-[105px]">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex w-full max-w-[360px] lg:max-w-[480px] flex-col items-center gap-3 sm:gap-4 rounded-2xl border p-6 sm:p-8 lg:p-10 text-center transition-all backdrop-blur-md cursor-pointer ${
                  active === tab.id
                    ? "border-accent bg-linear-to-r from-[#312E81] to-accent text-white shadow-[0_0_30px_rgba(125,81,211,0.5)] scale-102"
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
                    className="h-24 w-24 sm:h-36 sm:w-36 lg:h-52 lg:w-52 object-contain"
                  />
                </div>
                <span className="text-xl sm:text-2xl lg:text-3xl font-normal">{tab.label}</span>
                {tab.desc && (
                  <p className="max-w-[290px] text-xs sm:text-base font-normal opacity-70">
                    {tab.desc}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Curved Dashed Arrow Connector - Increased Length */}
      <div className="relative z-10 hidden md:flex justify-center -ml-56 lg:-ml-[320px] xl:-ml-[420px] -mt-4 sm:-mt-6 lg:-mt-8 mb-4 pointer-events-none">
        <svg
          width="800"
          height="220"
          viewBox="0 0 800 220"
          fill="none"
          className="h-auto w-full max-w-[800px]"
        >
          {/* Starting Dot Node */}
          <circle cx="40" cy="10" r="6" fill="#a855f7" />
          <circle cx="40" cy="10" r="11" fill="#a855f7" opacity="0.35" />

          {/* Smooth Long Curved Dashed Path */}
          <path
            d="M 40 10 C 40 130, 520 60, 520 180"
            stroke="#a855f7"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            fill="none"
          />

          {/* Downward Arrowhead Triangle */}
          <polygon points="520,196 512,176 528,176" fill="#a855f7" />
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
