import { Suspense, lazy} from "react"
import { ItemsCarousel } from "../types/ItemsCarousel"
import {GiLion, GiBrain, GiProgression, GiSprout, GiTeacher, GiOpenBook} from "react-icons/gi"
import {FaHeart, FaUsers, FaLandmark } from "react-icons/fa"
import { MdSelfImprovement } from "react-icons/md"

const CallToActionComponent = lazy(() => import("../components/home/CallToActionComponent"))
const CommunityComponent = lazy(() => import("../components/home/CommunityComponent"))
const HeroComponent = lazy(() => import("../components/home/HeroComponent"))
const ItemsComponent = lazy(() => import("../components/home/itemsComponent"))
const PillarsComponent = lazy(() => import("../components/home/PillarsComponent"))
const SectionsComponent = lazy(() => import("../components/home/SectionsComponent"))
const LoaderComponent = lazy(() => import("../components/LoaderComponent"))

const HomePage = () => {

    const texts_loader: string[] = [
        "Es un camino largo que se hace fácil con la ayuda de Dios",
        "Las dificultades nunca faltan pero la fé tampoco",
        "Nosotros somos nuestro peor enemigo hasta que nos conocemos",
        "Nosotros noluchamos con nuestras fuerzas, luchamos con las de el",
        "El es nuestra guía y refugio"
    ]

    const items_first: ItemsCarousel[] = [
        { id: 1, text: 'Valentia', image: <GiLion size={48}/> },
        { id: 2, text: 'Psicología', image: <GiBrain size={48}/> },
        { id: 3, text: 'Amor', image: <FaHeart size={48}/> },
        { id: 4, text: 'Comunidad', image: <FaUsers size={48}/> },
        { id: 5, text: 'Desarrollo', image: <GiProgression size={48}/> },
        { id: 6, text: 'Esperanza', image: <GiSprout size={48}/> },
        { id: 7, text: 'Cultura', image: <FaLandmark size={48}/>},
        { id: 8, text: 'Retiros', image:  <MdSelfImprovement size={48}/>},
        { id: 9, text: 'Formación', image:  <GiTeacher size={48}/>},
        { id: 10, text: 'Conocimiento', image:  <GiOpenBook size={48}/>},
    ]

        
    return (

        <Suspense fallback={<LoaderComponent color="blue-600" texts={texts_loader}/>}>
                <HeroComponent urlImage="https://img.freepik.com/premium-vector/jesus-cartoon-vector_76844-3331.jpg" title="El camino de acercamiento a Dios" subtitle="Sana tu interior y acercate a Dios" button="Conocer más"/>
                <PillarsComponent/>
                <ItemsComponent itemsCarousel={items_first}/>
                <SectionsComponent/>
                <CommunityComponent/>
                <CallToActionComponent/>
        </Suspense>
        
    )
}

export default HomePage

