import React, { useEffect } from 'react'
import Navbar from './ui/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './ui/shared/Footer'
import getAllJobs from './hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // 09:23
  getAllJobs();
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(user?.role ==='Recuritor'){
      navigate("/admin/companies")
    }
  },[]);

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
