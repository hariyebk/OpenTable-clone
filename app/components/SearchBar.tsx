'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
    const router = useRouter()
    const [location, setLocation] = useState('')
    return (
        <div>
            <input type='search' className='bg-white rounded md:text-sm sm:text-xs mr-3 md:w-[300px] sm:w-60 py-3.5 px-3 font-semibold text-black' placeholder='Location, Restaurant and Cusine' value={location} onChange={(e) => {
                setLocation(e.target.value)
                if(location === "banana") return 
                router.push("/search")
            }} />
            <button className='bg-red-600 md:p-3 sm:p-2 rounded'> Let's Go </button>
        </div>
    )
}
