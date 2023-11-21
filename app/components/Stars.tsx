import Image, { StaticImageData } from "next/image"
import fullstar from "../../public/icons/full-star.png"
import halfstar from "../../public/icons/half-star.png"
import emptystar from "../../public/icons/empty-star.png"
import { calculateAvarageRating } from "../utils/calculateRatingAvarage"
import { Review } from "@prisma/client"

export default function Stars({reviews}: {reviews: Review[]}) {
    const AvarageRating = +calculateAvarageRating(reviews)
    const stars: StaticImageData[] = []
    const renderStars = (): React.ReactNode => {
        for (let i = 0; i < 5; i++) {
            const difference = AvarageRating - i
            if(difference >= 1) stars.push(fullstar)
            else if(difference < 1 && difference > 0){
                if(difference <= 0.2) stars.push(emptystar)
                if(difference > 0.2 && difference < 0.6) stars.push(halfstar)
                else stars.push(fullstar)
            }
            else stars.push(emptystar)
        }
        return stars.map((star:StaticImageData, index: number): React.ReactNode => {
            return (
                <Image src={star} width={14} height={14} alt="star" className="mr-1" key={index} />
            )
        })
    }    
    return (
        <div className="flex items-center my-1">
            {renderStars()}
        </div>
    )
}
