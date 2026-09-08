'use client';

import { useEffect, useMemo, useState } from 'react';
import type { SyntheticEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type BookingDraft = {
  checkIn: string;
  checkOut: string;
  guests: string;
  contact: string;
  note: string;
};

type ModelContext = {
  registerTool: (
    tool: {
      name: string;
      title: string;
      description: string;
      inputSchema: Record<string, unknown>;
      annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
      execute: (input: unknown) => unknown;
    },
    options?: { signal?: AbortSignal },
  ) => void | Promise<void>;
};

declare global {
  interface Document {
    readonly modelContext?: ModelContext;
  }
}

const emptyDraft: BookingDraft = {
  checkIn: '',
  checkOut: '',
  guests: '2',
  contact: '',
  note: '',
};

function asBookingDraft(input: unknown): BookingDraft {
  if (!input || typeof input !== 'object') {
    throw new Error('Thông tin yêu cầu không hợp lệ.');
  }

  const value = input as Partial<BookingDraft>;
  const checkIn = typeof value.checkIn === 'string' ? value.checkIn : '';
  const checkOut = typeof value.checkOut === 'string' ? value.checkOut : '';
  const guests = typeof value.guests === 'string' ? value.guests : '2';
  const contact = typeof value.contact === 'string' ? value.contact : '';
  const note = typeof value.note === 'string' ? value.note : '';

  if (!checkIn || !checkOut || !contact.trim()) {
    throw new Error('Cần có ngày đến, ngày đi và thông tin liên hệ.');
  }

  if (checkOut <= checkIn) {
    throw new Error('Ngày đi phải sau ngày đến.');
  }

  return { checkIn, checkOut, guests, contact, note };
}

export function BookingForm() {
  const [draft, setDraft] = useState<BookingDraft>(emptyDraft);
  const [prepared, setPrepared] = useState(false);
  const [error, setError] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const summary = useMemo(
    () =>
      [
        'Yêu cầu nghỉ tại Long Cốc Recycling Home',
        `Ngày đến: ${draft.checkIn || 'chưa chọn'}`,
        `Ngày đi: ${draft.checkOut || 'chưa chọn'}`,
        `Số khách: ${draft.guests || 'chưa nhập'}`,
        `Liên hệ: ${draft.contact || 'chưa nhập'}`,
        `Ghi chú: ${draft.note || 'không có'}`,
      ].join('\n'),
    [draft],
  );

  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;

    const lifecycle = new AbortController();

    void Promise.resolve(
      context.registerTool(
        {
          name: 'prepare_booking_inquiry',
          title: 'Chuẩn bị yêu cầu đặt phòng',
          description:
            'Điền và mở bản xem trước yêu cầu đặt phòng. Thao tác này chưa gửi hoặc xác nhận đặt phòng.',
          inputSchema: {
            type: 'object',
            properties: {
              checkIn: { type: 'string', description: 'Ngày đến dạng YYYY-MM-DD' },
              checkOut: { type: 'string', description: 'Ngày đi dạng YYYY-MM-DD' },
              guests: { type: 'string', description: 'Số lượng khách' },
              contact: { type: 'string', description: 'Số điện thoại, email hoặc Zalo' },
              note: { type: 'string', description: 'Nhu cầu hoặc câu hỏi thêm' },
            },
            required: ['checkIn', 'checkOut', 'contact'],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: false },
          execute(input) {
            const nextDraft = asBookingDraft(input);
            setDraft(nextDraft);
            setError('');
            setPrepared(true);
            return { status: 'prepared', submitted: false };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => undefined);

    return () => lifecycle.abort();
  }, []);

  function updateField(field: keyof BookingDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
    setPrepared(false);
    setCopyStatus('');
  }

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (draft.checkOut <= draft.checkIn) {
      setError('Ngày đi cần sau ngày đến.');
      return;
    }

    setPrepared(true);
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus('Đã sao chép nội dung.');
    } catch {
      setCopyStatus('Không thể sao chép tự động. Bạn có thể chọn và sao chép nội dung bên trên.');
    }
  }

  return (
    <div className="booking-shell">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <Label htmlFor="check-in">Ngày đến</Label>
            <Input
              id="check-in"
              type="date"
              required
              value={draft.checkIn}
              onChange={(event) => updateField('checkIn', event.target.value)}
            />
          </div>
          <div className="form-field">
            <Label htmlFor="check-out">Ngày đi</Label>
            <Input
              id="check-out"
              type="date"
              required
              min={draft.checkIn || undefined}
              value={draft.checkOut}
              onChange={(event) => updateField('checkOut', event.target.value)}
              aria-describedby={error ? 'booking-error' : undefined}
              aria-invalid={Boolean(error)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field form-field-small">
            <Label htmlFor="guests">Số khách</Label>
            <Input
              id="guests"
              type="number"
              min="1"
              max="20"
              inputMode="numeric"
              required
              value={draft.guests}
              onChange={(event) => updateField('guests', event.target.value)}
            />
          </div>
          <div className="form-field">
            <Label htmlFor="contact">Điện thoại, email hoặc Zalo</Label>
            <Input
              id="contact"
              type="text"
              autoComplete="tel"
              placeholder="Thông tin để homestay phản hồi"
              required
              value={draft.contact}
              onChange={(event) => updateField('contact', event.target.value)}
            />
          </div>
        </div>

        <div className="form-field">
          <Label htmlFor="note">Bạn đang hình dung chuyến đi thế nào?</Label>
          <Textarea
            id="note"
            rows={4}
            placeholder="Nhu cầu về phòng, giờ đến dự kiến hoặc câu hỏi của bạn…"
            value={draft.note}
            onChange={(event) => updateField('note', event.target.value)}
          />
        </div>

        {error ? <p className="form-error" id="booking-error" role="alert">{error}</p> : null}

        <Button className="booking-submit" type="submit" size="lg">
          Tạo yêu cầu đặt phòng <span aria-hidden="true">↗</span>
        </Button>
        <p className="form-note">
          Đây là bước chuẩn bị yêu cầu, chưa phải xác nhận phòng. Kênh gửi chính thức sẽ được kết nối sau khi có thông tin liên hệ.
        </p>
      </form>

      <aside className={`booking-preview${prepared ? ' is-ready' : ''}`} aria-live="polite">
        <p className="preview-kicker">Bản nháp của bạn</p>
        {prepared ? (
          <>
            <h3>Sẵn sàng để gửi</h3>
            <pre>{summary}</pre>
            <Button type="button" variant="outline" onClick={copySummary}>Sao chép nội dung</Button>
            {copyStatus ? <p className="copy-status">{copyStatus}</p> : null}
          </>
        ) : (
          <>
            <h3>Một lời nhắn ngắn là đủ.</h3>
            <p>Chọn ngày, số khách và để lại cách liên hệ. Homestay sẽ kiểm tra rồi phản hồi khi kênh gửi được kết nối.</p>
          </>
        )}
      </aside>
    </div>
  );
}
