
import './globals.css'

import { Inter } from 'next/font/google'
import SideNav from './component/SideNav'
import { useSession } from "next-auth/react"
import { getSession } from 'next-auth/react'

const inter = Inter({ 
  weight: ['400', '900'],
  subsets: ['latin'], })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const session  = await getSession()
  return (
    <html  className="  h-screen  w-screen"lang="en">
      <body className={inter.className}>
          <SideNav/> 

            {children}
        </body>
    </html>
  )
}
