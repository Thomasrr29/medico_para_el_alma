interface HeroComponentProps {
    urlImage: string,
    title: string,
    subtitle: string,
    button: string


}

const HeroComponent = ({urlImage, title, subtitle, button}: HeroComponentProps) => {

    return (

        <div className="w-full h-screen">
            <section className="w-4/5 h-full flex flex-col sm:flex-row justify-center items-center mx-auto py-20 gap-6">
                <div className="flex flex-col items-center md:items-start gap-10 w-3/5">
                        <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
                        <p className="text-xl">{subtitle}</p>
                        <button className="bg-orangeprimary py-2 px-4 
                        rounded-xl font-bold text-white">{button}</button>
                </div>
                <div>
                        <img src={urlImage} className="h-full md:h-1/2 rounded-xl " alt="" />
                </div>
            </section>
        </div>
        
    )
}

export default HeroComponent