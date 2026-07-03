"use client";

import { useCallback, useState } from "react";

const SLIDES = [
  {
    src: "/images/about/slides/slide-01.jpg",
    alt: "Yunshang brand gallery 1",
  },
  {
    src: "/images/about/slides/slide-02.jpg",
    alt: "Yunshang brand gallery 2",
  },
  {
    src: "/images/about/slides/slide-03.jpg",
    alt: "Yunshang brand gallery 3",
  },
  {
    src: "/images/about/slides/slide-04.jpg",
    alt: "Yunshang brand gallery 4",
  },
];

type GalleryThumbsProps = {
  currentIndex: number;
  onSelect: (index: number) => void;
};

function GalleryThumbs({ currentIndex, onSelect }: GalleryThumbsProps) {
  return (
    <div className="about-gallery-thumbs">
      {SLIDES.map((slide, index) => (
        <button
          key={slide.src}
          type="button"
          className={`about-gallery-thumb ${index === currentIndex ? "about-gallery-thumb--active" : ""}`}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentIndex ? "true" : undefined}
        >
          <img src={slide.src} alt="" draggable={false} />
        </button>
      ))}
    </div>
  );
}

export default function AboutGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % SLIDES.length);
  }, []);

  const handleSelect = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section className="about-gallery" aria-label="Brand gallery">
      <div className="about-gallery-frame">
        <div className="about-gallery-media">
          <div className="about-gallery-stage">
            {SLIDES.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={`about-gallery-slide ${index === currentIndex ? "about-gallery-slide--active" : ""}`}
                draggable={false}
              />
            ))}
          </div>

          <button
            type="button"
            className="about-gallery-arrow about-gallery-arrow--prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            type="button"
            className="about-gallery-arrow about-gallery-arrow--next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            ›
          </button>

          <GalleryThumbs currentIndex={currentIndex} onSelect={handleSelect} />
        </div>
      </div>
    </section>
  );
}
