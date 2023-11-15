import React from 'react'

export default function Haeder({name}: {name: string}) {
    const fixTitle = () => {
        const nameArray = name.split("-")
        nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`
        return nameArray.join(" ").toUpperCase()
    }
    return (
        <div className='h-96 overflow-hidden'>
            <div className='bg-center bg-gradient-to-t from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
                <h1 className='text-5xl text-white capitalize text-center'>
                {fixTitle()}
                </h1>
            </div>
        </div>
    )
}
