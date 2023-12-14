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

import { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github";



export const authConfig: NextAuthOptions = {
  providers: [
         /*

    
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async verify(credentials, req) {
          if(!credentials || !credentials.email|| !credentials.password){
            return null; 
          }
          const jwtToken =''
          const headers = {
            "Authorization": `Bearer ${jwtToken}`,
            
            "Content-Type": "application/json" // You can specify other headers as needed
        };
          //const hash = bcrypt.hashSync(credentials.password, bcrypt.genSaltSync(saltRounds));

          const res = await fetch('https//:api.rsantsg.com/',{
                          method:'POST',
                          body: JSON.stringify(credentials), headers:headers  })


          if(res.ok){
            if(bcrypt.compareSync(credentials.password, res.json())){
              return res.json()

            } 


          }
          return null 


        
      }
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
};



