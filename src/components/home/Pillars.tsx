import { useEffect, useState } from "react";

// Variante 1: Layout Tipo Timeline Vertical
const PillarsComponent = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const pillarsData = [
    {
      id: 1,
      title: "Charlas",
      subtitle: "Despertar Espiritual",
      description: "El primer paso en tu proceso de sanación. Conferencias que abren tu corazón a la necesidad de transformación.",
      icon: "🎤",
      color: "amber",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      step: "Paso 1",
      duration: "1-2 horas"
    },
    {
      id: 2,
      title: "Formaciones",
      subtitle: "Crecimiento en Conocimiento",
      description: "Profundiza en la Palabra de Dios y la doctrina católica. Fortalece los fundamentos de tu fe.",
      icon: "📚",
      color: "blue",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      step: "Paso 2",
      duration: "Medio día"
    },
    {
      id: 3,
      title: "Retiros",
      subtitle: "Encuentro Transformador",
      description: "Experiencia intensiva de encuentro personal con Dios. El momento culminante de renovación espiritual.",
      icon: "🏔️",
      color: "green",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      step: "Paso 3",
      duration: "2-3 días"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev.length < pillarsData.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const colorClasses = [
    {
      bg: 'bg-gradient-to-br from-amber-400 to-amber-700',
      border: 'border-amber-500',
      text: 'text-amber-1      00',
      subtitle: 'text-amber-400',
      dot: 'bg-amber-500'
    },
    {
      bg: 'bg-gradient-to-br from-blue-400 to-blue-700',
      border: 'border-blue-500',
      text: 'text-blue-100',
      subtitle: 'text-blue-400',
      dot: 'bg-blue-500'
    },
    {
      bg: 'bg-gradient-to-br from-green-400 to-green-700',
      border: 'border-green-500',
      text: 'text-green-100',
      subtitle: 'text-green-400',
      dot: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tu Camino de <span className="text-amber-600">Sanación Espiritual</span>
          </h2>
          <p className="text-xl text-gray-600">
            Un proceso progresivo diseñado para tu crecimiento integral
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-900"></div>
          <div 
            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-amber-500 via-blue-500 to-green-500 transition-all duration-2000 ease-out"
            style={{ height: `${(visibleItems.length / pillarsData.length) * 100}%` }}
          ></div>

          <div className="space-y-16">
            {pillarsData.map((pillar, index) => (
              <div 
                key={pillar.id}
                className={`relative flex items-center transform transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 1000}ms` }}
              >
                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-xl ${colorClasses[index]['bg']}`}>
                  <span>{pillar.icon}</span>
                  <div className={`absolute inset-0 rounded-full 
                    border-4 border-white shadow-lg`}></div>
                </div>

                {/* Content Card */}
                <div className="ml-8 flex-1">
                  <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-l-4 
                  ${colorClasses[index]['border']} hover:shadow-2xl transition-all duration-300 group`}>
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        
                        {/* Image */}
                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <img 
                            src={pillar.image} 
                            alt={pillar.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 ${colorClasses[index]['bg']} ${colorClasses[index]['text']} text-sm font-semibold rounded-full`}>
                              {pillar.step}
                            </span>
                            <span className="text-sm text-gray-500">{pillar.duration}</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900">{pillar.title}</h3>
                          <p className={`text-lg font-medium ${colorClasses[index]['subtitle']}`} >{pillar.subtitle}</p>
                          <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                          
                          <button className={`inline-flex items-center gap-2 px-4 py-2 
                          text-white font-semibold rounded-lg hover:scale-105 
                          transition-transform duration-300 ${colorClasses[index]['bg']} cursor-pointer`}>
                            <span>Participar</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsComponent;