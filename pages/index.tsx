import { Inter } from 'next/font/google'
import Carousel from '@/components/Carousel'
import HomeCategory from '@/components/HomeCategory'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <Carousel/>
    <HomeCategory/>
   </>
  )
}
