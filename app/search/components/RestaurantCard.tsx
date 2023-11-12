import Link from 'next/link'
import React from 'react'

export default function RestaurantCard() {
    return (
        <div className='border-b flex pb-5'>
            <img src='https://resizer.otstatic.com/v2/photos/xlarge/2/52759093.webp' alt='doya-miami' className='w-44 rounded' />
            <div className='pl-5'>
            <h2 className='text-3xl'> Fabel Miami </h2>
            <div className='flex items-start mt-3'>
                <div className='flex mb-2 text-black'>
                    *****
                </div>
                <p className='ml-2 text-sm'> Awesome </p>
            </div>
            <div className='mb-9'>
                <div className='font-light flex text-reg text-black'>
                <p className='mr-4'> $$$$ </p>
                <p className='mr-4'> Mexcican </p>
                <p className='mr-4'> $$$$ </p>
                </div>
            </div>
            <Link href='/restaurant/baby' className='text-red-600 -mt-3'>
                View More Info 
            </Link>
            </div>
        </div>
    )
}
