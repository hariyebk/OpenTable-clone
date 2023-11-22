import { notFound } from "next/navigation"
import { RestaurantProps } from "../../page"
import {Rating, RestaurantNavBar, Reviews, Title, Description, Images, CustomerReveiws, MakeReservation, Header} from "./"
import RestaurantLayout from "./RestaurantLayout"
import {PrismaClient, Location, Cusine, Review} from "@prisma/client"
const prisma = new PrismaClient()
interface RestaurantDetails {
    id: number,
    name: string,
    location: Location,
    description: string,
    slug: string,
    cusine: Cusine,
    images: string[],
    Review: Review[]
}
const fetchRestaurantDetails = async (slug: string) => {
    try{
    const restaurantDetails = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            location: true,
            description: true,
            cusine: true,
            images: true,
            slug: true,
            Review: true
        }
    })

    if(!restaurantDetails) notFound()

    return restaurantDetails
    }
    catch(error){
        console.log(error)
    }
}
export default async function page({params}: {params: {slug: string}}) {
    const restaurant = await fetchRestaurantDetails(params.slug)

    return (
        <RestaurantLayout slug={restaurant?.slug!}>
            <div className='bg-white w-[70%] rounded p-3 shadow'>
                <RestaurantNavBar slug={params.slug} />
                <Title Title= {restaurant?.name!} />
                <div className='flex items-center text-sm text-gray-700'>
                    <Rating reviews = {restaurant?.Review!} />
                    <Reviews reviews={restaurant?.Review!} />
                </div>
                <Description description={restaurant?.description!} />
                <Images images={restaurant?.images!} />
                <CustomerReveiws reviews={restaurant?.Review!} />
            </div>
            <MakeReservation />
        </RestaurantLayout>
    )
}
