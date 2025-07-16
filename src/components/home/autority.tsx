const AutorityComponent = () => {


    return (
        <section className="py-20 bg-marron-intenso">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                        Respaldados por <span className="text-dorado-clasico">la tradición católica</span>
                    </h2>
                    <p className="text-xl text-white max-w-3xl mx-auto">
                        Nuestro ministerio está fundamentado en las enseñanzas del Magisterio de la Iglesia 
                        y la espiritualidad de San Vicente Pallotti
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center p-8 bg-beige-suave rounded-2xl card-hover">
                        <div className="w-16 h-16 bg-gradient-to-br from-mariano to-mariano/80 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-white text-2xl">⛪</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Magisterio de la Iglesia</h3>
                        <p className="text-gray-600">Fundamentados en la doctrina católica y las enseñanzas pontificias</p>
                    </div>
                    
                    <div className="text-center p-8 bg-beige-suave rounded-2xl card-hover">
                        <div className="w-16 h-16 bg-gradient-to-br from-dorado to-dorado/80 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-white text-2xl">📖</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Sagrada Escritura</h3>
                        <p className="text-gray-600">Centrados en la Palabra de Dios como fuente de sanación</p>
                    </div>
                    
                    <div className="text-center p-8 bg-beige-suave rounded-2xl card-hover">
                        <div className="w-16 h-16 bg-gradient-to-br from-tierra to-tierra/80 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-white text-2xl">🧠</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Psicología Integral</h3>
                        <p className="text-gray-600">Complementamos con herramientas de las ciencias humanas</p>
                    </div>
                </div>
                
                <div className="bg-gradient-to-r bg-beige-suave rounded-2xl p-8 text-center">
                    <p className="text-lg text-gray-800 italic mb-4">
                        "Miembros oficiales de la Unión del Apostolado Católico (UAC) - 
                        Reconocida por el Pontificio Consejo para los Laicos"
                    </p>
                    <div className="flex justify-center items-center gap-4 text-sm text-blue-900">
                        <span>🏛️ Vaticano</span>
                        <span className="text-azul-claro">•</span>
                        <span>📅 Desde 2016</span>
                        <span className="text-azul-claro">•</span>
                        <span>👥 103 miembros en Colombia</span>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AutorityComponent; 