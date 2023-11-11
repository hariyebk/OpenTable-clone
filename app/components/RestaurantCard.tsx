import Link from 'next/link'
import React from 'react'

export default function RestaurantCard() {
    return (
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
    )
}
