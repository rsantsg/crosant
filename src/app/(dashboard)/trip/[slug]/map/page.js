import MyMap from '../../../../component/map/Mapping'
export default function page(params){

    const key = process.env.MapboxAccessToken; 
    //console.log(key)
    return( 
        <div className='h-screen w-screen'>
                    <MyMap Token={key}/>

        </div>
    )
}
