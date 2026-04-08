import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tam Coc Scenic Area',
  description:
    'Landing page giới thiệu Tam Cốc - Bích Động với hành trình trải nghiệm, bảng giá, sự kiện và thông tin liên hệ.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
