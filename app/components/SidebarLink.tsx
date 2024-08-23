import React, { ReactHTMLElement } from 'react'
 type Link={
   name:string,
   icon:React.ReactNode,
 }


const SidebarLink = ({name,icon}:Link) => {
  return (
    <div className='p-4 bg-primary-gray rounded-md m-4'>
        {icon}
    </div>
  )
}

export default SidebarLink