import Link from 'next/link'
import AuthModal from './AuthModal'

export default function NavBar() {
    return (
        <nav className='bg-white p-2 flex justify-between mx-10 pt-8'>
        <Link href='/' className='font-bold text-gray-800 md:text-2xl sm:text-sm'> OpenTable </Link>
        <div>
            <div className='flex gap-2 mr-5 mb-2 text-sm'>
                <AuthModal isSignIn = {true} />
                <AuthModal isSignIn = {false} />
            </div>
        </div>
        </nav>
        
    )
}
