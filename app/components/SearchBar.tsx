'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
    const router = useRouter()
    const [location, setLocation] = useState('')
    function handleFormSubmit(e:React.FormEvent){
        e.preventDefault()
        setLocation("")
        if(location){
            router.push(`/search?city=${location}`)
        }
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type='search' className='bg-white rounded max-sm:w-[300px] max-sm:px-4 w-[360px] px-3 py-4 text-left mr-4 focus:outline-none font-semibold text-black' placeholder='state, city, location' value={location} onChange={(e) => setLocation(e.target.value)}/>
            <button className='bg-red-600 rounded-[50px] max-sm:px-7 max-sm:py-2 px-10 py-3'> Let's Go </button>
        </form>
    )
}
