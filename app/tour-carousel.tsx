'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type TourImage = {
  alt: string;
  label: string;
  src: string;
};

type TourCarouselProps = {
  images: TourImage[];
};

export function TourCarousel({ images }: TourCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused || images.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [images.length, isPaused]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxIndex(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [lightboxIndex]);

  if (!images.length) return null;

  const activeImage = lightboxIndex === null ? null : images[lightboxIndex];

  return (
    <div
      className="tour-carousel"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      aria-roledescription="carousel"
      aria-label="Ảnh tour trải nghiệm Long Cốc"
    >
      <div className="tour-carousel-viewport">
        <div className="tour-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {images.map((image, index) => (
            <button
              type="button"
              className="tour-carousel-slide"
              key={image.src}
              onClick={() => setLightboxIndex(index)}
              tabIndex={index === activeIndex ? 0 : -1}
              aria-label={`Mở ảnh lớn: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </div>
      </div>

      <div className="tour-carousel-controls" aria-label="Chọn ảnh tour">
        {images.map((image, index) => (
          <button
            type="button"
            className={index === activeIndex ? 'is-active' : undefined}
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
          >
            <span>{String(index + 1).padStart(2, '0')}</span> {image.label}
          </button>
        ))}
      </div>

      {activeImage && createPortal(
        <dialog open className="image-lightbox" aria-label={activeImage.alt}>
          <button type="button" className="dialog-backdrop" onClick={() => setLightboxIndex(null)} aria-label="Đóng ảnh" />
          <div className="image-lightbox-content">
            <button type="button" className="image-lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Đóng ảnh">×</button>
            <img className="image-lightbox-image" src={activeImage.src} alt={activeImage.alt} />
          </div>
        </dialog>,
        document.body,
      )}
    </div>
  );
}
