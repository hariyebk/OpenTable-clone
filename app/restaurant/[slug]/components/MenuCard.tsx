import { Dish } from "@prisma/client";

export default function MenuCard({dishes}: {dishes: Dish[]}) {
    return (
        <div>
            <div className="mt-4 pb-1 mb-1">
                <h1 className='text-2xl font-bold text-gray-700 ml-3'> Menu </h1>
            </div>
            <div className="flex flex-wrap justify-between text-gray-700">
                {dishes.map((dish: Dish): React.ReactNode => {
                    return (
                        <div className="border rounded p-3 mb-3 w-[49%]" key={dish.id}>
                            <h3 className='font-bold text-lg'> {dish.name} </h3>
                            <p className='text-md font-semibold mt-3'> {dish.description} </p>
                            <p className='mt-6 font-semibold'> {dish.price} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
