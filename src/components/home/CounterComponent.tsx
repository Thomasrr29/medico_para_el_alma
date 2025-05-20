import { useEffect, useState } from "react"
import { CounterProps } from "../../types/CounterProps"

const CounterComponentCommunity: React.FC<CounterProps> = ({initial, limit, name, image, state}) => {

    const [counter, setCounter] = useState(initial)


    useEffect(() => {

        if(state){

            const counterInterval = setInterval(() => {
                console.log("hola")
                setCounter((prev) => {
        
                    if(prev >= limit){
                        clearInterval(counterInterval)
                        return prev 
                    }
        
                    return prev + 1
                })
                
            }, 100)

        }
        
    }, [state])
    

    return (

    <div className="flex flex-col items-center gap-y-6 justify-center shadow-sm py-6 rounded-xl ">
        <img 
        className="h-[100px]"
        src={image} alt="" />
        <h3 className="font-bold text-6xl text-gray-950 tracking-wider">+{counter}</h3>
        <p className="italic text-lg">{name}</p>  
    </div>

    )
    
}

export default CounterComponentCommunity