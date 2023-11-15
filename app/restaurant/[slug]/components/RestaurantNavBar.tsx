import Link from 'next/link'
import React from 'react'

export default function RestaurantNavBar({slug}: {slug: string}) {
    return (
        <nav className='flex border-b pb-3 ml-4 font-medium'>
            <Link href={`/restaurant/${slug}`} className='mr-7'> Overview </Link>
            <Link href={`/restaurant/${slug}/menu`} className='mr-7'> Menu </Link>
        </nav>
    )
}
