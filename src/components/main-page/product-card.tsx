'use client';

import { Label } from "@/components/ui/label"
import { CardContent, Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export interface ProductCardProps {
    imageUrls: string[];
    title: string;
    price: string;
    location: string;
    time: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrls, title, price, location, time }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        // dragFree: true,

    },
        [
            Autoplay()
        ]);

    return (
        <Card className="bg-white rounded-lg shadow">
            <CardContent className="p-5">

                <div style={{ height: '250px', width: '100%', position: 'relative' }}>
                    <Image
                        alt={`Product image`}
                        className="object-cover rounded-t-lg"
                        src={imageUrls[0]}

                        fill={true}
                        placeholder="blur"
                        blurDataURL="/placeholder.svg"
                        loading="lazy"
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </div>


                <div className="pt-4 pl-3 pr-1 space-y-3">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="pt-5 text-xl font-bold">{price}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
                    <p className="text-xs text-gray-400 ">{time}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export { ProductCard };
export default ProductCard;