
'use client'
export const runtime = "edge"
import Link from 'next/link';
import { Suspense } from 'react';
import { PiPlusThin } from "react-icons/pi";
import Loading from './Loading';
import { query } from 'firebase/firestore';

export default function Cards({ image, data, pid  }) {
    // as={`/Trip/${pid}`}
    return (
        <div className="p-5  border-solid border-black   ">
            <div className='top-0 left-0'>

            </div>
            <Suspense fallback={<Loading/>}>
                <Link
                    href={
                        {
                            pathname :  `/trip/${data.id}/settings` ,
                        query:{
                            id: data.id, 
                            name: data.name, 
                            description:data.description, 
                            from: data.from, 
                            to: data.to

                        }
                    }}
                    
                   

                >
                    <div >
                        <div
                            className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50 hover:bg-slate-200">
                            {(data.name !== undefined)
                                ? (
                                    <div> {data.name}
                                    </div>



                                ) :
                                (
                                    <PiPlusThin color='black' size={50} > </PiPlusThin>
                                )

                            }




                        </div>



                    </div>
                </Link>
            </Suspense>
        </div>


    )
}