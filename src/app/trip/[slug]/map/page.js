import MyMap from '../../../component/map/Mapping.tsx'
export default function page(params){

    const key = process.env.MapboxAccessToken; 
    console.log(key)
    return( 
        <div className='h-full w-full'>
                    <MyMap Token={key}/>

        </div>
    )
}
