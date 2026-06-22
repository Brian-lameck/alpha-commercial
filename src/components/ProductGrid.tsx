'use client';

import React, { MouseEvent } from 'react';
import { Product, ActiveCategory } from '@/types';

interface ProductGridProps {
  visibleProducts: Product[];
  activeCategory: ActiveCategory;
  pulseId: number | null;
  handlePlaceBid: (id: number) => void;
  handleAddToCart: () => void;
  triggerAlert: (moduleName: string) => void;
}

export default function ProductGrid({ 
  visibleProducts, 
  activeCategory, 
  pulseId, 
  handlePlaceBid, 
  handleAddToCart, 
  triggerAlert 
}: ProductGridProps) {
  
  return (
    <section className="feed-section">
      <h3 className="section-title">
        {activeCategory === 'all' 
          ? 'Trending Discoveries' 
          : `Trending Discoveries inside ${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}
      </h3>
      
      <div className="products-grid">
        {visibleProducts.length === 0 ? (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: '#777' }}>
            No assets found matching parameters.
          </p>
        ) : (
          visibleProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div>
                <img src={product.image} alt={product.title} className="product-image" />
                <h4 className="product-title">
                  <a 
                    href="#" 
                    onClick={(e: MouseEvent) => { e.preventDefault(); triggerAlert('Product Configuration Details'); }}
                  >
                    {product.title}
                  </a>
                </h4>
                
                {product.type === 'bid' ? (
                  <>
                    <div className="buying-type">Auction Listing</div>
                    <div className="product-meta">{(product.bids ?? 0)} verified bids · {product.shipping}</div>
                  </>
                ) : (
                  <>
                    <div className="buying-type">Buy It Now</div>
                    <div className="product-meta">{product.shipping}</div>
                  </>
                )}
              </div>
              
              <div>
                <div className={`product-price ${pulseId === product.id ? 'pulse-glow' : ''}`}>
                  ${product.price.toFixed(2)}
                </div>
                {product.type === 'bid' ? (
                  <button className="action-btn btn-bid" onClick={() => handlePlaceBid(product.id)}>
                    Place Bid
                  </button>
                ) : (
                  <button className="action-btn btn-buy" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}