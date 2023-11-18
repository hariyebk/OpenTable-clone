import { Review } from "@prisma/client";

export default function CustomerReveiws({reviews}: {reviews: Review[]}) {
    return (
        <div>
            <h1 className='font-bold text-xl mt-10 mb-7 border-b pb-5'> {reviews.length === 1 ? `what ${reviews.at(0)?.first_name} is saying` : `What ${reviews.length} people are saying`} </h1>
            {!reviews.length ? <p className="text-grey-700 text-lg text-center"> This restaurant have no reviews yet </p> : reviews.map((review: Review): React.ReactNode => {
                return (
                        <div className="border-b pb-7 mb-7">
                            <div className="flex">
                            {/* CUSTOMER PROFILE */}
                            <div className="w-1/6 flex flex-col items-center">
                                <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center'>
                                <h1 className='font-bold text-white text-2xl pl-3'> HB </h1>
                                </div>
                                <p className='mt-3 font-normal text-center'> <span> {review.first_name} </span> <span> {review.last_name}</span></p>
                            </div>
                            {/*  */}
                            <div className='ml-10 w-5/6'>
                                {/* STARS */}
                                <div className='flex items-center'>
                                <div className='flex mr-5'>
                                    ******
                                </div>
                                </div>
                                {/* REVIEW */}
                                <div className='mt-5'>
                                <p className='text-sm font-normal text-justify'> {review.text} </p>
                                </div>
                            </div>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}
