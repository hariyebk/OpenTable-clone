import React from 'react'

export default function loading() {
    return (
        <div className='flex flex-col gap-4 flex-1 justify-center'>
            <div className='w-full h-72 bg-slate-200 animate-pulse'>
            </div>
            <div className='flex w-[75%] mx-20 justify-center gap-6'>
                <div className='w-[60%] mr-8 h-screen bg-slate-200 animate-pulse'>
                </div>
                <div className='w-72 h-[400px] bg-slate-200 animate-pulse'>
                </div>
            </div>
        </div>
    )
}
