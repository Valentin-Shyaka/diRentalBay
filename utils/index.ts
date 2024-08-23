
import { IoHomeOutline } from "react-icons/io5";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

import React from 'react';


export const links=[
  {
    name: 'home',
    icon: React.createElement(IoHomeOutline), 
  },
  {
    name: 'users',
    icon: React.createElement(PiUsersThreeDuotone), 
  },
  {
    name: 'options',
    icon: React.createElement(HiOutlineWrenchScrewdriver), 
  },
  
  
];

export const linksCont=[
    {
        name: 'user',
        icon: React.createElement(FaRegUser), 
      },
      {
        name: 'settings',
        icon: React.createElement(IoSettingsOutline), 
      },
      {
        name: 'logout',
        icon: React.createElement(IoLogOutOutline), 
      }
]