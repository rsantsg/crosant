export default function CreateTrip(){


    return (
        <div className="flex items-center justify-center h-screen ">
            <div className=" max-w-lg lg:ms-auto mx-auto text-center "  > 

                    <div className="py-6 px-7 rounded-md bg-white">
                        <div className="text-lg px-7 py-6" > Create a new Trip </div>

                        <form className="" action="" method="POST"> 
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <input type="text" id="fname" name="fname" placeholder="Nom *" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "/>
                            <input type="text" id="fname" name="fname" placeholder="Téléphone *" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"/>
                        </div>
                        <div class="md:col-span-2 pt-5">
                            <button class="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">Valider</button>
                        </div>

                        </form>


                    </div> 

            
            
            </div>
        </div>
    ) 


}