import React from 'react'
import Navbar from '../navbar/Navbar';
import Slider from '../slider/Slider';
import NavigateButtons from '../navigateButtons/NavigateButtons';
import ProductSection from '../productSection/ProductSection';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <>
      <Navbar/>
      <Slider/>
      <NavigateButtons/>
      <ProductSection/>
      <Footer/>
    </>
  )
}

export default Main;
