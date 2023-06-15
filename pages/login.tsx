import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function Login() {
  return (
      <div className="text-gray-600 body-font py-40 mx-auto">
        <div className="container px-5 py-24 flex items-center justify-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg">Sign Up</button>
            <div className='text-center py-1'>Or</div> 
            <div className='flex items-center justify-center p-2'>
            <FcGoogle className='mt-1 mr-4'/> <span>Continue with Google</span>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center ml-2">Literally the best deal you can get.</p>
          </div>
        </div>
      </div>
  )
}
