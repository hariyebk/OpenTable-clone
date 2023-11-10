import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
return (
    <main className= "bg-white min-h-screen w-screen">
    <main className='m-auto max-w-screen-2xl'>
        <nav className='bg-white p-2 flex justify-between mx-10 pt-8'>
        <Link href='/' className='font-semibold text-black md:text-xl sm:text-sm'> OpenTable </Link>
        <div>
            <div className='flex gap-2 mr-5 mb-2 text-sm'>
            <button className='bg-sky-700 text-white px-3 rounded  '> Sign up </button>
            <button className='text-gray-500 p-2 rounded'> Sign in </button>
            </div>
        </div>
        </nav>
        {/* NAVBAR */}
    </main>
    <main>
        {/* HEADER */}
        <div className='h-72 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]'>
        <div className='text-center py-10'>
            <h1 className='text-white font-bold md:text-5xl sm:text-3xl mb-2'> Find your table for any occasion </h1>
            <div className='text-left py-3 mt-10 m-auto sm:m-8 flex justify-center gap-4'>
                {/* FILTER */}
                <div className='text-gray-600 font-semibold text-sm'>
                {/* TIME */}
                <select className='bg-white md:w-20 sm:w-20 h-12 rounded p-2 mr-3'>
                    <option value={7}> 7 Am </option>
                </select>
                {/* NUMBER OF PEOPLE */}
                <select className='bg-white md:w-28 sm:w-24 h-12 rounded p-2'>
                    <option value={1}> 1 person </option>
                    <option value={2}> 2 people </option>
                    <option value={3}> 3 people </option>
                </select>
                </div>
                {/* SEARCH BAR */}
                <div>
                <input type='search' className='bg-white rounded md:text-sm sm:text-xs mr-3 md:w-[300px] sm:w-60 py-3.5 px-3 font-semibold' placeholder='Location, Restaurant and Cusine' />
                    <button className='bg-red-600 md:p-3 sm:p-2 rounded'> Let's Go </button>
                </div>
            </div>
        </div>
        </div>
        {/* HEADER */}
        {/* CARD */}
        <Link href="/restaurant/baby">
            <div className='py-3 px-36 mt-10 flex flex-wrap'>
                <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
                    <img src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701343.webp' className='w-full h-40' />
                    <div className='p-3 text-gray-700'>
                    {/* DISH */}
                        <h3 className='font-bold text-xl mb-2'> Milestone's Grill </h3>
                        {/* REVIEW */}
                        <div className='flex items-start text-sm '>
                            <div className='flex mb-2'> **** </div>
                            <p className='ml-2'> 77 Reviews </p>
                        </div>
                        {/* PRICE */}
                        <div className='flex items-start font-normal capitalize text-sm'>
                            <p className='mr-3'> Mexican </p>
                            <p className='mr-3'> $$$$$ </p>
                            <p> Toronto </p>
                        </div>
                        <div className=''>
                            <p className='mt-3 text-sm font-semibold'> Booked 4 times Today </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </main>
</main>
)
}
