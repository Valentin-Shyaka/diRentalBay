import React from 'react'
import AuthLayout from '../layout'
import Link from 'next/link'

const Signup = () => {
  return (
        <div className='text-black justify-start w-96 text-left p-2 '>
           <h2 className='mt-4 text-primary-green font-bold'>Signup</h2>
          <div className='mt-6'>
            <label className='font-bold mt-10'>Username</label>
            <input className='border border-primary-green w-full p-4 mt-2 rounded-md text-sm outline-none' type='text' placeholder='Enter your username' name='username'  required/>
          </div>

          <div className='mt-6' >
            <label className='font-bold mt-10'>Email/ Cellphone</label>
            <input className='border border-primary-green w-full p-4 mt-2 rounded-md text-sm outline-none' type='text' placeholder='Enter your email' name='username'  required/>
          </div>

          <div className='mt-6'>
            <label className='font-bold mt-10'>Password</label>
            <input className='border border-primary-green w-full p-4 mt-2 rounded-md text-sm outline-none' type='text' placeholder='Enter your password' name='username'  required/>
          </div>

          <button type='submit' className='bg-primary-green text-white mt-10 w-full p-4 rounded-sm'>Register</button>

          <p className="text-primary-gray text-sm mt-6 text-center">Already have an account? <Link href={'/login'} className="text-primary-green font-bold cursor-pointer">Login</Link></p>
           
        </div>
  )
}

export default Signup