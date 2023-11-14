import {Rating, RestaurantNavBar, Reviews, Title, Description, Images, CustomerReveiws, MakeReservation, Header} from "./"
import RestaurantLayout from "./RestaurantLayout"
export default function page() {
    return (
        <RestaurantLayout>
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
        </RestaurantLayout>
    )
}
