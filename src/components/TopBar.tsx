'use client';

import React from 'react';

interface TopBarProps {
  cartCount: number;
  cartAnimating: boolean;
  triggerAlert: (moduleName: string) => void;
}

export default function TopBar({ cartCount, cartAnimating, triggerAlert }: TopBarProps) {
  return (
    <div className="top-bar">
      <div className="container container-flex">
        {/* Wrapping text fragments clearly prevents SSR text mismatches */}
        <p>
          <span>Hi! </span>
          <button 
            style={{ background: 'none', border: 'none', color: '#0066c0', cursor: 'pointer', padding: 0 }} 
            onClick={() => triggerAlert('Sign In Window')}
          >
            Sign in
          </button>
          <span> or </span>
          <button 
            style={{ background: 'none', border: 'none', color: '#0066c0', cursor: 'pointer', padding: 0 }} 
            onClick={() => triggerAlert('Registration Portal')}
          >
            register
          </button>
        </p>
        <ul className="top-links">
          <li><a href="#" onClick={(e) => { e.preventDefault(); triggerAlert('Daily Deals Corner'); }}>Daily Deals</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); triggerAlert('Help Center System'); }}>Help & Contact</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); triggerAlert('Seller Dashboard'); }}>Sell</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); triggerAlert('Watchlist System'); }}>Watchlist ❤️</a></li>
          <li>
            <a 
              href="#" 
              className={`cart-link ${cartAnimating ? 'cart-animate' : ''}`}
              onClick={(e) => { e.preventDefault(); triggerAlert('Shopping Cart Drawer'); }}
            >
              Cart 🛒 <span id="cart-count">{cartCount}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}