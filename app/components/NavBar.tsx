'use client'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className='bg-white p-2 flex justify-between mx-10 pt-8'>
        <Link href='/' className='font-semibold text-black md:text-xl sm:text-sm'> OpenTable </Link>
        <div>
            <div className='flex gap-2 mr-5 mb-2 text-sm'>
                <button className='bg-sky-700 text-white px-3 rounded  '> Sign up </button>
                <button className='text-gray-500 p-2 rounded'> Sign in </button>
            </div>
        </div>
        </nav>
        
    )
}
