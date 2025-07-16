import { useEffect, useState } from "react"
import { CounterProps } from "../../types/CounterProps"

const CounterComponentCommunity: React.FC<CounterProps> = ({initial, limit, name, image, state}) => {

    const [counter, setCounter] = useState(initial)

    useEffect(() => {

        if(state){

            const counterInterval = setInterval(() => {
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

    <section className="w-max-sm rounded-lg">
         <div className="flex flex-col w-[260px]
        rounded-xl cursor-pointer bg-dorado-clasico text-beige-suave 
        shadow-dorado-clasico shadow-lg">
            <div className="w-full flex justify-center 
            py-10 rounded-lg ">
                <img 
                className="h-[60px]"
                src={image} alt="" />
            </div>
            <div className="flex flex-col 
            items-center w-full h-full py-10">
                <h3 className="font-bold text-4xl 
                tracking-wider">+{counter}</h3>
                <p className="italic text-lg">{name}</p>  
            </div>
        </div>
    </section>
   

    )
    
}

export default CounterComponentCommunity