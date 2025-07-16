const HeroComponentProcess = () => {

    return (
        <section className="mt-10 lg:h-screen lg:place-content-center text-neutral-950 py-14">
            <div
            className="mx-auto w-5/6 flex flex-col lg:flex-row-reverse justify-center items-center gap-20"
            >
                <img 
                className="w-full md:w-3/4 rounded-xl"
                src="https://kidscorner.net/cache/imager/heroimages/130851/6.9-Pray-Together-parent-blog_ceb07ea01ca0525880e4de8fbfd49a89.jpg" alt="" />
                <div className="w-full md:w-3/5 text-left">
                    <h1 className="text-4xl font-bold sm:text-5xl text-dorado-clasico">
                        Un camino de sanación 
                        <span className="text-marron-intenso"> y acercamiento </span>
                        a Dios
                    </h1>

                    <p className="mt-4 text-base text-pretty sm:text-lg/relaxed text-marron-intenso">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                        accusamus impedit minima harum corporis iusto.
                    </p>

                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <a
                        className="text-xl rounded bg-dorado-clasico font-semibold
                        px-1.5 py-2 md:px-4 md:py-5 shadow-sm transition-colors 
                        duration-800 hover:bg-dorado-clasico text-white tracking-wider"
                        href="#"
                        >
                        Unete a la comunidad
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default HeroComponentProcess