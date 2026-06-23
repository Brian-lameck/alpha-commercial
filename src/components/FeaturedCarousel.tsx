'use client';

import React, { useState } from 'react';
import { Product } from '@/app/types';

interface FeaturedCarouselProps {
  products: Product[];
  triggerAlert: (moduleName: string) => void;
}

export default function FeaturedCarousel({ products, triggerAlert }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Filter out a subset of items to show specifically in our spotlight deck
  const carouselItems = products.slice(0, 5); 
  const totalItems = carouselItems.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  return (
    <section className="carousel-section fade-up">
      <div className="carousel-header">
        <div className="title-area">
          <h3 className="section-title">Spotlight Assets (RTL Stream)</h3>
          {/* Dynamic Number Change Indicator */}
          <span className="index-badge">
            Asset [ {currentIndex + 1} / {totalItems} ]
          </span>
        </div>
        
        <div className="carousel-controls">
          <button className="control-btn" onClick={handlePrev} aria-label="Previous Asset">◀</button>
          <button className="control-btn" onClick={handleNext} aria-label="Next Asset">▶</button>
        </div>
      </div>

      <div className="carousel-window">
        <div 
          className="carousel-track-rtl"
          style={{ transform: `translateX(${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div className="carousel-slide-card" key={`carousel-${item.id}`}>
              <img src={item.image} alt={item.title} className="slide-image" />
              <div className="slide-details">
                <span className="slide-tag">{item.category.toUpperCase()}</span>
                <h4>
                  <a href="#" onClick={(e) => { e.preventDefault(); triggerAlert('Carousel Deep Link Window'); }}>
                    {item.title}
                  </a>
                </h4>
                <div className="slide-price">${item.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}