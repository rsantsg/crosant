/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: false,
    env: {
        USER_SECRET: process.env.PUBLIC_USER_SECRET,
      },
      logging:{
        fetches:{

          fullUrl:true,
        }
      }
     
      

}

module.exports = nextConfig
