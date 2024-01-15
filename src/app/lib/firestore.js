import { addDoc,collection, getFirestore} from "firebase/firestore";
import { db, auth} from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";



export async function addTrips(data) {
  
        try {
            console.log("EL")
            const result = await addDoc(collection(db, "Trip"), {
            name: data.name,
            user: data.user, // Assuming you want to store the user's UID
          });
          console.log("Trip added successfully:");
        } catch (error) {
          console.error("Error adding trip:", error);
        } 
      
    
}
  