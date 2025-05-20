const TopicsComponent = () => {

    return (
        <div className="flex flex-col w-full h-auto py-40 bg-neutral-950">
            <h3 className="text-6xl font-bold text-white text-center">Nuestras tematicas</h3>
            <section className="w-3/5 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mx-auto gap-2 pt-20 place-content-center">
                <div className="w-full h-[300px] flex flex-col justify-content items-center 
                py-6 px-6 bg-orange-600 rounded-xl gap-6 cursor-pointer">
                    <img 
                    className="h-[200px] rounded-xl"
                    src="https://plus.unsplash.com/premium_photo-1723921305088-b06c8634020c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlibHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <p className="font-bold text-lg text-white">Sanación interior</p>
                </div>
                <div className="w-full h-[300px] flex flex-col justify-content items-center 
                py-6 px-6 bg-orange-600 rounded-xl gap-6 cursor-pointer">
                    <img 
                    className="h-[200px] rounded-xl"
                    src="https://plus.unsplash.com/premium_photo-1723921305088-b06c8634020c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlibHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <p className="font-bold text-lg text-white">Biblia</p>
                </div>
                <div className="w-full h-[300px] flex flex-col justify-content items-center 
                py-6 px-6 bg-orange-600 rounded-xl gap-6 cursor-pointer">
                    <img 
                    className="h-[200px] rounded-xl"
                    src="https://plus.unsplash.com/premium_photo-1723921305088-b06c8634020c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlibHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <p className="font-bold text-lg text-white">Apologetica</p>
                </div>
                <div className="w-full h-[300px] flex flex-col justify-content items-center 
                py-6 px-6 bg-orange-600 rounded-xl gap-6 cursor-pointer">
                    <img 
                    className="h-[200px] rounded-xl"
                    src="https://plus.unsplash.com/premium_photo-1723921305088-b06c8634020c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlibHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <p className="font-bold text-lg text-white">Historia Biblica</p>
                </div>
                <div className="w-full h-[300px] flex flex-col justify-content items-center 
                py-6 px-6 bg-orange-600 rounded-xl gap-6 cursor-pointer">
                    <img 
                    className="h-[200px] rounded-xl"
                    src="https://plus.unsplash.com/premium_photo-1723921305088-b06c8634020c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlibHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <p className="font-bold text-lg text-white">Psicología</p>
                </div>
                <div className="w-full h-[300px] flex flex-col justify-content items-center 
                py-6 px-6 bg-orange-600 rounded-xl gap-6 cursor-pointer">
                    <img 
                    className="h-[200px] rounded-xl"
                    src="https://plus.unsplash.com/premium_photo-1723921305088-b06c8634020c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlibHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <p className="font-bold text-lg text-white">Lectio Divina</p>
                </div>
            </section>
        </div>
        

    )
}

export default TopicsComponent