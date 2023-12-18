import { get_Stop } from "../../../../api/trip/route";
import { AddTodo } from "../../../../actions/addTodo";
import { get_Todo } from "../../../../api/trip/route";
import MyMap from '../../../../component/map/Map'
export default async function Page(data, params) {
    console.log(data)
    const todo = await get_Todo(data.params.location_id)
    console.log(todo)
    
    return( 
        <div  className="  border-4 border-solid h-screen bg-transparent w-screen grid grid-cols-10 grid-rows-6">
                    <div className=" row-end-1 flex uppercase items-center bg-blue-50 col-start-1 col-end-11     h-20  border border-solid ">
                        <div className="text-left text-5xl font-bold pl-10"> 
                            {data.searchParams.name}

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
                                        <th className="whitespace-nowrap px-4 py-2 "><AddTodo id={data.params.location_id}/></th>

                                        <th className="px-4 py-2"> </th>
                                    </tr>
                                    </thead>

                                    <tbody class="divide-y divide-gray-200">
                                        {
                                            todo.map((item)=> 
                                            <tr>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.name}</th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.description}</th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.links}</th>
                                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.address}</th>


                                        </tr>
                                            
                                            )
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