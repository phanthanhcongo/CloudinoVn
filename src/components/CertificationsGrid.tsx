import { useState } from "react";

const categories = ["All", "AWS", "GCP"] as const;
type Category = (typeof categories)[number];

export default function CertificationsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const showAWS = activeCategory === "All" || activeCategory === "AWS";
  const showGCP = activeCategory === "All" || activeCategory === "GCP";

  return (
    <div className="relative mx-auto w-full max-w-[1400px] text-left">
      {/* Category Filter Pills Container */}
      <div className="mb-6 flex items-center justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 rounded-full border border-purple-500/40 bg-[#161033]/80 px-4 py-1.5 sm:px-6 sm:py-2 backdrop-blur-xl shadow-[0_0_25px_rgba(125,81,211,0.25)]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-1.5 sm:px-7 sm:py-2 rounded-full text-base sm:text-lg font-medium transition-all duration-300 select-none ${
                  isActive
                    ? "bg-gradient-to-r from-[#312e81] via-[#5b3db5] to-[#7d51d3] text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-400/60 scale-105"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 1: AMAZON WEB SERVICES (AWS) */}
      {showAWS && (
        <div className="mb-8 transition-all duration-500">
          <div className="mb-4 flex items-center gap-3 border-b border-purple-400/20 pb-3">
            <div className="h-3.5 w-3.5 rounded-full bg-[#FF9900] shadow-[0_0_12px_#FF9900]" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-white uppercase">
              Amazon Web Services (AWS)
            </h3>
          </div>

          <div className="relative w-full overflow-hidden rounded-[28px] border border-purple-400/30 bg-gradient-to-b from-[#312e81]/30 via-[#1b153f]/60 to-[#0e0a24] p-3 sm:p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(125,81,211,0.25)]">
            {/* ONE SINGLE UNIFIED WHITE BLOCK FOR AWS */}
            <div className="relative w-full overflow-hidden rounded-[22px] bg-white p-4 sm:p-6 shadow-2xl space-y-4 sm:space-y-5">
              {/* AWS Row 1: Hero Plaque & Honeycomb */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-4 flex justify-center pb-4 lg:pb-0 lg:pr-6">
                  <img
                    src="/images/cert/aws-advanced-consulting-partner-plaque.png"
                    alt="AWS Advanced Consulting Partner Plaque"
                    className="max-h-[300px] sm:max-h-[340px] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="lg:col-span-8 flex justify-center">
                  <img
                    src="/images/cert/aws-certified-badges-honeycomb.png"
                    alt="AWS Certified Badges Honeycomb"
                    className="max-h-[200px] sm:max-h-[240px] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* AWS Row 2: Full-width Partner Network Banner */}
              <div className="pt-3 sm:pt-4 flex justify-center">
                <img
                  src="/images/cert/aws-partner-network-badges.png"
                  alt="AWS Partner Network Badges"
                  className="w-full max-w-4xl max-h-[110px] sm:max-h-[140px] h-auto object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* AWS Row 3: Cụm 4 Badge Service Delivery */}
              <div className="pt-4 sm:pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-purple-900 text-center">
                  AWS Service Delivery Competencies
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-items-center">
                  <img
                    src="/images/cert/aws-rds-delivery.png"
                    alt="Amazon RDS Delivery"
                    className="max-h-[100px] sm:max-h-[130px] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                  />
                  <img
                    src="/images/cert/aws-ec2-windows-delivery.png"
                    alt="Amazon EC2 Windows Delivery"
                    className="max-h-[100px] sm:max-h-[130px] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                  />
                  <img
                    src="/images/cert/aws-migration-modernization.png"
                    alt="AWS Migration & Modernization"
                    className="max-h-[100px] sm:max-h-[130px] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                  />
                  <img
                    src="/images/cert/aws-education-software.png"
                    alt="AWS Education Software"
                    className="max-h-[100px] sm:max-h-[130px] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Decorative 3D Star Graphic */}
            <img
              src="/images/aws/aws-icon.png"
              alt=""
              className="absolute -right-3 -bottom-5 h-20 w-20 sm:h-28 sm:w-28 object-contain pointer-events-none drop-shadow-[0_8px_25px_rgba(0,0,0,0.8)] z-10"
            />
          </div>
        </div>
      )}

      {/* SECTION 2: GOOGLE CLOUD PLATFORM (GCP) */}
      {showGCP && (
        <div className="mb-8 transition-all duration-500">
          <div className="mb-4 flex items-center gap-3 border-b border-purple-400/20 pb-3">
            <div className="h-3.5 w-3.5 rounded-full bg-[#4285F4] shadow-[0_0_12px_#4285F4]" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-white uppercase">
              Google Cloud Platform (GCP)
            </h3>
          </div>

          <div className="relative w-full overflow-hidden rounded-[28px] border border-purple-400/30 bg-gradient-to-b from-[#312e81]/30 via-[#1b153f]/60 to-[#0e0a24] p-3 sm:p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(125,81,211,0.25)]">
            {/* ONE SINGLE UNIFIED WHITE BLOCK FOR GCP */}
            <div className="relative w-full overflow-hidden rounded-[22px] bg-white p-4 sm:p-6 shadow-2xl space-y-4 sm:space-y-5">
              {/* GCP Row 1: Google Premier Partner Badges */}
              <div className="flex justify-center">
                <img
                  src="/images/cert/google-premier-partner-badges.png"
                  alt="Google Premier Partner Badges"
                  className="max-h-[120px] sm:max-h-[150px] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* GCP Row 2: Google Specializations */}
              <div className="pt-4 sm:pt-5 flex justify-center">
                <img
                  src="/images/cert/google-cloud-specializations.png"
                  alt="Google Cloud Specializations"
                  className="max-h-[110px] sm:max-h-[140px] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* GCP Row 3: Google Maps & Workspace Variant */}
              <div className="pt-4 sm:pt-5 flex justify-center">
                <img
                  src="/images/cert/google-premier-partner-badges-variant.png"
                  alt="Google Premier Partner Variant"
                  className="max-h-[90px] sm:max-h-[120px] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Decorative 3D Star Graphic */}
            <img
              src="/images/aws/aws-icon.png"
              alt=""
              className="absolute -right-3 -bottom-5 h-20 w-20 sm:h-28 sm:w-28 object-contain pointer-events-none drop-shadow-[0_8px_25px_rgba(0,0,0,0.8)] z-10"
            />
          </div>
        </div>
      )}
    </div>
  );
}
