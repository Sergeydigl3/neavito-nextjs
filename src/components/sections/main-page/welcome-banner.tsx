"use client"
import React, { useCallback } from 'react'
import Image from "next/image";

import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarousel, EmblaItem } from '@/components/embla/EmblaCarousel'; // Fixed import statement
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = {
  loop: true,
  // align: 'center',
  // skipSnaps: false,
  // dragFree: true,
}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const WelcomeBannerSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const urls : string[] = [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
  ]

  return (
    <section className="dark:text-black bg-gray-100 dark:bg-zinc-300 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to NeAvito</h1>
            <p className="text-gray-500 mb-8">
              Discover a wide range of products and services in our vibrant marketplace.
            </p>
            <div className="flex space-x-4 ">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800">Explore Now</button>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 border border-gray-200">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <EmblaCarousel options={OPTIONS} >
              {urls.map((url, index) => (
                <EmblaItem key={index}>
                  <div style={{ height: '250px', width: '100%', position: 'relative' }}>
                    <Image
                      alt={`Product image`}
                      className="object-cover rounded-t-lg"
                      src={url}
                      fill={true}
                      placeholder="blur"
                      blurDataURL="/placeholder.svg"
                      loading="lazy"
                      sizes="100vw"
                      style={{
                        objectFit: "contain"
                      }} />
                  </div>
                </EmblaItem>
              ))}

            </EmblaCarousel>

          </div>
        </div>
      </div>

    </section>
  );
};

export default WelcomeBannerSection;
