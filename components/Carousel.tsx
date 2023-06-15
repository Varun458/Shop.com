import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper';
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
import Image from 'next/image';




export default function Carousel() {
    return (
        <div className='mb-10 shadow-md md:mx-auto md:w-[60%]'>
            <Swiper className=''
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                navigation={true} 
                pagination={true}
                modules={[Navigation, Pagination, Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><Image className='' src={img1} alt="" width={2400} height={600} /></SwiperSlide>
                <SwiperSlide><Image className='' src={img2} alt="" width={2400} height={600} /></SwiperSlide>
                <SwiperSlide><Image className='' src={img3} alt="" width={2400} height={600} /></SwiperSlide>
                <SwiperSlide><Image className='' src={img4} alt="" width={2400} height={600} /></SwiperSlide>
            </Swiper>
        </div>
    )
}