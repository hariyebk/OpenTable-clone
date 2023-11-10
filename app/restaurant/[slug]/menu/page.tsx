import React from 'react'

export default function page() {
    return (
    <main className= "bg-white min-h-screen w-screen">
        <main className='m-auto max-w-screen-2xl'>
            {/* Navbar */}
            <div className='mb-4 bg-gray-200 pt-1 h-8 '>
            <ul className='flex justify-end items-end gap-5 mr-10 text-gray-500 text-[12px]'>
                <li> <a href=''> For Business </a></li>
                <li> <a href=''> Mobile </a></li>
                <li> <a href=''> Get help </a></li>
                <li> <a href=''> FAQs </a></li>
            </ul>
            </div>
            <nav className='bg-white p-2 flex justify-between mx-10'>
            <a href='' className='font-semibold text-black md:text-xl sm:text-sm'> OpenTable </a>
            <div>
                <div className='flex gap-2 mr-5 mb-2 text-sm'>
                <button className='bg-sky-700 text-white px-3 rounded  '> Sign up </button>
                <button className='text-gray-500 p-2 rounded'> Sign in </button>
                </div>
            </div>
            </nav>
            {/* NAVBAR */}
            {/* Header */}
            <div className='h-96 overflow-hidden'>
            <div className='bg-center bg-gradient-to-t from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
                <h1 className='text-5xl text-white capitalize text-center'>
                Milestone's Grill (Toronto)
                </h1>
            </div>
            </div>
            {/* OVERLAY SECTION */}
            <div className='flex m-auto w-[75%] justify-between items-start -mt-12 text-gray-700'>
                <div className='bg-white w-[70%] rounded p-3 shadow'>
                {/* RESTAURANT NAV BAR */}
                    <nav className='flex border-b pb-3 ml-4 font-medium'>
                    <a href='' className='mr-7'> overview </a>
                    <a href='' className='mr-7'> Menu </a>
                    </nav>
                    {/* MENU */}
                    <main className="bg-white mt-5">
                    <div>
                        <div className="mt-4 pb-1 mb-1">
                            <h1 className='text-2xl font-bold text-gray-700 ml-3'> Menu </h1>
                        </div>
                        {/* MENU CARD */}
                        <div className="flex flex-wrap justify-between text-gray-700">
                        <div className="border rounded p-3 mb-3 w-[49%]">
                            <h3 className='font-bold text-lg'> Surf and Turf</h3>
                            <p className='text-sm  font-light mt-3'> A well done steak with lobster and rice. </p>
                            <p className='mt-6 font-semibold'> $80.00 </p>
                        </div>
                        </div>
                    </div>
                    </main>
                </div>
            </div>
        </main>
    </main>
    )
}
