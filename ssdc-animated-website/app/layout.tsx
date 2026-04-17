import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'South-South Development Commission',
  description: 'A redesigned SSDC homepage focused on infrastructure, environmental renewal, and inclusive development across South-South Nigeria.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
