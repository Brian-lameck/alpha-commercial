'use client';

import React from 'react';
import { ActiveCategory } from '@/app/types';

interface NavbarProps {
  activeCategory: ActiveCategory;
  setActiveCategory: (category: ActiveCategory) => void;
  setSubmittedSearchQuery: (query: string) => void;
  setSearchInputValue: (value: string) => void;
}

export default function Navbar({ 
  activeCategory, 
  setActiveCategory, 
  setSubmittedSearchQuery, 
  setSearchInputValue 
}: NavbarProps) {
  
  const categories: Exclude<ActiveCategory, 'all' | 'about'>[] = [
    'electronics', 
    'motors', 
    'fashion', 
    'collectibles'
  ];

  const handleNavClick = (target: ActiveCategory) => {
    setActiveCategory(target);
    setSubmittedSearchQuery('');
    setSearchInputValue('');
  };

  return (
    <nav className="categories-nav">
      <div className="container">
        <ul>
          <li>
            <button 
              className={`nav-link ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleNavClick('all')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${activeCategory === 'about' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Why Alpha?
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <button 
                className={`nav-link ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleNavClick(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}