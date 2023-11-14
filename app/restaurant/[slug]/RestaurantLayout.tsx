import { Header } from '.'

export default function RestaurantLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Header />
            <div className='flex m-auto w-[75%] justify-between items-start -mt-12 text-gray-700'>
                {children}
            </div>
        </>
    )
}
