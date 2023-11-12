import SearchBar from './SearchBar'
export default function Header() {
    return (
        <>
        <div className='h-72 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]'>
        <div className='text-center py-10'>
            <h1 className='text-white font-bold md:text-5xl sm:text-3xl mb-2'> Find your table for any occasion </h1>
            <div className='text-left py-3 mt-10 m-auto sm:m-8 flex justify-center gap-4'>
                {/* FILTER */}
                <div className='text-gray-600 font-semibold text-sm'>
                {/* TIME */}
                <select className='bg-white md:w-20 sm:w-20 h-12 rounded p-2 mr-3'>
                    <option value={7}> 7 Am </option>
                </select>
                {/* NUMBER OF PEOPLE */}
                <select className='bg-white md:w-28 sm:w-24 h-12 rounded p-2'>
                    <option value={1}> 1 person </option>
                    <option value={2}> 2 people </option>
                    <option value={3}> 3 people </option>
                </select>
                </div>
                <SearchBar />
            </div>
        </div>
        </div>
        </>
    )
}
