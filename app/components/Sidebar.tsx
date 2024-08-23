import React from 'react'
import { PiSquaresFourBold } from "react-icons/pi";
import SidebarLink from './SidebarLink';
import { links } from '@/utils';
import { linksCont } from '@/utils';

const Sidebar = () => {
  return (
    <div className='w-20 h-screen border items-center justify-between' >
        <PiSquaresFourBold className='text-primary-green text-3xl m-6' />
        <div className='flex-col  '>
          

          <div className='flex-col mt-20 '>
              {links.map((link)=>(
                <SidebarLink key={link.name} name={link.name} icon={link.icon}/>
              ))

              }
            
          </div>
          <div className='flex-col mt-20 '>
              {linksCont.map((link)=>(
                <SidebarLink key={link.name} name={link.name} icon={link.icon}/>
              ))

              }
            
          </div>

        </div>
        

    </div>
  )
}

export default Sidebar