import React from 'react'
import Slider from '../slider/Slider';
import NavigateButtons from '../navigateButtons/NavigateButtons';
import ProductSection from '../productSection/ProductSection';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <>
      <Slider/>
      <NavigateButtons/>
      <ProductSection/>
      <Footer/>
    </>
  )
}

export default Main;
