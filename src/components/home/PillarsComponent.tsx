const PillarsComponent = () => {

    return ( 
        
            <div className="w-full flex justify-center items-center h-auto py-30]">
                <section className="w-5/6 h-full grid grid-cols-[repeat(auto-fill,minmax(420px,1fr))] 
                justify-center place-items-center gap-y-8">
                    <div className="flex flex-col rounded-xl h-full mx-4 p-4
                    gap-2 bg-blueprimary w-full md:w-5/6">
                        <p className="w-[260px] 
                        font-bold text-xl md:text-2xl
                        rounded-xl text-white py-2 px-4">Charlas</p>
                        <img
                        className="rounded-xl w-auto h-full object-cover mx-auto" 
                        src="https://cdn.lifehack.org/wp-content/uploads/2014/11/most-popular-ted-talks.jpg" alt="" />
                    </div>
                    <div className="flex flex-col rounded-xl h-full mx-4 p-4
                    gap-2 bg-orangeprimary w-full md:w-5/6">
                        <p className="w-[260px] 
                        font-bold text-xl md:text-2xl tracking-tight
                        rounded-xl text-white py-2 px-4">Formaciones </p>
                        <img
                        className="rounded-xl w-auto h-full object-cover" 
                        src="https://definicion.de/wp-content/uploads/2011/09/charla-1.jpg" alt="" />
                    </div>
                    <div className="flex flex-col rounded-xl h-ful p-4 
                    mx-4 gap-2 bg-blueprimary w-full md:w-5/6">
                        <p className="w-[260px] 
                        font-bold text-xl md:text-2xl tracking-tight
                        rounded-xl text-white py-2 px-4">Retiros</p>
                        <img
                        className="rounded-xl w-auto h-full object-cover" 
                        src="https://www.sensacionrural.es/blog/wp-content/uploads/2023/09/retiros-espirituales-cataluna.jpg" alt="" />
                    </div>
                </section>
            </div>
    )

}

export default PillarsComponent; 
