'use client';

import React, { ChangeEvent, KeyboardEvent } from 'react';
import { ActiveCategory } from '@/app/types';

interface HeaderProps {
  searchInputValue: string;
  setSearchInputValue: (value: string) => void;
  activeCategory: ActiveCategory;
  handleCategorySelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSearchSubmit: () => void;
  handleLogoClick: () => void;
}

export default function Header({ 
  searchInputValue, 
  setSearchInputValue, 
  activeCategory, 
  handleCategorySelectChange, 
  handleSearchSubmit, 
  handleLogoClick 
}: HeaderProps) {
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <header className="main-header">
      <div className="container header-flex">
        <div className="logo" onClick={handleLogoClick}>
          <span className="l-a">A</span><span className="l-l">l</span><span className="l-p">p</span><span className="l-h">h</span><span className="l-a2">a</span>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for anything..."
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <select 
            value={activeCategory === 'about' ? 'all' : activeCategory} 
            onChange={handleCategorySelectChange}
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="motors">Motors</option>
            <option value="fashion">Fashion</option>
            <option value="collectibles">Collectibles</option>
          </select>
          <button onClick={handleSearchSubmit}>Search</button>
        </div>
      </div>
    </header>
  );
}