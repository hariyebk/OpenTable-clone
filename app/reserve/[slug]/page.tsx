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
            {/* RESERVE PAGE */}
            <div className='border-t h-screen'>
                <div className='py-9 w-3/5 m-auto'>
                {/* HEADER */}
                <div>
                    <h3 className='font-bold text-black'> You're almost done</h3>
                    <div className='mt-5 flex'>
                    <img src='https://resizer.otstatic.com/v2/photos/xlarge/2/52759093.webp' alt='fabel-miami' className='w-32 h-18 rounded ' />
                    <div className='ml-4 text-black'>
                        <h1 className='text-3xl font-bold'>Fabel Miami</h1>
                        <div className='flex mt-3'>
                            <p className='mr-6'> Tues, 22, 2023</p>
                            <p className='mr-6'> 7: 30 PM</p>
                            <p className='mr-6'> 3 people </p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* FORM */}
                <div className='mt-10 flex flex-wrap justify-between w-[660px] '>
                    <input className='border rounded p-3 w-80 mb-4 bg-white' placeholder='first name'/>
                    <input className='border rounded p-3 w-80 mb-4 bg-white' placeholder='last name'/>
                    <input className='border rounded p-3 w-80 mb-4 bg-white' placeholder='phone number'/>
                    <input className='border rounded p-3 w-80 mb-4 bg-white' placeholder='email'/>
                    <input className='border rounded p-3 w-80 mb-4 bg-white' placeholder='occasion (optional)'/>
                    <input className='border rounded p-3 w-80 mb-4 bg-white' placeholder='Requests (optional)'/>
                    <button className='bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300'> Complete reservation </button>
                    <p className='mt-4 text-sm text-black'> By Clicking "Complete Reservation" you agree to the openTable terms of use and privacy policy. standard text message rates apply. you may be opt out of receiving text messages at any time. </p>
                </div>
                </div>
            </div>
            </main>
    </main>
    )
}
