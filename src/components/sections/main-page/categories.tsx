import React from 'react';

const CategoriesSection: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold mb-6">Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <img alt="Category 1" className="h-12 w-auto mb-4" src="/placeholder.svg" />
                        <h3 className="font-semibold text-lg mb-2">Electronics</h3>
                        <p className="text-gray-500 text-sm">Discover the latest electronics</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <img alt="Category 2" className="h-12 w-auto mb-4" src="/placeholder.svg" />
                        <h3 className="font-semibold text-lg mb-2">Fashion</h3>
                        <p className="text-gray-500 text-sm">Stay on-trend with our fashion items</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <img alt="Category 3" className="h-12 w-auto mb-4" src="/placeholder.svg" />
                        <h3 className="font-semibold text-lg mb-2">Real Estate</h3>
                        <p className="text-gray-500 text-sm">Find your dream property</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <img alt="Category 4" className="h-12 w-auto mb-4" src="/placeholder.svg" />
                        <h3 className="font-semibold text-lg mb-2">Services</h3>
                        <p className="text-gray-500 text-sm">Explore a wide range of services</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
