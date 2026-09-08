'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';

type ImageLightboxProps = {
  alt: string;
  className: string;
  src: string;
  style?: CSSProperties;
};

export function ImageLightbox({ alt, className, src, style }: ImageLightboxProps) {
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
      <button type="button" className={`${className} image-link`} style={style} onClick={() => setIsOpen(true)} aria-label={`Xem ${alt} kích thước lớn`}>
      </button>
      {isOpen && createPortal(
        <dialog open className="image-lightbox" aria-label={alt}>
          <button type="button" className="dialog-backdrop" onClick={() => setIsOpen(false)} aria-label="Đóng ảnh" />
          <div className="image-lightbox-content">
            <button type="button" className="image-lightbox-close" onClick={() => setIsOpen(false)} aria-label="Đóng ảnh">×</button>
            {/* oxlint-disable-next-line next/no-img-element */}
            <img className="image-lightbox-image" src={src} alt={alt} />
          </div>
        </dialog>,
        document.body,
      )}
    </>
  );
}
