export default async function Page(data) {
    console.log(data.params.slug)
    
    return( 
        <div className="  border-4 border-solid h-screen bg-slate-100 w-screen grid grid-cols-10 grid-rows-3">
                    <div className=" row-end-1 flex uppercase items-center bg-blue-50 col-start-1 col-end-11     h-20  border border-solid ">
                        <div className="text-left text-5xl font-bold pl-10"> 
                            {data.searchParams.name}

                        </div>
                     </div>
                     <div className=" row-end-2 w-screen h-4 bg-slate-200" >
                        llol
                         </div>
                    <div className=" bg-blue-200  row-end-3 col-start-1 col-end-11 "> 
                        Hello
                    </div>


      
      
       </div>
    )
}