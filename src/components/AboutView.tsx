import React from 'react';

export default function AboutView() {
  return (
    <section className="about-container fade-up">
      <div className="about-header">
        <h2>Why Millions Choose Alpha</h2>
        <p className="subtitle">Setting a brand new standard for transparency, fairness, and speed in global commerce.</p>
      </div>
      
      <hr className="section-divider" />

      <div className="about-hero-block">
        <div className="about-story">
          <h3>Evolving The Digital Auction House</h3>
          <p>Alpha was forged out of a distinct economic need: the modern internet lost its sense of market community. Legacy commercial storefronts have evolved into bloated, sterile corporate catalogs, while standard direct auction sites are plagued by automated sniper bots, invisible price inflation, and unverified sellers.</p>
          <blockquote>
            "We didn't just build another storefront. We re-engineered the mechanics of human-to-human trade to ensure everybody gets an honest deal."
          </blockquote>
          <p>At Alpha, we treat every transaction as a partnership. By combining high-speed cloud transaction systems with ironclad item validation protocols, we protect your wallet, your time, and your business growth.</p>
        </div>
      </div>

      <div className="pillars-grid">
        <div className="pillar-card">
          <div className="pillar-icon"></div>
          <h4>Alpha-Shield Escrow</h4>
          <p>Funds remain locked securely in stasis until your cargo safely docks, parses inspections, and meets absolute accuracy markers. Complete peace of mind.</p>
        </div>
        <div className="pillar-card">
          <div className="pillar-icon">⚡</div>
          <h4>Anti-Sniper Fair Play</h4>
          <p>Our proprietary dynamic-extension engine elongates tight bid wars by 60 seconds if actions trigger right at expiration. No bot hijacking allowed.</p>
        </div>
        <div className="pillar-card">
          <div className="pillar-icon"></div>
          <h4>Curated Provenance</h4>
          <p>High-value tech assets, luxury apparel, and rare collectible pieces require strict certified verifications before passing validation filters to hit our public feed grid.</p>
        </div>
      </div>
    </section>
  );
}