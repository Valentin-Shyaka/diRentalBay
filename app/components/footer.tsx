import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='p-10 bg-primary-footer flex items-center justify-between text-black '>
        <div className='w-[40%]'>
            <h2 className='font-bold text-xl text-primary-green '>RentalBay</h2>
            <p className='mt-4 text-slate-500 font-semibold'>We provide information about properties such as houses, villas and apartments to help people find their dream home in an easy way.</p>

            <div className='flex gap-4 mt-4 text-2xl text-slate-500'>
                <ImFacebook2/>
                <FaTwitter/>
                <FaInstagramSquare/>
            </div>

        </div>
        <div className='flex  justify-between gap-10 p-6'>
            <div>
                <h2 className='font-bold mb-2'>Property</h2>
                <p className='text-slate-500 font-semibold text-sm'>House</p>
                <p className='text-slate-500 font-semibold text-sm'>Appartment</p>
                <p className='text-slate-500 font-semibold text-sm'>Villa</p>
            </div>

            <div>
                <h2 className='font-bold mb-2'>Contact</h2>
                <p className='text-slate-500 font-semibold text-sm'>Rwanda, Kigali</p>
                <p className='text-slate-500 font-semibold text-sm'>(+250)0791786006</p>
                <p className='text-slate-500 font-semibold text-sm'>info@EazyHomes.com</p>
            </div>

            <div>
                <h2 className='font-bold mb-2'>Article</h2>
                <p className='text-slate-500 font-semibold text-sm'>New Article</p>
                <p className='text-slate-500 font-semibold text-sm'>Popular Article</p>
                <p className='text-slate-500 font-semibold text-sm'>Most Read</p>
                <p className='text-slate-500 font-semibold text-sm'>Tips & Tricks</p>
            </div>

            <div>
                <h2 className='font-bold mb-2'>Pricing</h2>
                <p className='text-slate-500 font-semibold text-sm'>Alpha</p>
                <p className='text-slate-500 font-semibold text-sm'>Beta</p>
                <p className='text-slate-500 font-semibold text-sm'>Omega</p>
            </div>
           

        </div>

    </div>
  )
}

export default Footer