import {NavBar, Header, SideBar, RestaurantCard} from "./"
export default function page() {
    return (
    <main className= "bg-white min-h-screen w-screen">
        <main className='m-auto max-w-screen-2xl pt-8'>
            <NavBar />
            <Header />
            <div className='flex py-4 m-auto w-2/3 justify-between items-start text-black'>
                <SideBar />
                <div className='w-5/6 mt-5'>
                    <RestaurantCard />
                </div>
            </div>
            </main>
        </main>
    )
}
