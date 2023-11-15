export default function Description({description}: {description: string}) {
    return (
        <div className='m-4'>
            <p className='text-md font-semibold text-justify'> {description} </p>
        </div>
    )
}
