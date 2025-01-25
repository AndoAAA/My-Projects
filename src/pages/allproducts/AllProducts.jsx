import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import { allProducts } from '../../data'
import Footer from '../../components/footer/Footer'

function AllProducts() {
  return (
    <>
      <Navbar/>
      <Products items={allProducts} heading="Products"/>
      <Footer/>
    </>
  )
}

export default AllProducts
