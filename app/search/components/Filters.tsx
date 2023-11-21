import Link from 'next/link'
import React from 'react'
import { RESTAURANT_QUERY_OPTIONS } from './Variables'
import { Price } from '@prisma/client'

export default function Filters({label, links, searchParams}: {label: string, links: {name: string}[], searchParams: {searchParams: {city?: string, cuisine?: string, price?: Price}}}) {
    const queryKey = label === RESTAURANT_QUERY_OPTIONS.location ? RESTAURANT_QUERY_OPTIONS.location : RESTAURANT_QUERY_OPTIONS.cuisine
    return (
        <div className='border-b pb-4'>
            <h1 className='mb-4 font-bold text-2xl pt-2 uppercase'> {label} </h1>
            <div className="flex flex-col space-y-2">
                {links?.map(({name}: {name: string}):React.ReactNode => {
                    return (
                        <div key={name}>
                            <Link href={{
                            pathname: "/search",
                            // overide the queryKey if it already exists else add a new one to the existing query
                            query: {...searchParams.searchParams, [queryKey]: name}
                            }} className='font-normal text-base capitalize cursor-pointer'> 
                            {name} 
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
