
'use client'
export const runtime = "edge"
import Link from 'next/link';
import {PiPlusThin} from "react-icons/pi";

import { DeleteForm } from '../actions/deleteTrip';

export default  function Cards({image, name,pid} ){
    // as={`/Trip/${pid}`}

    return( 
    <div className="p-5  border-solid border-black   ">
<div className='top-0 left-0'>
                                <DeleteForm id={pid}/>

                            </div>
        <Link 
        href={name !== undefined ? `/trip/${pid}` : `/trip/Create`}
        as={name !== undefined ? `/trip/${pid}` : `/trip/Create`}
        
        >
            <div >
                <div
                    className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50 hover:bg-slate-200">
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