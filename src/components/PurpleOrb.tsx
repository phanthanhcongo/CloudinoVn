interface PurpleOrbProps {
  /** Size in px or CSS string (default: 340) */
  size?: number | string;
  /** Blur radius in px or CSS string (default: 110) */
  blur?: number | string;
  /** Additional Tailwind class names for position / responsive sizing */
  className?: string;
  /** Opacity override if needed */
  opacity?: number;
  /** Custom gradient or color (defaults to main website theme accent colors) */
  color?: string;
}

export default function PurpleOrb({
  size = 340,
  blur = 110,
  className = "",
  opacity,
  color,
}: PurpleOrbProps) {
  const sizeValue = typeof size === "number" ? `${size}px` : size;
  const blurValue = typeof blur === "number" ? `${blur}px` : blur;

  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full origin-center transition-transform ${className}`}
      style={{
        width: sizeValue,
        height: sizeValue,
        filter: `blur(${blurValue})`,
        background:
          color ||
          "radial-gradient(circle at center, var(--color-accent, #7d51d3) 0%, var(--color-primary-dark, #312e81) 100%)",
        ...(opacity !== undefined ? { opacity } : {}),
      }}
    />
  );
}
