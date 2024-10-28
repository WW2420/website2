'use client'

import React, { useState } from 'react';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const products = [
  { id: 1, name: 'Premium Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Wireless Headphones', price: 199.99, category: 'Audio' },
  { id: 3, name: 'Smart Watch', price: 299.99, category: 'Wearables' },
  { id: 4, name: 'Gaming Console', price: 499.99, category: 'Gaming' }
];

// Generic event tracking function
const trackEvent = (eventName, eventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export default function TestWebsite() {
  const [cart, setCart] = useState([]);

  const handleViewItem = (product) => {
    trackEvent('view_item', {
      currency: 'USD',
      value: product.price,
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        currency: 'USD',
        item_category: product.category
      }]
    });
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    trackEvent('add_to_cart', {
      currency: 'USD',
      value: product.price,
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        currency: 'USD',
        item_category: product.category
      }]
    });
  };

  const handleWishlist = (product) => {
    trackEvent('add_to_wishlist', {
      currency: 'USD',
      value: product.price,
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        currency: 'USD',
        item_category: product.category
      }]
    });
  };

  const handleShare = (product) => {
    trackEvent('share', {
      method: 'Social Share',
      content_type: 'product',
      item_id: product.id,
      item_name: product.name,
      currency: 'USD',
      value: product.price
    });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Test E-commerce Store</h1>
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6" />
          <span>{cart.length} items</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="flex flex-col"
            onClick={() => handleViewItem(product)} // Added view_item event
          >
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-2xl font-bold mb-4">${product.price}</p>
              <p className="text-gray-600 mb-4">{product.category}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleWishlist(product)}
                  className="p-2 border rounded hover:bg-gray-100"
                >
                  <Heart className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare(product)}
                  className="p-2 border rounded hover:bg-gray-100"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}