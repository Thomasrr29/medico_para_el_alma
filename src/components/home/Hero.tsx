
const HeroComponent = () => {

    return (

        <div className="relative 
        before:absolute before:inset-0 before:bg-[url('../src/assets/m-venter.jpg')] 
        before:opacity-40 before:content[''] before:-z-10 before:bg-cover before:bg-fixed 
        before:bg-center h-screen w-full">
            <section className="w-full h-full flex flex-col justify-center items-center 
            gap-y-10">
                <h1 className="w-3/4 mx-auto text-6xl md:text-6xl font-extrabold text-center">¿Como puedo sanar <span className="text-dorado-clasico">las heridas</span> de mi alma?</h1>
                <p className="text-gray-800 py-2 px-4 rounded-lg ">Un proceso de sanación interior que te permitirá <span className="">conocerte y acercarte cada vez más a Dios</span></p>
                <span className="bg-dorado-clasico py-2 px-4 rounded-lg text-white" >Sanación 👌 | Autoconocimiento ⛷️ | Servicio 🔁</span>
            </section>
        </div>
        
    )
}

export default HeroComponent