import NavBar from './components/NavBar'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'

export default function Home() {
return (
    <main className= "bg-white min-h-screen w-screen">
        <main className='m-auto max-w-screen-2xl'>
            <NavBar />
        </main>
        <main>
            <Header />
            <RestaurantCard />
        </main>
    </main>
)
}
