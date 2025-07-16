import { useState } from "react"

interface LoaderComponentsProps {
    color: string  
    texts: string[]
}

const LoaderComponent: React.FC<LoaderComponentsProps> = (props) => {


    const [index, setIndex] = useState(0)

    function advancePhrase(props: LoaderComponentsProps){

        if(index < props.texts.length){
            setIndex(prev => prev + 1)
        } else {
            setIndex(0)
        }
    }

    setInterval(() => (
        advancePhrase(props)
    ), 1000)


    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
            <div className="flex flex-row gap-2">
                <div className={`w-4 h-4 rounded-full bg-${props.color} animate-bounce`}></div>
                <div className={`w-4 h-4 rounded-full bg-${props.color} animate-bounce [animation-delay:-.3s]`}></div>
                <div className={`w-4 h-4 rounded-full bg-${props.color} animate-bounce [animation-delay:-.5s]`}></div>
            </div>
            <p className={`text-${props.color} font-semibold text-lg`}>{props.texts[index]}</p>
        </div>
        
    )
}

export default LoaderComponent