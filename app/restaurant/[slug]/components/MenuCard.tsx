export default function MenuCard() {
    return (
        <div>
            <div className="mt-4 pb-1 mb-1">
                <h1 className='text-2xl font-bold text-gray-700 ml-3'> Menu </h1>
            </div>
            <div className="flex flex-wrap justify-between text-gray-700">
            <div className="border rounded p-3 mb-3 w-[49%]">
                <h3 className='font-bold text-lg'> Surf and Turf</h3>
                <p className='text-sm  font-light mt-3'> A well done steak with lobster and rice. </p>
                <p className='mt-6 font-semibold'> $80.00 </p>
            </div>
            </div>
        </div>
    )
}
