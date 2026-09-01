"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

type NavItem = {
  href: string;
  label: string;
  isEnter?: boolean;
  icon: ReactNode;
};

const navItems: NavItem[] = [
  {
    href: "/",
    label: "முகப்பு",
    icon: (
      <svg viewBox="0 0 16 16" className="size-3.5 fill-none stroke-current stroke-[1.3] stroke-linecap-round stroke-linejoin-round" aria-hidden="true">
        <path d="M8 14V9" />
        <path d="M8 9c0-2.4 1.7-4.3 4-4.3.2 2.6-1.6 4.6-4 4.3Z" />
        <path d="M8 10.5C7.9 8.4 6.4 6.8 4.4 6.8 4.3 8.9 5.9 10.6 8 10.5Z" />
      </svg>
    ),
  },
  {
    href: "/products",
    label: "தயாரிப்புகள்",
    icon: (
      <svg viewBox="0 0 16 16" className="size-3.5 fill-none stroke-current stroke-[1.3] stroke-linecap-round stroke-linejoin-round" aria-hidden="true">
        <path d="M1.6 12.4c2.4-3.4 4.3-5.1 5.7-5.1 2 0 3 3.6 5 3.6 1.1 0 1.9-.5 2.4-1.4" />
        <path d="M4.3 6.2C5.5 4.4 6.6 3.5 7.6 3.5c1.5 0 2.2 2.4 3.7 2.4" />
      </svg>
    ),
  },
  {
    href: "/why-yaazh",
    label: "ஏன் யாழ்?",
    icon: (
      <svg viewBox="0 0 16 16" className="size-3.5 fill-none stroke-current stroke-[1.3] stroke-linecap-round stroke-linejoin-round" aria-hidden="true">
        <path d="M4 2.4h5.3L12 5.1v8.5H4z" />
        <path d="M9.2 2.4V5h2.7" />
        <path d="M6 8.4h4M6 10.8h2.8" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "எங்களைப் பற்றி",
    icon: (
      <svg viewBox="0 0 16 16" className="size-3.5 fill-none stroke-current stroke-[1.3] stroke-linecap-round stroke-linejoin-round" aria-hidden="true">
        <circle cx="8" cy="8" r="6" />
        <path d="M8 5v1M8 8v3" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "தொடங்கு",
    isEnter: true,
    icon: (
      <svg viewBox="0 0 16 16" className="size-3.5 fill-none stroke-current stroke-[1.3] stroke-linecap-round stroke-linejoin-round" aria-hidden="true">
        <path d="M6.6 2.5h5.1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6.6" />
        <path d="M2.6 8h6.6" />
        <path d="m7 5.6 2.4 2.4L7 10.4" />
      </svg>
    ),
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-3">
      <nav
        aria-label="முக்கிய வழிகாட்டல்"
        className="pointer-events-auto inline-flex items-center gap-1.5 p-1.5 rounded-[18px] border border-white/12 bg-[rgba(34,40,31,0.85)] shadow-[0_12px_32px_rgba(10,14,8,0.45),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 max-w-full overflow-x-auto no-scrollbar"
      >
        {/* Left Mark Tile */}
        <Link
          href="/"
          aria-label="யாழ் — முகப்பு"
          className="focus-ring grid size-9 shrink-0 place-items-center rounded-[12px] bg-white border border-white/20 shadow-sm transition-transform duration-200 hover:scale-105 overflow-hidden p-0.5"
        >
          <Image
            src="/yaazh-logo.png"
            alt="யாழ் Logo"
            width={32}
            height={32}
            className="size-7 object-contain rounded-lg"
            priority
          />
        </Link>

        {/* Nav Items */}
        {navItems.map((item, idx) => {
          const active = pathname === item.href;
          const isHovered = hoveredIdx === idx;

          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={active ? { color: "#23261f", backgroundColor: "#f2f3ef" } : undefined}
              className={`focus-ring relative inline-flex items-center justify-center gap-2 h-9 px-3.5 rounded-[12px] text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                active
                  ? "bg-[#f2f3ef] !text-[#23261f] shadow-[0_6px_18px_rgba(12,17,9,0.3)] font-semibold scale-[1.02]"
                  : isHovered
                  ? "bg-[rgba(31,37,28,0.95)] !text-white border border-white/20 shadow-md"
                  : item.isEnter
                  ? "bg-white/10 !text-white hover:bg-white/15"
                  : "bg-white/[0.04] !text-white/60 hover:!text-white"
              }`}
            >
              <span
                style={active ? { color: "#23261f" } : undefined}
                className={`transition-opacity ${active ? "opacity-100 !text-[#23261f]" : "opacity-60"}`}
              >
                {item.icon}
              </span>
              <span
                style={active ? { color: "#23261f", fontWeight: 600 } : undefined}
                className={active ? "!text-[#23261f] font-semibold" : ""}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
