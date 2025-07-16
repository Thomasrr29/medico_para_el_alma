const CallToActionComponent: React.FC = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/70 to-amber-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Tu alma necesita
          <span className="block text-yellow-300">sanación</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          No camines solo en este proceso. Únete a nuestra comunidad 
          y experimenta la transformación que Dios tiene para ti.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-12 py-4 bg-white text-amber-900 font-bold text-xl rounded-full 
                             hover:bg-yellow-50 transition-all duration-300 hover:scale-105 shadow-2xl
                             cursor-pointer">
            Comenzar mi Proceso
          </button>
          
          <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full 
                             hover:bg-white hover:text-amber-900 transition-all duration-300
                             cursor-pointer">
            Conocer comunidad
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToActionComponent;