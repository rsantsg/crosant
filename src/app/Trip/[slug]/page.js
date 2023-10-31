export const runtime = 'edge' 
export default function Page({params}) {


     return <div>My Post: {params.slug}</div>
}
