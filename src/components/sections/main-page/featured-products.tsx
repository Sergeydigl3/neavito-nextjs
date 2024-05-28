'use client';

import ProductCard from '@/components/main-page/product-card';
import React from 'react';
import { ProductCardProps } from '@/components/main-page/product-card';

const FeatureProductsSection: React.FC<{ products: ProductCardProps[] }> = ({ products }) => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProductsSection;
