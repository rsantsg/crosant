'use client'

import {PiPlusThin} from "react-icons/pi";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { AddTrip } from "../actions/addTrip";
//`  // use your custom style for ".popup-overlay"  &-overlay {    ...;  }  // use your custom style for ".popup-content"  &-content {    ...;  }`;



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



export default function PopupForm({createTripHandler}){

    return( 
        <Popup className="h-[500px] w-[500px]" trigger={
            <div className="p-5  rounded-xl border-solid border-black  ">
                <div
                className="   hover:cursor-pointer flex justify-center items-center rounded-lg shadow-md h-[200px] w-[175px] bg-slate-50">    
                   <PiPlusThin   color='black' size={50}>   </PiPlusThin> 

            </div>

        </div>} modal
          position="right center">
        <AddTrip></AddTrip>

            


        </Popup>

    


    )
}