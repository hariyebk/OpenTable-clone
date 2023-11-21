"use client"
import Image from "next/image"
import errorMascot from "../../public/icons/error.png"

export default function error({error}: {error: ErrorEvent}) {
    return (
        <div className="h-screen bg-slate-200 flex flex-col justify-center items-center">
            <Image src={errorMascot} alt="error" className="w-56 mb-8" />
            <div className="bg-white px-9 py-14 shadow rounded text-gray-700">
                <h3 className="text-3xl font-bold"> Something went wrong </h3>
                <p className="font-semibold text-base mt-2"> We couldn't find the restuarnt that you're looking for </p>
                <p className="text-sm font-normal mt-6"> Error code: 404 </p>
            </div>
        </div>
    )
}
