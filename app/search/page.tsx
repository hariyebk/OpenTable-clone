import React from "react"
import {Header, SideBar, RestaurantCard} from "./"
import {PrismaClient, Cusine, Location, Price, Review} from "@prisma/client"
import Filters from "./components/Filters"
import { RESTAURANT_QUERY_OPTIONS } from "./components/Variables"
import PriceCatagory from "./components/PriceCatagory"
const prisma = new PrismaClient()
export interface searchedRestaurant {
    name: string,
    main_image: string,
    price: string,
    cusine: Cusine,
    description: string,
    slug: string,
    location: Location,
    Review: Review[]
}
export interface QueryParms {
    searchParams: {
        city?: string, 
        cuisine?: string, 
        price?: Price
    }
}

const fetchSearchedRestaurant = async ({searchParams}: QueryParms) => {
    const where: any = {}
    const select = {
        name: true,
        main_image: true,
        price: true,
        cusine: true,
        Review: true,
        description: true,
        slug: true,
        location: true,
    }
    try{
        // If there is no query provided return 10 restuarants
        if(!searchParams.city && !searchParams.cuisine && !searchParams.price) return prisma.restaurant.findMany({select, take: 10})
        if(searchParams.city){
            where.location = {
                name: {
                    equals: searchParams.city.toLowerCase()
                }
            }
        }
        if(searchParams.cuisine){
            where.cusine = {
                name: {
                    equals: searchParams.cuisine.toLowerCase()
                }
            }
        }
        if(searchParams.price){
            where.price = {
                equals: searchParams.price.toUpperCase()
            }
        }
        const restaurants = await prisma.restaurant.findMany({where, select})
        if(!restaurants.length) throw Error
        return restaurants    
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
export default async function page({searchParams}: QueryParms){
    const restaurants = await fetchSearchedRestaurant({searchParams})
    const locations = await fetchLocations()
    const cuisines = await fetchCuisines()
    return (
        <>
            <Header />
            <div className='flex py-4 m-auto w-2/3 justify-between items-start text-black'>
                <SideBar>
                    <>
                        <nav>   
                            <Filters label={RESTAURANT_QUERY_OPTIONS.location} links={locations!} searchParams={{searchParams}} />
                        </nav>
                        <nav>
                            <Filters label={RESTAURANT_QUERY_OPTIONS.cuisine} links={cuisines!} searchParams={{searchParams}}/>
                        </nav>
                        <PriceCatagory searchParams={searchParams} />
                    </>
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
