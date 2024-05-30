"use client"
import React from 'react';
// import { Text } from '@/components/ui/text';
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import Image from 'next/image'
import { ProductCardPage } from '@/components/component/product-card-page';
import { products as ProductsData } from "@/data/data";
import { ProductCardProps } from '@/components/main-page/product-card';


const getProductById = (id: number): ProductCardProps | undefined => {
  return ProductsData.find((product) => product.productId === id);
};

export default function ProductPage({ params }: { params: { productID: string } }) {
  const suggestedProducts = ProductsData.slice(0, 4);
  const product = getProductById(Number(params.productID));
  return (
    <ProductCardPage product={product} suggestedProducts={suggestedProducts}/>
  );
};

// export default ProductPage;
