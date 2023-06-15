import React, { useState } from 'react';
import CategoryRadio from '@/components/CategoryRadio';
import { AiFillHome } from 'react-icons/ai';
import DropdownSelect from '@/components/DropdownSelect';
import Image from 'next/image';

interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  images: string;
}

export default function Footwear({ addToCart }: { addToCart: (title: string, price: number, quantity: number) => void }) {
  const [items] = useState<Item[]>([
    {
      "id": 90,
      "title": "Ultraboost Running Shoes",
      "price": 119,
      "category":"footwear",
      "images":"https://readonlydemo.vendure.io/assets/preview/ed/chuttersnap-584518-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 91,
      "title": "Freerun Running Shoe",
      "price": 192,
      "category":"footwear",
      "images":"https://readonlydemo.vendure.io/assets/preview/0f/imani-clovis-234736-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 92,
      "title": "Hi-Top Basketball Shoe",
      "price": 168,
      "category":"footwear",
      "images":"https://readonlydemo.vendure.io/assets/preview/3c/xavier-teo-469050-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 93,
      "title": "Pureboost Running Shoe",
      "price": 119,
      "category":"footwear",
      "images":"https://readonlydemo.vendure.io/assets/preview/a2/thomas-serer-420833-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 94,
      "title": "RunX Running Shoe",
      "price": 53,
      "category":"footwear",
      "images":"https://readonlydemo.vendure.io/assets/preview/00/nikolai-chernichenko-1299748-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 95,
      "title": "Allstar Sneakers",
      "price": 78,
      "category":"footwear",
      "images":"https://readonlydemo.vendure.io/assets/preview/aa/mitch-lensink-256007-unsplash__preview.jpg?w=300&h=400"
    }
  ]);

  return (
  
    <>
    <div className=''>
    <div className='flex flex-col border-b-2 border-gray-400 w-[60%] mx-auto justify-center items-center md:justify-normal md:items-start'>
    <div><h2 className='text-3xl md:text-5xl font-thin text-gray-900 my-4 text-left'>Footwear</h2></div>
    <div className='flex text-gray-500 font mb-4'><AiFillHome className='mt-1 mx-1' /> <span className='mx-1'>/</span> <span className='mx-1'>Footwear</span></div>

    <div className="max-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto">
      <span aria-hidden="true" className="">
        <div className="h-full w-full object-cover object-center">
          <Image className='' src="https://readonlydemo.vendure.io/assets/preview/a2/thomas-serer-420833-unsplash__preview.jpg?w=300&h=300" alt='' width={300} height={300} /> 
        </div>
      </span>
      <span aria-hidden="true" className="absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
      <span className="absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white">Footwear</span>
    </div>


    <div className='text-3xl md:text-5xl font-thin text-gray-900 mt-4 pb-6'>Collection</div>
    <div className='my-2 md:hidden'><DropdownSelect /></div>
  </div>


      <div className='md:flex md:justify-center md:items-center'>
        <div className='py-24 px-2 md:px-24 mx-auto flex'>
        <CategoryRadio />


          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-8 mx-auto">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-6">
                <Image className="h-[200px] w-[200px] rounded-xl" src={item.images} alt="" width={200} height={200} />
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
                <button
                  className="bg-zinc-500 text-white py-1 px-2 focus:outline-none hover:bg-zinc-600 rounded-md mt-4"
                  onClick={() => addToCart(item.title, item.price, 1)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  </>
);
};
