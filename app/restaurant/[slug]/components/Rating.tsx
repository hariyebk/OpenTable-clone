import { Review } from "@prisma/client";
import { calculateReviews } from "../../../utils/calculateRatingAvarage";

export default function Rating({reviews}: {reviews : Review[]}) {
    return (
        <div className='mt-2 ml-5 flex items-center'>
            <p> **** </p>
            <p className='ml-4 text-base font-normal'> {calculateReviews(reviews)} </p>
        </div>
    )
}
