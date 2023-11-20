
'use client'
export const runtime = "edge"
import Link from 'next/link';
import {PiPlusThin} from "react-icons/pi";

import { DeleteForm } from '../actions/deleteTrip';

export default  function Cards({image, name,pid} ){
    // as={`/Trip/${pid}`}

    return( 
        <div>
                            <DeleteForm id={pid}/>

        <Link 
        href={name !== undefined ? `/trip/${pid}` : `/trip/Create`}
        as={name !== undefined ? `/trip/${pid}` : `/trip/Create`}
        
        >
            <div className="p-5  border-solid border-black  ">
                <div
                    className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50">
                                {( name!==undefined) 
                                ? (
                                        <div> {name}
                                        </div>
                                       


                                ):
                                (
                                            <PiPlusThin   color='black' size={50} > </PiPlusThin> 
                                )
                                
                            }
                                

                </div>

    
            </div>
        </Link>
        </div>

     
    )
}