import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import JobListing from '../component/JobListing'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListing/>
    </div>
  )
}

export default Home