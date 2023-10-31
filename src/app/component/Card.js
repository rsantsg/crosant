'use client'
import {PiPlusThin} from "react-icons/pi";

import Link from 'next/link'
export default function Cards({image, name,pid} ){
    // as={`/Trip/${pid}`}
    console.log(name)

    return( 
        <Link 
        href={name !== undefined ? `/Trip/[slug]` : `/Trip/Create`}
        as={name !== undefined ? `/Trip/${pid}` : `/Trip/Create`}
        
        >
            <div className="p-5  border-solid border-black  ">
                <div
                    className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50">
                                {( name!==undefined) 
                                ? (
                                        <div> {name}</div>

                                ):
                                (
                                            <PiPlusThin   color='black' size={50} > </PiPlusThin> 
                                )
                                
                            }
                                

                </div>
    
            </div>
        </Link>

     
    )
}