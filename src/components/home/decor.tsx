// Decorative SVG bits scattered around the page.
export function BobaPearl({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden>
      <circle cx="10" cy="10" r="9" fill="currentColor" />
      <circle cx="7" cy="7" r="2.4" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}

export function TeaLeaf({ className = "", size = 28 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M4 22C4 12 14 4 28 4c0 14-8 24-18 24-4 0-6-2-6-6z"
        fill="currentColor"
      />
      <path d="M8 24C14 18 20 12 26 8" stroke="rgba(0,0,0,0.2)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Splash({ className = "", size = 60 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" className={className} aria-hidden>
      <path
        d="M30 4c4 8 12 8 16 14s-4 14 0 20-14 4-20 12-10-8-18-14 8-14 6-22S26 -4 30 4z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

// A drippy wave used to transition between color zones.
export function WaveDivider({
  fromColor,
  toColor,
  flip = false,
  className = "",
}: {
  fromColor: string;
  toColor: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`} style={{ backgroundColor: fromColor }}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[60px] md:h-[100px]"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
        aria-hidden
      >
        <path
          d="M0,60 C180,120 320,0 540,40 C760,80 900,20 1120,60 C1280,90 1360,40 1440,60 L1440,120 L0,120 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
