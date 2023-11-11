import {NavBar, Header, RestaurantNavBar, MenuCard} from "../"

export default function page() {
    return (
    <main className= "bg-white min-h-screen w-screen overflow-scroll overflow-x-hidden">
        <main className='m-auto max-w-screen-2xl pt-8'>
            <NavBar />
            <Header />
            {/* OVERLAY SECTION */}
            <div className='flex m-auto w-[75%] justify-between items-start -mt-12 text-gray-700'>
                <div className='bg-white w-[70%] rounded p-3 shadow'>
                    <RestaurantNavBar />
                    {/* MENU */}
                    <main className="bg-white mt-5">
                        <MenuCard />
                    </main>
                </div>
            </div>
        </main>
    </main>
    )
}
