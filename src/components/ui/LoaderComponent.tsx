import { useState } from "react"

interface LoaderComponentsProps {
    color: string  
}

const LoaderComponent: React.FC<LoaderComponentsProps> = (props) => {

    const texts_loader: string[] = [
        "Es un camino largo que se hace fácil con la ayuda de Dios",
        "Las dificultades nunca faltan pero la fé tampoco",
        "Nosotros somos nuestro peor enemigo hasta que nos conocemos",
        "Nosotros noluchamos con nuestras fuerzas, luchamos con las de el",
        "El es nuestra guía y refugio"
    ]

    const [index, setIndex] = useState(0)

    function advancePhrase(){

        if(index < texts_loader.length){
            setIndex(prev => prev + 1)
        } else {
            setIndex(0)
        }
    }

    setInterval(() => (
        advancePhrase()
    ), 1000)


    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
            <div className="flex flex-row gap-2">
                <div className={`w-4 h-4 rounded-full bg-${props.color} animate-bounce`}></div>
                <div className={`w-4 h-4 rounded-full bg-${props.color} animate-bounce [animation-delay:-.3s]`}></div>
                <div className={`w-4 h-4 rounded-full bg-${props.color} animate-bounce [animation-delay:-.5s]`}></div>
            </div>
            <p className={`text-${props.color} font-semibold text-lg`}>{texts_loader[index]}</p>
        </div>
        
    )
}

export default LoaderComponent