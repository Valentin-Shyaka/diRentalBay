import React from 'react'
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";
import { BsInfoSquare } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from 'react-icons/fa6';
const Navbar = () => {
  return (
    <div className='px-4  border-b flex items-center justify-between text-black'>
        <p className='font-bold text-primary-green cursor-pointer'>RentalPay</p>

        <div className='flex gap-10'>
            <div className='flex gap-1 bg-primary-gray rounded-md py-2 px-4 '>
                <IoHome className='text-primary-green'/>
                <p className='font-bold text-sm text-primary-green'>Home</p>
            </div>
            <div className='flex gap-1 py-2 px-4 '>
                <MdOutlinePhoneInTalk/>
                <p className='font-bold text-sm text-slate-500'>Contact us</p>
            </div>
            <div className='flex gap-1 py-2 px-4'>
                <BsInfoSquare/>
                <p className='font-bold text-sm text-slate-500'>About</p>
            </div>
            <div className='flex gap-1 py-2 px-4'>
                <CiSaveDown2/>
                <p className='font-bold text-sm text-slate-500'>Saved</p>
            </div>
            

        </div>

        <div className='flex gap-6 items-center p-4'>
            <div className='bg-primary-gray rounded-md p-2'>
                <IoMdNotificationsOutline className='text-2xl'/>
            </div>
            <div className='bg-primary-gray rounded-full p-4'>
                {/* <FaUser className='text-2xl'/> */}
                <Image width={40} height={40} alt='profile' src={'/next.svg'} />
            </div>

        </div>

    </div>
  )
}

export default Navbar