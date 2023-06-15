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

export default function Equipment({ addToCart }: { addToCart: (title: string, price: number, quantity: number) => void }) {
  const [items] = useState<Item[]>([
    {
      "id": 51,
      "title": "Road Bike",
      "price": 998,
      "category":"equipment",
      "images":"https://readonlydemo.vendure.io/assets/preview/2f/mikkel-bech-748940-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 52,
      "title": "Skipping Rope",
      "price": 10,
      "category":"equipment",
      "images":"https://readonlydemo.vendure.io/assets/preview/34/stoica-ionela-530966-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 53,
      "title": "Boxing Gloves",
      "price": 39,
      "category":"equipment",
      "images":"https://readonlydemo.vendure.io/assets/preview/4f/neonbrand-428982-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 54,
      "title": "Tent",
      "price": 257,
      "category":"equipment",
      "images":"https://readonlydemo.vendure.io/assets/preview/96/michael-guite-571169-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 55,
      "title": "Cruiser Skateboard",
      "price": 29,
      "category":"equipment",
      "images":"https://readonlydemo.vendure.io/assets/preview/35/max-tarkhov-737999-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 56,
      "title": "Football",
      "price": 86,
      "category":"equipment",
      "images":"https://readonlydemo.vendure.io/assets/preview/d6/nik-shuliahin-619349-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 57,
      "title": "Tennis Ball",
      "price": 15,
      "category":"equipment",
      "images":"https://readonlydemo.vendure.io/assets/preview/30/ben-hershey-574483-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 58,
      "title": "Basketball",
      "price": 42,
      "category":"equipment",
      "images":"https://readonlydemo.vendure.io/assets/preview/0f/tommy-bebo-600358-unsplash__preview.jpg?w=300&h=400"
    }
  ]);

  return (
  
    <>
    <div className=''>
   
    <div className='flex flex-col border-b-2 border-gray-400 w-[60%] mx-auto justify-center items-center md:justify-normal md:items-start'>
    <div><h2 className='text-3xl md:text-5xl font-thin text-gray-900 my-4 text-left'>Equipment</h2></div>
    <div className='flex text-gray-500 font mb-4'><AiFillHome className='mt-1 mx-1' /> <span className='mx-1'>/</span> <span className='mx-1'>Equipment</span></div>

    <div className="max-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto">
      <span aria-hidden="true" className="">
        <div className="h-full w-full object-cover object-center">
          <Image className='' src="https://readonlydemo.vendure.io/assets/preview/4f/neonbrand-428982-unsplash__preview.jpg?w=300&h=300" alt='' width={300} height={300} /> 
        </div>
      </span>
      <span aria-hidden="true" className="absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
      <span className="absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white">Equipment</span>
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
                <Image className="h-[200px] w-[200px] rounded-xl" src={item.images} alt="" height={200} width={200}/>
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
