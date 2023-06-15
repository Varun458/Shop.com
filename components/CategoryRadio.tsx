import Link from 'next/link'
import React from 'react'
import RadioButton from '@/components/RadioButton';


export default function CategoryRadio() {
  return (
    <div className='md:flex flex-col hidden md:pr-24'>
    <h3 className='text-center  text-xl border-b-2 border-gray-200 font-semibold'>CATEGORY</h3>
    <Link href="/electronics"><RadioButton title="Electronics" /></Link>
    <Link href="/computer"><RadioButton title="Computers" /></Link>
    <Link href="/furniture"><RadioButton title="Furniture" /></Link>
    <Link href="/equipment"><RadioButton title="Equipment" /></Link>
    <Link href="/camera"><RadioButton title="Camera" /></Link>
    <Link href="/garden"><RadioButton title="Home&Garden" /></Link>
    <Link href="/plants"><RadioButton title="Plants" /></Link>
    <Link href="/footwear"><RadioButton title="Footwear" /></Link>
    <Link href="/outdoor"><RadioButton title="Sports&Outdoor" /></Link>
  </div>
  )
}
