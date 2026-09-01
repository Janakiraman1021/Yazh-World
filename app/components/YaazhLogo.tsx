import Image from "next/image";
import Link from "next/link";

type YaazhLogoProps = {
  compact?: boolean;
  className?: string;
  size?: number;
};

export function YaazhLogo({
  compact = false,
  className = "",
  size = 38,
}: YaazhLogoProps) {
  return (
    <Link
      href="/"
      className={`focus-ring inline-flex items-center gap-3 rounded-full transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Yaazh Home"
    >
      <span className="relative grid shrink-0 place-items-center rounded-2xl overflow-hidden bg-white/95 p-1 border border-white/20 shadow-[0_8px_20px_rgba(10,14,8,0.35)]">
        <Image
          src="/yaazh-logo.png"
          alt="Yaazh Logo"
          width={size}
          height={size}
          className="rounded-xl object-contain"
          priority
        />
      </span>
      {!compact && (
        <span className="text-xl font-semibold text-white tracking-tight flex items-center gap-1.5">
          <span>Yaazh</span>
          <span className="text-[10px] font-mono text-[#a8e063] font-medium tracking-widest px-1.5 py-0.5 rounded bg-[#a8e063]/15 border border-[#a8e063]/25 uppercase">
            AI
          </span>
        </span>
      )}
    </Link>
  );
}
