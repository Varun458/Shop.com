import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
  imgSrc: string;
  name: string;
}

export default function CategoryCard(props: CategoryCardProps) {
  const { imgSrc, name } = props;
  

  return (
    <div className="max-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto">
      <span aria-hidden="true" className="">
        <div className="h-full w-full object-cover object-center">
          <Image className='' alt="" src={imgSrc} width={300} height={300} /> 
        </div>
      </span>
      <span aria-hidden="true" className="absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
      <span className="absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white">{name}</span>
    </div>
  );
}
