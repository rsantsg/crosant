import { where,onSnapshot,query,addDoc,collection, getFirestore, getDoc} from "firebase/firestore";
import {auth} from '../../lib/lib/firebase/firebase'
export async function get_Querry(table, filters){
    console.log("Please Call ", auth)

    const user = auth.currentUser
    if(user ){

         const uid =  user.uid; 
         console.log('firestore decode ', uid)
         let q = query(collection(db, table), where('uid' ,'==' ,uid)); 
         //q = applyQueryFilters(q, filters);
         const result = await getDoc(q); 
         console.log(result)
         return result 

    }
    
 
 


 //const uid = await getUser();
 //const user = currentAuth().verifySessionCookie(jwt.value)

 

 






}