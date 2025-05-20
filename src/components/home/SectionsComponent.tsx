const SectionsComponent = () => {

    return (
        <div className="w-full">
            <section className="bg-orangeprimary h-[300px]">
                <div className="w-full h-full flex flex-col xl:flex-row gap-6 justify-center lg:justify-around items-center lg:w-1/2 scroll-left mx-auto">
                    <h3 className="text-6xl lg:text-7xl font-extrabold text-white">FORMACIÓN</h3>  
                    <div className="flex gap-10">
                        <img src="https://cdn-icons-png.flaticon.com/128/4415/4415847.png" className="h-[60px] lg:h-[80px] rounded-xl" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/3068/3068327.png" className="h-[60px] lg:h-[80px] rounded-xl" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/991/991922.png" className="h-[60px] lg:h-[80px] rounded-xl" alt="" />
                    </div>
                </div>
                
            </section>
            <section className="flex justify-center items-center w-full bg-blueprimary h-[300px]">
                <div className="flex gap-10 zoom-object">
                    <img src="https://cdn-icons-png.flaticon.com/128/1051/1051474.png" className="h-[40px] md:h-[60px] lg:h-[80px] rounded-xl" alt="" />
                    <h3 className="text-7xl font-extrabold text-white">FÉ</h3>
                    <img src="https://cdn-icons-png.flaticon.com/128/1051/1051474.png" className="h-[40px] md:h-[60px] lg:h-[80px] rounded-xl" alt="" />
                </div>
            </section>
            <section className="bg-orangeprimary h-[300px]">
                <div className="w-full h-full flex flex-col xl:flex-row gap-6 justify-center lg:justify-around  items-center lg:w-1/2 scroll-right mx-auto">
                    <h3 className="text-6xl lg:text-7xl  font-extrabold text-white">COMUNIDAD</h3> 
                    <div className="flex gap-10">
                        <img src="https://cdn-icons-png.flaticon.com/128/4086/4086235.png" className="h-[60px] lg:h-[80px]  rounded-xl" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/14700/14700275.png" className="h-[60px] lg:h-[80px]  rounded-xl" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/3364/3364924.png" className="h-[60px] lg:h-[80px]  rounded-xl" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )

}


export default SectionsComponent; 