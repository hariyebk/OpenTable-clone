import { Header } from '.'

export default function RestaurantLayout({children, slug}: {children: React.ReactNode, slug: string}) {
    return (
        <>
            <Header name={slug} />
            <div className='flex m-auto w-[75%] justify-between items-start -mt-12 text-gray-700'>
                {children}
            </div>
        </>
    )
}
