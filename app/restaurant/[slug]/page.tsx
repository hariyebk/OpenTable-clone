import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
    <main className= "bg-white min-h-screen w-screen">
        <main className='m-auto max-w-screen-2xl pt-8'>
            <nav className='bg-white p-2 flex justify-between mx-10'>
            <Link href='/' className='font-semibold text-black md:text-xl sm:text-sm'> OpenTable </Link>
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
            {/* Header */}
            <div className='flex m-auto w-[75%] justify-between items-start -mt-12 text-gray-700'>
            <div className='bg-white w-[70%] rounded p-3 shadow'>
                {/* RESTAURANT NAV BAR */}
                <nav className='flex border-b pb-3 ml-4 font-medium'>
                    <Link href='/restaurant/baby' className='mr-7'> overview </Link>
                    <Link href='/restaurant/baby/menu' className='mr-7'> Menu </Link>
                </nav>
                {/* TITLE */}
                <div className='mt-8 pb-6 text-gray-600'>
                <h1 className='text-5xl font-bold pl-5 pb-3'>Milestones Grill + Bar - Moncton </h1>
                </div>
                <div className='flex items-end text-sm text-gray-700'>
                {/* RATINGS */}
                <div className='mt-2 ml-5 flex items-center'>
                    <p> **** </p>
                    <p className='ml-4'> 4.8 </p>
                </div>
                {/* REVIEWS */}
                <div className='ml-3 flex items-end'>
                    <p className='font-bold'> 600 reviews </p>
                </div>
                </div>
                {/* DESCRIPTION */}
                <div className='m-4'>
                    <p className='text-sm font-normal text-justify'> The classics you love prepared with a perfect twist, all served up in an atmosphere that feels just right. That’s the Milestones promise. So, whether you’re celebrating a milestone, making the most of Happy Hour or enjoying brunch with friends, you can be sure that every Milestones experience is a simple and perfectly memorable one. </p>
                </div>
                {/* IMAGES */}
                <div>
                <h1 className='font-bold text-2xl pb-5 border-b mt-10 mb-6 ml-4'> 5 Photos </h1>
                <div className='flex flex-wrap'>
                    <img className = 'w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/3/41701347.webp' alt=''/>
                    <img className = 'w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701344.webp' alt=''/>
                    <img className = 'w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701349.webp' alt=''/>
                    <img className = 'w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701348.webp' alt=''/>
                    <img className = 'w-56 h-44 mr-1 mb-1' src='https://resizer.otstatic.com/v2/photos/xlarge/2/41701350.webp' alt=''/>
                </div>
                </div>
                {/* REVIEWS */}
                <div>
                <h1 className='font-bold text-xl mt-10 mb-7 border-b pb-5'> What 100 people are saying </h1>
                {/* REVIEW CARD */}
                <div className="border-b pb-7 mb-7">
                    <div className="flex">
                    {/* CUSTOMER PROFILE */}
                    <div className="w-1/6 flex flex-col items-center">
                        <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center'>
                        <h1 className='font-bold text-white text-2xl pl-3'> HB </h1>
                        </div>
                        <p className='mt-3 font-normal'> Harun Bekri </p>
                    </div>
                    {/*  */}
                    <div className='ml-10 w-5/6'>
                        {/* STARS */}
                        <div className='flex items-center'>
                        <div className='flex mr-5'>
                            ******
                        </div>
                        </div>
                        {/* REVIEW */}
                        <div className='mt-5'>
                        <p className='text-sm font-normal text-justify'> This is the first time I experience this in this establishment. From the moment we arrived we were told our table had been reserved for another party in 2 hours. It was plenty of time however through the whole meal we felt rushed.  Interrupted frequently. And as soon as we said we didn’t want dessert our bill and payment came immediately. We were not even finished our drinks. Didn’t make the night very pleasant. </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* RESERVATION SECTION */}
            <div className='w-[25%] relative'>
                <div className="bg-white w-full rounded p-3 shadow">
                {/* TITLE */}
                <div className="text-center border-b pb-2 font-bold">
                    <h4 className='mr-7 text-lg'> Make a reservation </h4>
                </div>
                {/* SELECT NUMBER OF PEOPLE  */}
                <div className='my-3 flex flex-col'>
                    <label className='font-semibold mt-2 mb-3' htmlFor=''> Party Size </label>
                    <select name = '' className='border-b py-3 font-light bg-white' id = ''>
                    <option value={1}> 1 person </option> 
                    <option value={2}> 2 people </option> 
                    </select>
                </div>
                {/* DATE AND TIME */}
                <div className='flex justify-between'>
                    {/* DATE */}
                    <div className='flex flex-col w-[48%]'>
                    <label htmlFor='' className='font-semibold mt-2 mb-3'> Date </label>
                    <input type='text' className='bg-white w-28 font-light border-b py-3'/>
                    </div>
                    {/* TIME */}
                    <div className='flex flex-col w-[48%]'>
                    <label htmlFor='' className='font-semibold mt-2 mb-3'> Time </label>
                    <select className='border-b py-3 font-light bg-white' name='' id=''>
                        <option value={7}> 7:30 Am </option>
                        <option value={8}> 8:30 Am </option>
                    </select>
                    </div>
                </div>
                <div className='mt-5 flex flex-col'>
                    <button className='bg-red-600 rounded text-white px-4 font-bold w-full h-16'> Find a time </button>
                </div>
                </div>
            </div>
            </div>
        </main>
    </main>
    )
}
