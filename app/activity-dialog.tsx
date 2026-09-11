'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const activities = [
  {
    name: 'Workshop tái chế chai nhựa, chai thủy tinh và vẽ trang trí',
    time: '10:00 hoặc 14:00 hằng ngày',
    note: 'Miễn phí',
  },
  {
    name: 'Câu cá tại hồ',
    detail: 'Vui lòng đặt lịch trước 1 tiếng để Home chuẩn bị cần và mồi câu.',
    time: '07:00 – 18:00 hằng ngày',
    note: 'Miễn phí',
  },
  {
    name: 'Hái chè và tìm hiểu trà đặc sản Long Cốc',
    detail: 'Mặc trang phục cô thôn nữ và học làm mocktail từ lá trà.',
    time: '09:30 hằng ngày',
    note: 'Miễn phí',
  },
  {
    name: 'Workshop làm xôi ngũ sắc',
    detail: 'Tìm hiểu cách tạo màu từ các loại củ và lá trong vườn.',
    time: '09:00 thứ Tư và thứ Sáu hằng tuần',
    note: 'Miễn phí',
  },
  {
    name: 'Làm bánh waffle cùng trái cây theo mùa',
    time: '08:00 – 09:00 hằng ngày',
    note: 'Miễn phí',
  },
  {
    name: 'Khám phá cung đường ngắm đồi chè',
    detail: 'Điểm ngắm bình minh, hoàng hôn và Dải Ngân Hà.',
    time: '2 giờ · xem chi tiết tại mục Tour 2H',
    note: 'Có thu phí xe và hướng dẫn viên',
  },
];

export function ActivityDialog() {
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
      <button type="button" className="activity-floating-button" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
        <span className="activity-floating-icon" aria-hidden="true">✦</span>
        <span className="activity-button-long">Hoạt động hấp dẫn</span>
        <span className="activity-button-short">Hoạt động hấp dẫn</span>
      </button>

      {isOpen && createPortal(
        <dialog open className="activity-dialog" aria-label="Hoạt động hấp dẫn tại Long Cốc Recycling Home">
          <button type="button" className="dialog-backdrop" onClick={() => setIsOpen(false)} aria-label="Đóng danh sách hoạt động" />
          <section className="activity-dialog-panel">
            <button type="button" className="activity-dialog-close" onClick={() => setIsOpen(false)} aria-label="Đóng danh sách hoạt động">×</button>
            <p className="activity-dialog-kicker">Long Cốc Recycling Home</p>
            <h2>Hoạt động hấp dẫn<br /><em>tại Homestay.</em></h2>
            <p className="activity-dialog-intro">Chọn một khoảng thời gian phù hợp để trải nghiệm Long Cốc theo cách của bạn.</p>
            <ol className="activity-list">
              {activities.map((activity, index) => (
                <li key={activity.name}>
                  <span className="activity-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="activity-copy">
                    <h3>{activity.name}</h3>
                    {activity.detail && <p>{activity.detail}</p>}
                  </div>
                  <div className="activity-meta">
                    <time>{activity.time}</time>
                    <strong className={activity.note === 'Miễn phí' ? 'is-free' : undefined}>{activity.note}</strong>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </dialog>,
        document.body,
      )}
    </>
  );
}
