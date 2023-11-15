import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import { PrismaClient, Cusine, Location } from '@prisma/client'
const prisma = new PrismaClient()

export interface RestaurantProps {
    id: number,
    main_image: string,
    name: string,
    cusine: Cusine,
    location: Location,
    price: string,
    slug: string
}
const fetchRestaurants = async () => {
    try{
    const restaurants = await prisma.restaurant.findMany({
        select: {
            id: true,
            main_image: true,
            name: true,
            cusine: true,
            location: true,
            price: true,
            slug: true
        }
    })
    if(!restaurants) throw Error
    return restaurants
    }
    catch(error){
        console.log(error)
    }
}

export default async function Home() {
    const restaurants = await fetchRestaurants()
    return (
        <main>
            <Header />
            <div className='flex flex-wrap justify-center items-center'>
            {restaurants?.map((res: RestaurantProps): React.ReactNode => {
                return (
                    <RestaurantCard restaurant={res}/>
                )
            })}
            </div>
        </main>
    )
}
