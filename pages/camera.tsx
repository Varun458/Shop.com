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

export default function Camera({ addToCart }: { addToCart: (title: string, price: number, quantity: number) => void }) {
  const [items] = useState<Item[]>([
    {
      "id": 32,
      "title": "Instant Camera",
      "price": 209,
      "category": "camera",
      "images": "https://readonlydemo.vendure.io/assets/preview/b5/eniko-kis-663725-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 33,
      "title": "Camera Lens",
      "price": 124,
      "category": "camera",
      "images": "https://readonlydemo.vendure.io/assets/preview/9b/brandi-redd-104140-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 34,
      "title": "Vintage Folding Camera",
      "price": 6420,
      "category": "camera",
      "images": "https://readonlydemo.vendure.io/assets/preview/3c/jonathan-talbert-697262-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 35,
      "title": "Tripod",
      "price": 17,
      "category": "camera",
      "images": "https://readonlydemo.vendure.io/assets/preview/21/zoltan-tasi-423051-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 36,
      "title": "Instamatic Camera",
      "price": 1079,
      "category": "camera",
      "images": "https://readonlydemo.vendure.io/assets/preview/5b/jakob-owens-274337-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 37,
      "title": "Compact Digital Camera",
      "price": 738,
      "category": "camera",
      "images": "https://readonlydemo.vendure.io/assets/preview/bc/patrick-brinksma-663044-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 38,
      "title": "Nikkormat SLR Camera",
      "price": 625,
      "category": "camera",
      "images": "https://readonlydemo.vendure.io/assets/preview/95/chuttersnap-324234-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 39,
      "title": "Compact SLR Camera",
      "price": 625,
      "category": "camera",
      "images": "https://readonlydemo.vendure.io/assets/preview/9d/robert-shunev-528016-unsplash__preview.jpg?w=300&h=400"
    },
    {
      "id": 40,
      "title": "Twin Lens Camera",
      "price": 958,
      "category": "camera",
      "images": "https://readonlydemo.vendure.io/assets/preview/ef/alexander-andrews-260988-unsplash__preview.jpg?w=300&h=400"
    }
  ]);

  return (

    <>
      <div className=''>
      
      <div className='flex flex-col border-b-2 border-gray-400 w-[60%] mx-auto justify-center items-center md:justify-normal md:items-start'>
    <div><h2 className='text-3xl md:text-5xl font-thin text-gray-900 my-4 text-left'>Camera & Photo</h2></div>
    <div className='flex text-gray-500 font mb-4'><AiFillHome className='mt-1 mx-1' /> <span className='mx-1'>/</span> <span className='mx-1'>Camera & Photo</span></div>

    <div className="max-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto">
      <span aria-hidden="true" className="">
        <div className="h-full w-full object-cover object-center">
          <Image className='' src="https://readonlydemo.vendure.io/assets/preview/b5/eniko-kis-663725-unsplash__preview.jpg?w=300&h=300" alt='' width={300} height={300} /> 
        </div>
      </span>
      <span aria-hidden="true" className="absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
      <span className="absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white">Camera & Photo</span>
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
                  <Image className="h-[200px] w-[200px] rounded-xl" src={item.images} alt="" width={200} height={200}/>
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
