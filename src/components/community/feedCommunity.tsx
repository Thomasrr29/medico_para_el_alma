import { useEffect, useRef, useState } from "react";
import RenderButtons from "./renderButtons";

const FeedCommunity = () => {

  const [activeIndex, setActiveIndex] = useState<number>(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const [numMoves, setNumMoves ]= useState<number>(0)



  const posts = [
    {
      "id": 1,
      "fecha": "07/07/2025",
      "imagen": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=400&fit=crop",
      "titulo": "Comunidad en Oración",
      "descripcion": "Momento de reflexión y oración comunitaria que fortalece los lazos espirituales entre hermanos de fe."
    },
    {
      "id": 2,
      "fecha": "07/07/2025",
      "imagen": "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=400&fit=crop",
      "titulo": "Catedral Majestuosa",
      "descripcion": "La arquitectura sagrada como testimonio de fe y punto de encuentro para la comunidad creyente."
    },
    {
      "id": 3,
      "fecha": "07/07/2025",
      "imagen": "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=400&fit=crop",
      "titulo": "Manos Unidas en Fe",
      "descripcion": "El poder de la oración comunitaria y la unión de corazones en un mismo propósito espiritual."
    },
    {
      "id": 4,
      "fecha": "07/07/2025",
      "imagen": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      "titulo": "Luz Divina",
      "descripcion": "Los rayos de sol iluminando el paisaje como símbolo de esperanza y presencia divina en nuestras vidas."
    },
    {
      "id": 5,
      "fecha": "07/07/2025",
      "imagen": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
      "titulo": "Biblia y Meditación",
      "descripcion": "El estudio de las escrituras como fuente de sabiduría y guía espiritual para la comunidad."
    },
    {
      "id": 6,
      "fecha": "07/07/2025",
      "imagen": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop",
      "titulo": "Servicio Comunitario",
      "descripcion": "Manos que sirven con amor, reflejando los valores cristianos de caridad y solidaridad."
    },
    {
      "id": 7,
      "fecha": "07/07/2025",
      "imagen": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
      "titulo": "Biblia y Meditación",
      "descripcion": "El estudio de las escrituras como fuente de sabiduría y guía espiritual para la comunidad."
    },
    {
      "id": 8,
      "fecha": "07/07/2025",
      "imagen": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop",
      "titulo": "Servicio Comunitario",
      "descripcion": "Manos que sirven con amor, reflejando los valores cristianos de caridad y solidaridad."
    },
  ]

  useEffect(() => {

    

    if(containerRef.current){

      const valueScroll = (activeIndex - 1) * (containerRef.current.clientWidth)

      containerRef.current.scrollLeft = valueScroll
      setNumMoves(Math.ceil((posts.length * 350) / containerRef.current?.clientWidth))

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

  const handleChange = (target: string) => {
    const num = parseInt(target)
    setActiveIndex(num)
  }

  
  return (

    <div className="bg-dorado-clasico w-full py-20">
      <div className="flex flex-col md:w-4/5 mx-auto">
        <h3 className="mb-10 text-beige-suave font-bold text-5xl">EVENTOS</h3>
        <main 
        ref={containerRef}
        className="flex gap-x-6 mask-linear-[180deg,black,gray_33%,rgba(0,0,0,200)_66%,transparent_100%] 
        pb-20 place-items-center overflow-x-scroll scroll-smooth">
          {
            posts.map((post) => (
              <div 
              className="post flex flex-col shrink-0 rounded-xl shadow-lg 
              p-10 gap-y-6 bg-beige-suave w-[350px]" 
              key={post.id}>
                <img 
                className="rounded-2xl"
                src={post.imagen} alt="" />
                <div>
                  <h3 className="font-bold text-2xl">{post.titulo}</h3>
                  <span className="text-gray-500 font-extralight">{post.fecha}</span>
                  <p>{post.descripcion}</p>
                </div>
              </div>
            ))
          }  
        </main> 
          {
            RenderButtons({activeIndex, numButtons: numMoves, handleChange})
          }
      </div>

    </div>
    
);
}

export default FeedCommunity;