import {RestaurantNavBar, MenuCard, Header} from "../"
import RestaurantLayout from "../RestaurantLayout"
export default function page() {
    return (
        <RestaurantLayout>
            <div className='bg-white w-[70%] rounded p-3 shadow'>
                <RestaurantNavBar />
                <main className="bg-white mt-5">
                    <MenuCard />
                </main>
            </div>
        </RestaurantLayout>
    )
}
