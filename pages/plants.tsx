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

export default function Plants({ addToCart }: { addToCart: (title: string, price: number, quantity: number) => void }) {
  const [items] = useState<Item[]>([
    {
      "id": 79,
      "title": "Spiky Cactus",
      "price": 1,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/78/charles-deluvio-695736-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 80,
      "title": "Tulip Pot",
      "price": 1,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/14/natalia-y-345738-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 81,
      "title": "Hanging Plant",
      "price": 1,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/5b/alex-rodriguez-santibanez-200278-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 82,
      "title": "Aloe Vera",
      "price": 1,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/29/silvia-agrasar-227575-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 83,
      "title": "Fern Blechnum Gibbum",
      "price": 1,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/6d/caleb-george-536388-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 84,
      "title": "Assorted Indoor Succulents",
      "price": 1,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/81/annie-spratt-78044-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 85,
      "title": "Orchid",
      "price": 1,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/88/zoltan-kovacs-642412-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 86,
      "title": "Bonsai Tree",
      "price": 1,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/f3/mark-tegethoff-667351-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 87,
      "title": "Guardian Lion Statue",
      "price": 226,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/44/vincent-liu-525429-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 88,
      "title": "Hand Trowel",
      "price": 5,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/7d/neslihan-gunaydin-3493-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 89,
      "title": "Guardian Lion Statue",
      "price": 226,
      "category":"plants",
      "images":"https://readonlydemo.vendure.io/assets/preview/44/vincent-liu-525429-unsplash__preview.jpg?w=300&h=400"
    }
  ]);

  return (
  
    <>
    <div className=''>
    
    <div className='flex flex-col border-b-2 border-gray-400 w-[60%] mx-auto justify-center items-center md:justify-normal md:items-start'>
    <div><h2 className='text-3xl md:text-5xl font-thin text-gray-900 my-4 text-left'>Plants</h2></div>
    <div className='flex text-gray-500 font mb-4'><AiFillHome className='mt-1 mx-1' /> <span className='mx-1'>/</span> <span className='mx-1'>Plants</span></div>

    <div className="max-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto">
      <span aria-hidden="true" className="">
        <div className="h-full w-full object-cover object-center">
          <Image className='' src="https://readonlydemo.vendure.io/assets/preview/5b/alex-rodriguez-santibanez-200278-unsplash__preview.jpg?w=300&h=300" alt='' height={300} width={300} /> 
        </div>
      </span>
      <span aria-hidden="true" className="absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
      <span className="absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white">Plants</span>
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
