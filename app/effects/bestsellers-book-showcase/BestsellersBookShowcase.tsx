"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

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

export type BestsellersBookShowcaseProps = PageTypographyProps & {
  className?: string;
  style?: CSSProperties;
};

const BESTSELLERS_BASE_URL = "/landing-pages/bestsellers-book-showcase.html";
const URL_FRAME_SANDBOX = "allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts";

export function BestsellersBookShowcase({
  className = "",
  style,
  headingFont = "iowan-old-style",
  bodyFont = "iowan-old-style",
  headingWeight = "500",
  bodyWeight = "400",
  primaryColor = "#a8e063",
  headingSize = 325,
  bodySize = 17,
  headingLetterSpacing = -0.085,
}: BestsellersBookShowcaseProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);

  return (
    <div
      className={`bestsellers-book-frame ${className}`}
      data-state={ready ? "ready" : "loading"}
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "750px",
        overflow: "hidden",
        background: "#23261f",
        ...style,
      }}
    >
      <iframe
        ref={frameRef}
        title="யாழ் — தயாரிப்புகள் அரங்கம் • Living World Showcase"
        src={BESTSELLERS_BASE_URL}
        sandbox={URL_FRAME_SANDBOX}
        loading="eager"
        onLoad={() => {
          setReady(true);
        }}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#23261f",
        }}
      />
    </div>
  );
}

export default BestsellersBookShowcase;
