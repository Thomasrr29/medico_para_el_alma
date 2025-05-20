import { useEffect, useState, useRef } from "react"
import CounterComponentCommunity from "./CounterComponent"

const CommunityComponent = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    setIsVisible(true)
                }
            },
            {
                threshold: 0.01,
                rootMargin: '0px 0px -20px 0px'
            }
        ); 

        if (sectionRef.current){
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, [])

    return ( 
        <section 
        ref={sectionRef}
        className="grid grid-cols-2 xl:grid-cols-3 w-3/4 mx-auto py-60 gap-6">
            <CounterComponentCommunity 
            name="Integrantes" 
            image="https://cdn-icons-png.flaticon.com/128/3092/3092920.png"
            limit={100}
            initial={50}
            state={isVisible}/>
            <CounterComponentCommunity
            name="Encuentros"
            image="https://cdn-icons-png.flaticon.com/128/10349/10349274.png"
            limit={50}
            initial={20}
            state={isVisible}/>
            <div className="col-span-3 lg:col-auto">
                <CounterComponentCommunity
                name="Personas impactadas"
                image="https://cdn-icons-png.flaticon.com/128/14217/14217630.png"
                limit={10000}
                initial={9900}
                state={isVisible}/>
            </div>
        </section>
    )
}

export default CommunityComponent