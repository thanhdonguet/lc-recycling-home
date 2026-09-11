'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type TourStep = {
  description: string;
  time: string;
  title: string;
};

type TourDialogProps = {
  eyebrow: string;
  note?: string;
  steps: TourStep[];
  time: string;
  title: string;
};

export function TourDialog({ eyebrow, note, steps, time, title }: TourDialogProps) {
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
      <button type="button" className="tour-card" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
        <span className="tour-card-eyebrow">{eyebrow}</span>
        <span className="tour-card-title">{title}</span>
        <span className="tour-card-meta"><b>{time}</b><b>350.000đ / khách</b></span>
        <span className="tour-card-link">Xem lịch trình <b aria-hidden="true">↗</b></span>
      </button>

      {isOpen && createPortal(
        <dialog open className="tour-dialog" aria-label={`Lịch trình ${title}`}>
          <button type="button" className="dialog-backdrop" onClick={() => setIsOpen(false)} aria-label="Đóng lịch trình tour" />
          <article className="tour-dialog-content">
            <button type="button" className="tour-dialog-close" onClick={() => setIsOpen(false)} aria-label="Đóng lịch trình tour">×</button>
            <p className="tour-dialog-eyebrow">{eyebrow} · Tour trải nghiệm 2 giờ</p>
            <h2>{title}</h2>
            <div className="tour-dialog-meta">
              <span>{time}</span>
              <span>350.000đ / khách</span>
              <span>Hướng dẫn viên địa phương</span>
            </div>
            <ol className="tour-timeline">
              {steps.map((step) => (
                <li key={`${step.time}-${step.title}`}>
                  <time>{step.time}</time>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            {note && <p className="tour-dialog-note"><strong>Lưu ý:</strong> {note}</p>}
            <p className="tour-dialog-transport">Lựa chọn di chuyển: xe ba bánh trải nghiệm, xe máy hoặc trekking.</p>
            <a className="button button-primary tour-zalo-link" href="https://zalo.me/0388005474" target="_blank" rel="noreferrer">
              Tư vấn tour qua Zalo <span aria-hidden="true">↗</span>
            </a>
          </article>
        </dialog>,
        document.body,
      )}
    </>
  );
}
