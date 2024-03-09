"use client"
import { where,onSnapshot,query,addDoc,collection, getFirestore, getDocs, getDocFromServer} from "firebase/firestore";
import { db} from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
//import { auth} from "firebase-admin";

export async function getDash(userUid){
    if(userUid){



          
      

        console.log('firestore decode ', userUid)
        let q = query(collection(db, "Trip"), where('uid' ,'==' ,userUid)); 
        //q = applyQueryFilters(q, filters);
        const result = await getDocs(q); 
        console.log(result)
        let s = []
        result.forEach((doc)=>{
            
             s.push(doc.data());

        })

        return s

           
           
        
        
    

        //const uid = await getUser();
        //const user = currentAuth().verifySessionCookie(jwt.value)

        

        

    



    


    } 
    return []; 
}