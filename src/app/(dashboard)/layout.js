

import SideNav from '../component/SideNav'



export default async function DashLayout({ children }) {
  return (
    <section  className="  h-screen  w-screen"lang="en">
          <SideNav/> 

            {children}
    </section>
  )
}