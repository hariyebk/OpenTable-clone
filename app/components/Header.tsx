import SearchBar from './SearchBar'
export default function Header() {
    return (
        <>
        <div className='h-72 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]'>
        <div className='text-center py-10'>
            <h1 className='text-white font-bold max-sm:text-3xl text-5xl mb-10'> Find your table for any occasion </h1>
            <SearchBar />
        </div>
        </div>
        </>
    )
}
