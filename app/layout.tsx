import './globals.css'
import NavBar from "./components/NavBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className= "bg-white min-h-screen w-screen">
          <main className='m-auto max-w-screen-2xl'>
            <NavBar />
          </main>
            {children}
        </main>
      </body>
    </html>
  )
}
