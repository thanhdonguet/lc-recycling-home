'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const quickQuestions = [
  {
    question: 'Giá phòng như thế nào?',
    answer: 'Giá ưu đãi hiện từ 280.000đ/giường tại nhà sàn Ao. Bungalow đồi chè từ 1.200.000đ/2 khách; nhà cọ từ 640.000đ/2 khách. Giá đã gồm ăn sáng.',
  },
  {
    question: 'Đi nhóm đông có phù hợp không?',
    answer: 'Có. Nhà sàn Ao phù hợp đoàn tới 30 khách, còn nhà sàn Đồi dành cho nhóm 10–12 khách thuê nguyên căn.',
  },
  {
    question: 'Long Cốc Recycling Home ở đâu?',
    answer: 'Homestay nằm tại đồi chè Long Cốc, Phú Thọ. Bạn có thể mở mục Vị trí để xem chỉ đường chính xác trên Google Maps.',
  },
  {
    question: 'Làm sao để đặt phòng?',
    answer: 'Bạn có thể gửi yêu cầu ở mục Đặt phòng. Để kiểm tra phòng trống và nhận tư vấn nhanh hơn, hãy nhắn Zalo cho Long Cốc.',
  },
];

export function GuestChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateBackToTopVisibility = () => setShowBackToTop(window.scrollY > 360);
    updateBackToTopVisibility();
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateBackToTopVisibility);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const openChat = () => {
    setSelectedQuestion(null);
    setIsOpen(true);
  };

  return (
    <>
      <div className="floating-actions" aria-label="Hỗ trợ nhanh">
        {showBackToTop && (
          <button type="button" className="floating-button back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span aria-hidden="true">↑</span>
            <span>Lên đầu trang</span>
          </button>
        )}
        <button type="button" className="floating-button chat-button" onClick={openChat} aria-haspopup="dialog">
          <span className="chat-bubble-icon" aria-hidden="true">●●●</span>
          <span>Nhắn tin ngay</span>
        </button>
      </div>

      {isOpen && createPortal(
        <dialog open className="guest-chat-dialog" aria-label="Trợ lý Long Cốc">
          <button type="button" className="dialog-backdrop" onClick={() => setIsOpen(false)} aria-label="Đóng trợ lý Long Cốc" />
          <section className="guest-chat-panel">
            <button type="button" className="guest-chat-close" onClick={() => setIsOpen(false)} aria-label="Đóng trợ lý Long Cốc">×</button>
            <p className="guest-chat-kicker">Long Cốc Recycling Home</p>
            <h2>Chào bạn.</h2>
            <p className="guest-chat-intro">Chọn một câu hỏi để xem thông tin nhanh.</p>
            <div className="guest-chat-questions">
              {quickQuestions.map(({ question }, index) => (
                <button type="button" key={question} className={selectedQuestion === index ? 'is-selected' : ''} onClick={() => setSelectedQuestion(index)}>
                  {question}
                  <span aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
            {selectedQuestion !== null && (
              <div className="guest-chat-answer" aria-live="polite">
                <p>{quickQuestions[selectedQuestion].answer}</p>
              </div>
            )}
            <div className="guest-chat-zalo">
              <p>Cần hỏi thêm thông tin khác?</p>
              <a href="https://zalo.me/0388005474" target="_blank" rel="noreferrer">Nhắn Zalo Long Cốc <span aria-hidden="true">↗</span></a>
            </div>
          </section>
        </dialog>,
        document.body,
      )}
    </>
  );
}
