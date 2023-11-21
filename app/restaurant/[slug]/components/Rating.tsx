import { Review } from "@prisma/client";
import { calculateAvarageRating } from "../../../utils/calculateRatingAvarage";
import Stars from "../../../components/Stars";

export default function Rating({reviews}: {reviews : Review[]}) {
    return (
        <div className='mt-2 ml-5 flex items-center'>
            <Stars reviews={reviews} />
            <p className='ml-4 text-base font-normal'> {calculateAvarageRating(reviews)} </p>
        </div>
    )
}
