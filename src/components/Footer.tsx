'use client';

import React from 'react';
import { ActiveCategory } from '@/app/types';

interface FooterProps {
  setActiveCategory: (category: ActiveCategory) => void;
  triggerAlert: (moduleName: string) => void;
}

export default function Footer({ setActiveCategory, triggerAlert }: FooterProps) {
  return (
    <footer>
      <div className="container footer-content">
        <p>
          <span>© 2026 Alpha Inc. Built with absolute integrity.</span>
          <span style={{ margin: '0 8px' }}>·</span>
          <button onClick={() => { setActiveCategory('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Why Us?
          </button>
          <span style={{ margin: '0 8px' }}>·</span>
          <button onClick={() => triggerAlert('Platform Terms Matrix')}>Platform Policies</button>
          <span style={{ margin: '0 8px' }}>·</span>
          <button onClick={() => triggerAlert('Legal Compliance Framework')}>Legal Framework</button>
        </p>
      </div>
    </footer>
  );
}