import { useState, useEffect, useRef } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const generateCaptcha = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(code);
    setCaptchaInput("");
    setCaptchaError(false);
  };

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
      setCaptchaError(false);
      generateCaptcha();
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-open-contact], .btn, [role='button']"
      );
      if (!target) return;

      // Ignore elements inside the modal itself
      if (target.closest("#contact-modal-box")) return;

      const text = (target.textContent || "").trim().toUpperCase();
      const href = target.getAttribute("href") || "";

      const isContactTrigger =
        target.hasAttribute("data-open-contact") ||
        href === "#contact" ||
        href === "#contact-modal" ||
        href === "/contact" ||
        text.includes("TƯ VẤN") ||
        text.includes("LIÊN HỆ") ||
        text.includes("CONTACT");

      if (isContactTrigger) {
        e.preventDefault();
        e.stopPropagation();
        handleOpen();
      }
    };

    window.addEventListener("open-contact-modal", handleOpen);
    document.addEventListener("click", handleGlobalClick);
    return () => {
      window.removeEventListener("open-contact-modal", handleOpen);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !canvasRef.current || !captchaText) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw background
    ctx.fillStyle = "#f9ece9";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw noise dots
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(20, 10, 40, ${Math.random() * 0.25})`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        1,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Draw noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(40, 15, 70, ${0.15 + Math.random() * 0.35})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Draw text with distortion & rotation
    ctx.font = "bold 24px sans-serif";
    ctx.fillStyle = "#1e0b38";
    ctx.textBaseline = "middle";

    for (let i = 0; i < captchaText.length; i++) {
      const char = captchaText[i];
      const x = 16 + i * 20;
      const y = canvas.height / 2 + (Math.random() * 4 - 2);
      const angle = Math.random() * 0.25 - 0.12;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }
  }, [captchaText, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim().toUpperCase() !== captchaText.toUpperCase()) {
      setCaptchaError(true);
      return;
    }
    setSubmitted(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div
        id="contact-modal-box"
        className="relative w-full max-w-[620px] max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-500/30 p-6 sm:p-8 md:p-9 shadow-[0_0_50px_rgba(125,81,211,0.4)] text-white transition-all duration-300"
        style={{
          background:
            "linear-gradient(180deg, rgba(38, 20, 75, 0.96) 0%, rgba(24, 12, 50, 0.98) 100%)",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
        >
          ✕
        </button>

        <h2 className="text-2xl sm:text-3xl font-normal text-white mb-6">
          Contact us
        </h2>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 border border-purple-400 text-purple-300 text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Gửi thông tin thành công!
            </h3>
            <p className="text-sm text-white/70 max-w-md mx-auto mb-6">
              Cảm ơn bạn đã liên hệ với Cloudino. Đội ngũ chuyên gia của chúng tôi sẽ hồi đáp bạn trong thời gian sớm nhất.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2.5 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 transition-all"
            >
              Đóng
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs sm:text-sm font-normal text-white mb-1.5 block">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 transition-all"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-normal text-white mb-1.5 block">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs sm:text-sm font-normal text-white mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 transition-all"
              />
            </div>

            {/* Company */}
            <div>
              <label className="text-xs sm:text-sm font-normal text-white mb-1.5 block">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs sm:text-sm font-normal text-white mb-1.5 block">
                Message
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/40 transition-all resize-none"
              />
            </div>

            {/* Captcha Section */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="rounded-xl overflow-hidden border border-white/20 bg-white/90 shadow-inner">
                  <canvas
                    ref={canvasRef}
                    width={140}
                    height={40}
                    onClick={generateCaptcha}
                    className="block cursor-pointer"
                    title="Bấm để đổi mã Captcha"
                  />
                </div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  title="Đổi mã Captcha khác"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1">
                <label className="text-xs sm:text-sm font-normal text-white mb-1.5 block">
                  Captcha
                </label>
                <input
                  type="text"
                  required
                  value={captchaInput}
                  onChange={(e) => {
                    setCaptchaInput(e.target.value);
                    setCaptchaError(false);
                  }}
                  className={`w-full rounded-xl border ${
                    captchaError ? "border-red-400 ring-1 ring-red-400" : "border-white/20"
                  } bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-purple-400 transition-all`}
                />
                {captchaError && (
                  <span className="text-xs text-red-300 mt-1 block">
                    Mã Captcha chưa chính xác
                  </span>
                )}
              </div>
            </div>

            {/* Advisory Subtext */}
            <p className="text-xs sm:text-sm font-normal text-white/70 pt-2">
              Please leave your information so we can advise you
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="flex h-11 w-[160px] sm:w-[180px] items-center justify-center rounded-full border border-purple-400/50 text-xs sm:text-sm font-medium text-white backdrop-blur-xl bg-gradient-to-r from-[#312e81] via-[#5b3db5] to-[#7d51d3] hover:bg-white hover:text-[#201048] shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                CONTACT US →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
