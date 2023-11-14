import {Price as PRICE} from "@prisma/client"

export default function Price({price}: {price: string}) {
    const renderPrice = () => {
        if(price === PRICE.CHEAP){
            return (
                <>
                    <span> $$ </span> <span className="text-gray-400"> $$ </span>
                </>
            )
        }
        else if(price === PRICE.REGULAR){
            return (
                <>
                    <span>$$$</span> <span className="text-gray-400">$</span>
                </>
            )
        }
        else if(price === PRICE.EXPENSIVE){
            return (
                <>
                    <span className="">$$$$</span>
                </>
            )
        }

    }
    return (
        <p className='flex mb-2 font-light font-mono'>{renderPrice()}</p>
    )
}
