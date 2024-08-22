'use client'
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import Link from "next/link";


export default function Home() {
  const [status,setStatus]=useState('Tenant')


  return (
    <div className="flex bg-primary-white w-full h-screen ">
      <div className="w-[70%] gap-3 h-full p-6 flex items-center justify-center  ">
           
          <div className="text-center">
            <p className="text-black font-bold"> Welcome to <span className="text-primary-green">RentalBay</span>  👋</p>
            <p className="text-primary-gray mb-16">Are you a real estate owner or a property tenant ?</p>

            <div className={status === 'Owner' ? "p-4 w-full cursor-pointer border flex items-center gap-6 border-sm  rounded-md mt-4  border-primary-green": 'p-4 w-full cursor-pointer border flex items-center gap-6 border-sm  rounded-sm mt-4'} onClick={()=>setStatus('Owner')}>
                <BiUser className="text-black text-4xl"/> 
                <p className="text-black font-bold">I am a Real Estate manager</p>
               
                     <CiCircleCheck className={status==='Owner'? "text-primary-green text-2xl" : 'text-black text-2xl'}/>
               
            </div>

            <div className={status === 'Tenant' ? "p-4 w-full cursor-pointer border flex items-center gap-6 border-sm  rounded-md mt-4  border-primary-green": 'p-4 w-full cursor-pointer border flex items-center gap-6 border-sm  rounded-sm mt-4'} onClick={()=>setStatus('Tenant')}>
                <BiUser className="text-black text-4xl"/> 
                <p className="text-black font-bold">I am a Tenant/ Rent occupant</p>
               
                     <CiCircleCheck className={status==='Tenant'? "text-primary-green text-2xl" : 'text-black text-2xl'}/>
               
            </div>

            <div className="mt-6 ">
              <p className="text-primary-gray">Already have an account? <Link href={'/login'} className="text-primary-green font-bold cursor-pointer">Login</Link></p>

            </div>
          </div>
           


        
        
        
        
      </div>
      <div className="bg-primary-gray flex items-center justify-center w-full p-10">
        <div className="p-10">
          <p className="text-black font-bold"><span className="text-primary-green">RentalPay </span> is a flexible and powerful application to withHold tenant  and property holder issues. We help conserve clarity and timeliness, everyday! </p>
          <p className="float-right mt-6 text-black">------ <span className="font-bold">SHYAKA Valentin</span>, CEO @RentalPay</p>
        </div>

        
        
      </div>
    </div>
  );
}
