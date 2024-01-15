/** 
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers: { GET, POST }, auth } = NextAuth({
  providers: [ GitHub(
    ({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string, 
        

      }), 
  ) ],
})
*/
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import { getServerSession } from "next-auth"
import Providers from "next-auth/providers"
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import {auth} from '../../../lib/firebase/firebase'
import { db } from "../../../lib/firebase/firebase";
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { getFirestore } from 'firebase/firestore'
import { stat } from "fs";
export const authConfig: NextAuthOptions = {
  
      providers: [
         

    
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
        authorize: async (credentials) => {        try{
          //console.log(firebaseConfig)
         
          const status = await signInWithEmailAndPassword(auth,credentials.username.toString(), credentials.password.toString()); 
          //console.log(status.user)
          console.error(status.user)
          return status.user

        }
        catch(error){
          console.log('ERROR')
          return null
          //console.log(error)
        }
       
      }
    }), 
      /*
    }),
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        const dbUser = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        //Verify Password here
        //We are going to use a simple === operator
        //In production DB, passwords should be encrypted using something like bcrypt...
        if (dbUser && dbUser.password === credentials.password) {
          const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
          return dbUserWithoutPassword as User;
        }

        return null;
      },
    }),
    **/
  
    GithubProvider({
        clientId: process.env.TEST_GITHUB_ID as string,
        clientSecret: process.env.TEST_GITHUB_SECRET as string, 
        

      }), 
    
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        console.error("HELLO USER ")
        return true
      }
      console.error("NO USER ")

      return false
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url
      else if (url.startsWith('/')) return new URL(url, baseUrl).toString()
      return baseUrl
    },
    async session({ session, token, user }) {
      if (token) {
        session.id = token.id
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id
      }

      return token
    }},
    adapter:FirestoreAdapter(db),

}
