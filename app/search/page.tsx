"use cient"
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function page() {
    const router = useRouter()
    const [location, setLocation] = useState("")
    function handleSearch(){
        if(location === "baby") return
        // programatic navigation
        router.push("/search")
    }
    return (
    <main className= "bg-white min-h-screen w-screen">
        <main className='m-auto max-w-screen-2xl pt-8'>
            <nav className='bg-white p-2 flex justify-between mx-10'>
                <a href='' className='font-semibold text-black md:text-xl sm:text-sm'> OpenTable </a>
                <div>
                    <div className='flex gap-2 mr-5 mb-2 text-sm'>
                        <button className='bg-sky-700 text-white px-3 rounded  '> Sign up </button>
                        <button className='text-gray-500 p-2 rounded'> Sign in </button>
                    </div>
                </div>
            </nav>
            {/* HEADER */}
            <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
                <div className='flex flex-1 justify-center items-center'>
                <input type='search' className='bg-white rounded md:text-sm sm:text-xs mr-3 md:w-[300px] sm:w-60 py-3.5 px-3 font-semibold' placeholder='Location, Restaurant and Cusine' value={location} onChange={(e) => setLocation(e.target.value)}/>
                <button className='bg-red-600 md:p-3 sm:p-2 rounded' onClick={handleSearch}> Let's Go </button>
                </div>
            </div>
            {/*  */}
            <div className='flex py-4 m-auto w-2/3 justify-between items-start text-black'>
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
                {/*  */}
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
                {/* SEARCH SIDEBAR */}
                <div className='w-5/6 mt-5'>
                {/* RESTAURANT CARD */}
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
                    <div className='text-red-600 -mt-3'>
                        <a href=''> View More Info </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </main>
        </main>
    )
}
