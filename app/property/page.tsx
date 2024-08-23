import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Image from 'next/image'

const Property = () => {
  return (
    <div className=''>
      <div className='fixed top-0 flex  items-center p-2'>
        <h3>Properties</h3>
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
    </div>
  )
}

export default Property