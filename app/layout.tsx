import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Long Cốc Recycling Home | Homestay trên đồi chè',
  description:
    'Một homestay tái chế giữa đồi chè Long Cốc — nơi nghỉ chậm, gần thiên nhiên và những vật liệu được trao vòng đời mới.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
