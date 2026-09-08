'use client';

import { useEffect, useState } from 'react';

type StoryDialogProps = {
  caption: string;
  kicker: string;
  number: string;
  title: string;
};

export function StoryDialog({ caption, kicker, number, title }: StoryDialogProps) {
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
      <button type="button" className="experience-card-copy story-dialog-trigger" onClick={() => setIsOpen(true)}>
        <p>{number} · {kicker}</p>
        <h3>{title}</h3>
        <span>Đọc câu chuyện <b aria-hidden="true">↗</b></span>
      </button>
      {isOpen && (
        <dialog open className="story-dialog" aria-label={title}>
          <article className="story-dialog-content">
            <button type="button" className="story-dialog-close" onClick={() => setIsOpen(false)} aria-label="Đóng câu chuyện">×</button>
            <p className="story-dialog-number">{number} · {kicker}</p>
            <h2>{title}</h2>
            <div className="story-dialog-caption">
              {caption.trim().split(/\n\s*\n/).map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>)}
            </div>
          </article>
        </dialog>
      )}
    </>
  );
}
