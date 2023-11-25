import './globals.css'
import NavBar from "./components/NavBar"
import AuthContext from '../context/AuthContext'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head />
      <body>
        <AuthContext>
            <main className= "bg-white min-h-screen w-screen">
                <main className='m-auto max-w-screen-2xl'>
                  <NavBar />
                </main>
                    {children}
            </main>
        </AuthContext>
      </body>
    </html>
  )
}
