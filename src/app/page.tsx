'use client';

import React, { useState, useMemo, useEffect, ChangeEvent } from 'react';
import { Product, ActiveCategory } from '@/app/types';

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import AboutView from '@/components/AboutView';
import Footer from '@/components/Footer';

const INITIAL_PRODUCTS: Product[] = [
  { id: 1, title: 'AlphaBook Pro 14" M3 Laptop - 512GB SSD Space Gray', category: 'electronics', price: 1249.99, type: 'buy', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60', shipping: 'Free Shipping', bids: 0 },
  { id: 2, title: 'Vintage Mechanical Chronograph Wristwatch - Original Condition', category: 'collectibles', price: 182.50, type: 'bid', bids: 14, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=60', shipping: '$8.50 Shipping' },
  { id: 3, title: 'Alpha Carbon Fiber Formula Steering Wheel - Universal Fit', category: 'motors', price: 489.00, type: 'buy', image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=500&auto=format&fit=crop&q=60', shipping: '$18.50 Tracked Shipping', bids: 0 },
  { id: 4, title: 'Premium Retro Waxed Leather Bomber Jacket - Antique Brown', category: 'fashion', price: 145.00, type: 'buy', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60', shipping: 'Free Shipping', bids: 0 },
  { id: 5, title: 'Alpha Pods Max Wireless Noise-Cancelling Headphones - Silver', category: 'electronics', price: 340.00, type: 'bid', bids: 22, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60', shipping: 'Free Shipping' },
  { id: 6, title: 'Rare Holographic First Edition Sky-Dragon Card (PSA Grade 9)', category: 'collectibles', price: 1450.00, type: 'bid', bids: 41, image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60', shipping: '$12.00 Insured Shipping' },
  { id: 7, title: 'Minimalist Executive Professional Waterproof Backpack', category: 'fashion', price: 65.00, type: 'buy', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60', shipping: '$4.99 Shipping', bids: 0 }
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartAnimating, setCartAnimating] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('all');
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState<string>('');
  const [pulseId, setPulseId] = useState<number | null>(null);

  const triggerAlert = (moduleName: string) => {
    alert(`⚡ Alpha System Notification: The [${moduleName}] module prototype alert triggered successfully.`);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setCartAnimating(true);
  };

  useEffect(() => {
    if (!cartAnimating) return;
    const timer = setTimeout(() => setCartAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [cartAnimating]);

  const handlePlaceBid = (productId: number) => {
    setProducts(prev => 
      prev.map(p => p.id === productId ? { ...p, bids: (p.bids ?? 0) + 1, price: p.price + 5.00 } : p)
    );
    setPulseId(productId);
  };

  useEffect(() => {
    if (pulseId === null) return;
    const timer = setTimeout(() => setPulseId(null), 800);
    return () => clearTimeout(timer);
  }, [pulseId]);

  const visibleProducts = useMemo(() => {
    return products.filter(product => {
      const matchSearch = product.title.toLowerCase().includes(submittedSearchQuery.toLowerCase().trim());
      const matchCategory = activeCategory === 'all' || activeCategory === 'about' || product.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [products, activeCategory, submittedSearchQuery]);

  const handleCategorySelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ActiveCategory;
    setActiveCategory(value);
    setSubmittedSearchQuery('');
    setSearchInputValue('');
  };

  const handleSearchSubmit = () => {
    if (activeCategory === 'about') {
      setActiveCategory('all');
    }
    setSubmittedSearchQuery(searchInputValue);
  };

  const handleLogoClick = () => {
    setActiveCategory('all');
    setSearchInputValue('');
    setSubmittedSearchQuery('');
  };

  return (
    <>
      <TopBar cartCount={cartCount} cartAnimating={cartAnimating} triggerAlert={triggerAlert} />
      
      <Header 
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        activeCategory={activeCategory}
        handleCategorySelectChange={handleCategorySelectChange}
        handleSearchSubmit={handleSearchSubmit}
        handleLogoClick={handleLogoClick}
      />
      
      <Navbar 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setSubmittedSearchQuery={setSubmittedSearchQuery}
        setSearchInputValue={setSearchInputValue}
      />

      <main className="container content-frame">
        {activeCategory !== 'about' ? (
          <div className="view-panel active">
            <Hero triggerAlert={triggerAlert} />
            <ProductGrid 
              visibleProducts={visibleProducts}
              activeCategory={activeCategory}
              pulseId={pulseId}
              handlePlaceBid={handlePlaceBid}
              handleAddToCart={handleAddToCart}
              triggerAlert={triggerAlert}
            />
          </div>
        ) : (
          <div className="view-panel active">
            <AboutView />
          </div>
        )}
      </main>

      <Footer setActiveCategory={setActiveCategory} triggerAlert={triggerAlert} />
    </>
  );
}