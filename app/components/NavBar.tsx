"use client"
import Link from 'next/link'
import AuthModal from './AuthModal'
import { useAuthContext } from '../../context/AuthContext'
import useAuth from '../../hooks/useAuth'


export default function NavBar() {
    const {data} = useAuthContext()
    const {logout} = useAuth()
    function handleLogout(){
        logout()
    }
    return (
        <nav className='bg-white p-2 flex justify-between mx-10 pt-8'>
        <Link href='/' className='font-bold text-gray-800 md:text-2xl sm:text-sm'> OpenTable </Link>
        <div>
            <div className='flex gap-2 mr-5 mb-2 text-sm'>
                {data ? (
                <button className='bg-gray-800 text-white text-lg border p-1 px-4 rounded mr-3 focus:outline-none' onClick={handleLogout}> Log out</button>
                )
                :
                <>
                    <AuthModal isSignIn = {true} />
                    <AuthModal isSignIn = {false} />
                </>
                }
            </div>
        </div>
        </nav>
        
    )
}
