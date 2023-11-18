import Link from 'next/link'
import React from 'react'
import { searchedRestaurant } from '../page'
import Price from '../../components/Price'
import { calculateReviews } from '../../utils/calculateRatingAvarage'
import { ratingStandard } from './Variables'
export default function RestaurantCard({restaurant}: {restaurant: searchedRestaurant}) {
    return (
        <div className='border-b flex pb-5 space-x-3 ml-8 mb-5'>
            <img src={restaurant.main_image} alt='searched-restaurant-image' className='w-64 h-auto rounded object-fill' />
            <div className='pl-5'>
                <h2 className='text-2xl mt-2 font-bold'> {restaurant.name} </h2>
                <div className='flex flex-col gap-2 items-start my-3'>
                    <div className='flex text-gray-700 text-center items-center'>
                        <p> ***** </p>
                        <p className='text-base font-bold ml-2'> {Number(calculateReviews(restaurant.Review)) >= ratingStandard && "POPULAR"} </p>
                    </div>
                    <p className='ml-2 text-sm text-justify'> {restaurant.description} </p>
                </div>
                <div className='mb-9 ml-2'>
                    <div className='font-normal flex text-reg text-black'>
                        <Price price={restaurant.price} />
                        <p className='mr-4'> {restaurant.cusine.name} </p>
                        <p className='mr-4 capitalize'> {restaurant.location.name} </p>
                    </div>
                </div>
                <Link href = {`/restaurant/${restaurant.slug}`} className='text-red-600'>
                    View More Info 
                </Link>
            </div>
        </div>
    )
}
