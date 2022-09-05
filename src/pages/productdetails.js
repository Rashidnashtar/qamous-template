import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import ProductDetailsSection from "../components/productdetailscomponents/productdetailssection";
import RelatedProduct from "../components/productdetailscomponents/relatedproduct";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const ProductDetails = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Product Details"
        path="Shop Details"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        <ProductDetailsSection />
        <RelatedProduct />
        <SixthFooter isNotBranded />
      </div>
    </>
  );
};

export default ProductDetails;
