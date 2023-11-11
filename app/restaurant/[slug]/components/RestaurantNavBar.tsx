import Link from 'next/link'
import React from 'react'

export default function RestaurantNavBar() {
    return (
        <nav className='flex border-b pb-3 ml-4 font-medium'>
            <Link href='/restaurant/baby' className='mr-7'> overview </Link>
            <Link href='/restaurant/baby/menu' className='mr-7'> Menu </Link>
        </nav>
    )
}
