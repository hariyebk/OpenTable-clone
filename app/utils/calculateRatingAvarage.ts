import { Review } from "@prisma/client"

export const calculateAvarageRating = (reviews: Review[]) => {
    if(!reviews.length) return 0
    return (reviews.reduce((acc, val) => acc + val.rating, 0) / reviews.length).toFixed(1)
}