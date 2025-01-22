import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import NewArrivals from "../../components/products/NewArrivals";
import BestSellers from "../../components/products/BestSellers";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <NewArrivals />
      <BestSellers />
      <NewsLetter />
      <Footer/>
    </>
  );
}

export default Home;
