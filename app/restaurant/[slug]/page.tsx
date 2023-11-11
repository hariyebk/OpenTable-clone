import {NavBar, Header, Rating, RestaurantNavBar, Reviews, Title, Description, Images, CustomerReveiws, MakeReservation} from "./"
export default function page() {
    return (
    <main className= "bg-white min-h-screen w-screen">
        <main className='m-auto max-w-screen-2xl pt-8'>
            <NavBar />
            <Header />
            <div className='flex m-auto w-[75%] justify-between items-start -mt-12 text-gray-700'>
            <div className='bg-white w-[70%] rounded p-3 shadow'>
                <RestaurantNavBar />
                <Title />
                <div className='flex items-end text-sm text-gray-700'>
                    <Rating />
                    <Reviews />
                </div>
                <Description />
                <Images />
                <CustomerReveiws />
            </div>
            <MakeReservation />
            </div>
        </main>
    </main>
    )
}
