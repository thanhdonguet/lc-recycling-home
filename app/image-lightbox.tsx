'use client';

import { useEffect, useState } from 'react';

type ImageLightboxProps = {
  alt: string;
  className: string;
  src: string;
};

export function ImageLightbox({ alt, className, src }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <button type="button" className={`${className} image-link`} onClick={() => setIsOpen(true)} aria-label={`Xem ${alt} kích thước lớn`}>
      </button>
      {isOpen && (
        <dialog open className="image-lightbox" aria-label={alt}>
          <div className="image-lightbox-content">
            <button type="button" className="image-lightbox-close" onClick={() => setIsOpen(false)} aria-label="Đóng ảnh">×</button>
            {/* oxlint-disable-next-line next/no-img-element */}
            <img className="image-lightbox-image" src={src} alt={alt} />
          </div>
        </dialog>
      )}
    </>
  );
}
