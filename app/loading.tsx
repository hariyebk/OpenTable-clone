import Header from "./components/Header"

export default function loading() {
    const array = Array.from({ length: 12 }, (_, index) => index + 1)
    return (
        <main>
            <Header />
            <div>
                <div className="mt-10 mx-10 flex flex-wrap justify-center items-center">
                    {array.map((index: number):React.ReactNode => {
                        return (
                            <div key={index} className="animate-pulse bg-slate-200 w-64 h-72 m-5 rounded overflow-hidden border cursor-pointer">
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
