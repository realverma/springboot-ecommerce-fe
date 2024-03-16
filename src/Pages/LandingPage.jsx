import React from "react";
import "../Styles/LandingPage.css";
import "../Styles/MerchantNavbar.css";
import HomeCarousel from "../Components/HomeCarousel";
import Navbar from "../Components/Navbar";
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";

const LandingPage = () => {

  return (
    <div>

      <Navbar/>
      <HomeCarousel/>
      <div className="main">
      <CategoryCard/>
      <div className="most-popular">
        <h2>Most Popular</h2>
        <div>All our new arrivals in a exclusive brand selection</div>
      <ProductCard/>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
