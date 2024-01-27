import {auth} from './firebase/firebase'
import { signOut } from 'firebase/auth'
import {redirect} from 'next/navigation'
import { useRouter } from 'next/navigation'
export const signOutUser = async () => { 

    await signOut(auth);
    //const router = useRouter()
    const response = await fetch("http://localhost:3000/api/signOut", {
        method: "POST",
      });
      console.log("Sign out")
      if (response.status === 200) {
        redirect('/')
      }

}