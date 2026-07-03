"use client";

import { Fragment } from "react";
import { scrollRevealClass, useScrollReveal } from "@/hooks/useScrollReveal";
import type { AboutEnBridgeContent } from "@/data/siteContent";

type AboutEnBridgeCopyProps = {
  titleLines: AboutEnBridgeContent["titleLines"];
  paragraphs: AboutEnBridgeContent["paragraphs"];
  signOverlayImage: AboutEnBridgeContent["signOverlayImage"];
};

export default function AboutEnBridgeCopy({
  titleLines,
  paragraphs,
  signOverlayImage,
}: AboutEnBridgeCopyProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="about-en-bridge__copy">
      <div className={`about-en-bridge__heading ${scrollRevealClass(isVisible)}`}>
        <img
          src={signOverlayImage}
          alt=""
          aria-hidden="true"
          className="about-en-bridge__sign"
          draggable={false}
        />
        <h2 className="about-en-bridge__title">
          {titleLines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </Fragment>
          ))}
        </h2>
      </div>
      <div className={`about-en-bridge__body ${scrollRevealClass(isVisible, "delay-200")}`}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
