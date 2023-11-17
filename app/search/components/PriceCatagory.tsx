import { QueryParms } from "../page"
import { PRICES, RESTAURANT_QUERY_OPTIONS } from "./Variables"
import Link from "next/link"
export default function PriceCatagory({searchParams}: QueryParms) {
    const prices = [{price: PRICES.cheap, label: "$"}, {price: PRICES.regular, label: "$$"}, {price: PRICES.expensive, label: "$$$"}]
    return (
        <div className='mt-3 pb-4'>
            <h1 className='mb-2 font-bold text-2xl'> Prices </h1>
            <div className='flex'>
                {prices.map((price): React.ReactNode => {
                    return (
                        <Link href={{
                            pathname: "/search", 
                            query: {...searchParams, [RESTAURANT_QUERY_OPTIONS.price]: price.price}}} className='border w-full text-reg font-semibold rounded-l p-2'>
                            {price.label}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
