"use client";
import React from 'react';

interface PopularSearchComponentProps {
    title: string;
    description: string;
}

const PopularSearchComponent: React.FC<PopularSearchComponentProps> = ({ title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    );
};

export default PopularSearchComponent;
