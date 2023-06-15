import Link from 'next/link'
import React from 'react'
import CategoryCard from './CategoryCard'



export default function HomeCategory() {
    return (
        <div className='pb-24 px-2 md:px-0 sm:pb-10 xl:max-w-7xl xl:mx-auto xl:px-8 md:mb-10'>
            <div className='text-2xl font-thin text-gray-900 text-center mb-10'>Shop by Category</div>
            <div className='grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8 '>
                <div>
                    <Link href='/electronics'>
                        <CategoryCard imgSrc="https://readonlydemo.vendure.io/assets/preview/5b/jakob-owens-274337-unsplash__preview.jpg?w=300&h=300" name="Electronics" />
                    </Link>
                </div>

                <div>
                    <Link href='/computer'>
                        <CategoryCard imgSrc="https://readonlydemo.vendure.io/assets/preview/9c/alexandru-acea-686569-unsplash__preview.jpg?w=300&h=300" name="Computer" />

                    </Link>
                </div>
                <div>
                    <Link href='/furniture'>
                        <CategoryCard imgSrc="https://readonlydemo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?w=300&h=300" name="Furniture" />

                    </Link>
                </div>
                <div>
                    <Link href='/equipment'>
                        <CategoryCard imgSrc="https://readonlydemo.vendure.io/assets/preview/4f/neonbrand-428982-unsplash__preview.jpg?w=300&h=300" name="Equipment" />

                    </Link>
                </div>
                <div>
                    <Link href='/camera'>
                        <CategoryCard imgSrc="https://readonlydemo.vendure.io/assets/preview/b5/eniko-kis-663725-unsplash__preview.jpg?w=300&h=300" name="Camera & Photo" />

                    </Link>
                </div>
                <div>
                    <Link href='/garden'>
                        <CategoryCard imgSrc="https://readonlydemo.vendure.io/assets/preview/3e/paul-weaver-1120584-unsplash__preview.jpg?w=300&h=300" name="Home & Garden" />

                    </Link>
                </div>
                <div>
                    <Link href='/plants'>
                        <CategoryCard imgSrc="https://readonlydemo.vendure.io/assets/preview/5b/alex-rodriguez-santibanez-200278-unsplash__preview.jpg?w=300&h=300" name="Plants" />

                    </Link>
                </div>
                <div>
                    <Link href='/footwear'>
                        <CategoryCard imgSrc="https://readonlydemo.vendure.io/assets/preview/a2/thomas-serer-420833-unsplash__preview.jpg?w=300&h=300" name="Footwear" />

                    </Link>
                </div>
                <div>
                    <Link href='/outdoor'>
                        <CategoryCard imgSrc="https://readonlydemo.vendure.io/assets/preview/96/michael-guite-571169-unsplash__preview.jpg?w=300&h=300" name="Sports & Outdoor" />

                    </Link>
                </div>

            </div>

        </div>
    )
}
