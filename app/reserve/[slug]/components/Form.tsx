export default function Form() {
    return (
        <>
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
        </>
    )
}
