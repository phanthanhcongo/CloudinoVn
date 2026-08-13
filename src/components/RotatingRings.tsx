interface RotatingRingsProps {
  className?: string;
}

export default function RotatingRings({
  className = "absolute inset-8 pointer-events-none z-0 flex items-center justify-center",
}: RotatingRingsProps) {
  return (
    <div className={className}>
      {/* Tight Staggered Afterimage Keyframes */}
      <style>{`
        @keyframes spinPause1 {
          0% { transform: rotateX(0deg); }
          40% { transform: rotateX(360deg); }
          100% { transform: rotateX(360deg); }
        }
        @keyframes spinPause2 {
          0% { transform: rotateX(0deg); }
          40.7% { transform: rotateX(360deg); }
          100% { transform: rotateX(360deg); }
        }
        @keyframes spinPause3 {
          0% { transform: rotateX(0deg); }
          41.4% { transform: rotateX(360deg); }
          100% { transform: rotateX(360deg); }
        }
        @keyframes spinPause4 {
          0% { transform: rotateX(0deg); }
          42.1% { transform: rotateX(360deg); }
          100% { transform: rotateX(360deg); }
        }
      `}</style>

      {/* Ring 1: Tím (Purple) - Tiên phong */}
      <div
        className="absolute inset-0 rounded-full border-2 border-purple-400/90"
        style={{
          animation: "spinPause1 5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          animationDelay: "0s",
        }}
      />

      {/* Ring 2: Xanh Chàm (Indigo) - Dư ảnh 1 (+0.06s) */}
      <div
        className="absolute inset-0 rounded-full border-2 border-indigo-400/90"
        style={{
          animation: "spinPause2 5.06s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          animationDelay: "0.06s",
        }}
      />

      {/* Ring 3: Xanh Ngọc (Cyan) - Dư ảnh 2 (+0.12s) */}
      <div
        className="absolute inset-0 rounded-full border-2 border-cyan-400/90"
        style={{
          animation: "spinPause3 5.12s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          animationDelay: "0.12s",
        }}
      />

      {/* Ring 4: Hồng (Pink) - Dư ảnh 3 (+0.18s) */}
      <div
        className="absolute inset-0 rounded-full border-2 border-pink-400/90"
        style={{
          animation: "spinPause4 5.18s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          animationDelay: "0.18s",
        }}
      />
    </div>
  );
}
