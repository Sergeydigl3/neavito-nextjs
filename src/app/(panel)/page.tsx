import Image from "next/image";


import MyHeader from "@/components/component/header";
import CategoriesSection from "@/components/sections/main-page/categories";
import FeatureProductsSection from "@/components/sections/main-page/featured-products";
import PopularSearchesSection from "@/components/sections/main-page/popular-searches";
import WelcomeBannerSection from "@/components/sections/main-page/welcome-banner";
import { products as ProductsData } from "@/data/data";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <TestComponent />
    // </main>
    <>
      <main>
        <WelcomeBannerSection />
        <FeatureProductsSection products={ProductsData} />
        <CategoriesSection />
        <PopularSearchesSection />
      </main>
    </>
  );
}
