
import { useEffect, useRef, useState } from "react";

const VerticalTimeline = () => {
    const lastScrollY = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {

            const currentScrollY = window.scrollY;

            if (!containerRef.current) return;

            const container = containerRef.current; 

            if (container.scrollLeft === 0 && !container.dataset.initialized) {
                container.scrollLeft = 100; 
                container.dataset.initialized = 'true';
            }

            if (currentScrollY > lastScrollY.current) {
                container.scrollLeft += 8;

            } else if (currentScrollY < lastScrollY.current) {
                container.scrollLeft -= 8;
               
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
        className="flex relative min-h-screen bg-gray-50 overflow-x-scroll scroll-hide"
        ref={containerRef}>
            <div 
                className="flex items-center justify-start w-full min-h-screen"
                style={{ 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    transform: 'translateX(40%)'
                }}
            >
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

                <div className="flex-shrink-0 w-[320px] flex flex-col items-center justify-center relative">
                    <div className="absolute top-1/2 left-0 w-8 h-0.5 bg-gray-400 transform -translate-y-1/2"></div>
                    
                    <div className="mb-12 h-32"></div>
                    <div className="w-6 h-6 bg-gray-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                    <div className="mt-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-500 hover:shadow-xl transition-shadow max-w-[300px]">
                            <div className="text-xs text-gray-600 font-semibold mb-2">FASE 6</div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">La Vejez</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Qui eligendi ullam ipsum provident soluta asperiores 
                                tempora animi delectus voluptates! Tempora quia molestiae 
                                corrupti hic facilis atque molestias eveniet adipisci sint?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalTimeline;