'use client'
import React from 'react'

export default function SideBar() {
    return (
    <div className='w-1/5'>
        {/* Regions */}
        <div className='border-b pb-4'>
            <h1 className='mb-2'> Region </h1>
            <p className='font-light'> Toronto </p>
            <p className='font-light'> Ottawa </p>
            <p className='font-light'> Montreal </p>
            <p className='font-light'> Kingston </p>
            <p className='font-light'> Niagra </p>
        </div>
        {/* Dishes */}
        <div className='border-b pb-4 mt-3'>
            <h1 className='mb-2'> Cusine </h1>
            <p className='font-light'> Mexican </p>
            <p className='font-light'> Italian </p>
            <p className='font-light'> Chineese </p>
        </div>
        {/* Price */}
        <div className='mt-3 pb-4'>
            <h1 className='mb-2'> Price </h1>
            <div className='flex'>
            <button className='border w-full text-reg font-light rounded-l p-2 '>
                $
            </button>
            <button className='border-r border-t border-b w-full text-reg font-light p-2 '>
                $$
            </button>
            <button className='border-r border-l border-t border-b w-full text-reg font-light p-2'>
                $$$
            </button>
            </div>
        </div>
    </div>
    )
}
