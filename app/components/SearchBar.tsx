'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
    const router = useRouter()
    const [location, setLocation] = useState('')
    return (
        <div>
            <input type='search' className='bg-white rounded max-sm:w-[300px] max-sm:px-4 w-[360px] px-3 py-4 text-left mr-4 focus:outline-none font-semibold text-black' placeholder='Location, Restaurant and Cusine' value={location} onChange={(e) => {
                setLocation(e.target.value)
                if(location === "banana") return 
                router.push("/search")
            }} />
            <button className='bg-red-600 rounded-[50px] max-sm:px-7 max-sm:py-2 px-10 py-3'> Let's Go </button>
        </div>
    )
}
