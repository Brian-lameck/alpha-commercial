import React, { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Alpha | Premium Global Marketplace (TS)',
  description: 'Next.js Adaptive Trading Platform Framework Prototype with TypeScript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}