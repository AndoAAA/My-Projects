import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'

function Home() {
  return (
    <>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
    </>
  )
}

export default Home
