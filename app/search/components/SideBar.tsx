import PriceCatagory from "./PriceCatagory"

export default function SideBar({children}: {children: React.ReactNode}) {
    return (
        <div>
            {children}
            <PriceCatagory />
        </div>
    )
}
