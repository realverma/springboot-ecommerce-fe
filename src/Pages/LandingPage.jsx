import React from "react";
import "../Styles/LandingPage.css";
import "../Styles/MerchantNavbar.css";
import HomeCarousel from "../Components/HomeCarousel";
import Navbar from "../Components/Navbar";
import CategoryCard from "../Components/CategoryCard";
import Footer from "../Components/Footer";
import MostViewedProducts from "../Components/MostViewedProducts";

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
      <MostViewedProducts/>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
