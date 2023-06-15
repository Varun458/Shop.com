import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';

export default function DropdownSelect() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
<div className="relative z-10">
      <button className="bg-gray-800 text-gray-200 px-4 py-2 rounded-md flex " onClick={toggleMenu}>Select your Category <span><AiOutlineBars className='mt-[6px] ml-2'/></span></button>

      <div className={`absolute top-full bg-white shadow-lg overflow-hidden mt-2 rounded w-40 transition-all duration-300 ease-in-out ${isOpen ? 'h-90' : 'h-0'}`}>
        <ul>
         <Link href="/electronics"><li className="px-4 py-2"><div className='border-b-2 border-gray-100'>Electronics</div></li></Link>
         <Link href="/computer"><li className="px-4 py-2"><div className='border-b-2 border-gray-100'>Computers</div></li></Link>
         <Link href="/furniture"><li className="px-4 py-2"><div className='border-b-2 border-gray-100'>Furniture</div></li></Link>
         <Link href="/equipment"><li className="px-4 py-2"><div className='border-b-2 border-gray-100'>Equipment</div></li></Link> 
         <Link href="/camera"><li className="px-4 py-2"><div className='border-b-2 border-gray-100'>Camera & Photos</div></li></Link> 
         <Link href="/garden"><li className="px-4 py-2"><div className='border-b-2 border-gray-100'>Home & Garden</div></li></Link> 
         <Link href="/plants"><li className="px-4 py-2"><div className='border-b-2 border-gray-100'>Plants</div></li></Link> 
         <Link href="/footwear"><li className="px-4 py-2"><div className='border-b-2 border-gray-100'>Footwear</div></li></Link>
         <Link href="/outdoor"><li className="px-4 py-2"><div className='border-b-2 border-gray-100'>Sports & Outdoor</div></li></Link> 
        </ul >
      </div>
    </div>
    </>
  );
}
