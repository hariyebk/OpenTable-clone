import React from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Form from './components/Form'

export default function page() {
    return (
    <main className= "bg-white min-h-screen w-screen">
        <main className='m-auto max-w-screen-2xl pt-8'>
            <NavBar />    
            <Header />
            <div className='border-t h-screen'>
                <div className='py-9 w-3/5 m-auto'>
                    <Form />
                </div>
            </div>
        </main>
    </main>
    )
}
