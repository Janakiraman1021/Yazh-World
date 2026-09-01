"use client";

import Link from "next/link";
import { MessageCircle, Network, Leaf, Sparkles } from "lucide-react";
import { YaazhLogo } from "./YaazhLogo";

const footerLinks = [
  { href: "/", label: "முகப்பு" },
  { href: "/products", label: "தயாரிப்புகள்" },
  { href: "/why-yaazh", label: "ஏன் யாழ்?" },
  { href: "/about", label: "எங்களைப் பற்றி" },
  { href: "/contact", label: "தொடர்பு" },
] as const;

export function Footer() {
  const socialIcons = [MessageCircle, Network];

  return (
    <footer className="border-t border-[rgba(238,243,231,0.08)] bg-[#23261f] text-[#f2f3ef] relative z-20">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <YaazhLogo />
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[#a4aaa0]">
            யாழ் Web Platform (18+ தமிழ் AI கருவிகள் & LangLM), Chrome Extension (e-Sevai & மாணவர் தானியங்கி) மற்றும் Computer Automation Desktop Agent.
          </p>
          <div className="flex gap-3">
            {socialIcons.map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="சமூக ஊடக இணைப்பு"
                className="focus-ring grid size-10 place-items-center rounded-xl border border-[rgba(238,243,231,0.12)] bg-[rgba(255,255,255,0.03)] text-[#a4aaa0] transition hover:bg-[#a8e063] hover:text-[#23261f]"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:justify-items-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-lg px-3 py-1.5 text-xs sm:text-sm text-[#a4aaa0] transition hover:text-[#c6f19d] hover:bg-white/[0.04]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-[rgba(238,243,231,0.06)] bg-[#1c1e19]">
        <div className="section-shell flex flex-col sm:flex-row items-center justify-between py-6 text-xs text-[#a4aaa0]/80 gap-3">
          <p>© 2026 யாழ் • Sylva Living World Edition. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
          <div className="flex items-center gap-2 text-[#a8e063]">
            <Leaf className="size-3.5" />
            <span>Living Green Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
