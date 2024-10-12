
import {
  CategoryMenu,
  Hero,
  Incentives,
  IntroducingSection,
  Newsletter,
  Products,
  ProductsSection,
} from "@/components";
import CategoryMenu2 from "@/components/CategoryMenu2";
import InspiredProducts from "@/components/InspiredProducts";
import NewProducts from "@/components/NewProducts";
import OfferBanner from "@/components/OfferBanner";
import TopSellingProducts from "@/components/TopSellingProducts";
import FeaturedProducts from "@/components/TopSellingProducts";
import WarrantyForm from "@/components/WarrantyForm";
import React, { useState, useEffect } from "react";

export default function Home() {
  // const [featureCategory,setFeatureCategoy] = useState("tablets")
  // const [featureCategory, setFeatureCategory] = useState<{
  //   id: string;
  //   name: string;
  // }>({
  //   id: "",
  //   name: "tablet",
  // });

  return (
    <>
      <Hero />
      {/* <IntroducingSection /> */}
      {/* <ProductsSection />       */}
      {/* <Products /> */}
      <TopSellingProducts props={{name:"tablet"}} />
      <OfferBanner />
      <NewProducts props={{name:"tablet"}} />
      <InspiredProducts props={{name:"tablet"}} />
      <WarrantyForm />

      {/* <CategoryMenu2 /> */}
    </>
  );
}
