'use client'
export default function MakeReservation() {
    return (
        <div className='w-[25%] sticky'>
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
    )
}
