import Link from 'next/link'
import { RestaurantProps } from '../page'
import Price from './Price'

interface PropType {
    restaurant: RestaurantProps
}

export default function RestaurantCard({restaurant}: PropType) {
    return (
        <div className='mt-10 mx-10 '>
            <Link href={`/restaurant/${restaurant.slug}`}>
                <div className=' w-64 h-80 m-3 rounded overflow-hidden border cursor-pointer'>
                    <img src={restaurant.main_image} className='w-full h-40' />
                    <div className='p-3 text-gray-700'>
                    {/* DISH */}
                        <h3 className='font-bold text-xl mb-2'> {restaurant.name} </h3>
                        {/* REVIEW */}
                        <div className='flex items-start text-sm '>
                            <Price price={restaurant.price} />
                            <p className='ml-2'> 77 Reviews </p>
                        </div>
                        {/* PRICE */}
                        <div className='flex items-start font-normal capitalize text-sm pt-2'>
                            <p className='mr-3'> {restaurant.cusine.name} </p>
                            <p className='mr-3'> {restaurant.price} </p>
                            <p> {restaurant.location.name} </p>
                        </div>
                        {/* booked time */}
                        <p className='text-sm font-bold py-3'>Booked 4 times today</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
