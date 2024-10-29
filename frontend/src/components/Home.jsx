import React from 'react'
import Navbar from './ui/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './ui/shared/Footer'
import getAllJobs from './hooks/useGetAllJobs'

const Home = () => {
  // 08:13
  getAllJobs();
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs />
      <Footer/>
    </div>
  )
}

export default Home
