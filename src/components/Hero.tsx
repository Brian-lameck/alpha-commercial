'use client';

import React from 'react';

interface HeroProps {
  triggerAlert: (moduleName: string) => void;
}

export default function Hero({ triggerAlert }: HeroProps) {
  return (
    <section className="hero-banner fade-up">
      <div className="hero-text">
        <h2>The Future of Smart Auctions.</h2>
        <p>Experience real-time verified bidding and direct logistics with Alpha premium protection.</p>
        <button className="btn-secondary" onClick={() => triggerAlert('Live Deal Streams')}>
          Explore Live Events
        </button>
      </div>
    </section>
  );
}