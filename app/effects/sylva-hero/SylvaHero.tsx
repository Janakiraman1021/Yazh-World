"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useI18n } from "../../i18n/context";
import "./styles.css";

export const SYLVA_HERO_VARIANTS = ["living-green", "sakura-sunset", "maple-autumn", "sequoia-mist"] as const;
export type SylvaHeroVariant = (typeof SYLVA_HERO_VARIANTS)[number];

export type PageTypographyProps = {
  headingFont?: string;
  bodyFont?: string;
  headingWeight?: string;
  bodyWeight?: string;
  primaryColor?: string;
  headingSize?: number;
  bodySize?: number;
  headingLetterSpacing?: number;
};

export type SylvaHeroProps = PageTypographyProps & {
  variant?: SylvaHeroVariant;
  className?: string;
  style?: CSSProperties;
};

const SYLVA_HERO_BASE_URL = "/landing-pages/inner-green-3d.html";
const URL_FRAME_SANDBOX = "allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts";

export function SylvaHero({
  variant = "living-green",
  className = "",
  style,
  headingFont = "lexend",
  bodyFont = "lexend",
  headingWeight = "300",
  bodyWeight = "300",
  primaryColor = "#ffffff",
  headingSize = 63,
  bodySize = 16.5,
  headingLetterSpacing = -0.006,
}: SylvaHeroProps) {
  const { locale } = useI18n();
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready && frameRef.current && frameRef.current.contentWindow) {
      try {
        frameRef.current.contentWindow.postMessage({ type: "YAAZH_SET_LOCALE", locale }, "*");
      } catch {
        // ignore
      }
    }
  }, [locale, ready]);

  function handleFrameLoad() {
    setReady(true);
    if (frameRef.current && frameRef.current.contentWindow) {
      try {
        frameRef.current.contentWindow.postMessage({ type: "YAAZH_SET_LOCALE", locale }, "*");
      } catch {
        // ignore
      }
    }
  }

  return (
    <div
      className={`sylva-hero-frame ${className}`}
      data-state={ready ? "ready" : "loading"}
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "700px",
        overflow: "hidden",
        background: "#383b34",
        ...style,
      }}
    >
      <iframe
        ref={frameRef}
        title="Yaazh - Into the living world"
        src={SYLVA_HERO_BASE_URL}
        sandbox={URL_FRAME_SANDBOX}
        loading="eager"
        onLoad={handleFrameLoad}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#383b34",
        }}
      />
    </div>
  );
}

export default SylvaHero;
