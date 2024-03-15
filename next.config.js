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
      },
          images: {
            domains:['images.unsplash.com', 'plus.unsplash.com'], 
     remotePatterns: [
      {
        protocol: 'https',
         hostname:'images.unsplash.com',
           port: '',
        pathname: '/**',
         
         }]
          }
     
      

}

module.exports = nextConfig
