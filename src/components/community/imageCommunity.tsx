import group from '@assets/group.jpg'

const ImageCommunity = () => {

    return (

        <div className='w-full bg-marron-intenso mt-14'>
            <div className='w-4/5 mx-auto p-20 rounded-lg'>
                <h3 className="mb-20 text-beige-suave font-bold text-6xl text-center text-shadow-sm text-shadow-beige-suave ">NUESTRA COMUNIDAD</h3>
                <img 
                className="w-full rounded-2xl opacity-60 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-white"
                src={group} alt="" />
            </div>
        </div>
        
    )
}


export default ImageCommunity