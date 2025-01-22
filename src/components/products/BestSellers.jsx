import React from 'react'
import Products from './Products'
import { bestsellers } from '../../data'

function BestSellers() {
  return (
    <>
      <Products items={bestsellers} heading="Best Sellers"/>
    </>
  )
}

export default BestSellers
