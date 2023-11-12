export default function CustomerReveiws() {
    return (
        <div>
            <h1 className='font-bold text-xl mt-10 mb-7 border-b pb-5'> What 100 people are saying </h1>
            {/* REVIEW CARD */}
            <div className="border-b pb-7 mb-7">
                <div className="flex">
                {/* CUSTOMER PROFILE */}
                <div className="w-1/6 flex flex-col items-center">
                    <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center'>
                    <h1 className='font-bold text-white text-2xl pl-3'> HB </h1>
                    </div>
                    <p className='mt-3 font-normal'> Harun Bekri </p>
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
                    <p className='text-sm font-normal text-justify'> This is the first time I experience this in this establishment. From the moment we arrived we were told our table had been reserved for another party in 2 hours. It was plenty of time however through the whole meal we felt rushed.  Interrupted frequently. And as soon as we said we didn’t want dessert our bill and payment came immediately. We were not even finished our drinks. Didn’t make the night very pleasant. </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}