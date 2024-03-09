"use server"
import { where,onSnapshot,query,addDoc,collection, getFirestore, getDocs, getDocFromServer} from "firebase/firestore";
import { db} from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Trip } from "./dataSchema";
//import { auth} from "firebase-admin";
import {auth } from './firebase/firebase'


const authTrip = async (data, uid)=>{
    try {
        console.log("EL")
        //console.log(user)
        const dataPackage = new Trip(data.name, data.uid, {read:[data.uid], write:[data.uid]}, data.description, data.where , data.to)
        let dataP = {
            "name": data.name, 
            "uid": uid, 
            "Mode" :{ 
                "read":[uid], 
                'write':[uid], 

            }, 
            "description" : data.description, 
            "where": data.where, 
            "to": data.to

        }
        //console.log(auth.currentUser)
        console.log(dataP)
        let q =  collection(db, "Trip")
        const result = await addDoc(q , dataP);
        console.log("Trip addesd successfully:");
        return result.id
    } catch (error) {
        console.error("Error adding trip:", error.toString());
        return undefined
    } 
}

export async function addNewTrip(data) {
    "use server"
  
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        if(authUser){
             authTrip( data, authUser.uid)
        }
    })
    return ()=> unsubscribe();
      
    
}


export async function deleteQuery(uid, table, ItemID){

    return 
}
  