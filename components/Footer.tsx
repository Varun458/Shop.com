import Link from 'next/link'
import React from 'react'


export default function Footer() {
  return (
    <footer className="text-white body-font bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SHOP</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="" className="text-white hover:scale-110">Electronics</Link>
              </li>
              <li>
                <Link href="" className="text-white hover:scale-110">Home & Garden</Link>
              </li>
              <li>
                <Link href="" className="text-white hover:scale-110">Sports & Outdoor</Link>
              </li>

            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUPPORT</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="" className="text-white hover:scale-110">Help</Link>
              </li>
              <li>
                <Link href="" className="text-white hover:scale-110">Track order</Link>
              </li>
              <li>
                <Link href="" className="text-white hover:scale-110">Shiping</Link>
              </li>
              <li>
                <Link href="" className="text-white hover:scale-110">Returns</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="" className="text-white hover:scale-110">About</Link>
              </li>
              <li>
                <Link href="" className="text-white hover:scale-110">Blog</Link>
              </li>
              <li>
                <Link href="" className="text-white hover:scale-110">Corporate responsibility</Link>
              </li>
              <li>
                <Link href="" className="text-white hover:scale-110">Press</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE TO OUR NEWSLETTER</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-white">Be the first to know about exclusive offers & deals.</label>
                <input type="text" placeholder='Enter your e-mail' id="footer-field" name="footer-field" className="w-full bg-white rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex bg-zinc-200 text-zinc-900 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-500 hover:text-white rounded">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
