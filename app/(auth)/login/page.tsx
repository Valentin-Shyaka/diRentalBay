

import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
        <div className='text-black justify-start w-96 text-left p-2 '>
           <h2 className='mt-4 text-primary-green font-bold'>Login</h2>
          <div className='mt-6'>
            <label className='font-bold mt-10'>Username</label>
            <input className='border border-primary-green w-full p-4 mt-2 rounded-md text-sm outline-none' type='text' placeholder='Enter your username' name='username'  required/>
          </div>

          

          <div className='mt-6'>
            <label className='font-bold mt-10'>Password</label>
            <input className='border border-primary-green w-full p-4 mt-2 rounded-md text-sm outline-none' type='text' placeholder='Enter your password' name='username'  required/>
          </div>
          <div className='flex w-full gap-4 items-center mt-6'>
            <input type="checkbox" name="rememberMe" id="" className='font-bold p-2 outline-none bg-primary-green' checked/>
            <p className='font-bold text-primary-gray'>Remember Me</p>
          </div>

          <button type='submit' className='bg-primary-green text-white mt-10 w-full p-4 rounded-sm'>Register</button>

          <p className="text-primary-gray text-sm mt-6 text-center">Don't have an account? <Link href={'/signup'} className="text-primary-green font-bold cursor-pointer">Signup</Link></p>
           
        </div>
  )
}

export default Login