import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'

const HomeCard = () => {
  return (
    <div className='relative w-60 h-80 cursor-pointer hover:bg-primary-footer p-2 rounded-md'>
        <FaHeart className='absolute text-white text-xl top-4 right-4'/>
        <Image width={300} height={300} alt='house image' src={'/house.jpg'} className='object-cover rounded-lg'/>
        <div className='flex items-center justify-between mt-2'>
            <p className=' font-bold'>Kigali, Kicukiro</p>
            <div className='flex items-center gap-1'>
                <FaStar/><p>4.81</p>
            </div>
        </div>
        
        <p className='text-sm text-slate-500 mt-2'>viewed 34,356 last week</p>
        <p className='text-sm text-slate-500'>6 nights, Jun 4-10</p>
        <div className='flex items-center justify-between mt-4'>
            <p className='font-bold text-sm' ><span className='text-xl'>$700</span>/month</p>
            <button className='rounded-2xl bg-primary-green py-2 px-6 text-white font-bold text-sm'>RENT</button>
        </div>
    </div>
  )
}

export default HomeCard