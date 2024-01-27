import { addDoc,collection, getFirestore} from "firebase/firestore";
import { db} from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Trip } from "./dataSchema";
import { getUser } from "./getUser";


export async function addNewTrip(data) {
  
        try {
            console.log("EL")
            const dataPackage = new Trip(data.name, data.uid, {read:[data.uid], write:[data.uid]}, data.description, data.where , data.to)
            const result = await addDoc(collection(db, "Trip"), dataPackage);
            console.log("Trip addesd successfully:");
            return result.id
        } catch (error) {
            console.error("Error adding trip:", error);
            return error 
        } 
      
    
}
  