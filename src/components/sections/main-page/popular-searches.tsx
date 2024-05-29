'use client';
import PopularSearchComponent from '@/components/main-page/popular-search';
import React from 'react';

const PopularSearchesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Popular Searches</h2>
            <div className="dark:text-black grid grid-cols-2 md:grid-cols-4 gap-4">

              <PopularSearchComponent title="Smartphones" description="Find the latest smartphones" />

              <PopularSearchComponent title="Laptops" description="Discover powerful laptops" />

              <PopularSearchComponent title="Tablets" description="Find the latest tablets" />
            </div>
          </div>
        </section>
  );
};

export default PopularSearchesSection;
