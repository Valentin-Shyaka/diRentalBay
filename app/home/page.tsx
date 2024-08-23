import React from 'react'
import Navbar from '../components/navbar'
import HomeCard from '../components/homeCard'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='w-full bg-white text-black '>
      
      <div className=''>
        <Navbar/>

        <div className='p-16'>
          <div className='flex flex-wrap gap-2 justify-between'>
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
              <HomeCard/>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Home