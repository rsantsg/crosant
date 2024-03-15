'use client'
import { PiListBold } from "react-icons/pi";
import { useState } from "react"
import Link from "next/link"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function SideNav(){
  const supabase = createClientComponentClient();
  const router = useRouter()

  const [dropDown, setDropDown] = useState(false); 
  const dropDownHandler = ()=>{
    setDropDown(!dropDown); 
  }
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
    router.push('/login')

  }

    return( 
      <div >
      <header className="flex  items-center  justify-between border-b-2 border-gray-200 bg-white p-2">
      <div className="flex items-center space-x-2">
          <PiListBold onClick={dropDownHandler} type="button" className="text-3xl" ><i className="bx bx-menu"></i></PiListBold>
          <Link href={'/'}>
            
            
            CROSANT
            </Link>
          
              
            
      </div>

      
  </header>
  { dropDown ? (
    
    <div className=" wrap float-left h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 ">
     
  
      <ul className="mt-6 space-y-1">
        <li>
          <Link  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
           href='/'> 
              Dashboard 
          </Link>

        </li>
  
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> Trips </span>
  
              <span
                className="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
  
            <ul className="mt-2 space-y-1 px-4">
              <li>
                <div                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Complete
                </div>
              </li>
  
              <li>
                <div                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Planning
                </div>

              </li>
            </ul>
          </details>
        </li>
  
  
    
  
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> Account </span>
  
              <span
                className="shrink-0 transition duration-300 group-open:-rotate-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
  
            <ul className="mt-2 space-y-1 px-4">
              <li>
                <div                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Details
                </div>

              </li>
  
              <li>
                <div
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Security
                </div>

              </li>
  
              <li>
                  <button
                    type="submit"
                    onClick={handleSignOut}
                    className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                  >
                    Logout
                  </button>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  

    </div>
  ):(<></>)
  
}
   </div>
  
     )
}