import type { AboutEnVideoContent } from "@/data/siteContent";

type AboutEnVideoProps = {
  content: AboutEnVideoContent;
};

export default function AboutEnVideo({ content }: AboutEnVideoProps) {
  return (
    <section className="about-en-video" aria-label="Yunshang brand video">
      <div className="about-en-video__frame">
        <video
          className="about-en-video__player"
          src={content.src}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          controlsList="nodownload"
          preload="metadata"
        />
      </div>
    </section>
  );
}
