import {RestaurantNavBar, MenuCard, Header} from "../"
import RestaurantLayout from "../RestaurantLayout"
import {PrismaClient, Dish} from "@prisma/client"
const prisma = new PrismaClient()
const fetchRestaurantDishes = async (slug: string)  => {
    try{
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug,
        },
        select: {
            dishes: true
        }
    })
    if(!restaurant) throw Error()
    return restaurant.dishes
    }
    catch(error){
        console.log(error)
    }
}
export default async function page({params}: {params: {slug: string}}) {
    const dishes = await fetchRestaurantDishes(params.slug)
    return (
        <RestaurantLayout slug={params.slug}>
            <div className='bg-white w-[70%] rounded p-3 shadow'>
                <RestaurantNavBar slug={params.slug} />
                <main className="bg-white mt-5">
                    {dishes?.length ? <MenuCard dishes={dishes} /> : <p className="mt-10 font-semibold text-3xl text-gray-900"> This restaurant has no menu</p>}
                </main>
            </div>
        </RestaurantLayout>
    )
}
