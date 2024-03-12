'use server'
//import MyMap from '@lib/component/map/Mapping'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { AddTodo } from '../../../../../actions/addTodo';
export default async function Page( params) {
    const supabase = createServerComponentClient({cookies});
    console.log('params ', params.params.location_id)
    //uncomment for  Production 
    //let {data, error}  = await supabase.from('todos').select().eq('locationId',params.params.location_id)
    //comment out for for production. 
    let data = []
    console.log(data)
    let todo = []
    
    return( 
        <div  className="  border-4 border-solid h-screen bg-transparent w-screen grid grid-cols-10 grid-rows-6">
                    <div className=" row-end-1 flex uppercase items-center bg-blue-50 col-start-1 col-end-11     h-20  border border-solid ">
                        <div className="text-left text-5xl font-bold pl-10"> 
                            {params.searchParams.name}

                        </div>
                     </div>
                    {/**
                     To Do Table
                     */}
                    <div className=" p-5 row-start-4  col-start-1 col-end-12  bg-slate-300" >
                        <div className=" flex  bg-blue-200  content-center justify-center ">

                            <div class="overflow-x-auto w-3/4 ">
                                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                    <thead class="ltr:text-left rtl:text-right">
                                    <tr>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Link</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Address</th>
                                        <th className="whitespace-nowrap px-4 py-2 "><AddTodo id={params.params.location_id}/></th>

                                        <th className="px-4 py-2"> </th>
                                    </tr>
                                    </thead>

                                    <tbody class="divide-y divide-gray-200">
                                        { data? (
                                            data.map((item)=>
                                            
                                            <tr key={item.id} id={item.id}>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.name}</th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.description}</th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.links}</th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.address}</th>


                                        </tr>
                                            
                                            )
                                        ):(<></>)
                                        }
                                      
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className=" z-1  p-5 rounded-md row-start-1 row-end-4 col-start-1 col-end-12 "> 
                    <div className="flex content-center justify-center">
                    {
                    //<MyMap></MyMap>

                        }

                    </div>
                    </div>


      
      
       </div>
    )
}