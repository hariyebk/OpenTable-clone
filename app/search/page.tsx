import React from "react"
import {Header, SideBar, RestaurantCard} from "./"
import {PrismaClient, Cusine, Location, Price} from "@prisma/client"
import Filters from "./components/Filters"
import { CATAGORIES } from "./components/Variables"
const prisma = new PrismaClient()
export interface searchedRestaurant {
    name: string,
    main_image: string,
    price: string,
    cusine: Cusine,
    description: string,
    slug: string,
    location: Location
}

const fetchSearchedRestaurant = async (queryKey: string) => {
    const select = {
        name: true,
        main_image: true,
        price: true,
        cusine: true,
        description: true,
        slug: true,
        location: true
    }
    try{
        // If there is no query provided return 10 restuarants
        if(!queryKey) return prisma.restaurant.findMany({select, take: 10})
        const restaurants = await prisma.restaurant.findMany({
            where: {
                location: {
                    name: {
                        equals: queryKey
                    }
                }
            },
            select
        })
        if(!restaurants.length) throw Error
        return  restaurants
    }
    catch(error){
        console.log(error)
    }
}
const fetchLocations = async () => {
    try{
        const region = await prisma.location.findMany({select: {
            name: true
        }})
        if(!region) throw Error
        return region
    }
    catch(error){
        console.log(error)
    }
}
const fetchCuisines = async () => {
    try{
    const cuisine = await prisma.cusine.findMany({select: {
        name: true
    }})
    if(!cuisine) throw Error
    return cuisine
    }
    catch(error){
        console.log(error)
    }
}
export default async function page({searchParams}: {searchParams: {city?: string, cuisine?: string, price?: Price}}){
    const queryKey =  searchParams.city?.toLowerCase()
    const restaurants = await fetchSearchedRestaurant(queryKey!)
    const locations = await fetchLocations()
    const cuisines = await fetchCuisines()
    return (
        <>
            <Header />
            <div className='flex py-4 m-auto w-2/3 justify-between items-start text-black'>
                <SideBar>
                    <nav>   
                        <Filters label={CATAGORIES.Regions} links={locations!} searchParams={{searchParams}} />
                    </nav>
                    <nav>
                        <Filters label={CATAGORIES.Cuisines} links={cuisines!} searchParams={{searchParams}}/>
                    </nav>
                </SideBar>
                <div className='w-5/6 mt-5'>
                    {!restaurants ? (
                        <p className="font-semibold m-auto text-3xl text-black"> No restaurants found in {searchParams.city}</p>
                    ): (
                        restaurants.map((restaurant: searchedRestaurant): React.ReactNode => {
                            return (
                                <RestaurantCard restaurant = {restaurant} key={restaurant.name} />
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}
