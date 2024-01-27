'use client'
import { UserLogin } from "../actions/userLogin"
import {auth} from'../lib/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react"
import { redirect } from 'next/navigation'
export default function page(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler =  async (e)=>{
                if(email !== "" && password !== ""){
            try {
            const res = await signInWithEmailAndPassword(auth,email,password); 
            console.log(res.user) 
            const kid = await res.user.getIdToken(true)
            const response = await fetch("http://localhost:3000/api/login", {
             method: "POST",
             headers: {
               Authorization: `Bearer ${kid}`,
             }}
            )
            if(response.ok){
             redirect('/')
            }
            //const resp = await fetch(url, header)
         
           }
         catch(e){
           console.error('login.js page error ',e)
         }

        }
        
        
    }
    /*
    return(

        <div>

            <form action={submitHandler} className="space-y-4 pt-6">
              <div>
                <label className="sr-only " htmlFor="email">Name</label>
                <input
                  className="w-full rounded-lg border border-solid p-3 text-sm"
                  placeholder="Name"
                  type="email"
                  name='email'
                  id="email"
                  onChange={(e)=>{
                        setEmail(e.target.value)
                  }}
                  required
                />
                 <label className="sr-only " htmlFor="password">Password</label>
                <input
                  className="w-full rounded-lg border border-solid p-3 text-sm"
                  placeholder="Name"
                  type="password"
                  name='password'
                  id="password"
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                  required
                />

                </div>
                <button type='submit'></button>
        </form> 


        </div>
    )*/ 
    return(
        <div>
            <UserLogin></UserLogin>

        </div>
    )
}