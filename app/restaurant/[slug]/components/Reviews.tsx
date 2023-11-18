import { Review } from "@prisma/client";

export default function Reviews({reviews}: {reviews: Review[]}) {
    return (
        <div className='ml-3 flex items-end'>
            <p className='font-bold pt-2'> {reviews.length === 0 ? "No reviews yet": reviews.length === 1 ? `${reviews.length} review`: `${reviews.length} reviews`}</p>
        </div>  
    )
}
