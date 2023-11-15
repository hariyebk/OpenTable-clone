export default function Images({images}: {images: string[]}) {
    return (
        <div>
            <h1 className='font-bold text-2xl pb-5 border-b mt-10 mb-6 ml-4'> {images.length} {images.length > 1 ? "photos" : "photo"} </h1>
            <div className='flex flex-wrap'>
                {images.map((image: string): React.ReactNode => {
                    return (
                        <img className = 'w-56 h-44 mr-1 mb-1' src={image} alt='restaurant-image' key={image}/>
                    )
                })}
            </div>
        </div>
    )
}
