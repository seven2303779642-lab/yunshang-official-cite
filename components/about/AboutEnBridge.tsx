import type { CSSProperties } from "react";
import AboutEnBridgeCopy from "@/components/about/AboutEnBridgeCopy";
import type { AboutEnBridgeContent } from "@/data/siteContent";

type AboutEnBridgeProps = {
  content: AboutEnBridgeContent;
};

export default function AboutEnBridge({ content }: AboutEnBridgeProps) {
  return (
    <section
      className="about-en-bridge"
      style={
        {
          "--about-en-bridge-cloud": `url("${content.cloudBackgroundImage}")`,
        } as CSSProperties
      }
    >
      <div className="about-en-bridge__inner">
        <div className="about-en-bridge__content">
          <img
            src={content.decorationImage}
            alt=""
            aria-hidden="true"
            className="about-en-bridge__decoration"
            draggable={false}
          />

          <AboutEnBridgeCopy
            titleLines={content.titleLines}
            paragraphs={content.paragraphs}
            signOverlayImage={content.signOverlayImage}
          />
        </div>

        <div className="about-en-bridge__media">
          <img
            src={content.illustrationImage}
            alt={content.illustrationAlt}
            width={648}
            height={1024}
            className="about-en-bridge__illustration"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
