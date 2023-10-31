'use client'
import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

const fetchTrips = async () => {
    console.log("LMAO");
    
    const data = {
        location: 'New York', // Replace with the actual data you want to send
    };
    const base64Credentials = btoa('ron:SW_nvgm_U@1');

    try {
        const response = await fetch('https://api.crosant.com/trip', {
            method: "POST",
            credentials: "include", // Include cookies if needed
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Basic ${base64Credentials}`
            },
            body: JSON.stringify(data), // Convert the data object to a JSON string
        });

        console.log(response.status);

        if (response.ok) {
            const result = await response.json(); // If you expect JSON data in the response
            console.log(result);
        } else {
            console.error("Request failed");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const form =   
 <div className=" max-w-lg lg:ms-auto mx-auto text-center "  > 

    <div className="py-6 px-7 rounded-md bg-white">
        <div className="text-lg px-7 py-6" > Create a new Trip </div>

        <form className="" action="" method="POST" onSubmit={e=> fetchTrips()}> 
        {fetchTrips()}

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <input type="text" id="fname" name="fname" placeholder="Name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "/>
                <input type="text" id="fname" name="fname" placeholder="Téléphone *" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"/>
            </div>
            <div class="md:col-span-2 pt-5">
                <button value = "submit"type="submit" className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">Create</button>
            </div>

        </form>


    </div> 



</div>
/**
 * 
 * @returns 
 * 
 *     <div className="p-5  border-solid border-black  ">
                <div
                    className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50">
                             
                                
                                
                                

                </div>
    
            </div>

 */


export default function PopupForm(){
    return( 
        <Popup trigger={
            <div className="p-5  rounded-xl border-solid border-black  ">
            <div
                className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50">    
                   <PiPlusThin   color='black' size={50}>   </PiPlusThin> 

            </div>

        </div>}
          position="right center"
        >
             <div className=" rounded-lg max-w-lg lg:ms-auto mx-auto text-center h-[190px]"  > 

                <div className="py-3  rounded-md bg-white">
                    <div className="text" > Create a new Trip </div>

                    <form className="" action="" method="POST"> 
                        <div className="grid lg:col-span-3 md:grid-cols-1 md:col-span-3 ">
                            <input type="text" id="fname" name="fname" placeholder="Name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "/>
                        </div>
                        <div className="md:col-span-2 pt-5">
                            <button className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300">Valider</button>
                        </div>

                    </form>


                </div> 



                </div>

            


        </Popup>

    


    )
}