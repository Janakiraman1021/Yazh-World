"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useI18n } from "../i18n/context";
import { localeList, localeNames, type Locale } from "../i18n/types";

export function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="focus-ring inline-flex items-center gap-2 h-9 px-3 rounded-[12px] border border-white/15 bg-white/[0.06] text-xs font-medium text-white/90 shadow-sm transition hover:bg-white/[0.12] hover:text-white cursor-pointer select-none"
        aria-label="Select Language"
      >
        <Globe className="size-3.5 text-[#a8e063] shrink-0" aria-hidden="true" />
        <span className="font-semibold text-white tracking-tight">{localeNames[locale]}</span>
        <ChevronDown
          className={`size-3 text-white/50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Popover Dropdown matching requested visual design */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 top-full z-50 mt-2 w-[240px] rounded-[20px] border border-white/12 bg-[#1b1e17]/95 p-3.5 shadow-[0_22px_50px_rgba(0,0,0,0.65),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between px-1.5 pb-2.5 border-b border-white/[0.08] mb-2">
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#a8e063] uppercase">
              CHOOSE LANGUAGE
            </span>
            <span className="text-[10px] font-mono font-medium tracking-wider text-[#7c8177] uppercase">
              6 LANGUAGES
            </span>
          </div>

          {/* Options List */}
          <div className="space-y-1">
            {localeList.map((item) => {
              const isSelected = item.code === locale;
              return (
                <button
                  key={item.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setLocale(item.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-150 cursor-pointer text-left ${
                    isSelected
                      ? "border border-[#a8e063]/50 bg-[#a8e063]/12 text-white shadow-sm"
                      : "border border-transparent text-white/80 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-sm font-semibold tracking-tight text-white">
                      {item.native}
                    </span>
                    <span className="text-xs text-[#8c9285] font-normal">
                      {item.sub}
                    </span>
                  </div>
                  {isSelected && (
                    <Check
                      className="size-4 text-[#a8e063] shrink-0"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
