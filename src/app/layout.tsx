import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shalini M - Fullstack Developer',
  description:
    'Professional portfolio of Shalini M, Fullstack Developer at Ascodelabs. Specializing in React, Next.js, Python, and modern web technologies.',
  keywords:
    'fullstack developer, react, nextjs, python, javascript, web development, ascodelabs',
  authors: [{ name: 'Shalini M' }],
  openGraph: {
    title: 'Shalini M - Fullstack Developer',
    description:
      'Professional portfolio showcasing fullstack development expertise',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
