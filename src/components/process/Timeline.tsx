import { useEffect, useRef, useState } from "react";
import RenderButtons from "../community/renderButtons";

const VerticalTimeline = () => {

    const [activeIndex, setActiveIndex] = useState<number>(1)
    const containerRef = useRef<HTMLDivElement>(null)
    const [numMoves, setNumMoves] = useState<number>(1)

    const change = (target:string) => {
    
        const index = parseInt(target)
        setActiveIndex(index)

    }

    useEffect(() => {
        
        
        if(containerRef.current){
            const valueScroll = (activeIndex - 1) *  containerRef.current.clientWidth
            setNumMoves(Math.ceil((4 * 350) / containerRef.current?.clientWidth))
            containerRef.current.scrollLeft = valueScroll
        }
    
    }, [activeIndex])
    
    
    useEffect(() => {
        const timeout = setTimeout(() => {
          if(activeIndex < 3){
            setActiveIndex((prev) => prev + 1)
          } else {
            setActiveIndex(1)
          }
        }, 5000)
        return () => clearTimeout(timeout)
    }, [activeIndex])
    


    return (

        <div className="flex flex-col w-4/5 m-auto mt-20 py-10">
            <main 
            ref={containerRef}
            className="flex gap-x-6 mask-linear-[-180deg,black,gray_33%,rgba(0,0,0,200)_66%,transparent_100%] 
            py-20 place-items-center overflow-x-scroll scroll-smooth">
                {/* ✅ Contenedor de secciones como hijos directos para snap */}
                        <div className="flex-shrink-0 w-[300px] flex flex-col items-center 
                        justify-center relative">
                            
                            {/* Contenido arriba */}
                            <div className="mb-12">
                                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow max-w-[300px]">
                                    <div className="text-xs text-blue-600 font-semibold mb-2">FASE 1</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">La Niñez</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Qui eligendi ullam ipsum provident soluta asperiores 
                                        tempora animi delectus voluptates! Tempora quia molestiae 
                                        corrupti hic facilis atque molestias eveniet adipisci sint?
                                    </p>
                                </div>
                            </div>

                            {/* Punto central del timeline */}
                            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                            {/* Espacio vacío abajo para mantener el patrón */}
                            <div className="mt-12 h-32"></div>
                        </div>

                        <div className="flex-shrink-0 w-[320px] flex flex-col items-center justify-center relative">
                        
                            {/* Espacio vacío arriba */}
                            <div className="mb-12 h-32"></div>

                            {/* Punto central del timeline */}
                            <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                            {/* Contenido abajo */}
                            <div className="mt-12">
                                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow max-w-[300px]">
                                    <div className="text-xs text-green-600 font-semibold mb-2">FASE 2</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">La Pubertad</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Qui eligendi ullam ipsum provident soluta asperiores 
                                        tempora animi delectus voluptates! Tempora quia molestiae 
                                        corrupti hic facilis atque molestias eveniet adipisci sint?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-[320px] flex flex-col items-center justify-center relative">
                        
                            <div className="mb-12">
                                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow max-w-[300px]">
                                    <div className="text-xs text-purple-600 font-semibold mb-2">FASE 3</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">La Juventud</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Qui eligendi ullam ipsum provident soluta asperiores 
                                        tempora animi delectus voluptates! Tempora quia molestiae 
                                        corrupti hic facilis atque molestias eveniet adipisci sint?
                                    </p>
                                </div>
                            </div>

                            <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                            <div className="mt-12 h-32"></div>
                        </div>

                        <div className="flex-shrink-0 w-[320px] flex flex-col items-center justify-center relative">
                    
                            <div className="mb-12 h-32"></div>
                            <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                            <div className="mt-12">
                                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow max-w-[300px]">
                                    <div className="text-xs text-orange-600 font-semibold mb-2">FASE 4</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">La Adultez Temprana</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Qui eligendi ullam ipsum provident soluta asperiores 
                                        tempora animi delectus voluptates! Tempora quia molestiae 
                                        corrupti hic facilis atque molestias eveniet adipisci sint?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-[320px] flex flex-col items-center justify-center relative">

                            <div className="mb-12">
                                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow max-w-[300px]">
                                    <div className="text-xs text-red-600 font-semibold mb-2">FASE 5</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">La Adultez Madura</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Qui eligendi ullam ipsum provident soluta asperiores 
                                        tempora animi delectus voluptates! Tempora quia molestiae 
                                        corrupti hic facilis atque molestias eveniet adipisci sint?
                                    </p>
                                </div>
                            </div>

                            <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                            <div className="mt-12 h-32"></div>
                        </div>
            </main> 
            <div className="flex justify-center items-center gap-4">
            {
                RenderButtons({activeIndex, numButtons: numMoves, handleChange: change})
            }
            </div>
        </div>
    );
};

export default VerticalTimeline;